import { Link } from "react-router";
import { SECTION_TABS } from "../../data/projects";
import { useScrollSpy } from "../../lib/useScrollSpy";

const IDS = SECTION_TABS.map((s) => s.id);

/** Pestañas sticky debajo del header, sólo en mobile/tablet (oculta desde xl). */
export function SectionTabs() {
  // Header mobile (64px) + esta barra (~64px): el próximo título no debe quedar tapado.
  const active = useScrollSpy(IDS, true, "-128px 0px -70% 0px");

  return (
    <nav
      aria-label="Secciones del caso"
      className="scroll-clean sticky top-16 z-30 -mx-5 flex gap-2 overflow-x-auto border-y border-[rgba(230,213,184,.14)] bg-[var(--color-blue)] px-5 py-2.5 md:top-[72px] xl:hidden"
    >
      {SECTION_TABS.map(({ id, label }) => {
        const isActive = id === active;
        return (
          <Link
            key={id}
            to={`#${id}`}
            className={
              "cta flex h-11 flex-none items-center whitespace-nowrap rounded-[22px] border px-4 text-[12px] transition-colors " +
              (isActive
                ? "border-[var(--color-yellow)] bg-[var(--color-yellow)] text-[var(--color-blue)]"
                : "border-[rgba(230,213,184,.14)] bg-transparent text-[var(--color-white)]")
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
