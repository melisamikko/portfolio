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

type SmallIconId = "message" | "work" | "blog" | "about";

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

const marks = {
  github: {
    box: "0 0 16 16",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z",
  },
  linkedin: {
    box: "0 0 24 24",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  youtube: {
    box: "0 0 24 24",
    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
} as const;

export function Mark({ id }: { id: keyof typeof marks }) {
  return (
    <svg viewBox={marks[id].box} width="28" height="28" aria-hidden="true">
      <path fill="currentColor" d={marks[id].d} />
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
