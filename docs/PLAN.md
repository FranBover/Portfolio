# Plan del rediseño

Pasamos de una one-page vertical a una pantalla de tres columnas (izquierda y derecha fijas, el centro scrollea) y a una vista propia por proyecto, conservando la identidad. Referencia visual: `docs/diseno/`. Reglas fijas: `CLAUDE.md`. Textos: `docs/CONTENIDO.md`.

## Decisiones tomadas (no reabrir)

- **Scroll de la página + columnas laterales sticky.** Nada de contenedores con scroll propio.
- **Tres columnas desde `xl` (≥ 1280 px):** `grid-template-columns: 1fr 2fr 1fr`. A 1440 da 360 / 720 / 360, que es el diseño. En pantallas muy anchas el contenido del centro se limita a 760 px.
- **Por debajo de 1280 px, una sola columna** con el contenido centrado y `max-width: 720px`.
- **Header de 72 px, sticky.** Columnas laterales: `position: sticky; top: 72px; height: calc(100dvh - 72px)`, con `overflow-y: auto` solo como red de seguridad en pantallas bajas (probar en 1366×768).
- **Cada proyecto destacado tiene su ruta:** `/proyectos/vinto` y `/proyectos/presupuestador`. Esto reemplaza al modal.
- **Proyectos del Lado B sin página propia:** el link va directo a GitHub (↗).
- **Vista de proyecto en escritorio:** una sección por vez. El índice de la izquierda son links a `#pantallas`, `#problema`, `#solucion`, `#funcionalidades`, `#decisiones` y `#estado`, así cada sección se puede compartir. Si una sección no entra en la pantalla, la página scrollea normal.
- **Vista de proyecto en celular:** todas las secciones apiladas, con una barra de pestañas sticky debajo del header que lleva a cada una.
- **Herramientas como chips de texto.** Se dejan de usar los íconos de `/tools`.
- **Scroll-spy en el header:** el link activo cambia según la sección del centro que se está viendo (se ve en las pantallas "Inicio · al bajar").

---

## Fase 1 · Limpieza y esqueleto

- Arreglá todas las trampas de la sección "Trampas conocidas" de `CLAUDE.md`.
- Instalá `react-router` (v7) y armá las rutas: `/` (Inicio), `/proyectos/:slug` (Proyecto) y cualquier otra que redirija a `/`.
- Creá `public/staticwebapp.config.json` para que Azure no dé 404 al recargar una ruta:

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/projects/*", "/letters/*", "/textures/*", "/contact/*", "/*.{png,jpg,gif,webp,svg,ico,json,txt}"]
  }
}
```

- Armá el layout con cajas vacías: `Header` y `ThreeColumnLayout` (con slots `left`, `center` y `right`).
- El `GrainOverlay` queda como está, encima de todo.

**Lista cuando:** build y lint dan cero errores; a 1440 las columnas de los costados quedan quietas mientras baja el centro, y la rueda del mouse funciona sobre cualquier columna; a 390 se ve todo en una columna; en `npm run preview`, recargar `/proyectos/vinto` no da 404.

## Fase 2 · Datos

- Creá `src/data/projects.ts` con un tipo `Project` y cargá los proyectos de `docs/CONTENIDO.md`. Ningún componente escribe textos de proyectos a mano.
- Estructura sugerida (ajustala si hace falta, pero mantené la idea de "datos, no JSX"):

```ts
type Slide = { images: { src: string; alt: string; device: 'phone' | 'desktop' }[]; caption: string };
type Section = { id: 'pantallas' | 'problema' | 'solucion' | 'funcionalidades' | 'decisiones' | 'estado'; label: string; title?: string };
type Project = {
  slug: string; track: string; side: 'A' | 'B'; title: string; kind: string; years: string;
  status?: string; tagline: string; summary?: string; meta?: { k: string; v: string }[];
  stack: string[]; links: { label: string; href: string; primary?: boolean }[];
  cover?: string; slides?: Slide[]; sections?: Section[]; github?: string;
};
```

- Los contenidos largos de cada sección (problema, funcionalidades, decisiones, estado) pueden vivir en el mismo archivo o en uno por proyecto dentro de `src/data/`.

**Lista cuando:** `projects.ts` tiene los 6 proyectos (2 del Lado A y 4 del Lado B) con todos los datos de `CONTENIDO.md`, y typecheck pasa.

## Fase 3 · Inicio

Guiate por las PNG "Inicio · arriba", "Inicio · al bajar: proyectos", "Inicio · al bajar: herramientas y contacto" y "Celular · Inicio completo".

- **Header:** logo espiral y nombre a la izquierda; nav centrada (Inicio, Proyectos, Herramientas, Contacto) con el subrayado amarillo en el link activo; botón "Hablemos" a la derecha. En celular: logo, nombre y el menú hamburguesa actual.
- **Columna izquierda:** nombre, rol, redes (botones redondos de 44 px) y el tracklist Lado A / Lado B abajo.
- **Columna central:** ESC. 01 (frase + panel Kubrick con las letras recortadas y la tarjeta amarilla), ESC. 02 (tarjetas grandes de Vinto y del presupuestador), ESC. 03 (herramientas en dos columnas de chips) y ESC. 04 (contacto).
- **Columna derecha:** estado "Disponible", tira de película con el GIF, ficha técnica y, abajo, el link de WhatsApp y el ©.
- **Tarjeta de proyecto:** reutiliza el lenguaje de `ProjectCard.tsx` (semáforos, chips arriba a la derecha, marco blanco con sombra dura, título en pastilla amarilla superpuesta, track abajo a la derecha). La imagen es una composición de capturas de `public/projects/<slug>/`, como en el diseño.
- **Celular:** una columna. El contenido de la columna derecha pasa arriba (estado y GIF) y al final (la ficha técnica como tarjeta amarilla, debajo del formulario).
- Mantené `Reveal` en la entrada de las tarjetas y las secciones.

**Lista cuando:** coincide con las cuatro PNG a 1440 y a 390; el scroll-spy marca la sección correcta; los links del tracklist llevan a `/proyectos/vinto`, `/proyectos/presupuestador` o a GitHub, según el caso.

## Fase 4 · Vista de proyecto

Guiate por "Proyecto Vinto · 01 Pantallas", "Proyecto Vinto · 05 Decisiones técnicas" y "Celular · Proyecto Vinto".

- **Izquierda:** volver, track, título, badge, bajada e índice de secciones. La activa va en amarillo con →.
- **Centro:** la sección activa, con su contador ("01 / 06") y los botones anterior y siguiente abajo.
- **Derecha:** resumen, ficha (rol, tipo, tamaño, deploy), chips de stack, links y "Siguiente proyecto".
- **Carrusel sin librerías:**
  - Escritorio: flechas, miniaturas y teclado (← y → cuando el carrusel tiene foco).
  - Celular: scroll horizontal con `scroll-snap` y puntos.
  - Las capturas de celular se muestran de a tres por slide y las de escritorio de a una (o de a dos si son modales), según `slides` en los datos.
  - Cada imagen lleva `width` y `height` para evitar saltos, `alt` descriptivo y `loading="lazy"` salvo la primera.
- El presupuestador usa el mismo molde con sus propias secciones y sin link a repo.
- Actualizá `document.title` por ruta.

**Lista cuando:** coincide con las tres PNG; cambiar de sección actualiza el hash y se puede volver con el botón atrás del navegador; el carrusel funciona con mouse, teclado y dedo.

## Fase 5 · Contacto

- Mantené el envío actual por FormSubmit (AJAX, honeypot, estados enviando/enviado/error) y el endpoint tal cual.
- Aplicá los textos nuevos, los `label` visibles y el estilo del diseño.

**Lista cuando:** se envía un mensaje de prueba desde el preview y llega.

## Fase 6 · Responsive, accesibilidad y animación

- Probá a 390, 768, 1024, 1280, 1366×768, 1440 y 1920.
- Navegación completa con teclado y `focus-visible` en amarillo.
- Objetivos táctiles de 44 px como mínimo en celular.
- Contraste de 4,5:1 en textos chicos.
- `prefers-reduced-motion` en todas las animaciones.
- `aria-label` en los botones que son solo ícono.

**Lista cuando:** no hay scroll horizontal en ningún ancho y Lighthouse de accesibilidad (mobile) da 95 o más.

## Fase 7 · SEO y compartir

- `meta description`, `canonical`, Open Graph y Twitter card en `index.html`, con los textos de `CONTENIDO.md`. La imagen Open Graph es 1200×630: `[FALTA: imagen OG]`.
- Opcional, pero recomendado para los posts de LinkedIn: prerender de `/proyectos/*` para que cada proyecto tenga su propia vista previa al pegar el link. Proponé la opción más simple compatible con Vite y Azure antes de instalar nada.
- Limpieza: borrá los assets que ya no se usan (`public/tools/*`, `public/footer/rayas.png`, `public/contact/bg.jpg`, `public/projects/*.png` viejos, `public/kubrik.png`, `src/assets/react.svg`, `src/assets/Logo.png` si queda duplicado) y los componentes viejos que quedaron sin uso.
- Reemplazá el README de la plantilla de Vite por uno propio y corto.

## Fase 8 · QA y publicación

- Abrí un PR de `rediseno` a `main` y probá en el entorno de preview de Azure, también en un celular real.
- Lighthouse mobile con 90 o más en performance, accesibilidad y SEO.
- El merge a `main` publica en producción: lo hace Fran.
