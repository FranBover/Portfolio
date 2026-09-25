# Contenido del portfolio

Todos los textos aprobados. Lo que está entre corchetes (`[FALTA: …]`, `[DECIDIR: …]`) queda como marcador visible hasta que Fran lo complete.

---

## Global

- **Título del sitio:** Francisco Bover · Desarrollador full-stack
- **Meta description:** Desarrollador full-stack en Córdoba, Argentina. Diseño y desarrollo software que resuelve problemas reales de negocio, de punta a punta.
- **Título por proyecto:** `Vinto · Francisco Bover`, `Presupuestador · Francisco Bover`. Su description es la bajada de cada uno.

### Links

| Red | URL |
|---|---|
| GitHub | https://github.com/FranBover |
| LinkedIn | https://www.linkedin.com/in/francisco-bover |
| WhatsApp | https://wa.me/5493512308157?text=Hola%20Fran%2C%20te%20escribo%20desde%20tu%20portafolio |
| Instagram | https://www.instagram.com/franfranfranfrna/ |

### Header

- **Nav:** Inicio · Proyectos · Herramientas · Contacto
- **Botón:** Hablemos (lleva a `#contacto`)

---

## Inicio

### Columna izquierda

- **Nombre:** Francisco / Bover (en dos líneas)
- **Rol:** Desarrollador full-stack.
- **Redes:** GitHub, LinkedIn, WhatsApp, Instagram (solo íconos, con `aria-label`)
- **Tracklist:** etiquetas "Lado A" y "Lado B", con los proyectos listados más abajo.

### Columna derecha

- **Estado:** Disponible — Para un puesto fijo o por proyecto.
- **Tira de película:** `/gif.gif`, con alt "Cohete despegando".
- **Ficha técnica:**
  - Dirección: Francisco Bover
  - Rubro: Desarrollo & diseño
  - Locación: Córdoba, Argentina
  - Banda sonora: Funk & soul
- **Abajo:** "Escribime por WhatsApp ↗" · "© {año actual}"

### ESC. 01 · Sobre mí

**Frase:** Diseño y desarrollo software que resuelve **problemas reales de negocio** — de punta a punta. *(el tramo en negrita va en amarillo)*

**Tarjeta amarilla:**
> Desarrollador full-stack. Agarro un problema de negocio real, lo relevo, lo diseño y lo llevo a producción — solo, de punta a punta. Trabajo con C#/.NET, React y TypeScript, y complemento con agentes de IA (Claude Code, Cursor) para moverme rápido sin bajar la calidad. Antes fui técnico electricista; ahora resuelvo con código lo mismo que antes resolvía con las manos: encontrar dónde está la falla y arreglarla.

### ESC. 02 · Proyectos

- **Título:** Proyectos, con el badge "Hasta ahora".
- **Botón de cada tarjeta:** "Ver caso →"

### ESC. 03 · Herramientas

**Bajada:** Lo que uso hoy en producción, en Vinto y en el presupuestador.

| Categoría | Chips |
|---|---|
| Frontend | React 19 · TypeScript · Vite · Tailwind · Zustand · React Router |
| Backend | C# · .NET 9 · ASP.NET Core · EF Core · SQL Server · SignalR |
| Nube y CI/CD | Azure · GitHub Actions · Azure Pipelines · Vercel |
| Offline / PWA | IndexedDB · Dexie · Workbox |
| 3D, gráficos y PDF | Three.js · Recharts · Leaflet · react-pdf |
| Integraciones | Mercado Pago · OpenStreetMap · WhatsApp |
| Calidad | Vitest · Testing Library · ESLint |
| IA | Claude Code · Cursor · Codex |
| Diseño | Figma |
| Documentación | Confluence |

### ESC. 04 · Contacto

- **Título:** Hablemos.
- **Bajada:** Contame tu idea, tu proyecto o el puesto que buscás cubrir. Te respondo a la brevedad.
- **Formulario:**
  - Título: "Mandame un mensaje"
  - Campos: "Tu e-mail" (placeholder: nombre@empresa.com) y "Mensaje" (placeholder: Contame qué necesitás resolver…)
  - Botón: "Enviar" / "Enviando…"
  - Guiño: "Toma 1 · ¡Acción!"
  - Mensajes de estado: se mantienen los actuales.
- **Celular, al final:** la ficha técnica y "Encontrame en" con las cuatro redes.
- **Footer en celular:** "Hecho a mano en Córdoba · © {año}" · "Arriba ↑"

---

## Proyectos · Lado A

### A1 · Vinto

- **slug:** `vinto` · **kind (tracklist):** Tienda online · **años:** 2025 — hoy · **badge:** En producción
- **Bajada (tarjeta):** Plataforma para que negocios chicos de cualquier rubro vendan online: tienda en un link propio y pedidos en vivo.
- **Bajada (vista de proyecto):** Plataforma para que negocios chicos de cualquier rubro vendan online, sin montar infraestructura propia.
- **Resumen:** Cada negocio tiene su tienda en un link propio y un panel donde recibe los pedidos en tiempo real. Lo relevé, lo diseñé en Figma, lo desarrollé de punta a punta y lo opero solo.
- **Ficha:**
  - Rol: Relevamiento → operación
  - Tipo: SaaS multi-tenant
  - Tamaño: 72 endpoints · ~21k líneas
  - Deploy: Push a main = deploy
- **Chips de la tarjeta:** React · C# · .NET · SQL Server · Azure
- **Stack (vista):** React 19 · TypeScript · .NET 9 · SQL Server · SignalR · Azure · Mercado Pago
- **Links:**
  - Ver demo en vivo ↗ → https://vintoapp.com/ejemplo
  - GitHub · backend ↗ → https://github.com/FranBover/vinto-backend
  - GitHub · frontend ↗ → https://github.com/FranBover/vinto-frontend
  - En la tarjeta: "vintoapp.com ↗" → https://vintoapp.com

**01 · Pantallas** — *La tienda vive en el celular; el panel, en la compu.*

| Slide | Imágenes (`public/projects/vinto/`) | Caption |
|---|---|---|
| 1 | 01-tienda-inicio, 02-tienda-categoria, 03-producto-variantes | Tienda · menú por categorías y producto con variantes |
| 2 | 04-producto-extras, 05-carrito, 06-checkout-mapa | Pedido · extras, carrito y checkout con mapa |
| 3 | 07-checkout-pago, 08-pedido-recibido | Pago y confirmación por WhatsApp |
| 4 | 10-panel-pedidos | Panel · pedidos en vivo |
| 5 | 11-panel-categorias | Panel · catálogo con drag & drop |
| 6 | 13-panel-descuento, 14-panel-cupon | Panel · descuentos y cupones |
| 7 | `[FALTA: captura del mockup de reportes]` | Panel · reportes |

**02 · El problema** — *Nació de un negocio que tomaba pedidos por teléfono.*

> Alguien anotaba a mano, se equivocaba con los precios, no quedaba registro y no había forma de saber qué se vendía más.
>
> Al modelarlo quedó claro que el problema no era la comida: **cualquier negocio chico necesita vender online sin pagar infraestructura que no puede sostener**. El dominio pasó a ser genérico: productos, variantes, stock, cupones y pedidos.

**03 · La solución**

> Una tienda por link y un panel que recibe los pedidos en vivo. Relevado, diseñado y desarrollado de punta a punta, y operado solo.

**04 · Funcionalidades** — *Dos caras: la tienda y el panel.*

*Tienda pública · mobile-first*
- **Variantes en dos dimensiones:** talle × color, cada combinación con su precio, stock y SKU; extras con precio adicional.
- **Descuentos y cupones:** se re-validan solos cuando cambia el total.
- **Checkout con retiro o delivery:** autocompletado de direcciones, selector en mapa y datos según tipo de edificación.
- **Efectivo, transferencia o Mercado Pago:** cobra directo en la cuenta del negocio; confirmación redactada para WhatsApp.

*Panel del negocio · tiempo real*
- **Pedidos en vivo:** sin recargar, con aviso al entrar un pedido o confirmarse un pago; estados, filtros y notas internas.
- **Catálogo con drag & drop:** categorías reordenables, variantes por combinatoria y subida de imágenes.
- **Stock con historial:** alertas de stock bajo y auto-deshabilitar al agotarse.
- **Reportes:** ventas, horas pico, ranking de productos y métodos de pago. Mercado Pago en un clic.

**05 · Decisiones técnicas** — *Cuatro decisiones que sostienen el producto.*

1. **Multi-tenant sin una base por cliente.** Esquema compartido con el negocio como discriminador: una base por cliente multiplicaba costo e infraestructura. En el panel, el negocio sale del token firmado; en la tienda, del link.
2. **Tiempo real sin espionaje.** SignalR con WebSockets en vez de polling. El canal de cada negocio lo deriva el servidor desde el token: nadie con una sesión válida puede escuchar los pedidos de otro.
3. **Cada negocio cobra en su propia cuenta.** OAuth de Mercado Pago por negocio, tokens cifrados con AES-GCM, webhooks con firma HMAC verificada e idempotencia garantizada por un índice único, no por un if.
4. **El servidor manda.** El total del checkout es informativo: el backend recalcula. El pago se confirma consultando el pedido y el carrito no se vacía hasta confirmar.

**06 · Estado** — bloque amarillo

- **Título:** En producción desde 2025
- **Texto:** Más de 70 endpoints y ~21 mil líneas entre backend y frontend. La demo está viva y funciona de punta a punta. Todavía sin negocios usándolo de forma estable: el próximo paso es el primer cliente real.

---

### A2 · Presupuestador

- **slug:** `presupuestador` · **kind:** App para taller · **años:** 2026 · **badge:** En producción
- **Bajada (tarjeta):** App instalable para presupuestar muebles a medida en la casa del cliente, sin señal, y salir con el PDF enviado por WhatsApp.
- **Bajada (vista):** App instalable para que un fabricante de muebles a medida presupueste en la casa del cliente, sin señal, y salga con el PDF enviado por WhatsApp.
- **Resumen:** Para Bover Maderas, un taller de muebles de MDF a medida. El presupuesto, que antes llevaba horas entre el cuaderno y el taller, sale en la casa del cliente, mientras todavía está entusiasmado. `[DECIDIR: confirmar con Fernando que se puede nombrar a él y a Bover Maderas]`
- **Ficha:**
  - Rol: Relevamiento → desarrollo
  - Tipo: PWA offline
  - Tamaño: 128 commits · +850 tests
  - Deploy: Vercel
- **Chips de la tarjeta:** React · TypeScript · PWA · Three.js
- **Stack (vista):** React 19 · TypeScript · Zustand · Dexie · Workbox · Three.js · react-pdf · Vitest
- **Links:** `[DECIDIR: ¿link público a la app? Hoy expone la lista de precios por defecto]`. **Sin link al repositorio.**
- **Portada de la tarjeta:** `portada-3d.webp` + `01-cuerpos-total-en-vivo.webp`, con la etiqueta verde "BOVER MADERAS" (`#0C6C3C`).

**01 · Pantallas** — *Todo el presupuesto, en el celular y sin señal.*

| Slide | Imágenes (`public/projects/presupuestador/`) | Caption |
|---|---|---|
| 1 | 01-cuerpos-total-en-vivo | La pared, los cuerpos y el total que cambia con cada toque |
| 2 | 02-3d-cocina-en-L, 03-3d-acabados, 04-3d-despiece | Vista 3D: cocina en L, acabados y despiece |
| 3 | 05-terminaciones | Terminaciones con color, textura y precio |
| 4 | 06-pdf | El PDF que sale por WhatsApp |

**02 · El problema** — *El cuello de botella no era la cuenta: era el hueco entre la visita y el envío.*

> Fernando fabrica muebles de MDF a medida. Para cada presupuesto viajaba a la casa, medía, dibujaba el mueble en un cuaderno, volvía al taller, calculaba placas, herrajes y precios a mano, armaba un PDF y lo mandaba por WhatsApp. Presupuestar es gratis, le llevaba horas y hace más de tres por semana.
>
> Relevé su cuaderno —bloques de cálculo reales— y sus PDFs. El hallazgo clave: **calcular material por área subestimaba entre 50% y 130%**, porque al cortar una placa no se reparte área, se consume largo.

**03 · La solución**

> Un flujo guiado —cliente, mueble, cuerpos, contenido, terminaciones, resumen y PDF— con un motor que hace el despiece completo y un plan de corte real sobre placas de 183 × 275 cm, no una estimación por área.

**04 · Funcionalidades** — *Lo que ve el cliente y lo que pasa por detrás.*

*En la casa del cliente*
- **La pantalla de cuerpos:** una barra proporcional al ancho de la pared. Tocando entre dos cuerpos se elige panel compartido o dos cajas, cada opción con su costo, y el total se actualiza con cada toque.
- **Vista 3D:** girar, despiece con slider, abrir puertas y ver los acabados. Se arma con las mismas piezas que calcula el motor, así que también verifica el despiece.
- **Modo cliente:** un interruptor oculta materiales y margen; Fernando gira el teléfono y se lo muestra.
- **PDF profesional:** render 3D y descripción editable, en versión particular o empresa, compartido por WhatsApp desde el teléfono.

*Por detrás*
- **Motor de cálculo:** despiece, material según si la pieza se ve con las puertas cerradas, plan de corte por franjas con espesor de sierra y veta, herrajes y zócalo. Si una pieza no entra en la placa, el cálculo falla en vez de dar un precio falso.
- **Lista de precios pensada para Argentina:** ajuste de toda la lista +X% de una vez, historial de versiones y aviso si pasaron 30 días. Cada presupuesto congela los precios que usó.
- **100% sin señal:** guarda en cada cambio y permite respaldo en JSON.

**05 · Decisiones** — *Principios de diseño*

1. **Donde Fernando tiene criterio, la app sugiere y él decide.** Nunca lo bloquea: redondeo, bisagras, mano de obra. Además baja la resistencia a adoptarla: no siente que lo reemplaza.
2. **No es una herramienta de dibujo.** El lápiz siempre va a ser más rápido; se le gana en que el papel no calcula.
3. **Un número por cuerpo, no tres.** Alto y profundidad son del mueble. Es la diferencia entre una app usable y una planilla disfrazada.
4. **Datos locales antes que backend.** Dos usuarios, unos 15 presupuestos por mes y tiene que andar sin señal. La sincronización en la nube queda para una fase 2 sin rediseñar nada.

**06 · Estado** — bloque amarillo

- **Título:** Hecho: motor, precios, flujo completo, PDF y 3D
- **Texto:** 128 commits en 12 días, más de 850 tests y cero advertencias de typecheck y lint. Lo desarrollé dirigiendo a Claude Code con una especificación de ~600 líneas, tareas acotadas y verificación en cada paso. Falta la prueba de fuego: Fernando presupuestando en la casa de un cliente real.

---

## Proyectos · Lado B (link directo a GitHub)

| Track | Título | Kind | Descripción | GitHub |
|---|---|---|---|---|
| B1 | LabSystem | Gestión · .NET | Sistema de gestión para TecnoDiagnostica, empresa de insumos de laboratorio. Proyecto final de carrera en equipo; fui referente técnico. | https://github.com/FranBover/LabSystem |
| B2 | Sistema de gestión | WinForms | Stock, gastos y ventas con reportes gráficos para una PyME gastronómica. | https://github.com/FranBover/SistemaGestion |
| B3 | Reloj Clima | React | El fondo cambia según el clima. | https://github.com/FranBover/reloj-clima |
| B4 | Portfolio | Este sitio | Este sitio, diseñado en Figma. | https://github.com/FranBover/Portfolio |

---

## Textos de interfaz de la vista de proyecto

- "← Todos los proyectos" · "En este caso" · "Resumen" · "Siguiente proyecto"
- Contador de secciones: "01 / 06"
- Botones de sección: "← Anterior" · "{nombre de la siguiente} →"
- Pestañas en celular: Pantallas · Problema · Solución · Funcionalidades · Decisiones · Estado
- Carrusel: `aria-label` "Anterior" / "Siguiente"; en celular, "Deslizá →"

---

## Antes de difundir (fuera de este repo)

- **Checkout de Vinto:** los tiles de OpenStreetMap vienen bloqueados en producción ("Access blocked"). Hay que arreglarlo antes de mandar gente a la demo.
- **Tienda de Vinto:** las etiquetas "Color" y "Talle" están invertidas en el detalle de producto.
- **README del presupuestador:** está desactualizado; no se linkea, pero conviene corregirlo.
