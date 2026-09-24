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

/* Mapa del cuerpo: zonas rectangulares recortadas por la silueta. f = etiqueta delante, b = detrás */
const Z = (k: string, x: number, y: number, w: number, h: number, f: string, b: string) => ({ k, x, y, w, h, f, b });
export const BODY = [Z('cabeza',60,0,80,62,'Cabeza','Nuca'),Z('cuello',80,62,40,16,'Cuello','Cuello (detrás)'),
 Z('torso',66,78,68,52,'Pecho','Espalda alta'),
 Z('hombroA',20,76,56,36,'Hombro der.','Hombro izq.'),Z('hombroB',124,76,56,36,'Hombro izq.','Hombro der.'),
 Z('abdomen',60,130,80,54,'Abdomen','Espalda baja'),
 Z('brazoA',20,112,50,46,'Brazo der.','Brazo izq. (detrás)'),Z('brazoB',130,112,50,46,'Brazo izq.','Brazo der. (detrás)'),
 Z('antebrazoA',16,158,52,64,'Antebrazo der.','Antebrazo izq. (detrás)'),Z('antebrazoB',132,158,52,64,'Antebrazo izq.','Antebrazo der. (detrás)'),
 Z('manoA',16,222,52,50,'Mano der.','Mano izq. (dorso)'),Z('manoB',132,222,52,50,'Mano izq.','Mano der. (dorso)'),
 Z('cadera',60,184,80,50,'Cadera','Glúteos'),
 Z('musloA',60,234,40,74,'Muslo der.','Muslo izq. (detrás)'),Z('musloB',100,234,40,74,'Muslo izq.','Muslo der. (detrás)'),
 Z('piernaA',60,308,40,78,'Espinilla der.','Gemelo izq.'),Z('piernaB',100,308,40,78,'Espinilla izq.','Gemelo der.'),
 Z('pieA',60,386,40,34,'Pie der.','Talón izq.'),Z('pieB',100,386,40,34,'Pie izq.','Talón der.')];

const HALF: [number, number][] = [[100,6],[109,8],[115,14],[118,24],[118,34],[116,44],[112,53],[107,60],[108,67],[110,74],[118,78],[130,82],[140,86],[147,94],[150,106],[151,122],[150,140],[152,156],[156,172],[158,190],[157,210],[156,222],[159,232],[161,246],[159,258],[154,266],[149,262],[147,250],[144,234],[146,224],[149,218],[148,200],[146,182],[142,166],[139,152],[138,136],[137,120],[134,108],[132,114],[130,130],[126,150],[122,166],[127,186],[132,204],[134,222],[133,242],[130,266],[126,290],[123,306],[125,322],[127,338],[124,358],[118,384],[120,396],[126,404],[126,410],[116,413],[106,411],[105,400],[107,388],[106,368],[104,346],[106,330],[106,310],[105,290],[104,266],[103,244],[100,234]];
const catmull = (pts: [number, number][]) => {
  const n = pts.length; let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`;
  }
  return d + 'Z';
};
export const BODY_D = catmull([...HALF, ...HALF.slice(1, -1).reverse().map(([x, y]) => [200 - x, y] as [number, number])]);
export const DETAIL_F = 'M84,86 Q92,91 99,88 M101,88 Q108,91 116,86 M86,114 Q93,125 100,120 Q107,125 114,114 M100,132 L100,166 M99,172 Q100,175 101,172 M88,202 Q94,212 99,218 M101,218 Q106,212 112,202 M82,302 Q85,307 89,303 M111,303 Q115,307 118,302';
export const DETAIL_B = 'M100,80 L100,198 M82,98 Q86,114 96,110 M118,98 Q114,114 104,110 M100,206 L100,232 M84,228 Q92,238 100,232 Q108,238 116,228 M83,308 Q86,304 89,308 M111,308 Q114,304 117,308';
