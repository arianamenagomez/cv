---
version: alpha
name: Anyel Mena · Taller aumentado
description: >
  Personal portfolio of Anyel Ariana Mena Gómez, a Costa Rican designer and
  illustrator who works with AI to help companies transform toward 2027.
  Handmade paper, warm ink and a visible "AI layer" that shows exactly where
  artificial intelligence took part.
colors:
  paper: "#F7F6F3"
  paper-deep: "#EEECE6"
  ink: "#1C1C1A"
  ink-soft: "#55534D"
  line: "rgba(28, 28, 26, 0.14)"
  primary: "#1F3B6B"
  primary-hover: "#162C52"
  accent: "#E8622A"
  on-primary: "#FFFFFF"
  overlay: "rgba(20, 20, 18, 0.88)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 6rem
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: -0.01em
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 3.25rem
    fontWeight: 500
    lineHeight: 1.08
  statement:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 2.5rem
    fontWeight: 500
    lineHeight: 1.2
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.16em
  prompt:
    fontFamily: "ui-monospace, Consolas, monospace"
    fontSize: 0.85rem
    fontWeight: 400
    lineHeight: 1.7
rounded:
  sm: 6px
  md: 14px
  pill: 999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 96px
  section: 140px
  gutter: 16px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 14px 26px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: 14px 26px
    height: 48px
  chip-choice:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 10px 18px
    height: 44px
  chip-choice-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  prompt-block:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.prompt}"
    rounded: "{rounded.md}"
    padding: 24px
  stat:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    typography: "{typography.headline}"
    padding: 32px
  ai-tag:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
---

# Anyel Mena · Taller aumentado

## Overview

**Thesis:** a designer with human judgment, a trained hand and real AI skills,
ready to help companies transform in 2027. The person comes first; projects are
evidence.

**Concept: "Taller aumentado" (augmented studio).** The page feels like a
sketchbook on warm paper. On top of it there is an optional **AI layer**: when
the visitor turns it on, every piece where AI took part gets a dashed blue
annotation that names the tool. The human work (paintings, drawings, decisions)
stays unmarked. The visitor *sees* what an AI-augmented designer is, instead of
reading a claim about it.

**Brand archetype:** *Creator* (primary) with a *Sage* shadow. The Creator makes
things by hand and with tools; the Sage explains how and why, openly. Never the
*Magician*: AI is presented as a craft with rules, not as a trick.

**Voice:** calm, concrete, first person. Short sentences. One idea per screen.
Detail lives inside disclosures. Spanish (neutral Costa Rican register, *tú*).

**Truth rule:** use only facts the author provided. Every AI claim must point to
a real artifact on the page (song, prompt, brief, background, photo, code).

## Colors

| Token | Role | Notes |
|:--|:--|:--|
| `paper` `#F7F6F3` | Page ground | Always with the paper texture image on top. |
| `paper-deep` `#EEECE6` | Quiet surfaces | Prompt blocks, disclosures. |
| `ink` `#1C1C1A` | All text, all headings | Headings are ink, never accent. |
| `ink-soft` `#55534D` | Secondary text | 7.1:1 on paper; never lighter. |
| `primary` `#1F3B6B` | Actions, AI layer, numbers | 10.3:1 on paper; white on it 11.1:1. |
| `accent` `#E8622A` | Lines, dividers, slider handle | 3.1:1 on paper: **never for text**. |

**Accent budget:** blue + orange together ≤ 10 % of any viewport. Orange is a
line, never a fill area. Blue fills only buttons and AI tags.

**Single theme on purpose.** The paper is part of the identity, so there is no
dark mode. Every color is still declared explicitly. `prefers-contrast: more`
darkens `ink-soft` and `line`.

## Typography

- **Cormorant Garamond** (display, headline, statement, title): the hand, the
  editorial voice. Weight 500; 600 only for small titles.
- **Montserrat** (body, label): the system, the interface. 400 body, 600 labels.
- **Monospace** (prompt): only for real prompts and briefs the author wrote. It
  signals "this is an instruction to a machine".
- Scale: 6rem / 3.25rem / 2.5rem / 1.5rem / 1rem / 0.75rem, fluid with
  `clamp()`. Labels uppercase with 0.16em tracking. Body lines ≤ 65ch.
- Headings use `text-wrap: balance`; paragraphs `text-wrap: pretty`.

## Layout

- **Concept:** sketchbook column. Max width 1120px, gutter
  `max(16px, safe-area)`. Two-column splits on desktop collapse to one column
  under 820px.
- **One idea per screen.** Each section opens with an eyebrow, one statement and
  at most one interactive element. Everything else goes in `<details>`.
- Section rhythm: `clamp(72px, 12vw, 140px)` vertical padding.
- Tested widths: 390px (phone) and 1280px (desktop). No horizontal scroll.

## Elevation & Depth

- Paper is flat. Depth only marks **physical objects**: the portrait, the
  painting and the before/after device get one soft shadow
  (`0 30px 60px -30px rgba(28,28,26,.45)`).
- Cards are not used for text blocks. Dividers (`line`) separate content.
- The AI layer floats above everything as dashed outlines, never as shadows.

## Shapes

- `md` 14px for images and devices; `pill` for buttons and choice chips; `sm`
  6px for AI tags.
- Orange 2px rules: under the tagline, before block labels, as the slider
  divider. Nowhere else.

## Components

- **Visitor chooser** (radio group styled as chips): "¿Qué te trae por aquí?"
  Three archetypes. Changes the suggested route and the contact headline. The
  choice is remembered per browser.
- **AI layer toggle** (`button[aria-pressed]`): in the header and in the
  transparency section. Adds `ai-tag` labels via `data-ai`.
- **Prompt anatomy:** rule buttons (`aria-pressed`) highlight matching `<mark>`
  fragments inside the real Mureka prompt.
- **Before/after slider:** native `input[type=range]` over two images, keyboard
  operable, visible focus ring on the device.
- **Gallery + viewer:** image buttons open a `<dialog>`; any click or Esc
  closes it; focus returns to the trigger.
- **Floating "Hablemos"** pill: appears after the hero, hides at contact.
- **Email copy button:** the email is always visible as selectable text.

## Do's and Don'ts

**Do**
- Show the person first: portrait, name and thesis before any project.
- Back every AI claim with a real piece on the page.
- Label AI participation openly (AI layer + transparency list).
- Keep the hand visible: paintings and drawings are the counterweight to AI.
- Use the author's own images only.

**Don't**
- Don't invent numbers, clients, dates or tools.
- Don't use generic icons, emoji, stock photos or AI clichés (neon, robots,
  purple gradients, sparkles).
- Don't color headings blue or orange; don't use orange for text.
- Don't hide content behind animation; the page is complete at rest.
- Don't show the phone number.

## UX Archetypes

| Archetype | Arrives with | Needs in < 60 s | Suggested route | Contact headline |
|:--|:--|:--|:--|:--|
| **Reclutadora** (talent) | A role to fill, little time | Who she is, how she works with AI, proof | Método → Caso → Contacto | ¿Buscas una diseñadora que ya trabaja con IA? |
| **Líder de empresa** (default) | A transformation goal for 2027 | Capability with AI and a method that reduces risk | Laboratorio → Método → Contacto | ¿Tu empresa quiere diseñar con IA en 2027? |
| **Causa social** | A message that must reach people | Sensitivity, hand craft, clarity | La mano → Laboratorio → Contacto | ¿Tienes una causa que necesita llegar a más gente? |

## Accessibility

- WCAG 2.2 AA: text contrast ≥ 4.5:1; orange never carries text.
- Skip link, landmarks (`header`, `nav`, `main`, `footer`), one `h1`.
- Every image has descriptive `alt`; decorative texture is CSS background.
- All controls are native elements (`button`, `input`, `details`, `dialog`)
  and keyboard operable; focus ring 2px `accent` + 3px offset.
- State changes (visitor, AI layer, copy) are announced in an `aria-live`
  region.
- Audio has native controls and a full lyrics transcript.
- Motion: respects `prefers-reduced-motion` **and** offers an on-page
  "Reducir movimiento" toggle.

## Motion

One orchestrated moment: on load, the name rises and the orange line draws
under the tagline (600ms, ease-out). Everything else is feedback: AI tags fade
in, prompt marks fill. No parallax, no scroll-jacking, no autoplay.

## Agent Prompt Guide

> Build with plain HTML, CSS and JS. Use the tokens above. Paper ground with
> texture, ink headings in Cormorant Garamond, Montserrat body. Blue only for
> actions and the AI layer; orange only as 2px lines. One idea per screen,
> details in `<details>`. Mark AI participation with `data-ai="Tool · what"`.
> Never invent data; never use icons or stock images; keep the page usable by
> keyboard and screen reader, and calm under reduced motion.
