import { Link } from "react-router";
import { featuredProjects, projects } from "../../data/projects";
import type { SideBProject } from "../../data/projects/types";
import { SceneLabel } from "../ui/SceneLabel";

const sideBProjects = projects.filter((p): p is SideBProject => p.side === "B");

const rowBase =
  "track-row grid grid-cols-[34px_1fr_auto] items-baseline gap-2.5 border-t border-[rgba(230,213,184,.14)] py-2.5 text-[var(--color-white)]";

export function Tracklist({ sides = ["A", "B"] }: { sides?: Array<"A" | "B"> }) {
  return (
    <nav aria-label="Proyectos" className="flex flex-col gap-6">
      {sides.includes("A") && (
        <div className="flex flex-col gap-2.5">
          <SceneLabel className="text-[rgba(230,213,184,.62)]">Lado A</SceneLabel>
          <div>
            {featuredProjects.map((project, i) => (
              <Link
                key={project.slug}
                to={`/proyectos/${project.slug}`}
                className={`${rowBase} ${i === featuredProjects.length - 1 ? "border-b" : ""}`}
              >
                <span className="cta text-[12px] text-[var(--color-yellow)]">{project.track}</span>
                <span className="text-[22px] leading-[1.1]" style={{ fontFamily: "var(--font-display-2)" }}>
                  {project.title}
                </span>
                <span className="cta whitespace-nowrap text-[10px] tracking-[.1em] text-[rgba(230,213,184,.62)]" style={{ textTransform: "uppercase" }}>
                  {project.kind}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {sides.includes("B") && (
        <div className="flex flex-col gap-2.5">
          <SceneLabel className="text-[rgba(230,213,184,.62)]">Lado B</SceneLabel>
          <div>
            {sideBProjects.map((project, i) => (
              <a
                key={project.track}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={`${rowBase} ${i === sideBProjects.length - 1 ? "border-b" : ""}`}
              >
                <span className="cta text-[12px] text-[var(--color-yellow)]">{project.track}</span>
                <span className="text-[17px] leading-[1.1]" style={{ fontFamily: "var(--font-display-2)" }}>
                  {project.title}
                </span>
                <span className="cta whitespace-nowrap text-[10px] tracking-[.1em] text-[rgba(230,213,184,.62)]" style={{ textTransform: "uppercase" }}>
                  {project.kind}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
