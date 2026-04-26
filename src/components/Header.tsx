import Link from "next/link";
import { site } from "@/data/site";

const nav = [
  { href: "/#intro", label: "Intro" },
  { href: "/#zero-to-one", label: "Zero to One" },
  { href: "/#lessons", label: "Lessons" },
  { href: "/blog", label: "Blog" },
  { href: "/#values", label: "Values" },
  { href: "/#toolbox", label: "Toolbox" },
] as const;

export function Header() {
  const first = site.name.split(" ")[0] ?? site.name;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/#top"
          className="font-display shrink-0 text-sm font-semibold tracking-tight text-[var(--text)]"
        >
          {first}
          <span className="text-[var(--muted)]">.</span>
        </Link>
        <nav className="flex items-center gap-3 overflow-x-auto text-sm sm:gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
