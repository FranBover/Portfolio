import { useParams } from "react-router";
import { Header } from "../components/layout/Header";
import { ThreeColumnLayout } from "../components/layout/ThreeColumnLayout";

/** Placeholder de Fase 1: valida el esqueleto (columnas fijas + scroll del centro). Contenido real en Fase 4. */
export default function ProjectPage() {
  const { slug } = useParams();

  return (
    <>
      <Header />
      <ThreeColumnLayout
        left={
          <div className="p-6 text-[var(--color-white)]">
            <p className="cta text-[var(--color-yellow)]">Columna izquierda</p>
            <p className="p mt-2">Placeholder — Fase 4.</p>
          </div>
        }
        center={
          <div className="space-y-6 p-4 text-[var(--color-white)]">
            <p className="cta text-[var(--color-yellow)]">Proyecto: {slug}</p>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="h-[120px] rounded-[12px] border border-[rgba(230,213,184,.14)] bg-[#0F2638] p-4"
              >
                <p className="p">Bloque de relleno {i + 1}</p>
              </div>
            ))}
          </div>
        }
        right={
          <div className="p-6 text-[var(--color-white)]">
            <p className="cta text-[var(--color-yellow)]">Columna derecha</p>
            <p className="p mt-2">Placeholder — Fase 4.</p>
          </div>
        }
      />
    </>
  );
}
