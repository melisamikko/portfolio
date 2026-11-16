import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBox, Shell } from "@/components/Profile";
import { formatPostDate, getAllSlugs, getPostBySlug } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug((await params).slug);
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
  const post = getPostBySlug((await params).slug);
  if (!post) notFound();

  return (
    <Shell current="/blog">
      <div className="cols detail">
        <div className="stack">
          <ContactBox />
        </div>
        <article className="stack post">
          <header>
            <p className="crumbs">
              <Link href="/blog">Back to all entries</Link>
            </p>
            <h1 className="title">{post.title}</h1>
            <p className="meta">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </p>
          </header>
          <div>
            {post.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </article>
      </div>
    </Shell>
  );
}
