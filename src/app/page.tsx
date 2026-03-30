import { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/forms/LeadForm';
import { Wrench, ShieldCheck, Truck, ClockAlert, ArrowRight, MapPin } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Cintas Transportadoras y Bandas Transportadoras Industriales | IberBandas",
  description: "Especialistas en cintas transportadoras y bandas transportadoras industriales. Reparación, mantenimiento y sustitución en toda España. Respuesta prioritaria 24/7.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "IberBandas | Cintas y Bandas Transportadoras Industriales",
    description: "Especialistas en cintas transportadoras y bandas transportadoras industriales. Reparación, mantenimiento y sustitución en toda España.",
  },
};

function WebPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IberBandas — Cintas Transportadoras y Bandas Transportadoras Industriales",
    "description": "Especialistas en cintas transportadoras y bandas transportadoras industriales. Reparación, mantenimiento y sustitución en toda España.",
    "url": "https://www.iberbandas.es",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "IberBandas",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <WebPageJsonLd />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot}></span>
                Servicio de emergencia activo 24/7
              </div>
              <h1 className={styles.heroTitle}>
                Reparación, Mantenimiento e Instalación de Bandas Transportadoras Industriales en Andalucía
              </h1>
              <p className={styles.heroSubheadline}>
                Especialistas en cintas transportadoras y bandas transportadoras para la industria. Servicio técnico urgente en toda Andalucía.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <strong>+500</strong>
                  <span>intervenciones/año</span>
                </div>
                <div className={styles.heroStatDivider}></div>
                <div className={styles.heroStat}>
                  <strong>&lt;2h</strong>
                  <span>respuesta</span>
                </div>
                <div className={styles.heroStatDivider}></div>
                <div className={styles.heroStat}>
                  <strong>24/7</strong>
                  <span>disponibilidad</span>
                </div>
              </div>
            </div>
            <div className={styles.heroFormCard}>
              <div className={styles.heroFormCardHeader}>
                <span className={styles.heroFormCardLabel}>Solicita Presupuesto Ahora</span>
                <p className={styles.heroFormCardSub}>Técnico disponible 24/7. Sin compromiso.</p>
              </div>
              <LeadForm
                formName="home-hero-form"
                buttonText="Solicitar Asistencia Inmediata"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Core Services Grid */}
      <section className={styles.servicesSection} aria-label="Servicios de bandas transportadoras">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cintas y Bandas Transportadoras</h2>
          <div className={styles.servicesGrid}>
            <Link href="/urgencias" className={styles.serviceCardAlert}>
              <div className={styles.cardHeader}>
                <ClockAlert size={28} />
                <h3>Reparación de Emergencia 24/7</h3>
              </div>
              <p>Equipo de intervención inmediata en su instalación.</p>
              <span className={styles.cardArrow}><ArrowRight size={18} /></span>
            </Link>

            <Link href="/reparacion" className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <Wrench size={28} />
                <h3>Reparación de Bandas</h3>
              </div>
              <p>Vulcanizado in situ y empalmes mecánicos.</p>
              <span className={styles.cardArrow}><ArrowRight size={18} /></span>
            </Link>

            <Link href="/mantenimiento" className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <ShieldCheck size={28} />
                <h3>Mantenimiento Preventivo</h3>
              </div>
              <p>Programas preventivos para evitar paradas.</p>
              <span className={styles.cardArrow}><ArrowRight size={18} /></span>
            </Link>

            <Link href="/instalacion" className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <Truck size={28} />
                <h3>Sustitución de Bandas</h3>
              </div>
              <p>Suministro e instalación de bandas nuevas.</p>
              <span className={styles.cardArrow}><ArrowRight size={18} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Coverage Strip — Andalucía */}
      <section className={styles.localCoverageSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cobertura en Andalucía</h2>
          <div className={styles.cityGrid}>
            <Link href="/bandas-transportadoras/sevilla" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Sevilla</span>
            </Link>
            <Link href="/bandas-transportadoras/malaga" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Málaga</span>
            </Link>
            <Link href="/bandas-transportadoras/granada" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Granada</span>
            </Link>
            <Link href="/bandas-transportadoras/cordoba" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Córdoba</span>
            </Link>
            <Link href="/bandas-transportadoras/almeria" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Almería</span>
            </Link>
            <Link href="/bandas-transportadoras/cadiz" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Cádiz</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-page Lead Form */}
      <section className={styles.midFormSection}>
        <div className={styles.container}>
          <div className={styles.midFormLayout}>
            <div className={styles.midFormText}>
              <h2 className={styles.midFormTitle}>¿Necesita atención técnica rápida?</h2>
              <p className={styles.midFormSubtitle}>Un ingeniero de nuestro equipo evaluará su caso al instante y sin compromiso.</p>
              <ul className={styles.midFormBullets}>
                <li><ShieldCheck size={16} /> Sin compromiso ni coste</li>
                <li><ArrowRight size={16} /> Respuesta prioritaria 24/7</li>
                <li><Truck size={16} /> Técnicos disponibles en toda España</li>
              </ul>
            </div>
            <div className={styles.midFormWrapper}>
              <LeadForm
                formName="home-mid-form"
                buttonText="Obtener Presupuesto de Servicio"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className={styles.trustStrip} aria-label="Credenciales">
        <div className={styles.container}>
          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <strong>+25 años</strong> resolviendo averías en cintas y bandas transportadoras
            </div>
            <div className={styles.trustItem}>
              <strong>Protocolos ISO</strong> para cumplimiento normativo
            </div>
            <div className={styles.trustItem}>
              <strong>Cobertura nacional</strong> con flota propia de intervención
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCtaSection}>
        <div className={styles.container}>
          <div className={styles.finalCtaContent}>
            <div className={styles.finalCtaText}>
              <div className={styles.finalCtaBadge}>
                <ClockAlert size={13} />
                Emergencia 24/7
              </div>
              <h2>¿Cinta transportadora parada? Resolvemos la emergencia hoy.</h2>
              <p>Solicite una unidad móvil de reparación de bandas transportadoras inmediatamente. Sin esperas.</p>
            </div>
            <div className={styles.finalFormContainer}>
              <LeadForm
                formName="home-final-form"
                buttonText="Necesito un técnico urgente"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
