export type ToolCategory = { heading: string; items: string[] };

/** Orden fijo: en desktop se acomoda en una grilla de 2 columnas, fila por fila. */
export const toolCategories: ToolCategory[] = [
  { heading: "Frontend", items: ["React 19", "TypeScript", "Vite", "Tailwind", "Zustand", "React Router"] },
  { heading: "Backend", items: ["C#", ".NET 9", "ASP.NET Core", "EF Core", "SQL Server", "SignalR"] },
  { heading: "Nube y CI/CD", items: ["Azure", "GitHub Actions", "Azure Pipelines", "Vercel"] },
  { heading: "Offline / PWA", items: ["IndexedDB · Dexie", "Workbox"] },
  { heading: "3D, gráficos y PDF", items: ["Three.js", "Recharts", "Leaflet", "react-pdf"] },
  { heading: "Integraciones", items: ["Mercado Pago", "OpenStreetMap", "WhatsApp"] },
  { heading: "Calidad", items: ["Vitest", "Testing Library", "ESLint"] },
  { heading: "IA", items: ["Claude Code", "Cursor", "Codex"] },
  { heading: "Diseño", items: ["Figma"] },
  { heading: "Documentación", items: ["Confluence"] },
];
