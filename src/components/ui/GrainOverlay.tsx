/** Overlay global fijo: grano de película + viñeta. No intercepta interacción. */
export function GrainOverlay() {
  return (
    <div className="fx-overlay" aria-hidden>
      <div className="fx-grain" />
      <div className="fx-vignette" />
    </div>
  );
}
