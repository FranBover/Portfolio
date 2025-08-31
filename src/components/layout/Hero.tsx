import { Container } from "../ui/Container";

export default function Hero() {
  return (
    <section className="bg-[var(--color-blue)] py-16 md:py-24">
      <Container>
        <div id="top" />
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Texto */}
          <div className="md:col-span-7 lg:col-span-6 text-left justify-self-start">
                <h1 className="h1 text-[var(--color-yellow)] text-left">
                    <span className="block">Francisco</span>
                    <span className="block">Bover</span>
                </h1>

                <h2 className="h2 mt-4 text-[var(--color-yellow)] text-left max-w-[22ch]">
                    Desarrollo creativo, diseño visual y
                    soluciones con código.
                </h2>
         </div> 

          {/* GIF */}
          <div className="md:col-span-5 lg:col-span-6">
            {/* Aspect ratio 4:3 como tu mock; ajustá si tu GIF es distinto */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]">
              <img
                src="/gif.gif"             // ← coloca tu archivo en /public/hero.gif
                alt="Reel visual de proyectos"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* si querés borde fino amarillo: descomenta la línea de abajo */}
              {/* <div className="pointer-events-none absolute inset-0 ring-2 ring-[var(--color-yellow)] rounded-[20px]" /> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
