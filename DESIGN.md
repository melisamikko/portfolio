---
name: melisamikko.com
description: A mid-2000s personal profile page, played straight, for a one-person systems builder.
colors:
  navy: "#003399"
  bar: "#3f6fa5"
  call: "#cc4700"
  call-hover: "#a83a00"
  call-bevel: "#f08a4f"
  peach: "#ffcc99"
  peach-ink: "#8f3400"
  orange-ink: "#b84300"
  online: "#008800"
  visited: "#5a2d91"
  ground: "#e5e5e5"
  page: "#ffffff"
  ink: "#000000"
  tile: "#c8d8ea"
  line: "#6b7f99"
  rule: "#c9d3e0"
  kv-label: "#b9cfe8"
  kv-label-ink: "#1c3f6e"
  kv-value: "#e3ecf6"
  button-face: "#d4d0c8"
  button-face-hover: "#e6e3dc"
  button-bevel: "#f4f2ee"
typography:
  display:
    fontFamily: "Verdana, Geneva, Tahoma, 'DejaVu Sans', sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.15
  headline:
    fontFamily: "Verdana, Geneva, Tahoma, 'DejaVu Sans', sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Verdana, Geneva, Tahoma, 'DejaVu Sans', sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.2
  subtitle:
    fontFamily: "Verdana, Geneva, Tahoma, 'DejaVu Sans', sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Verdana, Geneva, Tahoma, 'DejaVu Sans', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Verdana, Geneva, Tahoma, 'DejaVu Sans', sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.5
  wordmark:
    fontFamily: "Arial, Helvetica, 'Liberation Sans', sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.1
  button-call:
    fontFamily: "Arial, Helvetica, 'Liberation Sans', sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  stack: "18px"
  page: "20px"
  gutter: "24px"
components:
  topbar:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.page}"
    typography: "{typography.wordmark}"
    padding: "12px 20px"
  nav-strip:
    backgroundColor: "{colors.bar}"
    textColor: "{colors.page}"
    padding: "4px 12px"
  box-header:
    backgroundColor: "{colors.bar}"
    textColor: "{colors.page}"
    typography: "{typography.subtitle}"
    padding: "7px 10px"
  box-body:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "12px"
  peach-bar:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.peach-ink}"
    typography: "{typography.title}"
    padding: "8px 10px"
  button-call:
    backgroundColor: "{colors.call}"
    textColor: "{colors.page}"
    typography: "{typography.button-call}"
    rounded: "{rounded.none}"
    padding: "12px"
  button-call-hover:
    backgroundColor: "{colors.call-hover}"
    textColor: "{colors.page}"
  button-bevel:
    backgroundColor: "{colors.button-face}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  button-bevel-hover:
    backgroundColor: "{colors.button-face-hover}"
    textColor: "{colors.ink}"
  tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
  tile-you:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.peach-ink}"
    rounded: "{rounded.none}"
  kv-label:
    backgroundColor: "{colors.kv-label}"
    textColor: "{colors.kv-label-ink}"
    typography: "{typography.label}"
    padding: "6px 8px"
  kv-value:
    backgroundColor: "{colors.kv-value}"
    textColor: "{colors.ink}"
    padding: "6px 8px"
  statement:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    padding: "16px"
---

# Design System: melisamikko.com

## Overview

**Creative North Star: "The Profile Page, Played Straight"**

The site is a personal profile page from 2006, built without irony. A white page sits centred on a pale grey ground. A navy bar and a blue link strip run across the top. Below them, a narrow left column carries the person (name, square photo, quote, contact box, detail tables) and a wide right column carries what she says and what she has built. Everything is a bordered box, a coloured header bar, a table, or an underlined link.

The world is dense and plain on purpose. Text is small, labels are bold, corners are square, and nothing floats. Colour does the sectioning: navy for the site, mid-blue for boxes, peach for section bars, orange for the one thing to click. It refuses the consultant template of a big headline over a grid of soft cards; a visitor should feel they landed on a real person's page, not a brochure.

Verdana and Arial are the world's own faces, pinned by the owner. They load from the visitor's machine, which is exactly how the original pages worked.

**Key Characteristics:**
- Two columns inside one fixed-width white page on a grey ground.
- Sections are announced by solid colour bars, never by whitespace alone.
- Square corners everywhere and no shadows; buttons are raised with outset borders.
- Blue underlined links that turn purple once visited and orange on hover.
- One orange call button per box; every other action is a link or a grey bevelled button.
- No motion except a stepped blink on the Online Now mark.

## Colors

A cool blue family does the structure, and a warm peach-and-orange family marks her own voice and the one action.

### Primary
- **Profile Navy** (`navy`, #003399): the top bar, every unvisited link, and the text selection colour.
- **Box Blue** (`bar`, #3f6fa5): the nav strip, every box header, the 2px box border, the footer rule and the scrollbar thumb. It always carries white bold text.

### Secondary
- **Call Orange** (`call`, #cc4700): the Book a call button, link hover, the hovered tile border, and the bold count in "has N pieces of work". Darkens to `call-hover` when the button is hovered; `call-bevel` is the lighter orange of its raised border.

### Tertiary
- **Blurb Peach** (`peach`, #ffcc99) with **Peach Ink** (`peach-ink`, #8f3400): the section bar in the main column and the "You?" tile. Peach never carries black or white text.
- **Blurb Orange** (`orange-ink`, #b84300): the small bold sub-headings inside a blurb ("About me:").
- **Online Green** (`online`, #008800): the Online Now line and its dot, and nothing else.
- **Visited Purple** (`visited`, #5a2d91): visited links in body copy.

### Neutral
- **Ground Grey** (`ground`, #e5e5e5): the area outside the page.
- **Page White** (`page`, #ffffff): the page, box bodies, and text on navy, blue and orange.
- **Ink** (`ink`, #000000): all body text, the statement box border, the focus outline.
- **Tile Blue** (`tile`, #c8d8ea): the fill of work tiles and the photo box.
- **Line** (`line`, #6b7f99): 1px borders on the page edge, tiles and photo.
- **Rule** (`rule`, #c9d3e0): 1px row dividers in lists, the work table and the pager.
- **Table Label / Table Value** (`kv-label` with `kv-label-ink`, and `kv-value`): the two cell fills of a detail table.
- **Button Grey** (`button-face`, `button-face-hover`, `button-bevel`): the face, hover face and raised edge of the grey bevelled button.

### Named Rules
**The One Orange Button Rule.** Solid Call Orange fill belongs to Book a call and nothing else. Orange elsewhere is text or a 1px border.

**The Link Is Blue Rule.** A link in content is navy, underlined, purple when visited and orange on hover. Links lose the underline only on a coloured bar (top bar, nav strip) or when they are a button.

**The Bar Carries The Colour Rule.** Blue and peach appear as solid bars with text on them, not as tints behind whole sections. Box bodies and the page stay white.

## Typography

**Display Font:** Verdana (with Geneva, Tahoma, DejaVu Sans, sans-serif)
**Body Font:** Verdana (same stack)
**Label/Mono Font:** Arial (with Helvetica, Liberation Sans, sans-serif), used for the site wordmark and the call button only

**Character:** One wide, sturdy screen face at small sizes, with hierarchy made by bold weight and colour bars. Arial appears twice, where the page speaks as a site and not as a person: the wordmark and the call button.

### Hierarchy
- **Display** (700, 26px, 1.15 to 1.2): the person's name and the page or article title. One per page, balanced wrapping.
- **Headline** (700, 22px, 1.25; 19px under 760px): the single black-bordered statement of what she does, centred.
- **Title** (700, 16px, 1.2): the text on a peach section bar.
- **Subtitle** (700, 15px, 1.2 to 1.3): box header text in white, and blurb sub-headings in Blurb Orange.
- **Body** (400, 15px, 1.5): all running copy. Blurb and post paragraphs are capped at 68ch, the lede at 62ch.
- **Label** (700, 13px): contact links, tile captions, breadcrumbs, pager, footer, table cells and meta lines. Meta lines and table values drop to regular weight at the same size. Nav links are 13px bold.
- **Wordmark** (Arial 700, 24px, 1.1): the domain in the navy bar.
- **Call button** (Arial 700, 19px, 1.2): Book a call.

### Named Rules
**The Two Weights Rule.** Only 400 and 700 exist. Emphasis is bold or a colour bar; there is no italic, no light weight, no letter-spacing and no uppercase styling.

**The Small Type Rule.** Body is 15px and nothing is set below 13px. The largest text on any page is 26px.

## Layout

The page is one white column, at most 1040px wide, centred on the grey ground with a 1px `line` border down each side and a minimum height of the viewport. Inside it, content sits in a two-column grid: a fixed 330px left column and a fluid right column, with a 24px gutter and 20px page padding, aligned to the top.

Blocks inside a column stack with 18px between them. Inside a box the padding is 12px. Small gaps run 4, 6, 8, 10 and 12px. On the home page the left column is split in two (identity and contact above, detail tables below) so the main column can span both rows.

Under 760px the grid becomes a single column with 16px padding and the page side borders drop. The home page order becomes identity and contact, then the main column, then the detail tables. On work and post detail pages the article comes first and the side column follows. The Top 8 grid goes from four columns to two, the large detail tile is hidden, and link padding grows so nav, footer, breadcrumb and contact links reach a 40px tap height.

The header is two full-width bars (navy, then blue) and the footer is a centred, wrapping row of small links above a 2px `bar` rule.

## Elevation & Depth

There are no shadows, no blur and no layering. The page is flat and depth is drawn with borders: a 2px solid border makes a box, a 1px border makes a tile, and a 2px `outset` border makes a button look raised. Pressing a button flips the border to `inset`, which is the whole press effect.

### Named Rules
**The Bevel Rule.** Raised means an outset border, pressed means an inset border. `box-shadow` is not part of this system.

## Shapes

Every corner is square (0px radius). Boxes, tiles, the photo, buttons, table cells and bars are all plain rectangles. Tiles and the photo are exact squares. Borders come in two weights: 2px for boxes, buttons and the statement, 1px for tiles, the page edge and row dividers. List bullets inside blurbs are squares.

Icons are simple line drawings in the current text colour with round caps and joins: stroke 1.75 on a 20 unit grid at 16px beside contact links, and stroke 3 on a 48 unit grid for the person drawing in the "You?" tile (drawn at 56% of the tile). The three brand marks in the Links box (GitHub, LinkedIn, YouTube) are the only filled icons; they are drawn at 28px in black and turn Call Orange on hover.

## Components

### Buttons
- **Shape:** square rectangle with a 2px raised border (0px radius).
- **Call button:** Call Orange fill, white Arial bold 19px, 12px padding, full width of its box, `call-bevel` outset border. Hover darkens the fill to `call-hover`; active flips the border to inset.
- **Grey bevelled button:** `button-face` fill, black Verdana bold 13px, 4px 10px padding (10px 12px under 760px), `button-bevel` outset border. Used for secondary navigation such as "View all work" and Previous / Next. Hover lightens the face; active flips the border to inset.
- **Focus:** a 2px dotted black outline, 2px off the element, on every focusable thing. On the navy bar and nav strip the outline is white.

### Cards / Containers
- **Box:** 2px Box Blue border, a Box Blue header bar with white bold 15px text (7px 10px padding), and a white body with 12px padding. Square corners, no shadow. Titles follow the profile pattern: "Contacting Melisa", "Melisa's Details".
- **Peach section bar:** a full-width Blurb Peach bar with Peach Ink bold 16px text (8px 10px padding). It opens an unboxed section in the main column; content follows directly on white.
- **Statement box:** 2px black border, 16px padding, centred bold 22px text. One per page, at the top of the main column.

### Detail table
Two-column label and value table with 2px gaps between cells. Label cells are `kv-label` with `kv-label-ink` bold text and take 36% of the width; value cells are `kv-value` with black text. 13px, 6px 8px padding, top aligned.

### Navigation
- **Top bar:** navy, white Arial bold wordmark on the left, a small bold white tagline on the right, wraps on narrow screens.
- **Nav strip:** Box Blue, white bold 14px links with 8px padding, separated by a white pipe character. Hover and the current page are underlined.
- **Contact box links:** a two-column grid of bold 13px links, each led by a 16px line icon, under the call button.
- **Breadcrumb and pager:** bold 13px. The pager sits above a 1px `rule` line with Previous on the left and Next on the right as grey bevelled buttons.
- **Footer:** centred 13px row above a 2px Box Blue rule.

### Work tile
A square with a 1px `line` border that holds a real screenshot, cropped from its top left corner to fill the square, with a bold 13px centred caption below. Tile Blue shows only while the picture loads. The whole tile and caption is one link; on hover the border turns Call Orange. The "You?" variant is peach with a Peach Ink person drawing and links to booking. Tiles appear in a four-column grid (two under 760px) and at 106px in the work table (72px under 760px). The photo box is the same square at 170px and holds her photo.

### Pics
A two-column grid of screenshots (one column under 760px) under a peach bar on work pages and About chapters. Each picture sits in a white frame with a 1px `line` border and 4px padding, keeps its own shape up to 420px tall, and opens full size in a new tab; the frame border turns Call Orange on hover. A 13px line beneath says what was blurred or that the data is sample data.

### Links box
A blue-header box in the side column with a row of three 28px brand marks, then a ruled list of two repositories: a bold 13px link and a one-line description each.

### Lists
- **Entries list:** one row per item with a 1px `rule` line beneath, a 13px tabular date, then the link.
- **Work table:** a tile cell, then a bold link title, a 15px summary line and a 13px status line; rows divided by a 1px `rule` line.
- **Blurb lists:** real numbered lists and square bullets, indented about 20px, 4px between items.

### Online Now
A bold 13px Online Green line with an 11px filled dot. The dot blinks in two hard steps between full and 25% opacity every 1.2s. The blink stops under reduced motion. This is the only animation in the system.

## Do's and Don'ts

### Do:
- **Do** open every section with a bar: Box Blue with white text for a bordered box, Blurb Peach with Peach Ink for an unboxed section.
- **Do** keep every corner square and draw depth with borders (2px for boxes and buttons, 1px for tiles and dividers).
- **Do** set all text in the Verdana stack at 13px to 26px in weights 400 and 700; keep Arial for the wordmark and the call button.
- **Do** keep content links navy and underlined, with the purple visited and orange hover states.
- **Do** put label and value facts in a detail table and lists of things in ruled rows.
- **Do** keep the two-column page (330px side column, 24px gutter, 1040px maximum) and collapse to one column under 760px.
- **Do** keep the 2px dotted focus outline on every interactive element, white on the coloured bars.

### Don't:
- **Don't** round corners, add shadows, gradients or blur. The world is flat rectangles with borders.
- **Don't** fill anything other than Book a call with solid Call Orange.
- **Don't** load web fonts or add a third face. System Verdana and Arial are the owner's pinned choice.
- **Don't** add motion: no transitions, fades, slides or scroll effects. The stepped Online Now blink is the only animation and it must stop under reduced motion.
- **Don't** tint whole sections with blue or peach; colour lives on bars, tiles and table cells while bodies stay white.
- **Don't** put black or white text on peach, or anything but white text on navy, Box Blue and Call Orange.
- **Don't** set type larger than 26px or smaller than 13px, or use italic, uppercase styling or letter-spacing.
