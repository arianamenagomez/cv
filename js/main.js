const root = document.documentElement;
const announcer = document.querySelector("[data-announce]");
const announce = (msg) => {
  announcer.textContent = "";
  requestAnimationFrame(() => { announcer.textContent = msg; });
};

const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage unavailable */ } },
};

// Visitor archetypes: suggested route and contact headline (see DESIGN.md)
const VISITORS = {
  talento: {
    route: [["#metodo", "Método"], ["#caso", "Caso Bgnius"], ["#contacto", "Contacto"]],
    contact: "¿Buscas una diseñadora que ya trabaja con IA?",
  },
  empresa: {
    route: [["#laboratorio", "Laboratorio"], ["#metodo", "Método"], ["#contacto", "Contacto"]],
    contact: "¿Tu empresa quiere diseñar con IA en 2027?",
  },
  causa: {
    route: [["#mano", "La mano"], ["#laboratorio", "Laboratorio"], ["#contacto", "Contacto"]],
    contact: "¿Tienes una causa que necesita llegar a más gente?",
  },
};

const routeEl = document.querySelector("[data-route]");
const contactTitle = document.querySelector("[data-contact-title]");

const applyVisitor = (key, speak) => {
  const visitor = VISITORS[key];
  if (!visitor) return;
  routeEl.replaceChildren(...visitor.route.flatMap(([href, label], i) => {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    return i ? [" · ", a] : [a];
  }));
  contactTitle.textContent = visitor.contact;
  if (speak) announce("Recorrido sugerido: " + visitor.route.map(([, label]) => label).join(", "));
};

document.querySelectorAll('input[name="visitor"]').forEach((input) => {
  input.addEventListener("change", () => {
    applyVisitor(input.value, true);
    store.set("visitor", input.value);
  });
});

const savedVisitor = store.get("visitor");
if (VISITORS[savedVisitor]) {
  document.getElementById("visitor-" + savedVisitor).checked = true;
  applyVisitor(savedVisitor, false);
}

// AI layer: dashed annotations on every piece where AI took part
const aiToggles = document.querySelectorAll("[data-ai-toggle]");
const setAiLayer = (on) => {
  document.body.classList.toggle("ai-on", on);
  aiToggles.forEach((btn) => btn.setAttribute("aria-pressed", String(on)));
  announce(on
    ? "Capa IA activa. Se marcan la fotografía, la canción y el código de la página. El fondo de papel también es IA."
    : "Capa IA desactivada.");
};
aiToggles.forEach((btn) => {
  btn.addEventListener("click", () => setAiLayer(btn.getAttribute("aria-pressed") !== "true"));
});

// Prompt anatomy: highlight the fragments that apply one rule
const ruleButtons = document.querySelectorAll(".rules button");
const marks = document.querySelectorAll(".prompt mark[data-rule]");
ruleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const on = btn.getAttribute("aria-pressed") !== "true";
    ruleButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn && on)));
    const rule = on ? btn.dataset.rule : null;
    const hits = [...marks].filter((m) => m.dataset.rule === rule);
    marks.forEach((m) => m.classList.toggle("is-on", hits.includes(m)));
    if (on) announce(btn.textContent + ": " + hits.map((m) => m.textContent).join(" … "));
  });
});

// Before/after slider
document.querySelectorAll(".compare").forEach((el) => {
  const input = el.querySelector("input");
  const sync = () => {
    el.style.setProperty("--pos", input.value + "%");
    input.setAttribute("aria-valuetext", `${input.value} % antes, ${100 - input.value} % después`);
  };
  input.addEventListener("input", sync);
  sync();
});

// Gallery viewer: any click closes it, Esc too (native dialog)
const lightbox = document.getElementById("lightbox");
const lbImg = lightbox.querySelector("img");
const lbCaption = lightbox.querySelector("p");

document.querySelectorAll(".gallery button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = btn.closest("figure").querySelector("figcaption")?.textContent ?? "";
    lightbox.showModal();
  });
});

lightbox.addEventListener("click", () => lightbox.close());

// Copy email (mailto links may not open everywhere)
document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const target = document.getElementById(btn.dataset.copy);
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      btn.textContent = "Copiado";
      announce("Correo copiado.");
    } catch {
      getSelection().selectAllChildren(target);
      announce("Correo seleccionado. Cópialo con tu teclado.");
    }
    setTimeout(() => { btn.textContent = "Copiar"; }, 2000);
  });
});

// Reduce motion toggle (adds to the system preference)
const motionBtn = document.querySelector("[data-motion-toggle]");
const setCalm = (on) => {
  root.classList.toggle("calm", on);
  motionBtn.setAttribute("aria-pressed", String(on));
};
if (store.get("calm") === "1") setCalm(true);
motionBtn.addEventListener("click", () => {
  const on = motionBtn.getAttribute("aria-pressed") !== "true";
  setCalm(on);
  store.set("calm", on ? "1" : "0");
  announce(on ? "Movimiento reducido." : "Movimiento normal.");
});

// Floating contact button: show after the hero, hide at the contact section
const fab = document.querySelector(".fab");
let heroVisible = true;
let contactVisible = false;
const updateFab = () => fab.classList.toggle("is-visible", !heroVisible && !contactVisible);

new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; updateFab(); })
  .observe(document.querySelector(".hero"));
new IntersectionObserver(([e]) => { contactVisible = e.isIntersecting; updateFab(); })
  .observe(document.getElementById("contacto"));
