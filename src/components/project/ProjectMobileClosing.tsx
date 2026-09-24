import type { FeaturedProject } from "../../data/projects/types";
import { ProjectLinks, NextProjectCard } from "./ProjectLinksAndNext";

/** Cierre solo en celular: lo que en desktop vive en la columna derecha, más el mismo footer del sitio. */
export function ProjectMobileClosing({ project }: { project: FeaturedProject }) {
  return (
    <div className="mt-9 flex flex-col gap-[18px] pb-8 xl:hidden">
      <ProjectLinks project={project} />
      <NextProjectCard project={project} />
      <footer className="mt-1 flex items-center justify-between gap-3 border-t border-[rgba(230,213,184,.14)] pt-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <img src="/Logo.png" alt="" className="h-[30px] w-[30px] shrink-0" />
          <span className="cta text-[11px] text-[rgba(230,213,184,.62)]">
            Hecho a mano en Córdoba · © {new Date().getFullYear()}
          </span>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cta shrink-0 whitespace-nowrap text-[12px] text-[var(--color-yellow)]"
        >
          Arriba ↑
        </button>
      </footer>
    </div>
  );
}
