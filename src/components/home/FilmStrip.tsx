const OUTER = {
  aside: "inline-block self-start",
  hero: "block w-full max-w-[314px]",
} as const;

const INNER = {
  aside: "film-aside h-[189px] w-[252px]",
  hero: "aspect-[4/3] w-full",
} as const;

export function FilmStrip({ size = "aside" }: { size?: keyof typeof INNER }) {
  return (
    <div className={`film-strip ${OUTER[size]}`}>
      <div className={`relative overflow-hidden rounded-[10px] ${INNER[size]}`}>
        <img
          src="/cohete.webp"
          width={500}
          height={375}
          alt="Cohete despegando"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="fx-grain-static pointer-events-none absolute inset-0" aria-hidden />
      </div>
    </div>
  );
}
