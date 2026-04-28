import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, ArrowRight, Phone } from 'lucide-react';
import { BLOG_POSTS, getPostBySlug, formatDate, CATEGORY_COLORS, PostCategory } from '@/lib/blog';
import { LeadForm } from '@/components/forms/LeadForm';
import styles from './page.module.css';

import { PostSenalesAveria } from './content/senales-averia-banda-transportadora';
import { PostMantenimientoPreventivo } from './content/mantenimiento-preventivo-bandas-transportadoras';
import { PostVulcanizacion } from './content/vulcanizacion-caliente-vs-empalme-frio';

const CONTENT_MAP: Record<string, React.ComponentType> = {
  'senales-averia-banda-transportadora': PostSenalesAveria,
  'mantenimiento-preventivo-bandas-transportadoras': PostMantenimientoPreventivo,
  'vulcanizacion-caliente-vs-empalme-frio': PostVulcanizacion,
};

const TOC_MAP: Record<string, { id: string; label: string }[]> = {
  'senales-averia-banda-transportadora': [
    { id: 'por-que-importa', label: 'Por qué identificar los avisos a tiempo' },
    { id: 'senal-1', label: 'Señal 1: Ruido anormal' },
    { id: 'senal-2', label: 'Señal 2: Desalineación lateral' },
    { id: 'senal-3', label: 'Señal 3: Desgaste en los bordes' },
    { id: 'senal-4', label: 'Señal 4: Vibración anormal' },
    { id: 'senal-5', label: 'Señal 5: Pérdida de tensión' },
    { id: 'senal-6', label: 'Señal 6: Empalme deteriorado' },
    { id: 'senal-7', label: 'Señal 7: Material bajo la banda' },
    { id: 'que-hacer', label: 'Qué hacer cuando lo detectas' },
    { id: 'faq', label: 'Preguntas frecuentes' },
  ],
  'mantenimiento-preventivo-bandas-transportadoras': [
    { id: 'coste-reactivo', label: 'El coste real del mantenimiento reactivo' },
    { id: 'beneficios', label: 'Beneficios del mantenimiento preventivo' },
    { id: 'protocolos', label: 'Los 4 protocolos esenciales' },
    { id: 'frecuencias', label: 'Frecuencias recomendadas por sector' },
    { id: 'roi', label: 'ROI: cuánto te ahorra' },
    { id: 'como-implantar', label: 'Cómo implantar un plan preventivo' },
    { id: 'faq', label: 'Preguntas frecuentes' },
  ],
  'vulcanizacion-caliente-vs-empalme-frio': [
    { id: 'vulcanizacion-caliente', label: 'Qué es la vulcanización en caliente' },
    { id: 'empalme-frio', label: 'Qué es el empalme en frío' },
    { id: 'empalme-mecanico', label: 'El empalme mecánico' },
    { id: 'comparativa', label: 'Comparativa técnica completa' },
    { id: 'cuando-elegir', label: 'Cuándo elegir cada método' },
    { id: 'importancia-profesional', label: 'La importancia del profesional' },
    { id: 'faq', label: 'Preguntas frecuentes' },
  ],
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['IberBandas'],
    },
  };
}

function ArticleJsonLd({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);
  if (!post) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `https://www.iberband.es/blog/${slug}/`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'IberBandas',
      url: 'https://www.iberband.es',
    },
    publisher: {
      '@type': 'Organization',
      name: 'IberBandas',
      logo: { '@type': 'ImageObject', url: 'https://www.iberband.es/images/LOGOTIPO.webp' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.iberband.es/blog/${slug}/` },
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const ContentComponent = CONTENT_MAP[slug];
  if (!ContentComponent) notFound();

  const toc = TOC_MAP[slug] ?? [];

  return (
    <div className={styles.pageWrapper}>
      <ArticleJsonLd slug={slug} />

      {/* ═══ POST HEADER ═══ */}
      <header className={styles.postHeader}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <Link href="/blog/">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </nav>

          <div className={styles.headerMeta}>
            <CategoryBadge category={post.category} />
            <div className={styles.metaRow}>
              <span className={styles.metaItem}>
                <Calendar size={13} />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>
                <Clock size={13} />
                {post.readingTime} min de lectura
              </span>
            </div>
          </div>

          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postLead}>{post.excerpt}</p>

          <Link href="/blog/" className={styles.backLink}>
            <ArrowLeft size={15} />
            Volver al blog
          </Link>
        </div>
      </header>

      {/* ═══ CONTENT + SIDEBAR ═══ */}
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.contentLayout}>

            {/* MAIN ARTICLE */}
            <article className={styles.article}>
              <ContentComponent />

              {/* Related links */}
              <div className={styles.relatedLinks}>
                <h3>Servicios relacionados</h3>
                <div className={styles.relatedGrid}>
                  <Link href="/reparacion/" className={styles.relatedCard}>
                    Reparación de bandas <ArrowRight size={14} />
                  </Link>
                  <Link href="/mantenimiento/" className={styles.relatedCard}>
                    Mantenimiento preventivo <ArrowRight size={14} />
                  </Link>
                  <Link href="/urgencias/" className={styles.relatedCard}>
                    Urgencias 24/7 <ArrowRight size={14} />
                  </Link>
                  <Link href="/tipos-cintas-transportadoras/" className={styles.relatedCard}>
                    Tipos de bandas <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>

            {/* STICKY SIDEBAR */}
            <aside className={styles.sidebar}>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className={styles.tocCard}>
                  <h3 className={styles.tocTitle}>En este artículo</h3>
                  <nav aria-label="Tabla de contenidos">
                    <ol className={styles.tocList}>
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a href={`#${item.id}`} className={styles.tocLink}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              )}

              {/* CTA Card */}
              <div className={styles.ctaSidebarCard}>
                <div className={styles.ctaSidebarHeader}>
                  <Phone size={18} className={styles.ctaSidebarIcon} />
                  <h3>¿Necesitas ayuda ahora?</h3>
                </div>
                <p>Técnico disponible 24/7 en toda Andalucía. Sin compromiso.</p>
                <LeadForm
                  formName={`blog-${slug}-sidebar-form`}
                  buttonText="Contactar con técnico"
                />
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ═══ FINAL CTA ═══ */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaBox}>
            <div className={styles.finalCtaText}>
              <h2>¿Listo para proteger tu instalación?</h2>
              <p>Más de 500 intervenciones al año en Andalucía. Evaluación técnica sin coste ni compromiso.</p>
            </div>
            <div className={styles.finalCtaActions}>
              <Link href="/contacto/" className={styles.finalCtaPrimary}>
                Solicitar presupuesto gratuito
                <ArrowRight size={16} />
              </Link>
              <Link href="/urgencias/" className={styles.finalCtaUrgent}>
                Urgencia 24/7
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
