import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import type { FeaturedProject, SectionId } from "../../data/projects/types";
import { SECTION_TABS } from "../../data/projects";
import { SceneLabel } from "../ui/SceneLabel";
import { DesktopCarousel } from "./DesktopCarousel";
import { MobileCarousel } from "./MobileCarousel";

/** `**negrita**` literal (única sección con énfasis a mitad de oración: El problema). */
function renderBold(text: string) {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) => {
    const match = part.match(/^\*\*(.+)\*\*$/);
    if (!match) return <span key={i}>{part}</span>;
    return (
      <strong key={i} className="font-semibold text-[var(--color-white)]">
        {match[1]}
      </strong>
    );
  });
}

type ProjectSectionProps = {
  project: FeaturedProject;
  id: SectionId;
  index: number;
  isActive: boolean;
  eagerFirst: boolean;
};

export function ProjectSection({ project, id, index, isActive, eagerFirst }: ProjectSectionProps) {
  const sections = project.sections;
  const heading = sections[id].heading;
  const total = SECTION_TABS.length;
  const [slideIndex, setSlideIndex] = useState(0);

  const isPantallas = id === "pantallas";
  const pantallasTotal = isPantallas ? sections.pantallas.slides.length : 0;
  const counter = isPantallas
    ? `${String(slideIndex + 1).padStart(2, "0")} / ${String(pantallasTotal).padStart(2, "0")}`
    : `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  const prev = index > 0 ? SECTION_TABS[index - 1] : null;
  const next = index < total - 1 ? SECTION_TABS[index + 1] : null;
  const nextHeading = next ? sections[next.id].heading : null;

  return (
    <section
      id={id}
      className={"scroll-mt-[128px] pt-9 first:pt-0 md:scroll-mt-[136px] xl:scroll-mt-[72px] xl:pt-0 " + (isActive ? "" : "xl:hidden")}
    >
      <div className="flex items-center justify-between gap-4">
        <SceneLabel className="text-[var(--color-yellow)]">
          {String(index + 1).padStart(2, "0")} · {heading}
        </SceneLabel>
        <span aria-live="polite" className="cta text-[12px] text-[rgba(230,213,184,.62)]">
          {counter}
        </span>
      </div>

      {id === "pantallas" && (
        <>
          <h2 className="mt-4 max-w-[560px] text-[24px] leading-[1.25] text-[var(--color-white)] xl:text-[30px] xl:leading-[1.2]" style={{ fontFamily: "var(--font-display-2)" }}>
            {sections.pantallas.subtitle}
          </h2>
          <div className="mt-4 xl:mt-6">
            <DesktopCarousel
              slides={sections.pantallas.slides}
              index={slideIndex}
              onIndexChange={setSlideIndex}
              canvasBg={project.slug === "vinto" ? "#EDE5D3" : "#F2F1EC"}
              eagerFirst={eagerFirst}
              ariaLabel={`Capturas de ${project.title}`}
            />
            <MobileCarousel
              slides={sections.pantallas.slides}
              onSlideIndexChange={setSlideIndex}
              canvasBg={project.slug === "vinto" ? "#EDE5D3" : "#F2F1EC"}
              eagerFirst={eagerFirst}
            />
          </div>
        </>
      )}

      {id === "problema" && (
        <>
          <h2 className="mt-4 max-w-[560px] text-[24px] leading-[1.25] text-[var(--color-white)] xl:text-[30px] xl:leading-[1.2]" style={{ fontFamily: "var(--font-display-2)" }}>
            {sections.problema.subtitle}
          </h2>
          <div className="mt-3.5 flex flex-col gap-3.5">
            {sections.problema.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.65] text-[rgba(230,213,184,.75)]" style={{ fontFamily: "var(--font-copy)" }}>
                {renderBold(p)}
              </p>
            ))}
          </div>
        </>
      )}

      {id === "solucion" && (
        <p className="mt-4 max-w-[600px] text-[21px] leading-[1.35] text-[var(--color-white)] xl:text-[30px] xl:leading-[1.2]" style={{ fontFamily: "var(--font-display-2)" }}>
          {sections.solucion.paragraph}
        </p>
      )}

      {id === "funcionalidades" && (
        <>
          <h2 className="mt-4 max-w-[560px] text-[24px] leading-[1.25] text-[var(--color-white)] xl:text-[30px] xl:leading-[1.2]" style={{ fontFamily: "var(--font-display-2)" }}>
            {sections.funcionalidades.subtitle}
          </h2>
          <div className="mt-5 flex flex-col gap-6">
            {sections.funcionalidades.groups.map((group) => (
              <div key={group.heading} className="flex flex-col gap-2.5">
                <div className="cta text-[11px] tracking-[.14em] text-[var(--color-yellow)]" style={{ textTransform: "uppercase" }}>
                  {group.heading}
                </div>
                <div>
                  {group.items.map((item) => (
                    <p
                      key={item.label}
                      className="border-t border-[rgba(230,213,184,.14)] py-3.5 text-[15px] leading-[1.6] text-[rgba(230,213,184,.75)] last:border-b"
                      style={{ fontFamily: "var(--font-copy)" }}
                    >
                      <strong className="font-semibold text-[var(--color-white)]">{item.label}</strong>: {item.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {id === "decisiones" && (
        <>
          <h2 className="mt-4 max-w-[560px] text-[24px] leading-[1.25] text-[var(--color-white)] xl:text-[30px] xl:leading-[1.2]" style={{ fontFamily: "var(--font-display-2)" }}>
            {sections.decisiones.subtitle}
          </h2>
          <div className="mt-4">
            {sections.decisiones.items.map((decision, i) => (
              <div
                key={decision.title}
                className="grid grid-cols-[40px_1fr] gap-2 border-t border-[rgba(230,213,184,.14)] py-4 last:border-b xl:grid-cols-[48px_1fr]"
              >
                <span
                  className="text-[22px] leading-none text-[var(--color-orange)] xl:text-[26px]"
                  style={{ fontFamily: "var(--font-display-1)", fontWeight: 900 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] text-[var(--color-white)] xl:text-[20px]" style={{ fontFamily: "var(--font-display-2)" }}>
                    {decision.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[1.6] text-[rgba(230,213,184,.75)]" style={{ fontFamily: "var(--font-copy)" }}>
                    {decision.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {id === "estado" && (
        <div className="relative mt-4 overflow-hidden rounded-[14px] bg-[var(--color-yellow)] p-6 text-[var(--color-blue)] shadow-[10px_10px_0_4px_#091A27]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply"
            style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.25) 0.6px, transparent 0.6px)", backgroundSize: "3px 3px" }}
          />
          <p className="cta relative text-[11px] tracking-[.14em] opacity-75" style={{ textTransform: "uppercase" }}>
            {String(index + 1).padStart(2, "0")} · Estado
          </p>
          <p className="relative mt-2.5 text-[28px] leading-[1.02]" style={{ fontFamily: "var(--font-display-1)", fontWeight: 900 }}>
            {sections.estado.title}
          </p>
          <p className="relative mt-3 text-[15px] leading-[1.6]" style={{ fontFamily: "var(--font-copy)" }}>
            {sections.estado.text}
          </p>
        </div>
      )}

      <div className="mt-9 hidden items-center justify-between gap-4 xl:flex">
        <SectionNavButton disabled={!prev} href={prev ? `#${prev.id}` : undefined}>
          ← Anterior
        </SectionNavButton>
        <SectionNavButton disabled={!next} href={next ? `#${next.id}` : undefined} solid>
          {nextHeading ? `${nextHeading} →` : "Siguiente →"}
        </SectionNavButton>
      </div>
    </section>
  );
}

function SectionNavButton({
  href,
  disabled,
  solid,
  children,
}: {
  href?: string;
  disabled?: boolean;
  solid?: boolean;
  children: ReactNode;
}) {
  const base =
    "cta inline-flex h-[var(--btn-h)] items-center justify-center gap-[var(--btn-gap)] rounded-[var(--btn-radius)] border border-[var(--color-yellow)] px-[var(--btn-pad-x)] whitespace-nowrap transition-colors";
  const palette = solid
    ? "bg-[var(--color-yellow)] text-[var(--color-blue)] hover:bg-[var(--color-blue)] hover:text-[var(--color-yellow)]"
    : "bg-[var(--color-blue)] text-[var(--color-yellow)] hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)]";

  if (disabled || !href) {
    return <span className={base + " " + palette + " pointer-events-none opacity-40"}>{children}</span>;
  }
  return (
    <Link to={href} className={base + " " + palette}>
      {children}
    </Link>
  );
}
