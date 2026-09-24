import { Link } from "react-router";
import type { FeaturedProject } from "../../data/projects/types";
import { SECTION_TABS } from "../../data/projects";

export function ProjectLeftAside({ project, activeId }: { project: FeaturedProject; activeId: string }) {
  return (
    <div className="flex h-full flex-col justify-between gap-8 px-9 pb-9 pt-10">
      <div className="flex flex-col gap-5">
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
              (project.title.length > 10 ? "text-[44px]" : "text-[64px]")
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

      <nav aria-label="Secciones del caso" className="flex flex-col gap-2.5">
        <div className="scene-label text-[rgba(230,213,184,.62)]">
          <span className="scene-slate" aria-hidden />
          <span>En este caso</span>
        </div>
        <div>
          {SECTION_TABS.map(({ id }, i) => {
            const isActive = id === activeId;
            const heading = project.sections[id].heading;
            return (
              <Link
                key={id}
                to={`#${id}`}
                className={
                  "grid grid-cols-[34px_1fr_16px] items-center py-[11px] border-t border-[rgba(230,213,184,.14)] last:border-b " +
                  (isActive ? "text-[var(--color-yellow)]" : "text-[var(--color-white)]")
                }
              >
                <span className={"cta text-[12px] " + (isActive ? "text-[var(--color-yellow)]" : "text-[rgba(230,213,184,.62)]")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[18px]" style={{ fontFamily: "var(--font-display-2)" }}>
                  {heading}
                </span>
                <span className="cta text-[14px] text-[var(--color-yellow)]">{isActive ? "→" : ""}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
