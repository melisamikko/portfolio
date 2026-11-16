import type { Metadata } from "next";
import Link from "next/link";
import { ContactBox, Shell } from "@/components/Profile";
import { formatPostDate, getAllPosts } from "@/data/blog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Writing and notes by ${site.name}.`,
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Shell current="/blog">
      <div className="cols">
        <div className="stack">
          <h1 className="name">{site.firstName}&apos;s Blog</h1>
          <p>Where I organize my thinking in public.</p>
          <ContactBox />
        </div>
        <section>
          <h2 className="peach">Blog Entries</h2>
          {posts.length ? (
            <ul className="entries">
              {posts.map((post) => (
                <li key={post.slug}>
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  <p>{post.excerpt}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="count">
              No entries yet. The first one is being written. Until then,{" "}
              <Link href="/work">see my work</Link>.
            </p>
          )}
        </section>
      </div>
    </Shell>
  );
}
