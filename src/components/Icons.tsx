const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function PersonIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <circle cx="24" cy="16" r="8" />
      <path d="M8 42c1-10 7-15 16-15s15 5 16 15" />
    </svg>
  );
}

type SmallIconId = "message" | "work" | "blog" | "about" | "code";

const smallPaths: Record<SmallIconId, React.ReactNode> = {
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
  about: (
    <>
      <circle cx="10" cy="7" r="3.5" />
      <path d="M3 18c.5-4 3-6 7-6s6.5 2 7 6" />
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
