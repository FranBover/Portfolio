const SIZES = {
  aside: "h-[189px] w-[252px]",
  hero: "h-[235px] w-[314px]",
} as const;

export function FilmStrip({ size = "aside" }: { size?: keyof typeof SIZES }) {
  return (
    <div className="film-strip inline-block">
      <div className={`relative overflow-hidden rounded-[10px] ${SIZES[size]}`}>
        <img src="/gif.gif" alt="Cohete despegando" className="h-full w-full object-cover" loading="lazy" />
        <div className="fx-grain-static pointer-events-none absolute inset-0" aria-hidden />
      </div>
    </div>
  );
}
