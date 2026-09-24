import { Reveal } from "../ui/Reveal";
import { SceneLabel } from "../ui/SceneLabel";

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
  "cut-letter select-none [user-drag:none] h-auto w-11 sm:w-14 xl:w-[60px] " +
  "rotate-0 md:rotate-[var(--rot)] translate-y-0 md:translate-y-[var(--dy)] " +
  "will-change-transform motion-reduce:transition-none " +
  "hover:-translate-y-2 hover:rotate-[10deg] hover:z-10 relative " +
  "-ml-2 first:ml-0 drop-shadow-[2px_3px_0_rgba(0,0,0,.35)] hover:drop-shadow-[4px_7px_0_rgba(0,0,0,.45)]";

export function AboutSection() {
  return (
    <section id="inicio" className="scroll-mt-24 pt-12 xl:pt-10">
      <Reveal className="flex text-[var(--color-yellow)]">
        <SceneLabel>ESC. 01 · Sobre mí</SceneLabel>
      </Reveal>

      <Reveal delay={80}>
        <h2
          className="mt-[22px] max-w-[600px] text-[25px] leading-[1.22] text-[var(--color-white)] xl:text-[36px] xl:leading-[1.18]"
          style={{ fontFamily: "var(--font-display-2)", fontWeight: 400 }}
        >
          Diseño y desarrollo software que resuelve{" "}
          <span className="text-[var(--color-yellow)]">problemas reales de negocio</span> — de punta a punta.
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <div className="bg-kubrick mt-4 flex flex-col items-center rounded-[14px] bg-repeat px-4 pb-5 pt-[18px] shadow-[10px_10px_0_4px_#091A27] xl:mt-9 xl:px-[30px] xl:pb-[30px] xl:pt-[26px]">
          <div className="flex flex-col items-center">
            <div className="flex items-end justify-center">
              {SOBRE.map((L, i) => (
                <img
                  key={L.ch}
                  src={`/letters/${L.ch}.png`}
                  alt={L.ch}
                  style={{ "--rot": `${L.r}deg`, "--dy": `${L.dy}px`, transitionDelay: `${i * 40}ms` } as React.CSSProperties}
                  className={letterClass}
                />
              ))}
            </div>
            <div className="-mt-1 flex items-start justify-center">
              {MI.map((L, i) => (
                <img
                  key={L.ch}
                  src={`/letters/${L.ch}.png`}
                  alt={L.ch}
                  style={{ "--rot": `${L.r}deg`, "--dy": `${L.dy}px`, transitionDelay: `${(SOBRE.length + i) * 40}ms` } as React.CSSProperties}
                  className={letterClass}
                />
              ))}
            </div>
          </div>

          <div className="relative mt-1 rounded-[8px] bg-[var(--color-yellow)] px-[18px] py-[18px] text-[var(--color-blue)] shadow-[10px_10px_0_4px_#091A27] xl:px-[26px] xl:py-[22px]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[8px] opacity-25 mix-blend-multiply"
              style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.25) 0.6px, transparent 0.6px)", backgroundSize: "3px 3px" }}
            />
            <p className="relative text-[15px] leading-[1.6] xl:text-[16px]" style={{ fontFamily: "var(--font-copy)" }}>
              Desarrollador full-stack. Agarro un problema de negocio real, lo relevo, lo diseño y lo llevo a
              producción — solo, de punta a punta. Trabajo con C#/.NET, React y TypeScript, y complemento con
              agentes de IA (Claude Code, Cursor) para moverme rápido sin bajar la calidad. Antes fui técnico
              electricista; ahora resuelvo con código lo mismo que antes resolvía con las manos: encontrar dónde
              está la falla y arreglarla.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
