import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/Profile";
import { chapters } from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About me",
  description: `${site.name}'s story: where she started and how far she has come.`,
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
          <p className="quote">&ldquo;{site.quote}&rdquo;</p>
        </div>
        <article className="stack">
          <h1 className="title">About {site.firstName}</h1>
          {chapters.map((chapter) => (
            <section className="blurb" key={chapter.title}>
              <h2 className="peach">
                {chapter.title}
                {chapter.when ? ` (${chapter.when})` : ""}
              </h2>
              <div className="prose">
                {chapter.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {chapter.photos?.length ? (
                <ul className="pics">
                  {chapter.photos.map((pic) => (
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
              ) : null}
            </section>
          ))}
        </article>
      </div>
    </Shell>
  );
}
