import { certifications, projects } from "@/data/site";

export function FavoriteLessons() {
  return (
    <section
      id="lessons"
      className="scroll-mt-20 border-b border-[var(--border)] py-16 sm:py-24"
      aria-labelledby="lessons-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Portfolio
          </p>
          <h2
            id="lessons-heading"
            className="font-display mt-2 text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
          >
            Most impactful projects
          </h2>
          <p className="mt-3 text-[var(--muted)] leading-relaxed">
            A few high-leverage initiatives — impact, audience, and why they
            mattered. Edit copy in{" "}
            <code className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 font-mono text-xs text-[var(--text)]">
              src/data/site.ts
            </code>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--faint)]">
              Projects
            </h3>
            <ul className="mt-5 flex flex-col gap-6">
              {projects.map((project) => {
                const Card = project.href ? "a" : "div";
                const cardClass =
                  "block rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[3px_4px_0_0_var(--sticker-shadow)] sm:p-6";
                const cardProps = project.href
                  ? {
                      href: project.href,
                      target: "_blank" as const,
                      rel: "noopener noreferrer" as const,
                      "aria-label": `${project.title} (opens in new tab)`,
                      className: `${cardClass} transition-colors hover:border-[var(--muted)]`,
                    }
                  : { className: cardClass };

                return (
                  <li key={project.title}>
                    <Card {...cardProps}>
                      <div className="flex flex-wrap items-start justify-between gap-2 gap-y-1">
                        <span className="font-display text-lg font-semibold leading-snug text-[var(--text)] sm:text-xl">
                          {project.rank}. {project.title}
                        </span>
                        {project.href ? (
                          <span className="text-xs font-medium text-[var(--accent)]">
                            Visit →
                          </span>
                        ) : null}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--muted)]">
                          Impact: {project.impact}
                        </span>
                        <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--muted)]">
                          {project.visibility}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                        {project.lead}
                      </p>
                      <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-[var(--text)]">
                        {project.bullets.map((b, i) => (
                          <li key={`${project.title}-b-${i}`}>{b}</li>
                        ))}
                      </ul>
                      <p className="mt-4 border-l-2 border-[var(--accent)] pl-4 text-sm font-medium leading-relaxed text-[var(--text)]">
                        <span className="text-[var(--muted)] font-normal">
                          Why it matters:{" "}
                        </span>
                        {project.whyItMatters}
                      </p>
                      {project.tags && project.tags.length > 0 ? (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <li
                              key={`${project.title}-${tag}`}
                              className="rounded-full border border-[var(--border)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--muted)]"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className="lg:pt-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--faint)]">
              Certifications
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {certifications.map((c, i) => (
                <li
                  key={c.name}
                  className={`relative rounded-md border-2 border-[var(--border)] bg-[var(--cert-paper)] p-4 shadow-[2px_3px_0_0_var(--sticker-shadow)] ${
                    i % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
                >
                  <span
                    className="pointer-events-none absolute -right-1 -top-2 h-6 w-16 rotate-6 rounded-[2px] bg-[var(--tape-c)] opacity-90"
                    aria-hidden
                  />
                  <p className="font-display text-base font-semibold text-[var(--text)]">
                    {c.name}
                  </p>
                  {(c.issuer || c.year) && (
                    <p className="mt-1 font-mono text-xs text-[var(--muted)]">
                      {[c.issuer, c.year].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
