export const WHATSAPP = '34674459915';
export const WHATSAPP_LABEL = '674 459 915';
export const LINKS = {
  instagram: 'https://www.instagram.com/lamamadelamamatattoo/',
  tiktok: 'https://www.tiktok.com/@lamamadelamamatattoo',
  igDm: 'https://ig.me/m/lamamadelamamatattoo',
  comunidad: 'https://chat.whatsapp.com/ELDVAUsn2dPBiNxCGHAEuO',
  whatsapp: `https://wa.me/${WHATSAPP}`,
};

export type Cat = 'retratos' | 'fauna' | 'pop' | 'proyectos';
export const PIECES: { src: string; title: string; tag: string; cat: Cat }[] = [
  { src: '/assets/lamama-post-18.jpg', title: 'Tigre', tag: 'Pecho', cat: 'fauna' },
  { src: '/assets/lamama-post-17.jpg', title: 'Rostro', tag: 'Antebrazo', cat: 'retratos' },
  { src: '/assets/lamama-post-21.jpg', title: 'Cristo', tag: 'Antebrazo', cat: 'retratos' },
  { src: '/assets/lamama-post-20.jpg', title: 'Águila', tag: 'Brazo', cat: 'fauna' },
  { src: '/assets/lamama-post-22.jpg', title: 'Velo', tag: 'Brazo', cat: 'retratos' },
  { src: '/assets/lamama-post-19.jpg', title: 'Catrina', tag: 'Pierna', cat: 'retratos' },
  { src: '/assets/lamama-post-23.jpg', title: 'Husky', tag: 'Mascota', cat: 'fauna' },
  { src: '/assets/lamama-post-14.jpg', title: 'Gorila', tag: 'Fauna', cat: 'fauna' },
  { src: '/assets/lamama-post-6.jpg', title: 'Retrato', tag: 'Pierna', cat: 'retratos' },
  { src: '/assets/lamama-post-11.jpg', title: 'Horus', tag: 'Mascota', cat: 'fauna' },
  { src: '/assets/lamama-post-10.jpg', title: 'Espartano', tag: 'Brazo completo', cat: 'proyectos' },
  { src: '/assets/lamama-post-15.jpg', title: 'Gato y flores', tag: 'Brazo', cat: 'fauna' },
  { src: '/assets/lamama-post-5.jpg', title: 'Para Iker', tag: 'Retrato', cat: 'retratos' },
  { src: '/assets/lamama-post-16.jpg', title: 'Spray', tag: 'Urbano', cat: 'pop' },
  { src: '/assets/lamama-post-8.jpg', title: 'Pitbull', tag: 'Mascota', cat: 'fauna' },
  { src: '/assets/lamama-post-9.jpg', title: 'Retrato', tag: 'Pierna', cat: 'retratos' },
  { src: '/assets/lamama-post-13.jpg', title: 'Gato', tag: 'Antebrazo', cat: 'fauna' },
  { src: '/assets/lamama-post-7.jpg', title: 'Deadpool', tag: 'Color', cat: 'pop' },
];

export const CATS: [string, string][] = [
  ['todo', 'Todo'], ['retratos', 'Retratos'], ['fauna', 'Mascotas y fauna'], ['pop', 'Pop y urbano'], ['proyectos', 'Proyectos grandes'],
];

export const FICHA = [
  { k: 'Dirección', v: 'Madrid · por anunciar' },
  { k: 'Apertura', v: 'Próximamente' },
  { k: 'Citas', v: `WhatsApp ${WHATSAPP_LABEL}` },
  { k: 'Especialidad', v: 'Realismo black & grey · retrato · mascotas · fauna' },
];

export const STEPS = [
  { n: '01', t: 'Me escribes', d: 'Tu idea y tu foto de referencia por WhatsApp. Te respondo yo.' },
  { n: '02', t: 'Diseño', d: 'Ajustamos tamaño, zona y composición.' },
  { n: '03', t: 'Sesión', d: 'Una o varias. Lo grande se construye por capas.' },
  { n: '04', t: 'Curación', d: 'Pautas para que el gris aguante con los años.' },
];

export const TIPOS = ['Retrato', 'Mascota', 'Fauna', 'Pop / color', 'Proyecto grande', 'Otra idea'];
