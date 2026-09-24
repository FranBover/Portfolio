import { toolCategories } from "../../data/tools";
import { Reveal } from "../ui/Reveal";
import { SceneLabel } from "../ui/SceneLabel";

export function ToolsSection() {
  return (
    <section id="herramientas" className="scroll-mt-24">
      <Reveal className="flex flex-col gap-[18px] text-[var(--color-yellow)]">
        <SceneLabel>ESC. 03 · Herramientas</SceneLabel>
        <div
          className="-rotate-2 self-start rounded-[14px] bg-[var(--color-orange)] px-4 py-2 shadow-[6px_6px_0_#091A27] xl:rounded-[18px] xl:px-6 xl:py-3 xl:shadow-[8px_8px_0_#091A27]"
        >
          <h2
            className="text-[34px] leading-none text-[var(--color-white)] xl:text-[44px]"
            style={{ fontFamily: "var(--font-display-1)", fontWeight: 900 }}
          >
            Herramientas
          </h2>
        </div>
        <p className="text-[15px] text-[rgba(230,213,184,.75)] xl:text-[16px]" style={{ fontFamily: "var(--font-copy)" }}>
          Lo que uso hoy en producción, en Vinto y en el presupuestador.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-[22px] grid grid-cols-1 xl:grid-cols-2 xl:gap-x-7">
          {toolCategories.map((category) => (
            <div key={category.heading} className="flex flex-col gap-2.5 border-t border-[rgba(230,213,184,.14)] py-3.5">
              <p className="cta text-[10.5px] tracking-[.14em] text-[rgba(230,213,184,.62)]" style={{ textTransform: "uppercase" }}>
                {category.heading}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block rounded-full border border-[rgba(230,213,184,.28)] px-3 py-[5px] text-[13px] leading-[1.2] text-[var(--color-white)] xl:text-[14px]"
                    style={{ fontFamily: "var(--font-display-2)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
