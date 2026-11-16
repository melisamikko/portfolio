export const site = {
  name: "Melisa Mikko",
  firstName: "Melisa",
  domain: "melisamikko.com",
  quote: "Slow to react, quick to execute.",
  offer: "Melisa builds the systems your business runs on, and keeps them running",
  description:
    "Websites, automations and internal tools for business owners, built and kept running by one person.",
  /** Interim: the Fieldhouse Ops booking page. Replace with Melisa's own link before launch. */
  bookingHref: "https://calendar.app.google/qLPwaHd8SSKcNNS6A",
  linkedinHref: "https://www.linkedin.com/in/melisamikko/",
  githubHref: "https://github.com/melisamikko",
  youtubeHref: "https://www.youtube.com/@melisamikko",
  /** A square photo in public/. */
  photo: "/melisa.jpg" as string | undefined,
};

type Row = readonly [label: string, value: string];

export const repos: readonly { name: string; href: string; about: string }[] = [
  {
    name: "life-insurance-agency-template",
    href: "https://github.com/melisamikko/life-insurance-agency-template",
    about: "A ready-to-rebrand agency website with a quote funnel.",
  },
  {
    name: "portfolio",
    href: "https://github.com/melisamikko/portfolio",
    about: "The code for the page you are looking at.",
  },
];

export const details: readonly Row[] = [
  ["Here for", "Business owners who need a system built and then looked after"],
  ["Builds", "Websites, automations, internal tools, AI agents that work under approval"],
  ["Has worked with", "Roofing, insurance and senior care companies"],
  ["Also runs", "Fieldhouse Ops, a small agency"],
];

export const interests: readonly Row[] = [
  ["Values", "Integrity first. Curiosity. Clarity."],
  ["Believes", "Build the people, and the people build the business."],
  ["Tools", "Next.js, Vercel, Supabase, HubSpot, n8n, Slack, Claude, PostHog, Resend"],
];

export const blurbs = {
  aboutMe: [
    "I build websites, automations and internal tools for business owners, and I stay to keep them running.",
    "I came up through operations and leading teams, so I build around how your people already work. My greatest joy is the spark when someone learns something new.",
  ],
  whoIdLikeToMeet: [
    "Owners who run the business from a spreadsheet and a group chat, and know it. Owners whose website should be bringing in work and is not. Owners who want one person to call when something breaks.",
  ],
  howIWork: [
    "I start small and honest: one clear scope and a first milestone you can see.",
    "I ship something real, learn from it in the open, and turn your feedback into the next round.",
    "I teach as I go, so the result is something your team can own after I step back.",
  ],
} as const;

export const earlierWork: readonly Row[] = [
  [
    "Agent resource hub",
    "Built and launched an internal portal that replaced an old intranet and became the one place about 100 insurance agents look things up.",
  ],
  [
    "Performance metrics reference",
    "Wrote the document that settled what each sales performance number in the company CRM means, used by analytics and sales leadership.",
  ],
  [
    "Remote call center launch plan",
    "Designed a 13-week phased plan for launching a remote call center, from validating the foundation to preparing to scale.",
  ],
  [
    "Tech stack risk audit",
    "Audited a company's technology from a revenue operations view and gave leadership its two largest technical risks with a way to address them.",
  ],
];
