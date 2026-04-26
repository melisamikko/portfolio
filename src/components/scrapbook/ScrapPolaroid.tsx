import Image from "next/image";
import type { ScrapPhoto } from "@/data/site";

type Props = ScrapPhoto & {
  /** Larger bottom padding like a real polaroid */
  thickBottom?: boolean;
};

export function ScrapPolaroid({
  src,
  alt,
  rotate,
  className = "",
  caption,
  thickBottom = true,
}: Props) {
  return (
    <figure className={`absolute ${rotate} ${className}`}>
      <div
        className={`relative rounded-sm border border-[var(--polaroid-border)] bg-[var(--polaroid-bg)] p-2 pb-3 shadow-[0_12px_28px_-8px_rgba(20,18,15,0.35)] ring-1 ring-black/[0.04] dark:shadow-[0_14px_32px_-10px_rgba(0,0,0,0.65)] dark:ring-white/[0.06] ${
          thickBottom ? "pb-10 sm:pb-11" : "pb-6"
        }`}
      >
        {/* washi tape */}
        <span
          className="pointer-events-none absolute -top-2 left-1/2 h-5 w-14 -translate-x-1/2 rotate-[-2deg] rounded-[2px] bg-[var(--tape-a)] opacity-90 shadow-sm"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -top-1.5 right-4 h-4 w-10 rotate-[6deg] rounded-[2px] bg-[var(--tape-b)] opacity-85 shadow-sm"
          aria-hidden
        />

        <div
          className={`relative aspect-[4/5] w-full overflow-hidden ${
            src ? "" : "flex items-center justify-center"
          }`}
          style={
            src ? undefined : { background: "var(--photo-placeholder)" }
          }
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width:640px) 50vw, 240px"
            />
          ) : (
            <span className="font-scrap text-base text-[var(--faint)]">
              Add photo
            </span>
          )}
        </div>
        {caption ? (
          <figcaption className="font-scrap mt-2 text-center text-sm leading-snug text-[var(--muted)]">
            {caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}
