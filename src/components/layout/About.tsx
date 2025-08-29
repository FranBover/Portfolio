import { Container } from "../ui/Container";

// Rotación/offset inicial (se activa desde md para arriba)
const SOBRE = [
  { ch: "s", r: -8, dy: 0 },
  { ch: "o", r:  3, dy: -4 },
  { ch: "b", r: -2, dy: 2 },
  { ch: "r", r:  6, dy: -6 },
  { ch: "e", r: -4, dy: 0 },
];
const MI = [
  { ch: "m", r:  8, dy: 4 },
  { ch: "i", r: -8, dy: 0 },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Fondo animado */}
      <div
        aria-hidden
        className="
          absolute inset-0 bg-kubrick bg-repeat
          [background-size:780px_auto]
          [will-change:background-position]
          animate-[bg-scroll-up_40s_linear_infinite]
        "
      />

      <div className="relative py-16 md:py-24">
        <Container>
          {/* ====== Título (dos filas centradas) ====== */}
          <div className="flex flex-col items-center">
            {/* fila 1: SOBRE */}
            <div className="flex items-end justify-center gap-1 md:gap-2 lg:gap-[2px]">
              {SOBRE.map((L) => (
                <img
                  key={L.ch}
                  src={`/letters/${L.ch}.png`}
                  alt={L.ch}
                  // Mobile: sin rotación ni desplazamiento (se ve todo)
                  // md+: aplicamos rotación y translateY con variables CSS
                  style={
                    {
                      
                      "--rot": `${L.r}deg`,
                      
                      "--dy": `${L.dy}px`,
                    } as React.CSSProperties
                  }
                  className="
                    select-none [user-drag:none]
                    w-[56px]  md:w-[92px]  lg:w-[148px] h-auto
                    rotate-0 md:rotate-[var(--rot)]
                    translate-y-0 md:translate-y-[var(--dy)]
                    transition-transform duration-75 ease-out will-change-transform
                    hover:rotate-[12deg] hover:-translate-y-1
                    drop-shadow-[2px_3px_0_rgba(0,0,0,.35)]
                  "
                />
              ))}
            </div>

            {/* fila 2: mi */}
            <div className="mt-1 flex items-start justify-center gap-1 md:gap-2 lg:gap-[2px]">
              {MI.map((L) => (
                <img
                  key={L.ch}
                  src={`/letters/${L.ch}.png`}
                  alt={L.ch}
                  style={
                    {
                      
                      "--rot": `${L.r}deg`,
                      
                      "--dy": `${L.dy}px`,
                    } as React.CSSProperties
                  }
                  className="
                    select-none [user-drag:none]
                    w-[48px]  md:w-[84px]  lg:w-[148px] h-auto
                    rotate-0 md:rotate-[var(--rot)]
                    translate-y-0 md:translate-y-[var(--dy)]
                    transition-transform duration-75 ease-out will-change-transform
                    hover:rotate-[12deg] hover:-translate-y-1
                    drop-shadow-[2px_3px_0_rgba(0,0,0,.35)]
                  "
                />
              ))}
            </div>
          </div>

          {/* ====== Tarjeta del párrafo (con noise y sombra Figma) ====== */}
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
        </Container>
      </div>
    </section>
  );
}
