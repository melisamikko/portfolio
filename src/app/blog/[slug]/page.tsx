import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { formatPostDate, getAllSlugs, getPostBySlug } from "@/data/blog";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div id="top" className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <article className="mx-auto max-w-2xl px-5 sm:px-8">
          <Link
            href="/blog"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            ← All posts
          </Link>
          <header className="mt-8">
            <time
              dateTime={post.date}
              className="font-mono text-xs text-[var(--faint)]"
            >
              {formatPostDate(post.date)}
            </time>
            <h1 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
              {post.excerpt}
            </p>
          </header>
          <div className="mt-10 border-t border-[var(--border)] pt-10">
            {post.paragraphs.map((p, i) => (
              <p
                key={`${post.slug}-p-${i}`}
                className="mb-5 text-[var(--muted)] leading-relaxed last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
          <p className="mt-12 font-mono text-xs text-[var(--faint)]">
            — {site.name}
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
