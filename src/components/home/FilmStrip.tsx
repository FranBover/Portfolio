const OUTER = {
  aside: "inline-block",
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
          src="/gif.gif"
          alt="Cohete despegando"
          className="h-full w-full origin-[25%_70%] scale-[1.8] object-cover"
          loading="lazy"
        />
        {/* El cuadro del gif tiene cielo negro de sobra a la derecha: se funde con el negro
            de la tira de película en vez de recortarlo en seco. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(115deg, transparent 45%, #0a0a0a 92%)" }}
          aria-hidden
        />
        <div className="fx-grain-static pointer-events-none absolute inset-0" aria-hidden />
      </div>
    </div>
  );
}
