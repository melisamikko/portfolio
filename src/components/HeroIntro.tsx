import { aboutMel, heroPhotos, site } from "@/data/site";
import { ScrapPolaroid } from "@/components/scrapbook/ScrapPolaroid";

export function HeroIntro() {
  return (
    <section
      id="intro"
      className="scroll-mt-20 border-b border-[var(--border)] pt-28 pb-16 sm:pt-32 sm:pb-24"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          {site.name}
        </p>
        <h1
          id="intro-heading"
          className="font-display mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl"
        >
          {site.tagline}
        </h1>
        <p className="mt-2 max-w-xl text-[var(--muted)]">{site.role}</p>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Scrapbook cluster — left */}
          <div className="relative mx-auto min-h-[380px] w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[5/4] w-full rounded-[3px] border border-dashed border-[var(--scrap-border)] bg-[var(--scrap-pad)] shadow-[inset_0_0_0_1px_rgba(20,18,15,0.04)] sm:aspect-[6/5]">
              <span className="font-scrap pointer-events-none absolute left-4 top-4 text-lg text-[var(--muted)] sm:left-6 sm:top-5 sm:text-xl">
                memories
              </span>
              {heroPhotos.map((photo, i) => (
                <ScrapPolaroid key={`hero-${i}`} {...photo} />
              ))}
            </div>
          </div>

          {/* About — right */}
          <div className="lg:pt-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
              {aboutMel.title}
            </h2>
            <div className="mt-6 space-y-5 border-l-2 border-[var(--accent)] pl-6 text-[var(--muted)] leading-relaxed">
              {aboutMel.paragraphs.map((p, i) => (
                <p key={`about-${i}`}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
