import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/data/blog";

const PREVIEW_COUNT = 3;

export function BlogTeaser() {
  const posts = getAllPosts().slice(0, PREVIEW_COUNT);

  return (
    <section
      id="blog"
      className="scroll-mt-20 border-b border-[var(--border)] py-16 sm:py-24"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2
              id="blog-heading"
              className="font-display text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Blog
            </h2>
            <p className="mt-2 max-w-xl text-[var(--muted)] leading-relaxed">
              Essays and notes. Add posts in{" "}
              <code className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 font-mono text-xs text-[var(--text)]">
                src/data/blog.ts
              </code>
              .
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 text-sm font-medium text-[var(--accent)] underline decoration-[var(--border)] underline-offset-8 transition-colors hover:decoration-[var(--accent)]"
          >
            View all posts
          </Link>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--muted)] sm:p-6"
              >
                <time
                  dateTime={post.date}
                  className="font-mono text-xs text-[var(--faint)]"
                >
                  {formatPostDate(post.date)}
                </time>
                <h3 className="font-display mt-2 text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent)]">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-medium text-[var(--accent)]">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
