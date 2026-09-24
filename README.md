# La Mamá de la Mamá Tattoo — web en Astro

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist listo para subir (Netlify, Vercel, hosting estático)
```

## Estructura
- `src/pages/index.astro` — la página, compone las secciones.
- `src/components/` — una sección por archivo (Hero, Archivo, Estudio, Cita…).
- `src/data/site.ts` — textos, piezas del archivo, zonas del cuerpo. Edita aquí el contenido.
- `src/scripts/` — interacción: parallax, scroll, galería, formulario → WhatsApp.
- `src/styles/global.css` — colores, tipografía y efectos.
- `public/assets/` — fotos y vídeo.

## Añadir una pieza al archivo
Sube la foto a `public/assets/` y añade una línea en `PIECES` de `src/data/site.ts`.
