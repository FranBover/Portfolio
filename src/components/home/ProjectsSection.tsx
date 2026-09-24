import { featuredProjects } from "../../data/projects";
import { Reveal } from "../ui/Reveal";
import { SceneLabel } from "../ui/SceneLabel";
import { ProjectCard } from "./ProjectCard";
import { Tracklist } from "./Tracklist";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="scroll-mt-24">
      <Reveal className="flex text-[var(--color-yellow)]">
        <SceneLabel>ESC. 02 · Proyectos</SceneLabel>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-4 flex items-start gap-2">
          <h2
            className="text-[36px] leading-none text-[var(--color-white)] xl:text-[44px]"
            style={{ fontFamily: "var(--font-display-1)", fontWeight: 900 }}
          >
            Proyectos
          </h2>
          <span
            className="mt-1 inline-block rounded-[10px] bg-[var(--color-orange)] px-[9px] py-[3px] text-center text-[12px] leading-[1.1] text-[var(--color-blue)] shadow-[2px_2px_0_rgba(0,0,0,.35)]"
            style={{ fontFamily: "var(--font-copy)" }}
          >
            Hasta
            <br />
            ahora
          </span>
        </div>
      </Reveal>

      <div className="mt-[26px] flex flex-col gap-[26px] xl:gap-[30px]">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <div className="mt-3.5 xl:hidden">
        <Tracklist sides={["B"]} />
      </div>
    </section>
  );
}
