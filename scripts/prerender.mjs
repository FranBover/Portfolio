// Postbuild: genera dist/proyectos/<slug>/index.html con meta tags propios por
// proyecto, así cada link a /proyectos/<slug> tiene su propia vista previa al
// compartirlo (LinkedIn, WhatsApp, etc. no ejecutan JS: leen el HTML tal cual
// llega). Azure Static Web Apps sirve estos archivos estáticos directamente
// -antes de aplicar navigationFallback-, así que el resto de la SPA sigue
// funcionando igual para quien navega.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://franbover.dev";
const DIST_DIR = path.resolve(import.meta.dirname, "..", "dist");

// Textos tomados de docs/CONTENIDO.md — si cambian ahí, actualizar acá también.
const routes = [
  {
    slug: "vinto",
    title: "Vinto · Francisco Bover",
    description:
      "Plataforma para que negocios chicos de cualquier rubro vendan online, sin montar infraestructura propia.",
  },
  {
    slug: "presupuestador",
    title: "Presupuestador · Francisco Bover",
    description:
      "App instalable para que un fabricante de muebles a medida presupueste en la casa del cliente, sin señal, y salga con el PDF enviado por WhatsApp.",
  },
];

function withRouteMeta(html, { slug, title, description }) {
  const url = `${SITE_URL}/proyectos/${slug}`;
  return html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${description}" />`);
}

const shell = await readFile(path.join(DIST_DIR, "index.html"), "utf8");

for (const route of routes) {
  const html = withRouteMeta(shell, route);
  const outDir = path.join(DIST_DIR, "proyectos", route.slug);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html, "utf8");
}

console.log(`prerender: meta por proyecto generada para ${routes.map((r) => r.slug).join(", ")}`);
