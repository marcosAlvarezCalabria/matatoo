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

/* Mapa del cuerpo: zonas rectangulares recortadas por la silueta. f = etiqueta delante, b = detrás */
const Z = (k: string, x: number, y: number, w: number, h: number, f: string, b: string) => ({ k, x, y, w, h, f, b });
export const BODY = [
  Z('cabeza', 70, 0, 60, 51, 'Cabeza', 'Nuca'), Z('cuello', 80, 51, 40, 15, 'Cuello', 'Cuello (detrás)'),
  Z('torso', 66, 66, 68, 62, 'Pecho', 'Espalda alta'),
  Z('hombroA', 30, 62, 50, 40, 'Hombro der.', 'Hombro izq.'), Z('hombroB', 120, 62, 50, 40, 'Hombro izq.', 'Hombro der.'),
  Z('abdomen', 56, 128, 88, 56, 'Abdomen', 'Espalda baja'),
  Z('brazoA', 20, 102, 48, 58, 'Brazo der.', 'Brazo izq. (detrás)'), Z('brazoB', 132, 102, 48, 58, 'Brazo izq.', 'Brazo der. (detrás)'),
  Z('antebrazoA', 16, 160, 56, 64, 'Antebrazo der.', 'Antebrazo izq. (detrás)'), Z('antebrazoB', 128, 160, 56, 64, 'Antebrazo izq.', 'Antebrazo der. (detrás)'),
  Z('manoA', 16, 224, 56, 46, 'Mano der.', 'Mano izq. (dorso)'), Z('manoB', 128, 224, 56, 46, 'Mano izq.', 'Mano der. (dorso)'),
  Z('cadera', 56, 184, 88, 42, 'Cadera', 'Glúteos'),
  Z('musloA', 56, 226, 44, 82, 'Muslo der.', 'Muslo izq. (detrás)'), Z('musloB', 100, 226, 44, 82, 'Muslo izq.', 'Muslo der. (detrás)'),
  Z('piernaA', 56, 308, 44, 84, 'Espinilla der.', 'Gemelo izq.'), Z('piernaB', 100, 308, 44, 84, 'Espinilla izq.', 'Gemelo der.'),
  Z('pieA', 56, 392, 44, 28, 'Pie der.', 'Talón izq.'), Z('pieB', 100, 392, 44, 28, 'Pie izq.', 'Talón der.'),
];

const HALF: [number, number][] = [[107,50],[108,62],[118,68],[134,73],[145,82],[149,98],[151,122],[153,146],[156,162],[159,186],[161,210],[163,224],[168,236],[168,252],[162,264],[155,262],[151,248],[150,232],[148,220],[143,194],[139,168],[137,146],[135,124],[132,110],[131,130],[127,160],[127,176],[133,196],[136,218],[135,250],[130,286],[126,306],[129,332],[125,364],[119,388],[124,402],[124,410],[106,412],[104,398],[106,386],[104,352],[103,312],[104,272],[102,238],[100,228]];
const catmull = (pts: [number, number][]) => {
  const n = pts.length; let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`;
  }
  return d + 'Z';
};
export const BODY_D = catmull([...HALF, ...HALF.slice(0, -1).reverse().map(([x, y]) => [200 - x, y] as [number, number])]);
export const DETAIL_F = 'M88,82 Q100,90 112,82 M84,112 Q92,122 100,116 Q108,122 116,112 M100,140 L100,176 M86,200 Q100,214 114,200';
export const DETAIL_B = 'M100,68 L100,196 M78,96 Q86,106 94,100 M122,96 Q114,106 106,100 M100,200 L100,224 M82,222 Q92,230 100,224 Q108,230 118,222';
