/** Esqueleto de Fase 1. El header real (logo, nav, scroll-spy, botón) llega en Fase 3. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 h-[72px] w-full border-b border-[rgba(230,213,184,.14)] bg-[var(--color-blue)]">
      <div className="mx-auto flex h-full w-full max-w-(--container-max) items-center px-4 sm:px-6 lg:px-8">
        <span className="cta text-[var(--color-yellow)]">Header</span>
      </div>
    </header>
  );
}
