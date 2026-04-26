import { zeroToOne, zeroToOnePhotos } from "@/data/site";
import { ScrapPolaroid } from "@/components/scrapbook/ScrapPolaroid";

export function ZeroToOne() {
  return (
    <section
      id="zero-to-one"
      className="scroll-mt-20 border-b border-[var(--border)] py-16 sm:py-24"
      aria-labelledby="zto-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 lg:order-1 lg:pr-4">
            <h2
              id="zto-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              {zeroToOne.title}
            </h2>
            <div className="mt-6 space-y-4 text-[var(--muted)] leading-relaxed">
              {zeroToOne.paragraphs.map((p, i) => (
                <p key={`zto-p-${i}`}>{p}</p>
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative mx-auto min-h-[340px] w-full max-w-md lg:ml-auto lg:mr-0">
              <div
                className="relative aspect-[5/4] w-full rounded-[3px] border border-dashed border-[var(--scrap-border)] bg-[var(--scrap-pad)] shadow-[inset_0_0_0_1px_rgba(20,18,15,0.04)] sm:aspect-[5/4]"
                aria-label="Scrapbook photos"
              >
                <span className="font-scrap pointer-events-none absolute right-5 top-4 text-lg text-[var(--muted)] sm:right-8 sm:top-5 sm:text-xl">
                  field notes
                </span>
                {zeroToOnePhotos.map((photo, i) => (
                  <ScrapPolaroid key={`zto-${i}`} {...photo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
