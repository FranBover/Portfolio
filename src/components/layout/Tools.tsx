import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SceneLabel } from "../ui/SceneLabel";

/** Tarjeta con sombra dura + noise */
function ToolCard({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <div className="
      relative bg-[var(--color-yellow)] text-[var(--color-blue)]
      p-5 md:p-6 rounded-[6px]
      shadow-[10px_10px_0_4px_#091A27]
    ">
      {/* noise overlay (si no hay /textures/noise.png, queda el fallback de puntitos) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[6px] opacity-25 mix-blend-multiply"
        style={{
          backgroundImage:
            "url('/textures/noise.png'), radial-gradient(rgba(0,0,0,0.25) 0.6px, transparent 0.6px)",
          backgroundSize: "auto, 3px 3px",
        }}
      />
      <h3 className="h3 text-center relative">{title}</h3>
      <div className="relative mt-3 flex flex-wrap items-center justify-center gap-4">
        {children}
      </div>
    </div>
  );
}

export default function Tools() {
  return (
    <section id="tools" className="bg-[var(--color-white)]">
      {/* ====== Franja superior con título (ya ajustada) ====== */}
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
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[30%] w-[90px] md:w-[180px] lg:w-[220px] h-auto pointer-events-none"
              viewBox="0 0 162 117"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="81" cy="78" rx="81" ry="78" style={{ fill: "var(--color-orange)" }} />
            </svg>
            <h2 className="section-title text-[var(--color-white)] relative z-10 text-center">
              Herramientas
            </h2>
          </div>
        </Container>
      </div>

      {/* ====== Contenido con columnas decorativas y grid de tarjetas ====== */}
      <div className="relative py-8 md:py-12">
        {/* textura papel sutil */}
        <div aria-hidden className="paper-texture pointer-events-none absolute inset-0" />
        <Container>
          <Reveal className="mb-6 flex justify-center text-[var(--color-blue)]">
            <SceneLabel>ESC. 02 · Herramientas</SceneLabel>
          </Reveal>

          {/* 3 columnas: líneas izq | grid | líneas der
        Reservamos ancho fijo para las líneas */}
          <div className="
            relative
            grid
            md:grid-cols-[56px_minmax(0,1fr)_56px]
            lg:grid-cols-[72px_minmax(0,1fr)_72px]
            gap-4
          ">
            {/* Columna izq */}
            <div className="hidden md:flex flex-col items-center">
              <img src="/tools/columna1.png" alt="" className="w-[56px] lg:w-[72px] h-auto" />
            </div>

            {/* Grid central */}
            <div className="mx-auto w-full max-w-[980px] lg:max-w-[1120px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Diseño */}
                <Reveal delay={0}>
                  <ToolCard title="Diseño">
                    <img src="/tools/photoshop.png" alt="Photoshop" className="tool-ico h-12 md:h-14" />
                    <img src="/tools/figma.png" alt="Figma" className="tool-ico h-12 md:h-14" />
                  </ToolCard>
                </Reveal>

                {/* Front-end */}
                <Reveal delay={90}>
                  <ToolCard title="Front-end">
                    <div className="flex items-center gap-3">
                      <img src="/tools/html.png" alt="HTML" className="tool-ico h-10 md:h-11" />
                      <img src="/tools/css.png" alt="CSS" className="tool-ico h-10 md:h-11" />
                      <img src="/tools/js.png" alt="JavaScript" className="tool-ico h-9 md:h-10" />
                    </div>
                    <img src="/tools/react.png" alt="React" className="tool-ico h-14 md:h-16" />
                  </ToolCard>
                </Reveal>

                {/* Back-end */}
                <Reveal delay={180}>
                  <ToolCard title="Back-end">
                    <img src="/tools/net.png" alt=".NET" className="tool-ico h-12 md:h-14" />
                    <img src="/tools/csharp.png" alt="C#" className="tool-ico h-12 md:h-14" />
                    <img src="/tools/sql.png" alt="SQL" className="tool-ico h-12 md:h-14" />
                  </ToolCard>
                </Reveal>

                {/* Otras… */}
                <Reveal delay={270}>
                  <ToolCard title="Otras…">
                    <img src="/tools/premiere.png" alt="Premiere" className="tool-ico h-12 md:h-14" />
                    <img src="/tools/confluence.png" alt="Confluence" className="tool-ico h-10 md:h-12" />
                    <img src="/tools/n8n.png" alt="n8n" className="tool-ico h-10 md:h-12" />
                    <img src="/tools/touchdesigner.png" alt="TouchDesigner" className="tool-ico h-6 md:h-7" />
                  </ToolCard>
                </Reveal>
              </div>
            </div>

            {/* Columna der */}
            <div className="hidden md:flex flex-col items-center">
              <img src="/tools/columna2.png" alt="" className="w-[56px] lg:w-[72px] h-auto" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
