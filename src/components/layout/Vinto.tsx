import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const BULLETS = [
  "Tienda pública por local, sin login del cliente.",
  "Pedidos que llegan listos por WhatsApp.",
  "Panel admin: catálogo, pedidos, descuentos y métricas.",
  "API propia en .NET + SQL, multi-tenant.",
  "Deployado en Azure con CI/CD (push = deploy).",
];

const TECH = ["React", "C#", ".NET", "SQL", "Azure"];

const LIVE_URL =
  "https://vinto-frontend-dev-ffbbb4e2fzcfd5h9.centralus-01.azurewebsites.net/";
const REPO_URL = "https://github.com/FranBover/vinto-backend-v2";

/* === Paleta real de Vinto (no la del portfolio) === */
const V = {
  bg: "#faf8f4",
  panel: "#ede5d3",
  ink: "#1a1a1a",
  gray: "#6b6258",
  wine: "#73223a",
  green: "#2d5a27",
  border: "#e8e1d4",
};
const SERIF = '"Fraunces", Georgia, serif';

export default function Vinto() {
  return (
    <section
      id="vinto"
      className="overflow-x-hidden bg-[var(--color-white)] text-[var(--color-blue)] py-16 md:py-24"
    >
      <Container>
        <div className="grid items-center gap-10 lg:gap-14 md:grid-cols-12">
          {/* ===== Texto (portfolio) ===== */}
          <div className="md:col-span-5 min-w-0 w-full text-left">
            {/* Badge "En producción" */}
            <span
              className="
                inline-block
                bg-[var(--color-orange)] text-[var(--color-blue)]
                rounded-[10px] px-2 py-[2px]
                text-[10px] md:text-xs leading-[1.05]
                shadow-[2px_2px_0_rgba(0,0,0,.35)]
                select-none
              "
              style={{ fontFamily: "var(--font-copy)" }}
            >
              En producción
            </span>

            {/* Título */}
            <h2 className="h1 mt-4 text-[var(--color-blue)] text-left">Vinto</h2>

            {/* Bajada */}
            <p
              className="mt-4 max-w-[40ch] text-[16px] md:text-[20px]"
              style={{ fontFamily: "var(--font-copy)" }}
            >
              SaaS multi-tenant de menú y tienda online para locales
              gastronómicos.
            </p>

            {/* Bullets */}
            <ul
              className="mt-6 space-y-3"
              style={{ fontFamily: "var(--font-copy)" }}
            >
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-[10px] h-[8px] w-[8px] shrink-0 rounded-full bg-[var(--color-orange)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Chips de tecnología */}
            <div className="mt-6 flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span
                  key={t}
                  className="
                    bg-[var(--color-yellow)] text-[var(--color-blue)]
                    rounded-full border-2 border-[var(--color-blue)]
                    px-2 py-[2px] font-mono font-bold text-[10px] md:text-xs leading-none
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Botones */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                Ver en vivo
              </Button>
              <Button
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-[var(--color-blue)] border-[var(--color-blue)] hover:bg-[var(--color-blue)] hover:text-[var(--color-yellow)] hover:border-[var(--color-blue)]"
              >
                Ver en GitHub
              </Button>
            </div>
          </div>

          {/* ===== Mockup: ventana de navegador con la landing de Vinto ===== */}
          <div className="md:col-span-7 min-w-0 w-full">
            <div className="w-full max-w-full rounded-[16px] bg-white shadow-[8px_8px_0_#091A27] overflow-hidden border border-[var(--color-blue)]/10">
              {/* Barra del navegador */}
              <div
                className="flex items-center gap-3 px-4 py-2.5"
                style={{ background: V.panel, borderBottom: `1px solid ${V.border}` }}
              >
                {/* semáforos */}
                <div className="flex gap-2 shrink-0">
                  <span className="h-[12px] w-[12px] rounded-full bg-[var(--color-yellow)]" />
                  <span className="h-[12px] w-[12px] rounded-full bg-[var(--color-yellow)]" />
                  <span className="h-[12px] w-[12px] rounded-full bg-[var(--color-yellow)]" />
                </div>
                {/* barra de URL falsa */}
                <div
                  className="mx-auto w-full max-w-[260px] truncate rounded-full px-3 py-[3px] text-center text-[11px] leading-none"
                  style={{
                    background: V.bg,
                    border: `1px solid ${V.border}`,
                    color: V.gray,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  vintoapp.com/ejemplo
                </div>
                <div className="w-[44px] shrink-0" aria-hidden />
              </div>

              {/* Contenido de la landing */}
              <div
                className="px-4 py-6 sm:px-6 sm:py-8 md:px-9 md:py-11"
                style={{ background: V.bg, color: V.ink }}
              >
                {/* Eyebrow */}
                <div
                  className="text-[10px] sm:text-[11px] font-medium uppercase break-words"
                  style={{
                    color: V.wine,
                    fontFamily: SERIF,
                    letterSpacing: "0.18em",
                  }}
                >
                  Vinto · Comercio online
                </div>

                {/* Divisoria */}
                <div
                  className="mt-4"
                  style={{ width: 32, height: 1.5, background: V.wine }}
                />

                {/* Título */}
                <h3
                  className="mt-5 text-[22px] sm:text-[28px] md:text-[34px] leading-[1.1] break-words"
                  style={{ fontFamily: SERIF, fontWeight: 400, color: V.ink }}
                >
                  Tu negocio, vendiendo online.
                </h3>

                {/* Bajada */}
                <p
                  className="mt-4 max-w-full sm:max-w-[42ch] text-[14px] sm:text-[15px] leading-relaxed"
                  style={{ fontFamily: SERIF, color: V.gray }}
                >
                  Armá tu tienda en minutos y recibí pedidos directo por
                  WhatsApp, sin comisiones ni intermediarios.
                </p>

                {/* CTA + link */}
                <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-5">
                  <span
                    className="inline-block px-5 py-3 sm:px-6 text-[12px] uppercase select-none"
                    style={{
                      background: V.wine,
                      color: V.bg,
                      letterSpacing: "0.14em",
                      fontFamily: SERIF,
                      fontWeight: 500,
                      boxShadow: "0 6px 16px rgba(115,34,58,.22)",
                    }}
                  >
                    Quiero mi tienda
                  </span>
                  <span
                    className="text-[14px]"
                    style={{ color: V.gray, fontFamily: SERIF }}
                  >
                    Ver un ejemplo →
                  </span>
                </div>

                {/* Mini-mockup de la tienda */}
                <div
                  className="mt-9 rounded-[14px] p-5"
                  style={{
                    background: V.panel,
                    border: `1px solid ${V.border}`,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,.5)",
                  }}
                >
                  <div
                    className="text-[10px] font-medium uppercase"
                    style={{
                      color: V.green,
                      letterSpacing: "0.18em",
                      fontFamily: SERIF,
                    }}
                  >
                    ● Abierto ahora
                  </div>
                  <div
                    className="mt-1 text-[20px]"
                    style={{ fontFamily: SERIF, fontWeight: 500, color: V.ink }}
                  >
                    Ejemplo
                  </div>

                  {/* Fila de producto */}
                  <div
                    className="mt-4 flex items-center gap-3 sm:gap-4 rounded-[10px] p-3"
                    style={{
                      background: V.bg,
                      border: `1px solid ${V.border}`,
                      boxShadow: "0 2px 8px rgba(26,26,26,.05)",
                    }}
                  >
                    {/* Foto de producto (con fallback a gradiente) */}
                    <div
                      className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-[8px]"
                      style={{
                        background:
                          "linear-gradient(135deg, #e8a05a 0%, #c8682f 55%, #8f3d1a 100%)",
                      }}
                    >
                      <img
                        src="/vinto/producto.jpg"
                        alt="Hamburguesa Simple"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className="truncate text-[15px]"
                        style={{
                          fontFamily: SERIF,
                          fontWeight: 500,
                          color: V.ink,
                        }}
                      >
                        Hamburguesa Simple
                      </div>
                      <div
                        className="mt-[2px] text-[12px]"
                        style={{ color: V.gray, fontFamily: SERIF }}
                      >
                        Carne, queso y pan casero.
                      </div>
                    </div>

                    <div
                      className="shrink-0 text-[15px]"
                      style={{ color: V.wine, fontFamily: SERIF, fontWeight: 500 }}
                    >
                      $15.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
