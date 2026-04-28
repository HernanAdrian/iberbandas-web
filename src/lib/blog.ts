export type PostCategory = 'Reparación' | 'Mantenimiento' | 'Técnico';

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: PostCategory;
  readingTime: number;
  excerpt: string;
}

export interface TocItem {
  id: string;
  label: string;
}

export const BLOG_POSTS: PostMeta[] = [
  {
    slug: 'senales-averia-banda-transportadora',
    title: '7 Señales de que tu Banda Transportadora Está a Punto de Fallar (y Cuánto te Cuesta Ignorarlas)',
    description: 'Aprende a identificar las 7 señales críticas de avería en bandas transportadoras antes de que provoquen paradas costosas. Guía técnica con diagnóstico y soluciones.',
    publishedAt: '2026-04-10',
    category: 'Reparación',
    readingTime: 8,
    excerpt: 'Una banda transportadora siempre avisa antes de romper. Identificar estas señales a tiempo puede ser la diferencia entre una reparación de 1.500€ y una parada de producción que te cuesta 15.000€ en horas.',
  },
  {
    slug: 'mantenimiento-preventivo-bandas-transportadoras',
    title: 'Mantenimiento Preventivo de Bandas Transportadoras: Plan Completo para Reducir Paradas un 80%',
    description: 'Guía completa de mantenimiento preventivo para cintas y bandas transportadoras industriales. Protocolos, frecuencias recomendadas y cálculo del ROI real para tu sector.',
    publishedAt: '2026-04-17',
    category: 'Mantenimiento',
    readingTime: 10,
    excerpt: 'El 80% de las averías en bandas transportadoras son predecibles y evitables. Un plan de mantenimiento preventivo bien ejecutado cuesta entre 5 y 10 veces menos que la reparación reactiva de urgencia.',
  },
  {
    slug: 'vulcanizacion-caliente-vs-empalme-frio',
    title: 'Vulcanización en Caliente vs Empalme en Frío: Cuál es la Mejor Reparación para tu Banda',
    description: 'Comparativa técnica completa entre vulcanización en caliente, empalme en frío y empalme mecánico para bandas transportadoras. Cuándo usar cada método, durabilidad y costes.',
    publishedAt: '2026-04-24',
    category: 'Técnico',
    readingTime: 7,
    excerpt: 'Cuando el empalme de una banda transportadora falla tienes tres opciones de reparación. Elegir la correcta puede ser la diferencia entre meses y años de vida útil añadida.',
  },
];

export function getPostBySlug(slug: string): PostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const CATEGORY_COLORS: Record<PostCategory, string> = {
  'Reparación': '#FF6B00',
  'Mantenimiento': '#1B365D',
  'Técnico': '#0f7c6a',
};
