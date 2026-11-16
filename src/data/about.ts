import type { Pic } from "./work";

/**
 * The About me page: Melisa's story, told as chapters in this order.
 * Each chapter has a title, an optional "when" (a year, a place), paragraphs,
 * and optional photos. Photos live in public/about/ and are listed as
 * { src: "/about/file.jpg", alt: "what the photo shows", width, height }.
 */
export type Chapter = {
  title: string;
  when?: string;
  paragraphs: readonly string[];
  photos?: readonly Pic[];
};

export const chapters: readonly Chapter[] = [
  {
    title: "About me",
    paragraphs: [
      "Slow to react, quick to execute. My greatest joys come from helping individuals and teams grow. I love seeing a spark when someone learns something new.",
      "If I can guide people to develop a new skill and re-engage them in ways that make not just themselves but the whole organization stronger, then I have done my job. Build the people, and the people build the business.",
    ],
  },
];
