export const site = {
  name: "Melisa Mikko",
  role: "People-first operator",
  tagline: "Slow to react, quick to execute.",
  email: "hello@example.com",
  /** Add `Melisa-Mikko-Resume.pdf` (or any name) to the `public/` folder and set this path. */
  resumeHref: "/Melisa-Mikko-Resume.pdf",
  githubHref: "https://github.com",
  linkedinHref: "https://linkedin.com",
  /** Your channel or @handle URL, e.g. https://www.youtube.com/@YourHandle */
  youtubeHref: "https://www.youtube.com/",
  location: "",
} as const;

/** Hero polaroids: set `src` to a file in `public/` (e.g. `/photos/me.jpg`) when you have images. */
export type ScrapPhoto = {
  src?: string;
  alt: string;
  /** Tailwind rotate class fragment, e.g. "-rotate-6" */
  rotate: string;
  /** Offset from cluster origin */
  className?: string;
  caption?: string;
};

export const heroPhotos: ScrapPhoto[] = [
  {
    alt: "Melisa — photo 1",
    rotate: "-rotate-6",
    className: "left-0 top-0 z-[3] w-[min(100%,220px)] sm:w-[240px]",
    caption: "Replace me",
  },
  {
    alt: "Melisa — photo 2",
    rotate: "rotate-5",
    className: "right-0 top-8 z-[2] w-[min(100%,200px)] sm:right-4 sm:w-[220px]",
    caption: "Your moment",
  },
  {
    alt: "Melisa — photo 3",
    rotate: "-rotate-2",
    className: "bottom-0 left-1/2 z-[1] w-[min(100%,210px)] -translate-x-1/2 translate-y-2 sm:w-[230px]",
    caption: "Snapshot",
  },
];

export const zeroToOnePhotos: ScrapPhoto[] = [
  {
    alt: "Work snapshot 1",
    rotate: "rotate-4",
    className: "right-0 top-0 z-[2] w-[min(100%,200px)] sm:w-[220px]",
  },
  {
    alt: "Work snapshot 2",
    rotate: "-rotate-5",
    className: "right-6 top-32 z-[1] w-[min(100%,190px)] sm:right-10 sm:top-36 sm:w-[200px]",
  },
];

export const aboutMel = {
  title: "About Mel",
  paragraphs: [
    "Slow to react, quick to execute. My greatest joys come from helping individuals and teams grow. I love seeing a spark when someone learns something new.",
    "If I can guide people to develop a new skill or skills and re-engage them in ways that they want to make not just themselves but the whole of the organization stronger, then I have done my job. Build the people, and the people build the business.",
  ],
} as const;

export const zeroToOne = {
  title: "Zero to One",
  paragraphs: [
    "Starting from nothing means choosing clarity over noise: a small, honest scope, a visible first milestone, and room for people to bring their best ideas.",
    "I bias toward teaching and systems so the first version is not a hero sprint — it is something the team can own, extend, and defend when I step back.",
    "Execution is kindness: ship something real, learn in the open, and turn feedback into the next loop. The goal is momentum with integrity, not perfection on day one.",
  ],
} as const;

export const values = [
  "Integrity first",
  "Always",
  "Curiosity",
  "Clarity",
] as const;

export type ImpactProject = {
  /** Display order (e.g. 1, 2, 4 if you skip a number in your list). */
  rank: number;
  title: string;
  impact: string;
  visibility: string;
  lead: string;
  bullets: readonly string[];
  whyItMatters: string;
  href?: string;
  tags?: readonly string[];
};

export const projects: ImpactProject[] = [
  {
    rank: 1,
    title: "LuminaryLife.com website rebuild",
    impact: "High",
    visibility: "Company-wide",
    lead:
      "Rebuilt the entire company website from scratch using Next.js, Vercel, and Supabase — migrating off WordPress.",
    bullets: [
      "Shipped 100+ pages including all agent bios.",
      "Trained Vivian to contribute commits and maintain the site.",
      "Built the foundation for future tools: calculators, guides, client resources.",
      "\"Vibe coding is addicting\" — and I shipped production code.",
    ],
    whyItMatters:
      "I took a legacy WordPress site and turned it into a modern, maintainable codebase the company can build on. This was not ops-only work — it was founder-level execution.",
    href: "https://luminarylife.com",
    tags: ["Next.js", "Vercel", "Supabase", "WordPress"],
  },
  {
    rank: 2,
    title: "Agent Resource Hub (intranet replacement)",
    impact: "High",
    visibility: "All agents + support teams",
    lead:
      "Built and launched the new internal portal on Google Sites, replacing the old intranet.",
    bullets: [
      "Centralized carrier resources (American Amicable, MOO, GTL, RNA).",
      "Added tools: Rate Increase Calculator, payroll calendar, timesheets, help desk links.",
      "Posted Monday Town Hall replays.",
      "Announced company-wide and adopted immediately.",
    ],
    whyItMatters:
      "This became the single source of truth for ~100 agents. I built it, documented it, and launched it — cutting down \"where do I find X?\" noise across the org.",
    tags: ["Google Sites", "Operations", "Enablement"],
  },
  {
    rank: 4,
    title: "Daily agent performance reference doc",
    impact: "High",
    visibility: "Analytics + sales leadership",
    lead:
      "Created the definitive documentation for all agent performance metrics in the DSB CRM.",
    bullets: [
      "Metric definitions: Touched, Contact Made, Dials, Long Calls, Close %, Appt Set.",
      "Dialing system logic and lead pool behavior.",
      "Interpretation callouts for accurate reporting.",
      "Shared with the analytics team via Slack and attributed to me by leadership.",
    ],
    whyItMatters:
      "Before this doc, nobody agreed on what the numbers meant. I created the single source of truth for how performance is measured.",
    tags: ["CRM", "Documentation", "Analytics"],
  },
  {
    rank: 5,
    title: "Remote call center Q1 launch framework",
    impact: "High",
    visibility: "Remote sales leadership",
    lead:
      "Designed a 13-week phased launch plan for the remote final expense call center.",
    bullets: [
      "Phase 1: Foundation validation.",
      "Phases 2–3: Detailed in working sessions (not fully visible in Slack archive).",
      "Phase 4: Scale prep.",
      "Flagged CRM performance visibility as the key infrastructure gap.",
    ],
    whyItMatters:
      "This gave Ashley and the remote team a structured roadmap instead of \"just start hiring\" — operational scaffolding that prevents chaos.",
    tags: ["GTM", "Call center", "Planning"],
  },
  {
    rank: 6,
    title: "Tech stack audit & risk identification",
    impact: "Very high",
    visibility: "Executive + engineering",
    lead:
      "Led a full-stack technology audit from a RevOps lens and prepared structured follow-up questions for owners.",
    bullets: [
      "DSB CRM risk: single-developer dependency (Maged), aging PHP codebase, little documentation.",
      "LISA risk: opacity around architecture (Daniel).",
      "GitHub fragmentation: code scattered across personal and contractor accounts.",
    ],
    whyItMatters:
      "I surfaced the two largest technical risks in the company and gave leadership a framework to address them before they become catastrophic failures.",
    tags: ["RevOps", "Risk", "Engineering"],
  },
];

export type Certification = {
  name: string;
  issuer?: string;
  year?: string;
};

export const certifications: Certification[] = [
  { name: "Example certification", issuer: "Issuer name", year: "2024" },
  { name: "Another credential", issuer: "Issuer name", year: "2023" },
];
