import { Container } from "../ui/Container";
export default function Contact() {
  return (
    <section id="contact" className="relative">
      {/* Fondo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/contact/bg.jpg')] bg-cover bg-center md:bg-[position:60%_center]"
      />
      {/* Oscurecedor para legibilidad */}
      <div className="absolute inset-0 bg-black/35 md:bg-black/25" />

      {/* Contenido */}
      <div className="relative py-10 md:py-14">
        <Container>
          <div className="grid md:grid-cols-12 gap-6 items-start">
            {/* ===== Panel de contacto ===== */}
            <form
                action="https://formsubmit.co/francisbover3@gmail.com"
                method="POST"
                className="
                  md:col-span-6 lg:col-span-5
                  bg-[var(--color-blue)]/95 text-[var(--color-white)]
                  rounded-[18px] p-4 md:p-6
                  shadow-[10px_10px_0_4px_#091A27] max-w-[560px]
                "
              >
                {/* Asunto por defecto */}
                <input type="hidden" name="_subject" value="Desde el portafolio" />
                {/* Desactiva captcha (opcional) */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Template con tabla (más prolijo) */}
                <input type="hidden" name="_template" value="table" />
                {/* Honeypot anti-spam (no tocar) */}
                <input type="text" name="_honey" className="hidden" />

                {/* Redirección después de enviar (opcional) */}
                <input type="hidden" name="_next" value="/#contact?sent=1" />

                <h2
                  className="mb-3 leading-[0.95] break-words"
                  style={{
                    fontFamily: "var(--font-display-1)",
                    fontWeight: 900,
                    fontSize: "clamp(28px, 8vw, 56px)",
                    color: "var(--color-white)",
                  }}
                >
                  Contacto
                </h2>

                {/* Email del remitente */}
                <label htmlFor="email" className="sr-only">Tu e-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Tu E-mail:"
                  className="
                    w-full text-[var(--color-blue)]
                    bg-[var(--color-white)] rounded-[6px]
                    px-3 py-2
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
                  placeholder="Envíame un mensaje!"
                  className="
                    mt-3 w-full text-[var(--color-blue)]
                    bg-[var(--color-white)] rounded-[6px]
                    px-3 py-2
                    border-0 border-t-4 border-[var(--color-blue)]
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)]
                    resize-y
                  "
                />

                <div className="mt-3 flex justify-end">
                  <button type="submit" className="cta inline-flex items-center justify-center gap-[var(--btn-gap)] h-[var(--btn-h)] px-[var(--btn-pad-x)] rounded-[var(--btn-radius)] border-2 bg-[var(--color-blue)] text-[var(--color-yellow)] border-[var(--color-yellow)] hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)] hover:border-[var(--color-yellow)]">
                    Enviar
                  </button>
                </div>
              </form>


            {/* ===== Links con iconos ===== */}
            <aside
              className="
                md:col-span-5 md:col-start-8 md:justify-self-end
                text-[var(--color-yellow)]
              "
            >
              <h3 className="h3 text-[var(--color-yellow)] mb-2 text-right">Links</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-end gap-2">
                  <img src="/contact/whatsapp.svg" alt="" className="h-5 w-5" aria-hidden />
                  <a className="nav-link underline-offset-4 hover:underline"
                     href="https://wa.me/5493512308157?text=Hola%20Fran%2C%20te%20escribo%20desde%20tu%20portafolio%20%E2%9C%8C%EF%B8%8F
" target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <img src="/contact/github.svg" alt="" className="h-5 w-5" aria-hidden />
                  <a className="nav-link underline-offset-4 hover:underline"
                     href="https://github.com/FranBover" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <img src="/contact/linkedin.svg" alt="" className="h-5 w-5" aria-hidden />
                  <a className="nav-link underline-offset-4 hover:underline"
                     href="https://www.linkedin.com/in/francisco-bover-2757a0323/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <img src="/contact/instagram.svg" alt="" className="h-5 w-5" aria-hidden />
                  <a className="nav-link underline-offset-4 hover:underline"
                     href="https://www.instagram.com/franfranfranfrna/" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </Container>
      </div>
    </section>
  );
}
