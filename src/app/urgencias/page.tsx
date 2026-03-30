import { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/forms/LeadForm';
import { Clock, Truck, Wrench } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Reparación Urgente Banda Transportadora | Servicio Técnico 24/7",
  description: "¿Cinta transportadora averiada? Servicio técnico de bandas transportadoras con despacho inmediato 24/7. Reparación urgente in situ. Respuesta en menos de 1 hora.",
  alternates: { canonical: "/urgencias" },
};

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberbandas.es" },
      { "@type": "ListItem", "position": 2, "name": "Urgencias 24h", "item": "https://www.iberbandas.es/urgencias" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Reparación Urgente de Bandas Transportadoras 24/7",
    "description": "Servicio técnico urgente 24/7 para reparación de bandas transportadoras y cintas industriales. Despacho inmediato, intervención in situ en toda España.",
    "provider": {
      "@type": "Organization",
      "name": "IberBandas",
      "url": "https://www.iberbandas.es",
    },
    "areaServed": { "@type": "Country", "name": "España" },
    "serviceType": "Reparación Urgente de Bandas Transportadoras",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function UrgentService() {
  return (
    <div className={styles.pageWrapper}>
      <BreadcrumbJsonLd />
      <ServiceJsonLd />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.alertBadge}>
              <Clock size={20} />
              <span>Despacho de Emergencia Prioritario 24/7</span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--primary-foreground)" }}>
              Servicio Urgente 24/7 de Reparación de Bandas y Cintas Transportadoras en Andalucía
            </h1>
            <p className={styles.heroSubheadline}>
              Servicio técnico de bandas transportadoras con despacho inmediato. Intervención crítica in situ para detener el tiempo de inactividad de su cinta transportadora.
            </p>
            <div className={styles.heroFormContainer}>
              <LeadForm 
                formName="urgent-hero-form" 
                buttonText="Solicitar Intervención Urgente" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Guarantee */}
      <section className={styles.guaranteeSection}>
        <div className={styles.container}>
          <div className={styles.guaranteeContent}>
            <h2 className="headline-lg">Servicio Técnico de Bandas Transportadoras: Respuesta Rápida, En Cualquier Lugar.</h2>
            <p className="body-md">
              Nuestros equipos móviles de servicio técnico de cintas transportadoras están equipados con prensas de vulcanizado, herramientas mecánicas avanzadas y materiales de empalme de alta tracción para asegurar su línea de producción de forma inmediata.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page Lead Form */}
      <section className={styles.midFormSection}>
        <div className={styles.container}>
          <div className={styles.midFormWrapper}>
            <LeadForm 
              formName="urgent-mid-form" 
              title="Despacho Inmediato"
              subtitle="Indique su ubicación y tipo de rotura. Iniciamos el protocolo de emergencia."
              buttonText="Enviar Detalles de Emergencia" 
            />
          </div>
        </div>
      </section>

      {/* What to Do Now */}
      <section className={styles.actionSection}>
        <div className={styles.container}>
          <h2 className="headline-lg" style={{ textAlign: "center", marginBottom: "2rem" }}>Qué Hacer Ante una Avería de Cinta Transportadora</h2>
          <div className={styles.actionGrid}>
            <div className={styles.actionStep}>
              <div className={styles.stepNumber}>1</div>
              <Wrench className={styles.stepIcon} size={40} />
              <h3 className="title-sm">Asegure la Línea</h3>
              <p className="body-md">Bloquee el sistema transportador para prevenir daños adicionales o lesiones.</p>
            </div>
            <div className={styles.actionStep}>
              <div className={styles.stepNumber}>2</div>
              <Wrench className={styles.stepIcon} size={40} />
              <h3 className="title-sm">Envie su Solicitud</h3>
              <p className="body-md">Use nuestros formularios para dar la ubicación y naturaleza del daño de inmediato.</p>
            </div>
            <div className={styles.actionStep}>
              <div className={styles.stepNumber}>3</div>
              <Truck className={styles.stepIcon} size={40} />
              <h3 className="title-sm">Desplegamos el Equipo</h3>
              <p className="body-md">Los ingenieros salen inmediatamente con el equipo de reparación necesario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className={styles.secondaryCtaSection}>
        <div className={styles.container}>
          <div className={styles.secondaryBox}>
            <h2 className="headline-lg">¿No es una emergencia inmediata, pero es urgente?</h2>
            <p className="body-md">Solicite una respuesta prioritaria y nuestros ingenieros le contactarán en menos de 1 hora.</p>
            <div className={styles.finalFormContainer}>
              <LeadForm 
                formName="urgent-final-form" 
                buttonText="Solicitar Respuesta Prioritaria" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ LOCAL COVERAGE ═══════════════ */}
      <section className={styles.localCoverageSection}>
        <div className={styles.container}>
          <h2 className="headline-lg">Servicio Urgente de Bandas Transportadoras en Andalucía</h2>
          <p className="body-md" style={{ color: 'var(--text-secondary)', marginBottom: '0', maxWidth: '700px' }}>
            Equipos de emergencia locales preparados para intervenir en su zona industrial de Andalucía.
          </p>
          <div className={styles.cityLinksGrid}>
            <Link href="/urgencias-bandas-transportadoras/sevilla" className={styles.cityLink}>Urgencias en Sevilla</Link>
            <Link href="/urgencias-bandas-transportadoras/malaga" className={styles.cityLink}>Urgencias en Málaga</Link>
            <Link href="/urgencias-bandas-transportadoras/granada" className={styles.cityLink}>Urgencias en Granada</Link>
            <Link href="/urgencias-bandas-transportadoras/cordoba" className={styles.cityLink}>Urgencias en Córdoba</Link>
            <Link href="/urgencias-bandas-transportadoras/almeria" className={styles.cityLink}>Urgencias en Almería</Link>
            <Link href="/urgencias-bandas-transportadoras/cadiz" className={styles.cityLink}>Urgencias en Cádiz</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
