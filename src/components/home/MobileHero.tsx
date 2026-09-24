import { AvailabilityStatus } from "./AvailabilityStatus";
import { FilmStrip } from "./FilmStrip";
import { SocialRoundLinks } from "./SocialRoundLinks";

/** Combina columna izquierda + derecha en un solo bloque, arriba del todo, solo <xl. */
export function MobileHero() {
  return (
    <section className="flex flex-col gap-[18px] pt-7 xl:hidden">
      <AvailabilityStatus />
      <h1
        className="text-[46px] leading-[.95] text-[var(--color-yellow)]"
        style={{ fontFamily: "var(--font-display-1)", fontWeight: 900 }}
      >
        Francisco
        <br />
        Bover
      </h1>
      <p className="text-[18px] text-[var(--color-white)]" style={{ fontFamily: "var(--font-display-2)" }}>
        Desarrollador full-stack.
      </p>
      <SocialRoundLinks />
      <FilmStrip size="hero" />
    </section>
  );
}
