import type { SimpleIcon } from "simple-icons";
import {
  getToolboxToolCount,
  toolboxCategories,
  toolboxIntro,
  type ToolRow,
} from "@/data/toolbox";
import { TOOL_SIMPLE_ICONS } from "@/data/toolboxIcons";

function BrandSvg({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="h-8 w-8"
    >
      <path fill={`#${icon.hex}`} d={icon.path} />
    </svg>
  );
}

function InitialBadge({ letter, hex }: { letter: string; hex: string }) {
  const compact = letter.length > 1;
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-lg font-bold tracking-tight text-white shadow-inner ${
        compact ? "px-0.5 text-[9px] leading-tight" : "text-sm"
      }`}
      style={{ backgroundColor: hex }}
      aria-hidden
    >
      {letter}
    </div>
  );
}

function GlyphCell({ tool }: { tool: ToolRow }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--tool-tile-bg)] ring-1 ring-[var(--border)]">
      {tool.kind === "si" ? (
        <BrandSvg icon={TOOL_SIMPLE_ICONS[tool.id]} />
      ) : (
        <InitialBadge letter={tool.letter} hex={tool.hex} />
      )}
    </div>
  );
}

function ToolNameCell({ tool }: { tool: ToolRow }) {
  const name = tool.name;
  const href = tool.href;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--accent)] hover:text-[var(--accent)]"
      >
        {name}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    );
  }

  return <span className="font-medium text-[var(--text)]">{name}</span>;
}

export function Toolbox() {
  const total = getToolboxToolCount();

  return (
    <section
      id="toolbox"
      className="scroll-mt-20 border-b border-[var(--border)] py-16 sm:py-24"
      aria-labelledby="toolbox-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2
          id="toolbox-heading"
          className="font-display text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
        >
          {toolboxIntro.title}
        </h2>
        <p className="mt-4 max-w-3xl text-[var(--muted)] leading-relaxed">
          {toolboxIntro.lead}
        </p>
        <p className="mt-2 font-mono text-xs text-[var(--faint)]">
          {total} tools across {toolboxCategories.length} categories — edit in{" "}
          <code className="rounded bg-[var(--code-bg)] px-1 py-0.5 text-[11px] text-[var(--text)]">
            src/data/toolbox.ts
          </code>
          .
        </p>

        <div className="mt-14 flex flex-col gap-14">
          {toolboxCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="font-display text-xl font-semibold text-[var(--text)] sm:text-2xl">
                {cat.title}
              </h3>
              <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)] text-[11px] font-mono uppercase tracking-wider text-[var(--faint)]">
                      <th className="w-14 px-3 py-2.5 sm:px-4" scope="col">
                        <span className="sr-only">Logo</span>
                      </th>
                      <th className="px-3 py-2.5 sm:px-4" scope="col">
                        Tool
                      </th>
                      <th className="min-w-[220px] px-3 py-2.5 sm:px-4" scope="col">
                        Usage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.tools.map((tool) => (
                      <tr
                        key={tool.name}
                        className="border-b border-[var(--border)] align-top last:border-b-0"
                      >
                        <td className="px-3 py-3 sm:px-4">
                          <GlyphCell tool={tool} />
                        </td>
                        <td className="px-3 py-3 sm:px-4">
                          <ToolNameCell tool={tool} />
                        </td>
                        <td className="px-3 py-3 text-[var(--muted)] leading-relaxed sm:px-4">
                          {tool.usage}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
