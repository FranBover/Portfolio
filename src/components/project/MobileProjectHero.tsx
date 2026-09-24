import { Link } from "react-router";
import type { FeaturedProject } from "../../data/projects/types";

/** Cabecera apilada de la vista de proyecto en mobile/tablet (oculta desde xl). */
export function MobileProjectHero({ project }: { project: FeaturedProject }) {
  return (
    <div className="flex flex-col gap-3.5 pb-5 pt-5 xl:hidden">
      <Link to="/#proyectos" className="cta text-[12px] text-[var(--color-yellow)]">
        ← Todos los proyectos
      </Link>
      <div>
        <p className="cta text-[12px] tracking-[.14em] text-[var(--color-yellow)]">
          {project.track} · LADO {project.side}
        </p>
        <h1
          className={
            "mt-1.5 break-words leading-[.95] text-[var(--color-yellow)] " +
            (project.title.length > 10 ? "text-[40px]" : "text-[58px]")
          }
          style={{ fontFamily: "var(--font-display-1)", fontWeight: 900 }}
        >
          {project.title}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <span className="whitespace-nowrap rounded-[10px] bg-[var(--color-orange)] px-[9px] py-[3px] text-[12px] leading-[1.1] text-[var(--color-blue)] shadow-[2px_2px_0_rgba(0,0,0,.35)]" style={{ fontFamily: "var(--font-copy)" }}>
          {project.badge}
        </span>
        <span className="cta text-[11px] text-[rgba(230,213,184,.62)]">{project.years}</span>
      </div>
      <p className="text-[16px] leading-[1.55] text-[var(--color-white)]" style={{ fontFamily: "var(--font-copy)" }}>
        {project.pageTagline}
      </p>
    </div>
  );
}
