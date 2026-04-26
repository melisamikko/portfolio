import { site, values } from "@/data/site";

export function ValuesContact() {
  return (
    <section
      id="values"
      className="scroll-mt-20 py-16 sm:py-24"
      aria-labelledby="values-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="values-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Values
            </h2>
            <ul className="mt-6 space-y-4">
              {values.map((v) => (
                <li
                  key={v}
                  className="flex gap-3 text-[var(--muted)] leading-relaxed"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden
                  />
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-[var(--text)] sm:text-2xl">
              Let&apos;s connect
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              Email is best for a thoughtful reply. For code, video, and career
              history, use the links below.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block font-medium text-[var(--accent)] underline decoration-[var(--border)] underline-offset-8 transition-colors hover:decoration-[var(--accent)]"
            >
              {site.email}
            </a>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={site.resumeHref}
                download
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--muted)]"
              >
                Download resume
              </a>
              <a
                href={site.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--surface)] transition-opacity hover:opacity-90"
              >
                GitHub
              </a>
              <a
                href={site.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--muted)]"
              >
                LinkedIn
              </a>
              <a
                href={site.youtubeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--muted)]"
              >
                YouTube
              </a>
            </div>
            <p className="mt-6 text-xs text-[var(--faint)] leading-relaxed">
              Place your PDF in the{" "}
              <code className="rounded bg-[var(--code-bg)] px-1 font-mono text-[11px] text-[var(--text)]">
                public
              </code>{" "}
              folder and set{" "}
              <code className="rounded bg-[var(--code-bg)] px-1 font-mono text-[11px] text-[var(--text)]">
                resumeHref
              </code>{" "}
              in{" "}
              <code className="rounded bg-[var(--code-bg)] px-1 font-mono text-[11px] text-[var(--text)]">
                site.ts
              </code>{" "}
              to match the filename.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
