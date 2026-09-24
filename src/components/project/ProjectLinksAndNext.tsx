import { Link } from "react-router";
import type { FeaturedProject } from "../../data/projects/types";
import { getNextProject } from "../../data/projects";

/** El primer link va sólido (demo), el resto outline (repos). Nada si el proyecto no tiene links. */
export function ProjectLinks({ project }: { project: FeaturedProject }) {
  if (project.links.length === 0) return null;

  return (
    <div className="flex flex-col gap-2.5">
      {project.links.map((link, i) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={
            "cta flex h-[var(--btn-h)] w-full items-center justify-center rounded-[var(--btn-radius)] border border-[var(--color-yellow)] px-[var(--btn-pad-x)] transition-colors " +
            (i === 0
              ? "bg-[var(--color-yellow)] text-[var(--color-blue)] hover:bg-[var(--color-blue)] hover:text-[var(--color-yellow)]"
              : "bg-[var(--color-blue)] text-[var(--color-yellow)] hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)]")
          }
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

export function NextProjectCard({ project }: { project: FeaturedProject }) {
  const next = getNextProject(project);

  return (
    <Link
      to={`/proyectos/${next.slug}`}
      className="flex items-center gap-3.5 border-t border-[rgba(230,213,184,.14)] pt-4 text-[var(--color-white)]"
    >
      <img
        src={next.cardImages[1] ?? next.cardImages[0]}
        alt=""
        width={76}
        height={56}
        loading="lazy"
        className="h-[56px] w-[76px] rounded-[6px] bg-[#F2F1EC] object-cover"
      />
      <div>
        <div className="cta text-[10.5px] tracking-[.12em] text-[rgba(230,213,184,.62)]" style={{ textTransform: "uppercase" }}>
          Siguiente proyecto
        </div>
        <div className="mt-1 text-[18px]" style={{ fontFamily: "var(--font-display-2)" }}>
          {next.track} · {next.title} →
        </div>
      </div>
    </Link>
  );
}
