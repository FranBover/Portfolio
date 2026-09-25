import type { ReactNode } from "react";

type ThreeColumnLayoutProps = {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
};

/**
 * Esqueleto de Fase 1: grid de tres columnas desde xl (1280px), 1fr 2fr 1fr.
 * Debajo de xl, una sola columna centrada (contenido real por sección llega en fases siguientes).
 */
export function ThreeColumnLayout({ left, center, right }: ThreeColumnLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-[720px] px-4 xl:max-w-none xl:px-0 xl:grid xl:grid-cols-[1fr_2fr_1fr]">
      <aside className="scroll-clean hidden xl:sticky xl:top-[72px] xl:block xl:h-[calc(100dvh-72px)] xl:overflow-y-auto">
        {left}
      </aside>

      <main className="min-w-0">
        <div className="mx-auto w-full xl:max-w-[760px]">{center}</div>
      </main>

      <aside className="scroll-clean hidden xl:sticky xl:top-[72px] xl:block xl:h-[calc(100dvh-72px)] xl:overflow-y-auto">
        {right}
      </aside>
    </div>
  );
}
