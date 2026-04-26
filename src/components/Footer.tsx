import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-[var(--faint)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {site.name}. Built with Next.js.
        </p>
        <a href="#top" className="w-fit hover:text-[var(--muted)]">
          Back to top
        </a>
      </div>
    </footer>
  );
}
