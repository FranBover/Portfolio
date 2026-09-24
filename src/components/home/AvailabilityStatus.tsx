export function AvailabilityStatus() {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 block h-[9px] w-[9px] shrink-0 rounded-full bg-[var(--color-yellow)] shadow-[0_0_0_4px_rgba(223,175,43,.18)]" />
      <div>
        <p className="cta text-[12px] tracking-[.14em] text-[var(--color-white)]" style={{ fontWeight: 700, textTransform: "uppercase" }}>
          Disponible
        </p>
        <p className="mt-1 text-[14px] text-[rgba(230,213,184,.75)]" style={{ fontFamily: "var(--font-copy)" }}>
          Para un puesto fijo o por proyecto.
        </p>
      </div>
    </div>
  );
}
