export type BlogPost = {
  slug: string;
  title: string;
  /** ISO date string for sorting (YYYY-MM-DD) */
  date: string;
  excerpt: string;
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-the-notebook",
    title: "Welcome to the notebook",
    date: "2026-04-26",
    excerpt:
      "Replace this stub with your first essay, notes, or link roundup — everything lives in src/data/blog.ts for now.",
    paragraphs: [
      "This site reads posts from a small data file so you can ship writing without wiring a CMS on day one. Duplicate an entry, give it a new slug, title, and paragraphs, and it will show up on the home teaser and on the blog index.",
      "When you outgrow a single file, you can move these bodies to MDX or a headless CMS and keep the same routes.",
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
