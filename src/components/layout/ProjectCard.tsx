import { Button } from "../ui/Button";

export type Project = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
};

export default function ProjectCard({ title, image, description, tech, github }: Project) {
  return (
    <article
      className="
        group relative h-full flex flex-col
        bg-[var(--color-blue)] rounded-[18px] p-4 md:p-5 text-[var(--color-white)]
      "
    >
      {/* semáforos */}
      <div className="absolute left-4 top-3 flex gap-2">
        <span className="h-[14px] w-[14px] rounded-full bg-[var(--color-yellow)]" />
        <span className="h-[14px] w-[14px] rounded-full bg-[var(--color-yellow)]" />
        <span className="h-[14px] w-[14px] rounded-full bg-[var(--color-yellow)]" />
      </div>

      {/* chips tech */}
      <div className="absolute right-3 top-2 flex flex-wrap gap-2 justify-end">
        {tech.map((t) => (
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

      {/* ===== Media con marco fijo (16:9) y sombra dura ===== */}
      <div className="relative mt-6 rounded-[20px] bg-white p-3 shadow-[8px_8px_0_#091A27]">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px]">
          <img
            src={image}
            alt={`Captura de ${title}`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Título como H3 (label) con hover sutil */}
        <h3
          className="
            absolute -bottom-4 left-4
            bg-[var(--color-yellow)] text-[var(--color-blue)]
            rounded-[16px] px-4 py-1
            transition-transform duration-150 ease-out
            group-hover:-translate-y-0.5 group-hover:rotate-[-1.5deg]
          "
          style={{ fontFamily: "var(--font-display-2)", fontWeight: 400 }}
        >
          {title}
        </h3>
      </div>

      {/* Descripción */}
      <p
        className="mt-8 md:mt-9"
        style={{ fontFamily: "var(--font-copy)" }}
      >
        {description}
      </p>

      {/* Botón pegado abajo para que todas queden iguales */}
      <div className="mt-auto pt-4">
        <Button href={github}>Ver en GitHub</Button>
      </div>
    </article>
  );
}
