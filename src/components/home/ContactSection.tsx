import { useState, type FormEvent } from "react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SceneLabel } from "../ui/SceneLabel";
import { TechSheet } from "./TechSheet";
import { SocialGridLinks } from "./SocialGridLinks";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "block w-full rounded-[8px] border-0 border-t-4 border-[var(--color-blue)] bg-[var(--color-white)] px-4 py-3 text-[15px] text-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)]";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("_honey") as string)?.trim()) return;

    const email = (data.get("email") as string) ?? "";
    const message = (data.get("message") as string) ?? "";

    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/francisbover3@gmail.com", {
        method: "POST",
        referrerPolicy: "origin",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, message, _subject: "Desde el portafolio", _captcha: "false" }),
      });
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
    <section id="contacto" className="scroll-mt-24">
      <Reveal className="flex text-[var(--color-yellow)]">
        <SceneLabel>ESC. 04 · Contacto</SceneLabel>
      </Reveal>

      <Reveal delay={80}>
        <h2
          className="mt-2 text-[52px] leading-[.95] text-[var(--color-yellow)] xl:text-[64px]"
          style={{ fontFamily: "var(--font-display-1)", fontWeight: 900 }}
        >
          Hablemos.
        </h2>
        <p className="mt-[14px] max-w-[520px] text-[16px] leading-[1.55] text-[var(--color-white)] xl:text-[17px]" style={{ fontFamily: "var(--font-copy)" }}>
          Contame tu idea, tu proyecto o el puesto que buscás cubrir. Te respondo a la brevedad.
        </p>
      </Reveal>

      <Reveal delay={160}>
        <form
          onSubmit={handleSubmit}
          className="mt-[28px] flex max-w-[560px] flex-col gap-3 rounded-[18px] border border-[rgba(223,175,43,.15)] bg-[#0F2638] p-[22px] shadow-[10px_10px_0_rgba(0,0,0,.35)]"
        >
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <p className="mb-1 text-[20px] text-[var(--color-white)] xl:text-[22px]" style={{ fontFamily: "var(--font-display-2)" }}>
            Mandame un mensaje
          </p>

          <label htmlFor="email" className="cta text-[10.5px] tracking-[.12em] text-[rgba(230,213,184,.62)]" style={{ textTransform: "uppercase" }}>
            Tu e-mail
          </label>
          <input id="email" name="email" type="email" required placeholder="nombre@empresa.com" className={inputClass} />

          <label htmlFor="message" className="cta text-[10.5px] tracking-[.12em] text-[rgba(230,213,184,.62)]" style={{ textTransform: "uppercase" }}>
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Contame qué necesitás resolver…"
            className={`${inputClass} resize-none`}
          />

          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="cta text-[11px] tracking-[.18em] text-[rgba(230,213,184,.5)]" style={{ textTransform: "uppercase" }}>
              Toma 1 · ¡Acción!
            </span>
            <Button type="submit" variant="solid" disabled={status === "sending"}>
              {status === "sending" ? "Enviando…" : "Enviar"}
            </Button>
          </div>

          {status === "sent" && (
            <p className="text-[14px] text-[var(--color-yellow)]" style={{ fontFamily: "var(--font-copy)" }} role="status">
              ¡Mensaje enviado! Te respondo a la brevedad.
            </p>
          )}
          {status === "error" && (
            <p className="text-[14px] text-[#ff8a8a]" style={{ fontFamily: "var(--font-copy)" }} role="alert">
              Hubo un problema, probá de nuevo o escribime por WhatsApp.
            </p>
          )}
        </form>
      </Reveal>

      {/* Cierre solo en celular: lo que en desktop vive en la columna derecha */}
      <div className="mt-[22px] flex flex-col gap-[18px] pb-8 xl:hidden">
        <TechSheet variant="card" />
        <SocialGridLinks />
        <footer className="mt-1 flex items-center justify-between gap-3 border-t border-[rgba(230,213,184,.14)] pt-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <img src="/Logo.png" alt="" className="h-[30px] w-[30px] shrink-0" />
            <span className="cta text-[11px] text-[rgba(230,213,184,.62)]">
              Hecho a mano en Córdoba · © {new Date().getFullYear()}
            </span>
          </div>
          <a href="#inicio" className="cta shrink-0 whitespace-nowrap text-[12px] text-[var(--color-yellow)]">
            Arriba ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
