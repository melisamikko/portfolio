import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Box, ContactBox, KeyValues, Shell } from "@/components/Profile";
import { getWork, statusLabel, work } from "@/data/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getWork((await params).slug);
  if (!item) return { title: "Work not found" };
  return { title: item.title, description: item.summary };
}

export default async function WorkPage({ params }: Props) {
  const item = getWork((await params).slug);
  if (!item) notFound();

  const index = work.indexOf(item);
  const previous = work[index - 1];
  const next = work[index + 1];

  const rows: [string, string][] = [
    ["For", item.business],
    ["Status", statusLabel[item.status]],
  ];
  if (item.since) rows.push(["Since", item.since]);
  if (item.replaced) rows.push(["Replaced", item.replaced]);
  rows.push(["Built with", item.tools.join(", ")]);

  const sections = [
    ["The problem", item.problem],
    ["What I built", item.built],
    ["What changed", item.changed],
  ] as const;

  return (
    <Shell current="/work">
      <div className="cols detail">
        <div className="stack">
          <Box title="Details">
            <KeyValues rows={rows} />
          </Box>
          <ContactBox />
        </div>
        <article className="stack">
          <header>
            <p className="crumbs">
              <Link href="/work">Back to all work</Link>
            </p>
            <h1 className="title">{item.title}</h1>
            <p className="lede">{item.summary}</p>
          </header>
          <section>
            <h2 className="peach">Pics</h2>
            <ul className="pics">
              {item.pics.map((pic) => (
                <li key={pic.src}>
                  <a href={pic.src} target="_blank" rel="noopener">
                    <Image
                      src={pic.src}
                      alt={pic.alt}
                      width={pic.width}
                      height={pic.height}
                      sizes="(max-width: 760px) 92vw, 320px"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="picnote">
              {item.picNote ??
                "Real screenshots. Names, logos and figures are blurred. Click a picture to see it full size."}
            </p>
          </section>
          {sections.map(([heading, lines]) => (
            <section className="blurb" key={heading}>
              <h2 className="peach">{heading}</h2>
              {lines.length === 1 ? (
                <p style={{ marginTop: 12 }}>{lines[0]}</p>
              ) : (
                <ul style={{ marginTop: 12 }}>
                  {lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {item.link ? (
            <p>
              <a href={item.link.href}>{item.link.label}</a>
            </p>
          ) : null}
          <nav className="pager" aria-label="More work">
            <span>
              {previous ? (
                <Link className="btn" href={`/work/${previous.slug}`}>
                  Previous: {previous.short}
                </Link>
              ) : null}
            </span>
            <span>
              {next ? (
                <Link className="btn" href={`/work/${next.slug}`}>Next: {next.short}</Link>
              ) : null}
            </span>
          </nav>
        </article>
      </div>
    </Shell>
  );
}
