# franbover.dev

Portfolio de Francisco Bover, desarrollador full-stack. React 19 + TypeScript + Vite 7 + Tailwind 4, con `react-router` para las rutas y una vista propia por proyecto destacado.

## Comandos

```
npm run dev       # servidor de desarrollo
npm run build     # typecheck + build + prerender de meta tags por proyecto
npm run lint      # eslint
npm run preview   # sirve el build de dist/
```

## Deploy

Azure Static Web Apps vía GitHub Actions. Un push a `main` publica en producción; los PR hacia `main` generan un entorno de preview.

Reglas del proyecto y plan de trabajo en `CLAUDE.md` y `docs/`.
