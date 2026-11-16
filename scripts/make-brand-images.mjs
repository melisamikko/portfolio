// Draws the favicon set and the link preview image from src/data/site.ts copy.
// Run: node scripts/make-brand-images.mjs   (needs Verdana and Arial installed, as on macOS)
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const app = new URL("../src/app/", import.meta.url);

const HELMET = [
  "....RRRRRRRR....",
  "...RRRRRRRRRR...",
  "..RRRRGGGGRRRR..",
  "..RRRGGGGGGRRR..",
  ".RRRGGGGGGGGRRR.",
  ".RRGGGGGGGGGGRR.",
  ".RRGGGGGGGGGGRR.",
  ".RRGEEEGGEEEGRR.",
  ".RRGGEEGGEEGGRR.",
  ".RRGGGGGGGGGGRR.",
  ".RRRGGGGGGGGRRR.",
  "..RRYGGGGGGYRR..",
  "..RRGYYYYYYGRR..",
  "...RRGGGGGGRR...",
  "....RRGGGGRR....",
  ".....RRRRRR.....",
];
const INK = { R: "#b3121d", G: "#f5b82e", Y: "#b97a12", E: "#d9fbff" };

const helmetRects = (x0 = 0, y0 = 0, px = 1) =>
  HELMET.flatMap((row, y) =>
    [...row].map((c, x) =>
      INK[c]
        ? `<rect x="${x0 + x * px}" y="${y0 + y * px}" width="${px}" height="${px}" fill="${INK[c]}"/>`
        : "",
    ),
  ).join("");

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">${helmetRects()}</svg>\n`;

const png = (svg, size) =>
  sharp(Buffer.from(svg), { density: 72 * (size / 16) * 4 })
    .resize(size, size, { kernel: "nearest" })
    .png()
    .toBuffer();

function ico(images) {
  const head = Buffer.alloc(6 + 16 * images.length);
  head.writeUInt16LE(1, 2);
  head.writeUInt16LE(images.length, 4);
  let offset = head.length;
  images.forEach(({ size, data }, i) => {
    const at = 6 + 16 * i;
    head.writeUInt8(size, at);
    head.writeUInt8(size, at + 1);
    head.writeUInt16LE(1, at + 4);
    head.writeUInt16LE(32, at + 6);
    head.writeUInt32LE(data.length, at + 8);
    head.writeUInt32LE(offset, at + 12);
    offset += data.length;
  });
  return Buffer.concat([head, ...images.map((i) => i.data)]);
}

const appleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" shape-rendering="crispEdges"><rect width="180" height="180" fill="#003399"/>${helmetRects(26, 26, 8)}</svg>`;

const siteSource = await readFile(new URL("../src/data/site.ts", import.meta.url), "utf8");
const field = (name) => siteSource.match(new RegExp(`${name}:\\s*"([^"]+)"`))[1];
const photo = (await readFile(new URL("../public/melisa.jpg", import.meta.url))).toString("base64");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

const face = `font-family="Verdana"`;
const head = `font-family="Arial"`;
const rows = [
  ["Also builds", "AI agents that work under approval"],
  ["Here for", "Business owners who want it looked after"],
  ["Worked with", "Roofing, insurance, senior care"],
];
const kv = rows
  .map(([label, value], i) => {
    const y = 356 + i * 54;
    return `<rect x="420" y="${y}" width="190" height="48" fill="#b9cfe8"/>
<rect x="614" y="${y}" width="526" height="48" fill="#e3ecf6"/>
<text x="436" y="${y + 32}" ${face} font-size="22" font-weight="700" fill="#1c3f6e">${esc(label)}:</text>
<text x="630" y="${y + 32}" ${face} font-size="22" fill="#000">${esc(value)}</text>`;
  })
  .join("\n");

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#e5e5e5"/>
<rect x="30" y="0" width="1140" height="630" fill="#fff"/>
<rect x="30" y="0" width="1140" height="78" fill="#003399"/>
<g shape-rendering="crispEdges">${helmetRects(60, 15, 3)}</g>
<text x="124" y="51" ${head} font-size="34" font-weight="700" fill="#fff">${field("domain")}</text>
<text x="1140" y="49" ${face} font-size="20" font-weight="700" fill="#fff" text-anchor="end">Home  |  Work  |  About me  |  Blog</text>
<rect x="30" y="78" width="1140" height="12" fill="#3f6fa5"/>

<text x="60" y="150" ${face} font-size="40" font-weight="700" fill="#000">${field("name")}</text>
<rect x="60" y="176" width="320" height="320" fill="#6b7f99"/>
<image x="62" y="178" width="316" height="316" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/jpeg;base64,${photo}"/>
<circle cx="72" cy="532" r="9" fill="#008800"/>
<text x="90" y="540" ${face} font-size="22" font-weight="700" fill="#008800">Online Now!</text>
<text x="60" y="584" ${face} font-size="20" fill="#000">&#8220;${esc(field("quote"))}&#8221;</text>

<rect x="420" y="116" width="720" height="46" fill="#ffcc99"/>
<text x="436" y="148" ${face} font-size="23" font-weight="700" fill="#8f3400">Melisa is here to build your systems</text>
<text ${face} font-size="34" font-weight="700" fill="#000">
<tspan x="420" y="220">Websites, automations and</tspan>
<tspan x="420" y="264">internal tools for business owners,</tspan>
<tspan x="420" y="308">built and kept running by one person.</tspan>
</text>
${kv}

<rect x="420" y="536" width="290" height="62" fill="#f08a4f"/>
<rect x="424" y="540" width="286" height="58" fill="#a83a00"/>
<rect x="424" y="540" width="282" height="54" fill="#cc4700"/>
<text x="565" y="576" ${head} font-size="28" font-weight="700" fill="#fff" text-anchor="middle">Book a call</text>
<text x="734" y="575" ${face} font-size="22" font-weight="700" fill="#003399" text-decoration="underline">${field("domain")}</text>
</svg>`;

await writeFile(new URL("icon.svg", app), iconSvg);
await writeFile(
  new URL("favicon.ico", app),
  ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await png(iconSvg, size) })))),
);
await writeFile(new URL("apple-icon.png", app), await sharp(Buffer.from(appleSvg)).resize(180, 180).png().toBuffer());
await writeFile(new URL("opengraph-image.png", app), await sharp(Buffer.from(ogSvg)).png().toBuffer());
await writeFile(
  new URL("opengraph-image.alt.txt", app),
  `${field("name")}: ${field("description")}\n`,
);
