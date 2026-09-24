import type { FeaturedProject, SlideImage } from "./types";

/** Dimensiones reales (public/projects/vinto/*.webp) para width/height y evitar saltos de layout. */
function img(name: string, width: number, height: number, alt: string): SlideImage {
  return { src: `/projects/vinto/${name}.webp`, width, height, alt };
}

export const vinto: FeaturedProject = {
  side: "A",
  slug: "vinto",
  track: "A1",
  title: "Vinto",
  kind: "Tienda online",
  years: "2025 — hoy",
  badge: "En producción",
  cardTagline:
    "Plataforma para que negocios chicos de cualquier rubro vendan online: tienda en un link propio y pedidos en vivo.",
  pageTagline:
    "Plataforma para que negocios chicos de cualquier rubro vendan online, sin montar infraestructura propia.",
  summary:
    "Cada negocio tiene su tienda en un link propio y un panel donde recibe los pedidos en tiempo real. Lo relevé, lo diseñé en Figma, lo desarrollé de punta a punta y lo opero solo.",
  meta: [
    { k: "Rol", v: "Relevamiento → operación" },
    { k: "Tipo", v: "SaaS multi-tenant" },
    { k: "Tamaño", v: "72 endpoints · ~21k líneas" },
    { k: "Deploy", v: "Push a main = deploy" },
  ],
  cardChips: ["React", "C#", ".NET", "SQL Server", "Azure"],
  stack: ["React 19", "TypeScript", ".NET 9", "SQL Server", "SignalR", "Azure", "Mercado Pago"],
  cardLink: { label: "vintoapp.com", href: "https://vintoapp.com" },
  links: [
    { label: "Ver demo en vivo", href: "https://vintoapp.com/ejemplo" },
    { label: "GitHub · backend", href: "https://github.com/FranBover/vinto-backend" },
    { label: "GitHub · frontend", href: "https://github.com/FranBover/vinto-frontend" },
  ],
  // Composición de la tarjeta de Inicio (Inicio-proyectos.dc.html / Celular-inicio.dc.html):
  // panel de categorías de fondo + tienda y producto con variantes superpuestos en celular.
  cardImages: [
    "/projects/vinto/11-panel-categorias.webp",
    "/projects/vinto/01-tienda-inicio.webp",
    "/projects/vinto/03-producto-variantes.webp",
  ],
  sections: {
    pantallas: {
      heading: "Pantallas",
      subtitle: "La tienda vive en el celular; el panel, en la compu.",
      slides: [
        {
          images: [
            img("01-tienda-inicio", 616, 1009, "Tienda de Vinto: pantalla de inicio con categorías"),
            img("02-tienda-categoria", 616, 1009, "Tienda de Vinto: menú de una categoría"),
            img("03-producto-variantes", 616, 1164, "Producto con variantes de talle y color"),
          ],
          caption: "Tienda · menú por categorías y producto con variantes",
        },
        {
          images: [
            img("04-producto-extras", 616, 1164, "Producto con extras seleccionables"),
            img("05-carrito", 616, 1009, "Carrito de compra de Vinto"),
            img("06-checkout-mapa", 616, 1216, "Checkout con selector de dirección en mapa"),
          ],
          caption: "Pedido · extras, carrito y checkout con mapa",
        },
        {
          images: [
            img("07-checkout-pago", 616, 1164, "Checkout: selección de medio de pago"),
            img("08-pedido-recibido", 616, 1009, "Confirmación de pedido recibido"),
          ],
          caption: "Pago y confirmación por WhatsApp",
        },
        {
          images: [img("10-panel-pedidos", 1512, 700, "Panel de Vinto: pedidos en vivo")],
          caption: "Panel · pedidos en vivo",
        },
        {
          images: [img("11-panel-categorias", 1540, 700, "Panel de Vinto: catálogo con categorías")],
          caption: "Panel · catálogo con drag & drop",
        },
        {
          images: [
            img("13-panel-descuento", 995, 700, "Panel de Vinto: configuración de un descuento"),
            img("14-panel-cupon", 1176, 700, "Panel de Vinto: configuración de un cupón"),
          ],
          caption: "Panel · descuentos y cupones",
        },
        {
          images: [],
          caption: "Panel · reportes",
          missingNote: "[FALTA: captura del mockup de reportes]",
        },
      ],
    },
    problema: {
      heading: "El problema",
      subtitle: "Nació de un negocio que tomaba pedidos por teléfono.",
      paragraphs: [
        "Alguien anotaba a mano, se equivocaba con los precios, no quedaba registro y no había forma de saber qué se vendía más.",
        "Al modelarlo quedó claro que el problema no era la comida: **cualquier negocio chico necesita vender online sin pagar infraestructura que no puede sostener**. El dominio pasó a ser genérico: productos, variantes, stock, cupones y pedidos.",
      ],
    },
    solucion: {
      heading: "La solución",
      paragraph:
        "Una tienda por link y un panel que recibe los pedidos en vivo. Relevado, diseñado y desarrollado de punta a punta, y operado solo.",
    },
    funcionalidades: {
      heading: "Funcionalidades",
      subtitle: "Dos caras: la tienda y el panel.",
      groups: [
        {
          heading: "Tienda pública · mobile-first",
          items: [
            {
              label: "Variantes en dos dimensiones",
              text: "talle × color, cada combinación con su precio, stock y SKU; extras con precio adicional.",
            },
            {
              label: "Descuentos y cupones",
              text: "se re-validan solos cuando cambia el total.",
            },
            {
              label: "Checkout con retiro o delivery",
              text: "autocompletado de direcciones, selector en mapa y datos según tipo de edificación.",
            },
            {
              label: "Efectivo, transferencia o Mercado Pago",
              text: "cobra directo en la cuenta del negocio; confirmación redactada para WhatsApp.",
            },
          ],
        },
        {
          heading: "Panel del negocio · tiempo real",
          items: [
            {
              label: "Pedidos en vivo",
              text: "sin recargar, con aviso al entrar un pedido o confirmarse un pago; estados, filtros y notas internas.",
            },
            {
              label: "Catálogo con drag & drop",
              text: "categorías reordenables, variantes por combinatoria y subida de imágenes.",
            },
            {
              label: "Stock con historial",
              text: "alertas de stock bajo y auto-deshabilitar al agotarse.",
            },
            {
              label: "Reportes",
              text: "ventas, horas pico, ranking de productos y métodos de pago. Mercado Pago en un clic.",
            },
          ],
        },
      ],
    },
    decisiones: {
      heading: "Decisiones técnicas",
      subtitle: "Cuatro decisiones que sostienen el producto.",
      items: [
        {
          title: "Multi-tenant sin una base por cliente",
          text: "Esquema compartido con el negocio como discriminador: una base por cliente multiplicaba costo e infraestructura. En el panel, el negocio sale del token firmado; en la tienda, del link.",
        },
        {
          title: "Tiempo real sin espionaje",
          text: "SignalR con WebSockets en vez de polling. El canal de cada negocio lo deriva el servidor desde el token: nadie con una sesión válida puede escuchar los pedidos de otro.",
        },
        {
          title: "Cada negocio cobra en su propia cuenta",
          text: "OAuth de Mercado Pago por negocio, tokens cifrados con AES-GCM, webhooks con firma HMAC verificada e idempotencia garantizada por un índice único, no por un if.",
        },
        {
          title: "El servidor manda",
          text: "El total del checkout es informativo: el backend recalcula. El pago se confirma consultando el pedido y el carrito no se vacía hasta confirmar.",
        },
      ],
    },
    estado: {
      heading: "Estado",
      title: "En producción desde 2025",
      text: "Más de 70 endpoints y ~21 mil líneas entre backend y frontend. La demo está viva y funciona de punta a punta. Todavía sin negocios usándolo de forma estable: el próximo paso es el primer cliente real.",
    },
  },
};
