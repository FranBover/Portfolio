import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router";
import { Header } from "../components/layout/Header";
import { ThreeColumnLayout } from "../components/layout/ThreeColumnLayout";
import { ProjectLeftAside } from "../components/project/ProjectLeftAside";
import { ProjectRightAside } from "../components/project/ProjectRightAside";
import { MobileProjectHero } from "../components/project/MobileProjectHero";
import { SectionTabs } from "../components/project/SectionTabs";
import { ProjectSection } from "../components/project/ProjectSection";
import { ProjectMobileClosing } from "../components/project/ProjectMobileClosing";
import { getProjectBySlug, SECTION_TABS } from "../data/projects";
import type { SectionId } from "../data/projects/types";

const SECTION_IDS = SECTION_TABS.map((s) => s.id);
const DEFAULT_SECTION: SectionId = "pantallas";

function isSectionId(value: string): value is SectionId {
  return (SECTION_IDS as string[]).includes(value);
}

export default function ProjectPage() {
  const { slug } = useParams();
  const location = useLocation();
  const project = getProjectBySlug(slug ?? "");

  // Congelado en el primer render: sólo importa para decidir si la primera imagen
  // de Pantallas se pide sin lazy (LCP) o no, según la sección con la que se cargó la URL.
  const [eagerFirst] = useState(() => {
    const hash = location.hash.slice(1);
    return !hash || hash === DEFAULT_SECTION;
  });

  useEffect(() => {
    document.title = project ? `${project.title} · Francisco Bover` : "Francisco Bover · Desarrollador full-stack";
  }, [project]);

  const hashSection = location.hash.slice(1);
  const activeId: SectionId = isSectionId(hashSection) ? hashSection : DEFAULT_SECTION;

  // Al entrar directo con un hash (mobile o desktop) hay que saltar a esa sección:
  // como es CSR, el <div id="root"> todavía está vacío cuando el navegador intenta
  // el anchor-scroll nativo, así que no lo hace solo. Una sola vez, al montar.
  useEffect(() => {
    document.getElementById(activeId)?.scrollIntoView({ behavior: "instant", block: "start" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sólo en desktop: al cambiar de sección después de montado, las demás quedan
  // display:none, así que sin este ajuste el scroll queda donde estaba en la
  // sección anterior y "salta" al re-aparecer el contenido. En mobile todas las
  // secciones están apiladas y el link ya hace un scroll suave nativo
  // (scroll-behavior + scroll-margin-top); forzarlo acá lo cortaría a mitad de camino.
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (!window.matchMedia("(min-width: 1280px)").matches) return;
    document.getElementById(activeId)?.scrollIntoView({ behavior: "instant", block: "start" });
  }, [activeId]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <Header />
      <ThreeColumnLayout
        left={<ProjectLeftAside project={project} activeId={activeId} />}
        center={
          <div className="px-5 xl:px-14">
            <MobileProjectHero project={project} />
            <SectionTabs />
            <div className="xl:pt-10">
              {SECTION_TABS.map(({ id }, i) => (
                <ProjectSection
                  key={id}
                  project={project}
                  id={id}
                  index={i}
                  isActive={id === activeId}
                  eagerFirst={eagerFirst}
                />
              ))}
            </div>
            <ProjectMobileClosing project={project} />
          </div>
        }
        right={<ProjectRightAside project={project} />}
      />
    </>
  );
}
