import type { Metadata } from "next";
import Image from "next/image";
import { Box, ContactBox, KeyValues, Shell } from "@/components/Profile";
import { aboutSections } from "@/data/about";
import { blurbs, details, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About me",
  description: `Who ${site.name} is, how she works, and who she likes to work with.`,
};

export default function AboutPage() {
  return (
    <Shell current="/about">
      <div className="cols detail">
        <div className="stack">
          {site.photo ? (
            <Image
              className="photo"
              src={site.photo}
              alt={site.name}
              width={170}
              height={170}
            />
          ) : null}
          <Box title={`${site.firstName}'s Details`}>
            <KeyValues rows={details} />
          </Box>
          <ContactBox />
        </div>
        <article className="stack">
          <header>
            <h1 className="title">About {site.firstName}</h1>
            <p className="lede">&ldquo;{site.quote}&rdquo;</p>
          </header>
          {aboutSections.map((section) => (
            <section className="blurb" key={section.title}>
              <h2 className="peach">{section.title}</h2>
              <div className="prose">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
          <section className="blurb">
            <h2 className="peach">Who I&apos;d like to meet</h2>
            <div className="prose">
              {blurbs.whoIdLikeToMeet.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        </article>
      </div>
    </Shell>
  );
}
