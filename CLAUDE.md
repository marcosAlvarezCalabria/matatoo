# La Mamá de la Mamá Tattoo — web del estudio

Web para **María Acosta** (@lamamadelamamatattoo), tatuadora de realismo black & grey en Madrid que abre estudio propio (sep 2026). La construye Marcos (marcos-alvarez.dev). Responde en español.

## Stack y comandos
- Astro 5, sitio estático. Deploy en Netlify (`netlify.toml`: build `npm run build`, publica `dist/`).
- `npm run dev` → http://localhost:4321 · `npm run build` → `dist/` · `npm run preview`
- Dominio previsto: https://lamamadelamamatattoo.com (`astro.config.mjs`, campo `site`).

## Estructura
- `src/pages/index.astro` — compone las secciones.
- `src/components/` — una sección por archivo: Nav, Hero, Estudio, Archivo, Estilos, Proceso, Formacion, Sobre, Cita, Footer.
- `src/data/site.ts` — **todo el contenido** (textos, piezas del archivo `PIECES`). Edita contenido aquí, no en los componentes.
- `src/scripts/fx.ts` — interacción: parallax, scroll, galería/lightbox, formulario → WhatsApp.
- `src/styles/global.css` — tokens de color, tipografía, efectos.
- `src/layouts/Base.astro` — head, meta, fuentes.
- `public/reserva/` + `public/tattoo-reserva.js` — selector de zona 3D (three.js desde unpkg). Se abre en ventana emergente desde el formulario de Cita (`?modo=form`) y devuelve las zonas por `postMessage` (evento `tattoo-reserva:zonas`). Tema B/N en `public/reserva/brand.css`. Modelo CC BY (crédito en el Footer).
- `public/assets/` — fotos (`lamama-post-*.jpg`), vídeos (`hero.mp4`, `sobre.mp4`), logos.
- Añadir pieza: foto en `public/assets/` + una línea en `PIECES` de `src/data/site.ts`.

## Datos reales (de su Instagram) — no inventar otros
- 20,5 mil seguidores · 1.112 publicaciones · categoría IG "Estudio de tatuajes y piercings"
- Citas por WhatsApp: 674 459 915
- Bio: "Ayudo a tatuadores de realismo a ganar más trabajando menos horas sin bajar calidad" + comunidad gratuita de WhatsApp (chat.whatsapp.com/ELDVAUsn2dPBiNxCGHAEuO)
- Seminario presencial de realismo en Madrid: 30-31 oct y 1 nov (10 plazas)
- Ruta: guest en Sevilla (@bonart_tattoogallery), Asturias Tattoo Expo, Murcia, Milano Tattoo, Miami
- Reel: "De tatuar en mi habitación a construir mi propio estudio"
- TikTok: @lamamadelamamatattoo

## Dirección de arte
Concepto: **"papel de stencil y linterna"**: el realismo sale de la sombra.
- Hero: imagen/vídeo en oscuro revelado por un foco que sigue el cursor (momento estrella).
- Paleta: papel `#ECEAE4`, grafito `#17161A`, violeta de stencil `#4636A6`, naranja ☢ `#F2601E` (sus destacados), noche `#0F0E11`.
- Tipos: Big Shoulders Display (titulares) / Schibsted Grotesk (texto) / Martian Mono (etiquetas).
- Orden: hero → cinta de ruta → estudio nuevo (ficha) → archivo filtrable + lightbox → proceso → formación → sobre María → briefing por WhatsApp.
- En móvil, las imágenes van en B/N por defecto.
- Referencia visual previa: https://claude.ai/artifact/BPCMUct3vjx68wihHNkVdS

## Pendiente (hay placeholders en la web)
- Dirección del estudio, fecha de apertura, horario.
- 1-2 frases de su historia con sus propias palabras.
- Confirmar si ofrece piercing.
- Opiniones reales (Google) cuando abra. No inventar reseñas ni testimonios.

## Reglas
- No commitear `.env`, `deploy.py`, `deploy.ps1`, `dist/` (ya en `.gitignore`).
- Comprobar `npm run build` antes de dar un cambio por terminado.
