import { Link } from "react-router";
import type { FeaturedProject } from "../../data/projects/types";
import { ProjectMedia } from "./ProjectMedia";

export function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="relative rounded-[18px] border border-[rgba(230,213,184,.10)] bg-[#0F2638] px-3.5 pb-[18px] pt-3.5 xl:px-5 xl:pb-[22px] xl:pt-[18px]">
      <div className="flex items-center justify-between gap-3">
        {/* Semáforos */}
        <div className="flex gap-[7px]">
          <span className="block h-3 w-3 rounded-full bg-[var(--color-yellow)]" />
          <span className="block h-3 w-3 rounded-full bg-[var(--color-yellow)]" />
          <span className="block h-3 w-3 rounded-full bg-[var(--color-yellow)]" />
        </div>
        {/* Chips de stack */}
        <div className="flex flex-wrap justify-end gap-[6px]">
          {project.cardChips.map((chip) => (
            <span
              key={chip}
              className="cta rounded-full border-2 border-[var(--color-blue)] bg-[var(--color-yellow)] px-[9px] py-[3px] text-[11px] leading-none text-[var(--color-blue)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Marco blanco con la composición de capturas */}
      <div className="relative mt-3.5 rounded-[20px] bg-white p-3 shadow-[8px_8px_0_#091A27]">
        <ProjectMedia project={project} />
        <h3
          className="absolute -bottom-[17px] left-4 rounded-[16px] bg-[var(--color-yellow)] px-4 py-1 text-[18px] leading-[1.3] text-[var(--color-blue)] xl:text-[22px]"
          style={{ fontFamily: "var(--font-display-2)", fontWeight: 400 }}
        >
          {project.title}
        </h3>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <span
          className="rounded-[10px] bg-[var(--color-orange)] px-[9px] py-[3px] text-[12px] leading-[1.1] text-[var(--color-blue)] shadow-[2px_2px_0_rgba(0,0,0,.35)]"
          style={{ fontFamily: "var(--font-copy)" }}
        >
          {project.badge}
        </span>
        <span className="cta text-[11px] text-[rgba(230,213,184,.62)]">{project.years}</span>
      </div>

      <p className="mt-2.5 text-[15px] leading-[1.55] text-[var(--color-white)] xl:text-[16px]" style={{ fontFamily: "var(--font-copy)" }}>
        {project.cardTagline}
      </p>

      <div className="mt-[18px] flex flex-wrap items-center gap-[18px]">
        <Link
          to={`/proyectos/${project.slug}`}
          className="cta inline-flex h-[var(--btn-h)] items-center justify-center gap-[var(--btn-gap)] rounded-[var(--btn-radius)] border border-[var(--color-yellow)] bg-[var(--color-yellow)] px-[var(--btn-pad-x)] text-[var(--color-blue)] transition-colors hover:bg-[var(--color-blue)] hover:text-[var(--color-yellow)]"
        >
          Ver caso →
        </Link>
        {project.cardLink && (
          <a href={project.cardLink.href} target="_blank" rel="noreferrer" className="cta text-[13px] text-[var(--color-yellow)]">
            {project.cardLink.label} ↗
          </a>
        )}
        <span className="ml-auto cta text-[11px] tracking-[.18em] text-[var(--color-yellow)] opacity-80">{project.track}</span>
      </div>
    </article>
  );
}
