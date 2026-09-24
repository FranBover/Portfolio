import type { FeaturedProject } from "../../data/projects/types";

/**
 * Composición de capturas de cada tarjeta, con las posiciones absolutas exactas
 * de docs/diseno/fuente/Inicio-proyectos.dc.html (xl) y Celular-inicio.dc.html (mobile).
 * Es un layout a medida por proyecto, no genérico: cada uno tiene su propia composición.
 */
export function ProjectMedia({ project }: { project: FeaturedProject }) {
  if (project.slug === "vinto") {
    const [panel, tienda, producto] = project.cardImages;
    return (
      <>
        <div className="relative hidden h-[270px] w-full overflow-hidden rounded-[10px] bg-[#EDE5D3] xl:block">
          <img
            src={panel}
            alt="Panel de Vinto: categorías"
            loading="lazy"
            className="absolute left-5 top-[30px] w-[380px] rounded-[6px] border border-[#e8e1d4] shadow-[0_18px_40px_rgba(26,26,26,.18)]"
          />
          <img
            src={tienda}
            alt="Tienda de Vinto en el celular"
            loading="lazy"
            width={112}
            height={184}
            className="absolute left-[318px] top-[62px] h-[184px] w-[112px] rounded-[14px] border-[3px] border-[#1a1a1a] object-cover object-top shadow-[0_18px_40px_rgba(26,26,26,.25)]"
          />
          <img
            src={producto}
            alt="Producto con variantes"
            loading="lazy"
            width={112}
            height={212}
            className="absolute left-[410px] top-7 h-[212px] w-[112px] rounded-[14px] border-[3px] border-[#1a1a1a] object-cover object-top shadow-[0_18px_40px_rgba(26,26,26,.25)]"
          />
        </div>
        <div className="flex h-[236px] w-full items-center justify-center gap-4 rounded-[10px] bg-[#EDE5D3] xl:hidden">
          <img
            src={tienda}
            alt="Tienda de Vinto en el celular"
            loading="lazy"
            width={112}
            height={200}
            className="h-[200px] w-[112px] rounded-[14px] border-[3px] border-[#1a1a1a] object-cover object-top shadow-[0_16px_30px_rgba(26,26,26,.22)]"
          />
          <img
            src={producto}
            alt="Producto con variantes"
            loading="lazy"
            width={112}
            height={200}
            className="h-[200px] w-[112px] rounded-[14px] border-[3px] border-[#1a1a1a] object-cover object-top shadow-[0_16px_30px_rgba(26,26,26,.22)]"
          />
        </div>
      </>
    );
  }

  // Presupuestador
  const [render3d, cuerpos] = project.cardImages;
  const badge = project.cardBadge;
  return (
    <>
      <div className="relative hidden h-[270px] w-full overflow-hidden rounded-[10px] bg-[#F2F1EC] xl:block">
        <img src={render3d} alt="Vista 3D de una cocina en L" loading="lazy" className="absolute -left-[10px] top-[6px] w-[400px]" />
        <img
          src={cuerpos}
          alt="Pantalla de cuerpos con el total en vivo"
          loading="lazy"
          width={124}
          height={230}
          className="absolute left-[380px] top-6 h-[230px] w-[124px] rounded-[14px] border-[3px] border-[#1a1a1a] object-cover object-top shadow-[0_18px_40px_rgba(26,26,26,.25)]"
        />
        {badge && (
          <span
            className="absolute bottom-4 left-[18px] rounded-[4px] px-[9px] py-[5px] font-mono text-[10px] font-bold tracking-[.1em] text-white"
            style={{ background: badge.color }}
          >
            {badge.label}
          </span>
        )}
      </div>
      <div className="relative h-[236px] w-full overflow-hidden rounded-[10px] bg-[#F2F1EC] xl:hidden">
        <img src={render3d} alt="Vista 3D de una cocina en L" loading="lazy" className="absolute -left-[18px] top-[18px] w-[250px]" />
        <img
          src={cuerpos}
          alt="Pantalla de cuerpos con el total en vivo"
          loading="lazy"
          width={104}
          height={200}
          className="absolute right-[14px] top-4 h-[200px] w-[104px] rounded-[14px] border-[3px] border-[#1a1a1a] object-cover object-top shadow-[0_16px_30px_rgba(26,26,26,.22)]"
        />
        {badge && (
          <span
            className="absolute bottom-3 left-3 rounded-[4px] px-2 py-1 font-mono text-[9px] font-bold tracking-[.1em] text-white"
            style={{ background: badge.color }}
          >
            {badge.label}
          </span>
        )}
      </div>
    </>
  );
}
