import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { BLOG_POSTS, formatDate, CATEGORY_COLORS, PostCategory } from '@/lib/blog';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog Técnico | Guías de Bandas Transportadoras Industriales',
  description: 'Guías técnicas, consejos de mantenimiento y análisis especializados sobre bandas y cintas transportadoras industriales. Escritas por técnicos con +25 años de experiencia.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: 'Blog Técnico IberBandas | Guías de Bandas Transportadoras',
    description: 'Guías técnicas y consejos especializados sobre reparación, mantenimiento e instalación de bandas transportadoras industriales en Andalucía.',
  },
};

function BlogJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Técnico IberBandas',
    description: 'Guías técnicas especializadas sobre bandas y cintas transportadoras industriales.',
    url: 'https://www.iberband.es/blog/',
    publisher: {
      '@type': 'Organization',
      name: 'IberBandas',
      url: 'https://www.iberband.es',
    },
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://www.iberband.es/blog/${post.slug}/`,
      datePublished: post.publishedAt,
      author: { '@type': 'Organization', name: 'IberBandas' },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function CategoryBadge({ category }: { category: PostCategory }) {
  const color = CATEGORY_COLORS[category];
  return (
    <span
      className={styles.categoryBadge}
      style={{ backgroundColor: `${color}15`, color, borderColor: `${color}40` }}
    >
      {category}
    </span>
  );
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className={styles.pageWrapper}>
      <BlogJsonLd />

      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroBreadcrumb}>
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Blog</span>
          </div>
          <div className={styles.heroLabel}>
            <BookOpen size={16} />
            Guías Técnicas
          </div>
          <h1 className={styles.heroTitle}>Blog Técnico de Bandas Transportadoras</h1>
          <p className={styles.heroSubtitle}>
            Guías especializadas escritas por técnicos con más de 25 años en el sector. Todo lo que necesitas saber sobre reparación, mantenimiento e instalación de bandas transportadoras industriales.
          </p>
        </div>
      </section>

      {/* ═══ POST GRID ═══ */}
      <section className={styles.postsSection}>
        <div className={styles.container}>
          <div className={styles.postsGrid}>
            {sorted.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <div className={styles.cardTop}>
                  <CategoryBadge category={post.category} />
                  <div className={styles.cardMeta}>
                    <Clock size={13} />
                    <span>{post.readingTime} min de lectura</span>
                    <span className={styles.metaDot}>·</span>
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  </div>
                </div>
                <h2 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                </h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}/`} className={styles.cardCta}>
                  Leer artículo completo
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaText}>
              <h2>¿Tienes una avería ahora mismo?</h2>
              <p>Nuestro equipo técnico está disponible 24/7 para resolver tu emergencia en Andalucía.</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/urgencias/" className={styles.ctaPrimary}>
                Solicitar intervención urgente
                <ArrowRight size={16} />
              </Link>
              <Link href="/contacto/" className={styles.ctaSecondary}>
                Pedir presupuesto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
