# Portfolio · franbover.dev

Portfolio de Francisco Bover, desarrollador full-stack en Córdoba. Estamos haciendo un rediseño: un layout de tres columnas donde los costados quedan fijos y solo baja el centro, más una vista propia para cada proyecto destacado.

Este archivo tiene las reglas fijas. El paso a paso está en `docs/PLAN.md` y todos los textos en `docs/CONTENIDO.md`.

## Stack y comandos

- React 19 + TypeScript + Vite 7 + Tailwind 4 (`@tailwindcss/vite`). No sumes librerías fuera de las que autoriza el plan (solo `react-router`).
- `npm run dev` · `npm run build` (tsc + vite) · `npm run lint` · `npm run preview`
- Deploy: Azure Static Web Apps con GitHub Actions. **Un push a `main` publica en producción.** Los PR hacia `main` generan un entorno de preview.

## Cómo trabajamos

1. Una fase de `docs/PLAN.md` por sesión, en la rama `rediseno`. Nunca trabajes directo en `main`.
2. Antes de tocar código, mostrá un plan corto de la fase y esperá el OK.
3. Al terminar la fase: `npm run build` y `npm run lint` sin errores, y un commit (`feat(rediseno): fase N — …`).
4. No hagas push ni merge a `main` salvo que Fran lo pida.
5. Si algo del plan choca con el código real, pará y preguntá. No improvises.

## Referencia visual

- `docs/diseno/png/` tiene las capturas de las 7 pantallas: escritorio a 1440 px y celular a 390 px.
- `docs/diseno/fuente/*.dc.html` es el HTML de esas mismas pantallas y es la fuente de verdad de las medidas: tamaños de letra, paddings, radios, colores y espaciados. Copiá los valores tal cual; no los redondees ni los ajustes a una grilla. Las imágenes ahí apuntan a `/_blob/…` y no cargan: sus equivalentes están en `public/projects/`.
- El diseño no incluye la vista del presupuestador: usa el mismo molde que la de Vinto, con sus datos.

## Identidad (no se cambia)

Tokens en `src/index.css` (`:root`):

| Token | Valor | Uso |
|---|---|---|
| `--color-blue` | `#0B1E2D` | Fondo |
| `--color-yellow` | `#DFAF2B` | Acento, nombre, links, botones |
| `--color-orange` | `#D45F1C` | Badges, óvalo de Herramientas, números de decisiones |
| `--color-white` | `#E6D5B8` | Crema: texto |

- Sombra dura: `10px 10px 0 4px #091A27` (tarjetas amarillas, panel Kubrick) y `8px 8px 0 #091A27` (marco blanco de las imágenes).
- Líneas divisorias: `rgba(230,213,184,.14)`. Superficie de tarjetas y formulario: `#0F2638`.
- Tipografías, solo estos pesos (ya están cargados en `index.html`): Montserrat 900 (nombre y títulos grandes), Space Grotesk 400 (subtítulos, índice de secciones, tracklist), IBM Plex Serif 400 (texto), Roboto Mono 700 (botones, nav, etiquetas). No agregues pesos ni familias.
- Botón: alto 39 px, padding 0 25 px, radio 20 px, borde 1 px amarillo. Variante normal azul con texto amarillo; variante rellena amarilla con texto azul. Partí de `components/ui/Button.tsx`.
- Se conservan: el logo espiral (`/Logo.png`), el GIF del cohete dentro de la tira de película (`.film-strip`), las letras recortadas "sobre mí" (`/letters/*.png`) sobre el patrón Kubrick con la tarjeta amarilla, el grano y la viñeta (`GrainOverlay`), la claqueta `SceneLabel` ("ESC. 0X"), el badge naranja, los chips amarillos, el óvalo naranja detrás de "Herramientas", la ficha técnica y "Toma 1 · ¡Acción!".
- Toda animación nueva respeta `prefers-reduced-motion`.

## Reglas de contenido

- Los textos salen de `docs/CONTENIDO.md`. No inventes copy: si falta algo, dejá un marcador visible `[FALTA: …]`.
- Vinto: se puede decir "en producción". **No afirmes que tiene clientes.**
- Presupuestador: **no linkees su repositorio**. No muestres nombres de clientes, la lista de precios ni el multiplicador de mano de obra. Usá solo las capturas de `public/projects/presupuestador/`.
- LinkedIn correcto: `https://www.linkedin.com/in/francisco-bover`. El viejo (`…-2757a0323`) aparece en `Contact.tsx` y `Footer.tsx`: reemplazalo.
- Repos de Vinto: `vinto-backend` y `vinto-frontend`. `vinto-backend-v2` ya no existe como nombre.

## Trampas conocidas del código actual

- `src/App.css` es un resto de la plantilla de Vite: limita `#root` a 1280 px, con 2rem de padding y texto centrado. Rompe el layout nuevo. Borrá el archivo y su import en `App.tsx`.
- `.container-max` usa `max-w-[--container-max]`. En Tailwind 4 eso genera `max-width: --container-max`, que es inválido. La sintaxis correcta es `max-w-(--container-max)`.
- `/textures/noise.png` se pide en 4 componentes y no existe (da 404). Sacá esas referencias: el grano ya lo pone `GrainOverlay`.
- `.bg-kubrick` apunta a `/public/kubrik.png` (2,4 MB). Usá `/textures/kubrick.webp` (49 KB).
- En `index.css`, `.nav-link` quedó anidado dentro de `.cta` por una llave de menos.
- `Logo.png` mide 70×70 px (se ve borroso en pantallas retina) y el favicon está declarado como `image/svg+xml` siendo PNG.
- `index.html` dice `lang="en"` y carga Fraunces, que solo usaba el bloque viejo de Vinto.
- El lint falla por un `any` en `Button.tsx`.
- `Reveal` usa un IntersectionObserver sobre el viewport. Funciona porque el scroll es el de la página: **no metas la columna central en un contenedor con `overflow: auto`**. Las columnas laterales van con `position: sticky`.
