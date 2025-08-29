import { Container } from "../ui/Container";
import ProjectCard, { type Project } from "./ProjectCard"; 

const PROJECTS: Project[] = [
  {
    title: "Portfolio",
    image: "/projects/portfolio.png",
    description:
      "Portfolio web. Diseño UX/UI en Figma con dominio propio. Hecho from scratch.",
    tech: ["React"],
    github: "https://github.com/FranBover/Portfolio", // <-- poné tu URL real
  },
  {
    title: "LabSystem",
    image: "/projects/labsystem.png",
    description:
      "Sistema de gestión para la empresa TecnoDiagnostica. Trabajo final de la carrera.",
    tech: [".net", "C#", "sql"],
    github: "https://github.com/FranBover/LabSystem",
  },
  {
    title: "Sistema",
    image: "/projects/sistema.png",
    description:
      "Sistema de gestión de stock, gastos y ventas, con reportes gráficos. WinForms.",
    tech: [".net", "C#", "sql"],
    github: "https://github.com/FranBover/SistemaGestion",
  },
  {
    title: "Reloj Clima",
    image: "/projects/reloj-clima.png",
    description:
      "Proyecto en React; fondo que se adapta según el clima. Integración con librerías.",
    tech: ["React"],
    github: "https://github.com/FranBover/reloj-clima",
  },
  {
    title: "Vinto",
    image: "/projects/vinto.png",
    description:
      "Gestión de pedidos: Admin Panel, tienda online y API. En desarrollo.",
    tech: ["React", "C#", "SQL"],
    github: "https://github.com/FranBover",
  },
  {
    title: "Automations",
    image: "/projects/n8n.png",
    description:
      "Automatizaciones con n8n: workflows, agentes y orquestación.",
    tech: ["n8n"],
    github: "https://github.com/FranBover",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--color-white)]">
      {/* === Banda azul con ruido y el título (como ya teníamos) === */}
      <div className="relative overflow-hidden bg-[var(--color-blue)] py-6 md:py-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply"
          style={{
            backgroundImage:
              "url('/textures/noise.png'), radial-gradient(rgba(0,0,0,0.25) 0.6px, transparent 0.6px)",
            backgroundSize: "auto, 3px 3px",
          }}
        />
        <Container>
          <div className="relative flex items-center justify-center">
            <h2 className="section-title text-[var(--color-white)] relative z-10 text-center whitespace-nowrap">
              <span>Mis proyect</span>
              <span className="relative inline-block">
                os
                <span
                  className="
                    absolute -right-2 -top-3 md:-right-3 md:-top-4
                    bg-[var(--color-orange)] text-[var(--color-blue)]
                    rounded-[10px] px-2 py-[2px]
                    text-[10px] md:text-xs leading-[1.05]
                    shadow-[2px_2px_0_rgba(0,0,0,.35)]
                    select-none
                  "
                  style={{ fontFamily: 'var(--font-copy)' }}
                >
                  Hasta<br/>ahora
                </span>
              </span>
            </h2>
          </div>
        </Container>
      </div>

      {/* === Grid de tarjetas === */}
      <div className="py-8 md:py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
