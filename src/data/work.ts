export type WorkStatus = "live" | "early" | "built";

export const statusLabel: Record<WorkStatus, string> = {
  live: "Live and looked after",
  early: "New, no track record yet",
  built: "Built",
};

export type WorkIconId =
  | "roof"
  | "pipeline"
  | "desk"
  | "loop"
  | "chart"
  | "template"
  | "pages";

export type Work = {
  slug: string;
  /** Short label under the Top 8 tile. */
  short: string;
  title: string;
  /** The client, described without naming them. */
  business: string;
  status: WorkStatus;
  since?: string;
  replaced?: string;
  tools: readonly string[];
  icon: WorkIconId;
  summary: string;
  problem: readonly string[];
  built: readonly string[];
  changed: readonly string[];
  link?: { href: string; label: string };
};

export const work: readonly Work[] = [
  {
    slug: "roofing-website",
    short: "Roofing website",
    title: "A website that brings in the leads",
    business: "A Texas roofing company",
    status: "live",
    since: "July 2026",
    tools: ["Next.js", "Vercel", "HubSpot", "PostHog"],
    icon: "roof",
    summary:
      "The production website of a roofing company. Nearly all of the company's leads come through it.",
    problem: [
      "The website is where this company's work comes from. Every slow page, broken form or lost lead source costs real jobs, so the site cannot be treated as a brochure someone updates once a year.",
    ],
    built: [
      "A custom site with service pages, city pages for each area the company serves, a free inspection page built to turn a visitor into a booked inspection, and a wall of customer reviews.",
      "A landing page for Meta ads that records where each lead came from and carries that into the CRM, so the owner can see which ads produce jobs.",
      "A set of automatic checks that run before any change goes live. They protect the lead forms first.",
      "Ongoing speed work, so pages load quickly on a phone.",
    ],
    changed: [
      "The site is live and I look after it every week. I have shipped more than 800 changes to it since July 2026, each one tracked as its own task with a before and an after.",
      "The team asks for a change and it is handled. Nobody on their side touches code.",
    ],
  },
  {
    slug: "sales-pipeline",
    short: "Sales pipeline",
    title: "A sales pipeline the owner can see",
    business: "The commercial division of a roofing company",
    status: "live",
    since: "July 2026",
    replaced: "Records kept in separate roofing software",
    tools: ["HubSpot", "Next.js", "Vercel"],
    icon: "pipeline",
    summary:
      "Moved a commercial division's contacts, companies and deals into the company CRM, and put a live sales dashboard on top.",
    problem: [
      "The commercial side kept its customers and deals in its own roofing software, apart from the CRM the rest of the company used. Leadership had no single view of commercial sales.",
    ],
    built: [
      "An audit of the old data, then a dedicated commercial pipeline in the CRM.",
      "A careful move of contacts, companies and deals. Every record is matched by its original ID, so residential customers were never touched.",
      "A rule for every bulk change: a full dry run, then five records checked by hand, then my approval, then small batches that are read back and verified.",
      "A one-page dashboard that pulls the pipeline live and sits behind the company's own sign-in.",
    ],
    changed: [
      "Commercial deals now live in the same CRM as everything else.",
      "Leadership opens one page to see the commercial pipeline as it stands today.",
    ],
  },
  {
    slug: "website-desk",
    short: "Website desk",
    title: "Ask in Slack, see it live on the site",
    business: "Built for my own client work, first used with a senior care company",
    status: "early",
    since: "November 2026",
    replaced: "Website requests handled by hand, one message at a time",
    tools: ["Slack", "Claude", "n8n", "GitHub", "Vercel"],
    icon: "desk",
    summary:
      "A client posts a website request in Slack. AI agents build and review the change, I approve it, and the client is told when it is live.",
    problem: [
      "Small website requests pile up: swap a photo, add a team member, fix a sentence. Each is quick, but together they eat days and clients wait.",
    ],
    built: [
      "A desk that listens in the client's Slack channel. A request becomes a ticket without anyone filling in a form.",
      "One agent reads the request and the site's code and decides what is being asked. A second builds the change. A third reviews it.",
      "A risk rating from 1 to 5 on every ticket. Small safe changes go live after review. Anything larger waits for my approval, and the riskiest wait for my go-ahead before work starts.",
      "A named desk assistant that tells the client their change is live. It sends nothing until I press Send.",
    ],
    changed: [
      "It was set up for its first client in November 2026. It is new, so there is no track record to report yet.",
      "The design goal is simple: a client asks in the place they already talk, and a person still approves everything that reaches them.",
    ],
  },
  {
    slug: "automations",
    short: "Forms + reports",
    title: "Forms, reports and alerts that run themselves",
    business: "A senior care company, and my own business",
    status: "live",
    since: "November 2026",
    replaced: "Three separate Zapier automations",
    tools: ["n8n", "Resend", "Slack", "Vercel"],
    icon: "loop",
    summary:
      "Moved a company's website forms off three paid automations onto one workflow, and added daily reporting and failure alerts.",
    problem: [
      "A senior care company's quote form, careers form and newsletter signup each ran on its own Zapier automation. Three things to pay for, three things that could quietly break.",
    ],
    built: [
      "One workflow on a server I run that handles all three forms and sends the same emails to the same inbox as before.",
      "A careful switch: test emails first, then one live submission, then the website pointed at the new workflow. The old automations stay in place until the client confirms.",
      "For my own business, a report that arrives in Slack at 8 every morning with ad spend, booked calls and lead numbers from three sources.",
      "A status page that checks every automation every five minutes and posts in Slack when one fails.",
    ],
    changed: [
      "Three automations became one, on infrastructure that is not billed per task.",
      "If a form stops working I hear about it within minutes, before the client does.",
    ],
  },
  {
    slug: "production-tracker",
    short: "Production tracker",
    title: "The daily spreadsheet routine, replaced by an app",
    business: "The sales floor of an insurance agency",
    status: "built",
    since: "April 2026",
    replaced: "A master Excel sheet fed by daily downloads from two systems",
    tools: ["React", "Supabase", "Google sign-in"],
    icon: "chart",
    summary:
      "An app for tracking daily sales agent performance, replacing a manual routine of downloading reports and pasting them into Excel.",
    problem: [
      "Every day someone downloaded reports from two systems and pasted them into a master spreadsheet to see how each sales agent was doing. It was slow, and one bad paste broke the numbers.",
    ],
    built: [
      "A tracking app with its own database that takes in the daily reports from both systems.",
      "Invite-only access through Google sign-in, so only the people who should see agent numbers can.",
    ],
    changed: [
      "The numbers live in one place with one definition, not in a file that depends on who pasted it that morning.",
    ],
  },
  {
    slug: "site-template",
    short: "Site template",
    title: "A lead-generating site, ready to rebrand",
    business: "Life insurance agencies",
    status: "built",
    since: "September 2026",
    tools: ["Next.js", "Vercel"],
    icon: "template",
    summary:
      "A reusable website for a life insurance agency with a quote funnel and lead capture built in. One agency site has been built from it.",
    problem: [
      "Each new agency website started from a blank page, even though they all need the same things: a way to get a quote, a safe place for the lead to land, and pages that search engines can read.",
    ],
    built: [
      "A complete starter site with a step-by-step quote funnel and a lead capture service behind it.",
      "The search engine basics set up from the first day.",
      "Build checks that stop a broken site from going live.",
    ],
    changed: [
      "A new agency site starts from something proven, so the work goes into the brand and the offer.",
      "The template is public. Anyone can read how it is put together.",
    ],
    link: {
      href: "https://github.com/melisamikko/life-insurance-agency-template",
      label: "See the template on GitHub",
    },
  },
  {
    slug: "website-rebuild",
    short: "Website rebuild",
    title: "A whole company website, moved off WordPress",
    business: "A life insurance agency",
    status: "built",
    replaced: "A legacy WordPress site",
    tools: ["Next.js", "Vercel", "Supabase"],
    icon: "pages",
    summary:
      "Rebuilt an agency's entire website from scratch, more than 100 pages, and trained a teammate to maintain it.",
    problem: [
      "The company's website ran on an old WordPress setup that was hard to change and hard to build on.",
    ],
    built: [
      "The whole site again from scratch: more than 100 pages, including a bio page for every agent.",
      "A foundation the company can add to later, such as calculators, guides and client resources.",
    ],
    changed: [
      "The company has a modern site it can maintain and extend.",
      "I trained a teammate to make changes, so the site does not depend on me.",
    ],
  },
];

export function getWork(slug: string): Work | undefined {
  return work.find((w) => w.slug === slug);
}
