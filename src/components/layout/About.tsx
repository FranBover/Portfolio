import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SceneLabel } from "../ui/SceneLabel";

// Rotación/offset inicial (se activa desde md para arriba)
const SOBRE = [
  { ch: "s", r: -8, dy: 0 },
  { ch: "o", r: 3, dy: -4 },
  { ch: "b", r: -2, dy: 2 },
  { ch: "r", r: 6, dy: -6 },
  { ch: "e", r: -4, dy: 0 },
];
const MI = [
  { ch: "m", r: 8, dy: 4 },
  { ch: "i", r: -8, dy: 0 },
];

const letterClass =
  "cut-letter select-none [user-drag:none] h-auto " +
  "rotate-0 md:rotate-[var(--rot)] translate-y-0 md:translate-y-[var(--dy)] " +
  "will-change-transform motion-reduce:transition-none " +
  "hover:-translate-y-2 hover:rotate-[10deg] hover:z-10 relative " +
  // Kerning negativo para que se lean como palabra (se resetea en la 1ª de cada fila)
  "-ml-2 md:-ml-4 lg:-ml-6 first:ml-0 " +
  "drop-shadow-[2px_3px_0_rgba(0,0,0,.35)] hover:drop-shadow-[4px_7px_0_rgba(0,0,0,.45)]";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Fondo animado (más lento y parejo) */}
      <div
        aria-hidden
        className="
          absolute inset-0 bg-kubrick bg-repeat
          [background-size:780px_auto]
          [will-change:background-position]
          animate-[bg-scroll-up_60s_linear_infinite]
          motion-reduce:animate-none
        "
      />
      {/* Grano sobre el fondo */}
      <div aria-hidden className="fx-grain-static pointer-events-none absolute inset-0" />

      <div className="relative py-16 md:py-24">
        <Container>
          <Reveal className="mb-6 flex justify-center text-[var(--color-white)]">
            <SceneLabel>ESC. 01 · Sobre mí</SceneLabel>
          </Reveal>

          {/* ====== Título (dos filas centradas) ====== */}
          <Reveal delay={80}>
            <div className="flex flex-col items-center">
              {/* fila 1: SOBRE */}
              <div className="flex items-end justify-center gap-0">
                {SOBRE.map((L, i) => (
                  <img
                    key={L.ch}
                    src={`/letters/${L.ch}.png`}
                    alt={L.ch}
                    style={
                      {
                        "--rot": `${L.r}deg`,
                        "--dy": `${L.dy}px`,
                        transitionDelay: `${i * 40}ms`,
                      } as React.CSSProperties
                    }
                    className={`${letterClass} w-[64px] md:w-[124px] lg:w-[184px]`}
                  />
                ))}
              </div>

              {/* fila 2: mi */}
              <div className="mt-1 flex items-start justify-center gap-0">
                {MI.map((L, i) => (
                  <img
                    key={L.ch}
                    src={`/letters/${L.ch}.png`}
                    alt={L.ch}
                    style={
                      {
                        "--rot": `${L.r}deg`,
                        "--dy": `${L.dy}px`,
                        transitionDelay: `${(SOBRE.length + i) * 40}ms`,
                      } as React.CSSProperties
                    }
                    className={`${letterClass} w-[58px] md:w-[112px] lg:w-[184px]`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* ====== Tarjeta del párrafo (con noise y sombra Figma) ====== */}
          <Reveal delay={160}>
            <div
              className="
                relative mx-auto mt-6 md:mt-10 max-w-[720px]
                bg-[var(--color-yellow)] text-[var(--color-blue)]
                p-6 md:p-8 rounded-[8px]
                shadow-[10px_10px_0_4px_#091A27]
              "
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[8px] opacity-25 mix-blend-multiply"
                style={{
                  backgroundImage:
                    "url('/textures/noise.png'), radial-gradient(rgba(0,0,0,0.25) 0.6px, transparent 0.6px)",
                  backgroundSize: "auto, 3px 3px",
                }}
              />
              <p className="p text-center relative">
                Me llamo Francisco Bover y combino desarrollo web, diseño visual y cultura
                para dar vida a proyectos con identidad. Desde Córdoba, trabajo inspirándome
                en el cine, la música y la gráfica analógica para transformar ideas en
                experiencias visuales y funcionales que conecten con las personas.
              </p>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
