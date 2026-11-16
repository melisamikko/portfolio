---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/work/page.tsx","src/app/work/[slug]/page.tsx","src/app/blog/page.tsx","src/app/blog/[slug]/page.tsx"]
---

# Home profile (and the work and blog pages that share it)

Scope: `/`, `/work`, `/work/[slug]`, `/blog`, `/blog/[slug]`. Visitor mode: Persuade.

Audience and job: a non-technical business owner checking, after a referral, whether Melisa has done this before. Action: book a call. Proof: seven anonymized pieces of work in `src/data/work.ts`. Constraints: no client names, no invented numbers, testimonials or photos; the booking link is one constant in `src/data/site.ts` awaiting her confirmation.

Unresolved: her photo, her booking link, her contact email, whether older-work copy needs her edit.

## Direction contract

THESIS: A personal profile page from 2006, played straight, where the Top 8 friends are her eight best pieces of work and "Contacting Melisa" is the booking box. It refuses the consultant template of a big headline over a grid of soft cards.

OWN-WORLD: White page on a pale grey ground. Navy bar (#003399), mid-blue box headers (#6699cc), peach section bars (#ffcc99) with orange titles (#ff6600), blue underlined links, bordered table boxes with square corners, label and value detail tables, Verdana and Arial at small sizes with bold labels, grey bevelled buttons and one orange call button.

STORY: She is a real person with a voice; she builds and keeps running the systems a business depends on; here are seven she built; book a call.

FIRST VIEWPORT: Navy bar and blue nav strip across the top. Left column, 440 of 1240: her name, square photo box, her quote, "Online Now!", then the "Contacting Melisa" box with the orange Book a call button full width. Right column: the black-bordered box stating what she does, the peach "Melisa's Blurbs" bar with About me and Who I'd like to meet, then the Top 8 grid starting.

Signature interaction: the Top 8. Each tile is a link to its piece of work; the eighth is "You?" and books a call. Motion grammar: none but the era's own, a stepped blink on the Online Now mark, off under reduced motion; hover is a link colour change.

FORM: the default personal profile, position 1 on the re-rolled list, chosen by the user from the decision page after her steer "retro nostalgic myspace inspired look". seed:acec6f360aa3d015

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
