/** Etiqueta de sección estilo claqueta de cine ("ESC. 01 · SOBRE MÍ") */
export function SceneLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`scene-label ${className}`.trim()}>
      <span className="scene-slate" aria-hidden />
      <span>{children}</span>
    </div>
  );
}
