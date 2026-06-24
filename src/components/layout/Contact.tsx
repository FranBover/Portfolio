import { useState, type FormEvent } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SceneLabel } from "../ui/SceneLabel";

type Status = "idle" | "sending" | "sent" | "error";

const SOCIALS = [
  {
    label: "WhatsApp",
    icon: "/contact/whatsapp.svg",
    href:
      "https://wa.me/5493512308157?text=Hola%20Fran%2C%20te%20escribo%20desde%20tu%20portafolio%20%E2%9C%8C%EF%B8%8F",
  },
  {
    label: "GitHub",
    icon: "/contact/github.svg",
    href: "https://github.com/FranBover",
  },
  {
    label: "LinkedIn",
    icon: "/contact/linkedin.svg",
    href: "https://www.linkedin.com/in/francisco-bover-2757a0323/",
  },
  {
    label: "Instagram",
    icon: "/contact/instagram.svg",
    href: "https://www.instagram.com/franfranfranfrna/",
  },
];

// Guiño a los créditos de cine (con una fila "banda sonora" de guiño funk)
const FICHA = [
  { k: "Dirección", v: "Francisco Bover" },
  { k: "Rubro", v: "Desarrollo & Diseño" },
  { k: "Locación", v: "Córdoba, Argentina" },
  { k: "Banda sonora", v: "Funk & soul" },
  { k: "Estado", v: "Disponible para proyectos" },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: si tiene contenido, es spam → no enviamos
    if ((data.get("_honey") as string)?.trim()) return;

    const email = (data.get("email") as string) ?? "";
    const message = (data.get("message") as string) ?? "";

    setStatus("sending");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/francisbover3@gmail.com",
        {
          method: "POST",
          referrerPolicy: "origin",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            message,
            _subject: "Desde el portafolio",
            _captcha: "false",
          }),
        }
      );
      const json = await res.json();
      if (json?.success === "true" || json?.success === true) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--color-blue)] text-[var(--color-white)]"
    >
      {/* Hairline amarillo de separación */}
      <div aria-hidden className="h-[3px] w-full bg-[var(--color-yellow)]" />

      <div className="relative z-10 py-14 md:py-20">
        <Container>
          {/* Encabezado */}
          <Reveal className="text-[var(--color-yellow)]">
            <SceneLabel>ESC. 04 · Contacto</SceneLabel>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="mt-4 leading-[0.95] text-[var(--color-yellow)]"
              style={{
                fontFamily: "var(--font-display-1)",
                fontWeight: 900,
                fontSize: "clamp(40px, 9vw, 92px)",
              }}
            >
              Hablemos.
            </h2>
            <p
              className="mt-3 max-w-[46ch] text-[16px] md:text-[20px] text-[var(--color-white)]"
              style={{ fontFamily: "var(--font-copy)" }}
            >
              Contame tu idea, tu proyecto o lo que tengas en mente. Te respondo
              a la brevedad.
            </p>
          </Reveal>

          {/* Cuerpo: formulario + ficha/redes */}
          <div className="mt-10 grid items-start gap-8 md:grid-cols-12">
            {/* ===== Formulario ===== */}
            <Reveal delay={120} className="md:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="
                  rounded-[18px] p-5 md:p-7
                  bg-[#0F2638] border border-[var(--color-yellow)]/15
                  shadow-[10px_10px_0_rgba(0,0,0,.35)]
                "
              >
                {/* Honeypot anti-spam (no tocar) */}
                <input type="text" name="_honey" className="hidden" />

                <p
                  className="mb-4 text-[20px] md:text-[24px] text-[var(--color-white)]"
                  style={{ fontFamily: "var(--font-display-2)" }}
                >
                  Mandame un mensaje
                </p>

                {/* Email del remitente */}
                <label htmlFor="email" className="sr-only">Tu e-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Tu e-mail"
                  className="
                    w-full text-[var(--color-blue)]
                    bg-[var(--color-white)] rounded-[8px]
                    px-4 py-3
                    border-0 border-t-4 border-[var(--color-blue)]
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)]
                  "
                />

                {/* Mensaje */}
                <label htmlFor="message" className="sr-only">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Envíame un mensaje…"
                  className="
                    mt-3 w-full text-[var(--color-blue)]
                    bg-[var(--color-white)] rounded-[8px]
                    px-4 py-3
                    border-0 border-t-4 border-[var(--color-blue)]
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)]
                    resize-y
                  "
                />

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span
                    className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-white)]/50 select-none"
                  >
                    Toma 1 · ¡Acción!
                  </span>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="cta inline-flex items-center justify-center gap-[var(--btn-gap)] h-[var(--btn-h)] px-[var(--btn-pad-x)] rounded-[var(--btn-radius)] border-2 bg-[var(--color-yellow)] text-[var(--color-blue)] border-[var(--color-yellow)] transition-colors hover:bg-transparent hover:text-[var(--color-yellow)] disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {status === "sending" ? "Enviando…" : "Enviar"}
                  </button>
                </div>

                {/* Mensaje de estado */}
                {status === "sent" && (
                  <p
                    className="mt-4 text-[14px] md:text-[15px] text-[var(--color-yellow)]"
                    style={{ fontFamily: "var(--font-copy)" }}
                    role="status"
                  >
                    ¡Mensaje enviado! Te respondo a la brevedad.
                  </p>
                )}
                {status === "error" && (
                  <p
                    className="mt-4 text-[14px] md:text-[15px] text-[#ff8a8a]"
                    style={{ fontFamily: "var(--font-copy)" }}
                    role="alert"
                  >
                    Hubo un problema, probá de nuevo o escribime por WhatsApp.
                  </p>
                )}
              </form>
            </Reveal>

            {/* ===== Ficha técnica + redes ===== */}
            <Reveal delay={200} className="md:col-span-5 md:col-start-8">
              {/* Ficha técnica (guiño cine) */}
              <div className="relative bg-[var(--color-yellow)] text-[var(--color-blue)] rounded-[14px] p-5 md:p-6 shadow-[10px_10px_0_4px_#091A27]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[14px] opacity-25 mix-blend-multiply"
                  style={{
                    backgroundImage:
                      "url('/textures/noise.png'), radial-gradient(rgba(0,0,0,0.25) 0.6px, transparent 0.6px)",
                    backgroundSize: "auto, 3px 3px",
                  }}
                />
                <p className="relative font-mono text-[11px] tracking-[0.22em] uppercase opacity-70">
                  Ficha técnica
                </p>
                <dl className="relative mt-4 space-y-3">
                  {FICHA.map((row) => (
                    <div
                      key={row.k}
                      className="flex items-baseline justify-between gap-4 border-b border-[var(--color-blue)]/15 pb-2 last:border-0 last:pb-0"
                    >
                      <dt className="font-mono text-[11px] tracking-[0.12em] uppercase opacity-60">
                        {row.k}
                      </dt>
                      <dd
                        className="text-right text-[15px] md:text-[16px]"
                        style={{ fontFamily: "var(--font-copy)" }}
                      >
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Redes */}
              <p className="mt-7 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-yellow)]/70">
                Encontrame en
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-3">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group flex items-center gap-3 rounded-[12px]
                        border border-white/10 bg-white/[0.03]
                        px-4 py-3 transition-colors
                        hover:border-[var(--color-yellow)]/40 hover:bg-white/[0.07]
                      "
                    >
                      <img
                        src={s.icon}
                        alt=""
                        className="social-pop h-6 w-6 shrink-0"
                        aria-hidden
                      />
                      <span className="nav-link text-[var(--color-yellow)] truncate">
                        {s.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
