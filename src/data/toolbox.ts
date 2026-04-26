import type { ToolIconId } from "./toolboxIcons";

export const toolboxIntro = {
  title: "Toolbox",
  lead:
    "Tools and platforms I have actually used in CRM and sales operations, engineering, data, AI, delivery, and collaboration — including a few I evaluated, requested access to, or explored for the stack.",
} as const;

export type ToolRow =
  | { kind: "si"; id: ToolIconId; name: string; usage: string; href?: string }
  | {
      kind: "initial";
      letter: string;
      name: string;
      hex: string;
      usage: string;
      href?: string;
    };

export type ToolboxCategory = {
  id: string;
  title: string;
  tools: ToolRow[];
};

export const toolboxCategories: ToolboxCategory[] = [
  {
    id: "crm",
    title: "CRM & Sales Operations",
    tools: [
      {
        kind: "initial",
        letter: "D",
        name: "DSB CRM",
        hex: "#0F766E",
        usage:
          "Primary CRM — reporting, lead management, agent performance tracking.",
      },
      {
        kind: "initial",
        letter: "L",
        name: "LISA",
        hex: "#7C3AED",
        usage:
          "Call center AI tool — script on screen, journey automations.",
      },
      {
        kind: "initial",
        letter: "I",
        name: "ICD (Insurance Calls Direct)",
        hex: "#0369A1",
        usage: "Lead distribution, call queue, dialer management.",
      },
      {
        kind: "initial",
        letter: "A",
        name: "AMS",
        hex: "#B45309",
        usage:
          "Agency Management System — policy servicing, status tracking.",
      },
      {
        kind: "initial",
        letter: "Q",
        name: "Insurance Toolkits",
        hex: "#15803D",
        usage: "Agent quoting platform.",
      },
    ],
  },
  {
    id: "dev",
    title: "Development & Engineering",
    tools: [
      {
        kind: "si",
        id: "vercel",
        name: "Vercel",
        usage: "Hosting & deployment (LuminaryLife.com).",
        href: "https://vercel.com",
      },
      {
        kind: "si",
        id: "supabase",
        name: "Supabase",
        usage: "Database backend for web apps.",
        href: "https://supabase.com",
      },
      {
        kind: "si",
        id: "github",
        name: "GitHub",
        usage: "Version control, repo management.",
        href: "https://github.com",
      },
      {
        kind: "initial",
        letter: "C",
        name: "Cursor",
        hex: "#14120f",
        usage: "AI-assisted coding IDE.",
        href: "https://cursor.com",
      },
      {
        kind: "si",
        id: "docker",
        name: "Docker",
        usage: "Containerization for MCP / development setup.",
        href: "https://www.docker.com",
      },
      {
        kind: "si",
        id: "nextdotjs",
        name: "Next.js",
        usage: "React framework for website builds.",
        href: "https://nextjs.org",
      },
      {
        kind: "si",
        id: "php",
        name: "PHP",
        usage: "Backend language (DSB CRM codebase).",
        href: "https://www.php.net",
      },
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    tools: [
      {
        kind: "si",
        id: "snowflake",
        name: "Snowflake",
        usage: "Data warehouse (being phased out).",
        href: "https://www.snowflake.com",
      },
      {
        kind: "initial",
        letter: "T",
        name: "Tableau",
        hex: "#E9762D",
        usage: "BI dashboards, sales reporting, persistency tracking.",
        href: "https://www.tableau.com",
      },
      {
        kind: "si",
        id: "amazonrds",
        name: "AWS (RDS)",
        usage: "Database infrastructure.",
        href: "https://aws.amazon.com/rds/",
      },
      {
        kind: "si",
        id: "datagrip",
        name: "DataGrip",
        usage: "Database IDE for querying.",
        href: "https://www.jetbrains.com/datagrip/",
      },
      {
        kind: "si",
        id: "streamlit",
        name: "Streamlit",
        usage: "Analytics apps built by data team.",
        href: "https://streamlit.io",
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    tools: [
      {
        kind: "si",
        id: "anthropic",
        name: "Claude (Anthropic)",
        usage: "AI assistant — coding, documentation, workflows.",
        href: "https://www.anthropic.com",
      },
      {
        kind: "si",
        id: "openai",
        name: "ChatGPT",
        usage: "Ideation, transcript extraction, general prompting.",
        href: "https://openai.com",
      },
      {
        kind: "initial",
        letter: "V",
        name: "VAPI",
        hex: "#4F46E5",
        usage: "Voice AI for outbound calling.",
        href: "https://vapi.ai",
      },
      {
        kind: "si",
        id: "n8n",
        name: "n8n",
        usage: "Workflow automation (scraping, integrations).",
        href: "https://n8n.io",
      },
      {
        kind: "initial",
        letter: "A",
        name: "Attention.ai",
        hex: "#0D9488",
        usage: "Call scoring and coaching analytics.",
        href: "https://www.attention.com/",
      },
      {
        kind: "initial",
        letter: "Ap",
        name: "Apify",
        hex: "#00B4A6",
        usage: "Web scraping.",
        href: "https://apify.com",
      },
      {
        kind: "si",
        id: "githubcopilot",
        name: "GitHub Copilot",
        usage: "Referenced by Maged.",
        href: "https://github.com/features/copilot",
      },
    ],
  },
  {
    id: "pm",
    title: "Project Management & Documentation",
    tools: [
      {
        kind: "si",
        id: "asana",
        name: "Asana",
        usage: "Task management, cross-functional project tracking.",
        href: "https://asana.com",
      },
      {
        kind: "si",
        id: "jira",
        name: "JIRA",
        usage: "Engineering tickets, sprint planning (dev team).",
        href: "https://www.atlassian.com/software/jira",
      },
      {
        kind: "si",
        id: "figma",
        name: "Figma",
        usage: "UI/UX mockups, feature specs.",
        href: "https://www.figma.com",
      },
      {
        kind: "si",
        id: "loom",
        name: "Loom",
        usage: "Video walkthroughs, async communication.",
        href: "https://www.loom.com",
      },
      {
        kind: "si",
        id: "googledocs",
        name: "Google Docs",
        usage: "Documentation, SOPs, reporting.",
        href: "https://www.google.com/docs/about/",
      },
      {
        kind: "si",
        id: "googlesheets",
        name: "Google Sheets",
        usage: "Documentation, SOPs, reporting.",
        href: "https://www.google.com/sheets/about/",
      },
      {
        kind: "si",
        id: "lucid",
        name: "Lucidchart",
        usage: "Flowcharts, process diagrams.",
        href: "https://www.lucidchart.com",
      },
      {
        kind: "initial",
        letter: "S",
        name: "Google Sites",
        hex: "#4285F4",
        usage: "Agent Resource Hub / intranet.",
        href: "https://sites.google.com",
      },
      {
        kind: "si",
        id: "excalidraw",
        name: "Excalidraw",
        usage: "Requested access.",
        href: "https://excalidraw.com",
      },
    ],
  },
  {
    id: "comm",
    title: "Communication & Collaboration",
    tools: [
      {
        kind: "si",
        id: "slack",
        name: "Slack",
        usage: "Primary communication.",
        href: "https://slack.com",
      },
      {
        kind: "si",
        id: "zoom",
        name: "Zoom",
        usage: "Video meetings, persistent “war room”.",
        href: "https://zoom.us",
      },
      {
        kind: "initial",
        letter: "D",
        name: "Dialpad",
        hex: "#0066FF",
        usage: "Phone system, call recordings.",
        href: "https://www.dialpad.com",
      },
      {
        kind: "si",
        id: "fathom",
        name: "Fathom",
        usage: "Meeting recordings.",
        href: "https://fathom.video",
      },
      {
        kind: "initial",
        letter: "G",
        name: "Granola",
        hex: "#6B5344",
        usage: "Requested access.",
        href: "https://www.granola.ai",
      },
    ],
  },
  {
    id: "hr",
    title: "HR & Recruiting",
    tools: [
      {
        kind: "si",
        id: "adp",
        name: "ADP",
        usage: "Payroll, attendance tracking.",
        href: "https://www.adp.com",
      },
      {
        kind: "initial",
        letter: "W",
        name: "Wonderlic",
        hex: "#1D4ED8",
        usage: "Pre-hire assessments.",
        href: "https://www.wonderlic.com",
      },
      {
        kind: "initial",
        letter: "O",
        name: "Objective Management Group (OMG)",
        hex: "#4338CA",
        usage: "Sales talent assessment (evaluated).",
        href: "https://www.objectivemanagement.com",
      },
      {
        kind: "initial",
        letter: "T",
        name: "Teamtailor",
        hex: "#E11D48",
        usage: "ATS / recruiting platform (evaluated).",
        href: "https://www.teamtailor.com",
      },
    ],
  },
  {
    id: "design",
    title: "Design & Content",
    tools: [
      {
        kind: "si",
        id: "canva",
        name: "Canva",
        usage: "Image enhancement, quick design.",
        href: "https://www.canva.com",
      },
      {
        kind: "initial",
        letter: "D",
        name: "Design Pickle",
        hex: "#EA580C",
        usage: "Outsourced design (discontinued).",
        href: "https://designpickle.com",
      },
      {
        kind: "si",
        id: "wordpress",
        name: "WordPress",
        usage: "Legacy website (migrated off).",
        href: "https://wordpress.org",
      },
    ],
  },
  {
    id: "carrier",
    title: "Carrier & Insurance Platforms",
    tools: [
      {
        kind: "initial",
        letter: "G",
        name: "GTL Portal",
        hex: "#0F172A",
        usage: "Carrier system.",
      },
      {
        kind: "initial",
        letter: "V",
        name: "Validifi",
        hex: "#047857",
        usage: "Bank account verification API.",
        href: "https://www.validifi.com",
      },
      {
        kind: "initial",
        letter: "TU",
        name: "TransUnion",
        hex: "#003B5C",
        usage: "Mentioned in call context.",
        href: "https://www.transunion.com",
      },
    ],
  },
  {
    id: "other",
    title: "Other / Miscellaneous",
    tools: [
      {
        kind: "si",
        id: "zapier",
        name: "Zapier",
        usage: "Requested connector access.",
        href: "https://zapier.com",
      },
      {
        kind: "initial",
        letter: "J",
        name: "Jam",
        hex: "#F43F5E",
        usage: "Requested connector access.",
        href: "https://jam.dev",
      },
      {
        kind: "si",
        id: "tailscale",
        name: "Tailscale",
        usage: "VPN / secure network access (referenced).",
        href: "https://tailscale.com",
      },
      {
        kind: "si",
        id: "kubernetes",
        name: "Kubernetes",
        usage: "Referenced in infrastructure discussions.",
        href: "https://kubernetes.io",
      },
      {
        kind: "si",
        id: "rabbitmq",
        name: "RabbitMQ",
        usage: "Referenced in infrastructure discussions.",
        href: "https://www.rabbitmq.com",
      },
      {
        kind: "initial",
        letter: "H",
        name: "Hyros",
        hex: "#7C2D12",
        usage: "Marketing attribution (recommended for stack).",
        href: "https://hyros.com",
      },
      {
        kind: "initial",
        letter: "Go",
        name: "Gong",
        hex: "#6D28D9",
        usage: "Sales call intelligence (recommended for stack).",
        href: "https://www.gong.io",
      },
      {
        kind: "si",
        id: "roku",
        name: "Roku API",
        usage: "TV advertising integration (explored).",
        href: "https://developer.roku.com",
      },
    ],
  },
];

export function getToolboxToolCount(): number {
  return toolboxCategories.reduce((n, c) => n + c.tools.length, 0);
}
