import type { FeaturedProject, SlideImage } from "./types";

/** Dimensiones reales (public/projects/presupuestador/*.webp) para width/height y evitar saltos de layout. */
function img(name: string, width: number, height: number, alt: string): SlideImage {
  return { src: `/projects/presupuestador/${name}.webp`, width, height, alt };
}

export const presupuestador: FeaturedProject = {
  side: "A",
  slug: "presupuestador",
  track: "A2",
  title: "Presupuestador",
  kind: "App para taller",
  years: "2026",
  badge: "En producción",
  cardTagline:
    "App instalable para presupuestar muebles a medida en la casa del cliente, sin señal, y salir con el PDF enviado por WhatsApp.",
  pageTagline:
    "App instalable para que un fabricante de muebles a medida presupueste en la casa del cliente, sin señal, y salga con el PDF enviado por WhatsApp.",
  summary:
    "Para Bover Maderas, un taller de muebles de MDF a medida. El presupuesto, que antes llevaba horas entre el cuaderno y el taller, sale en la casa del cliente, mientras todavía está entusiasmado.",
  meta: [
    { k: "Rol", v: "Relevamiento → desarrollo" },
    { k: "Tipo", v: "PWA offline" },
    { k: "Tamaño", v: "128 commits · +850 tests" },
    { k: "Deploy", v: "Vercel" },
  ],
  cardChips: ["React", "TypeScript", "PWA", "Three.js"],
  stack: ["React 19", "TypeScript", "Zustand", "Dexie", "Workbox", "Three.js", "react-pdf", "Vitest"],
  // Sin link a la app (expondría la lista de precios) ni al repositorio.
  links: [],
  // "01-cuerpos..." tiene una versión "-card" al tamaño real de la tarjeta (máx. 124px de
  // ancho); el original se reusa a tamaño completo en el carrusel de "Pantallas". portada-3d
  // ya es lo bastante chico (616px) para su uso máximo acá (400px), no necesita variante.
  cardImages: [
    "/projects/presupuestador/portada-3d.webp",
    "/projects/presupuestador/01-cuerpos-total-en-vivo-card.webp",
  ],
  cardBadge: { label: "BOVER MADERAS", color: "#0C6C3C" },
  sections: {
    pantallas: {
      heading: "Pantallas",
      subtitle: "Todo el presupuesto, en el celular y sin señal.",
      slides: [
        {
          images: [img("portada-3d", 616, 452, "Render 3D de una cocina en L presupuestada en la app")],
          caption: "App instalable para que un fabricante de muebles a medida presupueste en la casa del cliente, sin señal, y salga con el PDF enviado por WhatsApp.",
        },
        {
          images: [img("01-cuerpos-total-en-vivo", 616, 1216, "Pantalla de cuerpos con el total en vivo")],
          caption: "La pared, los cuerpos y el total que cambia con cada toque",
        },
        {
          images: [
            img("02-3d-cocina-en-L", 616, 1216, "Vista 3D de una cocina en L"),
            img("03-3d-acabados", 616, 1216, "Vista 3D con acabados aplicados"),
            img("04-3d-despiece", 616, 1216, "Vista 3D con despiece de piezas"),
          ],
          caption: "Vista 3D: cocina en L, acabados y despiece",
        },
        {
          images: [img("05-terminaciones", 616, 1216, "Selector de terminaciones con color y textura")],
          caption: "Terminaciones con color, textura y precio",
        },
        {
          images: [img("06-pdf", 607, 829, "PDF de presupuesto generado")],
          caption: "El PDF que sale por WhatsApp",
        },
      ],
    },
    problema: {
      heading: "El problema",
      subtitle: "El cuello de botella no era la cuenta: era el hueco entre la visita y el envío.",
      paragraphs: [
        "Fernando fabrica muebles de MDF a medida. Para cada presupuesto viajaba a la casa, medía, dibujaba el mueble en un cuaderno, volvía al taller, calculaba placas, herrajes y precios a mano, armaba un PDF y lo mandaba por WhatsApp. Presupuestar es gratis, le llevaba horas y hace más de tres por semana.",
        "Relevé su cuaderno —bloques de cálculo reales— y sus PDFs. El hallazgo clave: **calcular material por área subestimaba entre 50% y 130%**, porque al cortar una placa no se reparte área, se consume largo.",
      ],
    },
    solucion: {
      heading: "La solución",
      paragraph:
        "Un flujo guiado —cliente, mueble, cuerpos, contenido, terminaciones, resumen y PDF— con un motor que hace el despiece completo y un plan de corte real sobre placas de 183 × 275 cm, no una estimación por área.",
    },
    funcionalidades: {
      heading: "Funcionalidades",
      subtitle: "Lo que ve el cliente y lo que pasa por detrás.",
      groups: [
        {
          heading: "En la casa del cliente",
          items: [
            {
              label: "La pantalla de cuerpos",
              text: "una barra proporcional al ancho de la pared. Tocando entre dos cuerpos se elige panel compartido o dos cajas, cada opción con su costo, y el total se actualiza con cada toque.",
            },
            {
              label: "Vista 3D",
              text: "girar, despiece con slider, abrir puertas y ver los acabados. Se arma con las mismas piezas que calcula el motor, así que también verifica el despiece.",
            },
            {
              label: "Modo cliente",
              text: "un interruptor oculta materiales y margen; Fernando gira el teléfono y se lo muestra.",
            },
            {
              label: "PDF profesional",
              text: "render 3D y descripción editable, en versión particular o empresa, compartido por WhatsApp desde el teléfono.",
            },
          ],
        },
        {
          heading: "Por detrás",
          items: [
            {
              label: "Motor de cálculo",
              text: "despiece, material según si la pieza se ve con las puertas cerradas, plan de corte por franjas con espesor de sierra y veta, herrajes y zócalo. Si una pieza no entra en la placa, el cálculo falla en vez de dar un precio falso.",
            },
            {
              label: "Lista de precios pensada para Argentina",
              text: "ajuste de toda la lista +X% de una vez, historial de versiones y aviso si pasaron 30 días. Cada presupuesto congela los precios que usó.",
            },
            {
              label: "100% sin señal",
              text: "guarda en cada cambio y permite respaldo en JSON.",
            },
          ],
        },
      ],
    },
    decisiones: {
      heading: "Decisiones",
      subtitle: "Principios de diseño",
      items: [
        {
          title: "Donde Fernando tiene criterio, la app sugiere y él decide",
          text: "Nunca lo bloquea: redondeo, bisagras, mano de obra. Además baja la resistencia a adoptarla: no siente que lo reemplaza.",
        },
        {
          title: "No es una herramienta de dibujo",
          text: "El lápiz siempre va a ser más rápido; se le gana en que el papel no calcula.",
        },
        {
          title: "Un número por cuerpo, no tres",
          text: "Alto y profundidad son del mueble. Es la diferencia entre una app usable y una planilla disfrazada.",
        },
        {
          title: "Datos locales antes que backend",
          text: "Dos usuarios, unos 15 presupuestos por mes y tiene que andar sin señal. La sincronización en la nube queda para una fase 2 sin rediseñar nada.",
        },
      ],
    },
    estado: {
      heading: "Estado",
      title: "Hecho: motor, precios, flujo completo, PDF y 3D",
      text: "128 commits en 12 días, más de 850 tests y cero advertencias de typecheck y lint. Lo desarrollé dirigiendo a Claude Code con una especificación de ~600 líneas, tareas acotadas y verificación en cada paso. Falta la prueba de fuego: Fernando presupuestando en la casa de un cliente real.",
    },
  },
};
