import type { FeaturedProject } from "../../data/projects/types";
import { SceneLabel } from "../ui/SceneLabel";
import { ProjectLinks, NextProjectCard } from "./ProjectLinksAndNext";

export function ProjectRightAside({ project }: { project: FeaturedProject }) {
  return (
    <div className="flex h-full flex-col justify-between gap-8 px-9 pb-9 pt-10">
      <div className="flex flex-col gap-[22px]">
        <SceneLabel className="text-[rgba(230,213,184,.62)]">Resumen</SceneLabel>
        <p className="text-[15px] leading-[1.6] text-[var(--color-white)]" style={{ fontFamily: "var(--font-copy)" }}>
          {project.summary}
        </p>

        <dl>
          {project.meta.map((row) => (
            <div key={row.k} className="ficha-row flex items-baseline justify-between gap-3.5 border-b border-[rgba(230,213,184,.14)] py-2.5">
              <dt className="cta text-[10.5px] tracking-[.12em] text-[rgba(230,213,184,.62)]" style={{ textTransform: "uppercase" }}>
                {row.k}
              </dt>
              <dd className="text-right text-[14px] text-[var(--color-white)]" style={{ fontFamily: "var(--font-copy)" }}>
                {row.v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap gap-[6px]">
          {project.stack.map((item) => (
            <span
              key={item}
              className="cta rounded-full border-2 border-[var(--color-blue)] bg-[var(--color-yellow)] px-[9px] py-[3px] text-[11px] leading-none text-[var(--color-blue)]"
            >
              {item}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>

      <NextProjectCard project={project} />
    </div>
  );
}
