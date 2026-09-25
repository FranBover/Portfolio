import type { FeaturedProject, Project, SectionId } from "./projects/types";
import { vinto } from "./projects/vinto";
import { presupuestador } from "./projects/presupuestador";
import { sideBProjects } from "./projects/sideB";

export * from "./projects/types";

export const featuredProjects = [vinto, presupuestador];
export const projects: Project[] = [...featuredProjects, ...sideBProjects];

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

/** El siguiente destacado en el ciclo: Vinto → Presupuestador → Vinto. */
export function getNextProject(project: FeaturedProject) {
  const i = featuredProjects.findIndex((p) => p.slug === project.slug);
  return featuredProjects[(i + 1) % featuredProjects.length];
}

/** Orden y etiquetas fijas del índice de secciones / pestañas de la vista de proyecto (igual para todos los proyectos). */
export const SECTION_TABS: { id: SectionId; label: string }[] = [
  { id: "pantallas", label: "Pantallas" },
  { id: "problema", label: "Problema" },
  { id: "solucion", label: "Solución" },
  { id: "funcionalidades", label: "Funcionalidades" },
  { id: "decisiones", label: "Decisiones" },
  { id: "estado", label: "Estado" },
];
