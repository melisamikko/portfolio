import type { WorkIconId } from "@/data/work";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const workPaths: Record<WorkIconId | "you", React.ReactNode> = {
  roof: (
    <>
      <path d="M5 26 24 9l19 17" />
      <path d="M11 22v17h26V22" />
      <path d="M20 39V29h8v10" />
    </>
  ),
  pipeline: (
    <>
      <path d="M6 9h36L29 25v14l-10-5v-9z" />
    </>
  ),
  desk: (
    <>
      <path d="M6 9h36v24H22l-9 8v-8H6z" />
      <path d="m17 21 5 5 10-10" />
    </>
  ),
  loop: (
    <>
      <path d="M40 22A16 16 0 0 0 11 15" />
      <path d="M11 7v9h9" />
      <path d="M8 26a16 16 0 0 0 29 7" />
      <path d="M37 41v-9h-9" />
    </>
  ),
  chart: (
    <>
      <path d="M6 6v36h36" />
      <path d="M15 34V24M24 34V14M33 34V20" />
    </>
  ),
  template: (
    <>
      <path d="M7 7h34v34H7z" />
      <path d="M7 17h34M19 17v24" />
    </>
  ),
  pages: (
    <>
      <path d="M15 13h26v28H15z" />
      <path d="M33 13V7H7v28h8" />
      <path d="M22 23h12M22 31h12" />
    </>
  ),
  you: (
    <>
      <circle cx="24" cy="16" r="8" />
      <path d="M8 42c1-10 7-15 16-15s15 5 16 15" />
    </>
  ),
};

export function WorkIcon({ id }: { id: WorkIconId | "you" }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      {workPaths[id]}
    </svg>
  );
}

type SmallIconId = "calendar" | "message" | "work" | "blog" | "code";

const smallPaths: Record<SmallIconId, React.ReactNode> = {
  calendar: (
    <>
      <path d="M3 5h14v12H3zM3 9h14M7 3v4M13 3v4" />
    </>
  ),
  message: (
    <>
      <path d="M2 5h16v11H2z" />
      <path d="m2 6 8 6 8-6" />
    </>
  ),
  work: (
    <>
      <path d="M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z" />
    </>
  ),
  blog: (
    <>
      <path d="M4 16 5 12 14 3l3 3-9 9z" />
    </>
  ),
  code: (
    <>
      <path d="m7 6-4 4 4 4M13 6l4 4-4 4" />
    </>
  ),
};

export function SmallIcon({ id }: { id: SmallIconId }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="16"
      height="16"
      aria-hidden="true"
      {...stroke}
      strokeWidth={1.75}
    >
      {smallPaths[id]}
    </svg>
  );
}

export function OnlineIcon() {
  return (
    <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
      <circle cx="6" cy="6" r="5" fill="currentColor" />
    </svg>
  );
}
