export type ProjectSlug = "vinto" | "presupuestador";
export type SectionId =
  | "pantallas"
  | "problema"
  | "solucion"
  | "funcionalidades"
  | "decisiones"
  | "estado";

export type Link = { label: string; href: string };
export type MetaRow = { k: string; v: string };

/** Un grupo de 1-3 capturas que se ven juntas en el carrusel, con una sola leyenda. */
export type SlideGroup = { images: string[]; caption: string; missingNote?: string };
export type ScreensSection = { heading: string; subtitle: string; slides: SlideGroup[] };

/** `paragraphs` puede traer `**negrita**` literal: es la única sección con énfasis a mitad de oración. */
export type ProblemSection = { heading: string; subtitle: string; paragraphs: string[] };

export type SolutionSection = { heading: string; paragraph: string };

export type FeatureItem = { label: string; text: string };
export type FeatureGroup = { heading: string; items: FeatureItem[] };
export type FeaturesSection = { heading: string; subtitle: string; groups: FeatureGroup[] };

export type Decision = { title: string; text: string };
export type DecisionsSection = { heading: string; subtitle: string; items: Decision[] };

export type StatusSection = { heading: string; title: string; text: string };

export type ProjectSections = {
  pantallas: ScreensSection;
  problema: ProblemSection;
  solucion: SolutionSection;
  funcionalidades: FeaturesSection;
  decisiones: DecisionsSection;
  estado: StatusSection;
};

export type FeaturedProject = {
  side: "A";
  slug: ProjectSlug;
  track: string;
  title: string;
  kind: string;
  years: string;
  badge: string;
  /** Bajada corta, para la tarjeta de Inicio. */
  cardTagline: string;
  /** Bajada de la vista de proyecto (columna izquierda). */
  pageTagline: string;
  summary: string;
  meta: MetaRow[];
  /** Chips cortos que se ven arriba a la derecha de la tarjeta de Inicio. */
  cardChips: string[];
  /** Stack completo que se ve en la vista de proyecto. */
  stack: string[];
  /** Link corto que lleva la tarjeta de Inicio (ej. el dominio propio). Ausente si el proyecto no tiene demo pública. */
  cardLink?: Link;
  /** Links de la vista de proyecto (demo, repos). Vacío si no hay ninguno para mostrar. */
  links: Link[];
  /** Capturas que componen la imagen de la tarjeta de Inicio. */
  cardImages: string[];
  /** Etiqueta de color propia de la tarjeta (ej. "BOVER MADERAS"), aparte de los chips de stack. */
  cardBadge?: { label: string; color: string };
  sections: ProjectSections;
};

export type SideBProject = {
  side: "B";
  track: string;
  title: string;
  kind: string;
  description: string;
  github: string;
};

export type Project = FeaturedProject | SideBProject;
