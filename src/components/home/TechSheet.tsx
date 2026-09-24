import { SceneLabel } from "../ui/SceneLabel";

const FICHA = [
  { k: "Dirección", v: "Francisco Bover" },
  { k: "Rubro", v: "Desarrollo & diseño" },
  { k: "Locación", v: "Córdoba, Argentina" },
  { k: "Banda sonora", v: "Funk & soul" },
];

/**
 * "aside": sobre el fondo azul de la columna derecha.
 * "card": tarjeta amarilla suelta, para el cierre de ESC.04 en celular.
 */
export function TechSheet({ variant = "aside" }: { variant?: "aside" | "card" }) {
  if (variant === "card") {
    return (
      <div className="relative rounded-[14px] bg-[var(--color-yellow)] p-5 text-[var(--color-blue)] shadow-[10px_10px_0_4px_#091A27]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[14px] opacity-25 mix-blend-multiply"
          style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.25) 0.6px, transparent 0.6px)", backgroundSize: "3px 3px" }}
        />
        <p className="cta relative text-[11px] tracking-[.22em] opacity-70" style={{ textTransform: "uppercase" }}>
          Ficha técnica
        </p>
        <dl className="relative mt-3">
          {FICHA.map((row) => (
            <div key={row.k} className="flex items-baseline justify-between gap-3 border-b border-[rgba(11,30,45,.15)] py-[9px] last:border-0">
              <dt className="cta text-[10.5px] tracking-[.12em] text-[rgba(11,30,45,.62)]" style={{ textTransform: "uppercase" }}>
                {row.k}
              </dt>
              <dd className="text-right text-[15px] text-[#0B1E2D]" style={{ fontFamily: "var(--font-copy)" }}>
                {row.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[10px]">
      <SceneLabel className="text-[rgba(230,213,184,.62)]">Ficha técnica</SceneLabel>
      <dl>
        {FICHA.map((row) => (
          <div key={row.k} className="ficha-row flex items-baseline justify-between gap-3.5 border-b border-[rgba(230,213,184,.14)] py-2.5">
            <dt className="cta text-[10.5px] tracking-[.12em] text-[rgba(230,213,184,.62)]" style={{ textTransform: "uppercase" }}>
              {row.k}
            </dt>
            <dd className="text-right text-[15px] text-[var(--color-white)]" style={{ fontFamily: "var(--font-copy)" }}>
              {row.v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
