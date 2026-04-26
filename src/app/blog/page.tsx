import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { formatPostDate, getAllPosts } from "@/data/blog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Writing and notes by ${site.name}.`,
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div id="top" className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            {site.name}
          </p>
          <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Blog
          </h1>
          <p className="mt-3 text-[var(--muted)] leading-relaxed">
            Longer-form pieces and updates. New posts are added in{" "}
            <code className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 font-mono text-xs text-[var(--text)]">
              src/data/blog.ts
            </code>
            .
          </p>

          <ul className="mt-12 flex flex-col gap-10 border-t border-[var(--border)] pt-12">
            {posts.map((post) => (
              <li key={post.slug}>
                <article>
                  <time
                    dateTime={post.date}
                    className="font-mono text-xs text-[var(--faint)]"
                  >
                    {formatPostDate(post.date)}
                  </time>
                  <h2 className="font-display mt-2 text-2xl font-semibold text-[var(--text)]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-[var(--accent)]"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[var(--muted)] leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-3 inline-block text-sm font-medium text-[var(--accent)]"
                  >
                    Continue reading
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
