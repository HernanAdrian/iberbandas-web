import { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/forms/LeadForm';
import { Layers, Zap, Hammer } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Montaje y Suministro de Bandas Transportadoras | Instalación de Cintas",
  description: "Montaje y suministro de bandas transportadoras industriales. Instalación de cintas transportadoras de caucho, PVC, cable de acero. Especificación técnica, desmontaje controlado y calibración bajo carga.",
  alternates: { canonical: "/instalacion" },
};

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberband.es" },
      { "@type": "ListItem", "position": 2, "name": "Instalación de Bandas", "item": "https://www.iberband.es/instalacion" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Instalación de Bandas Transportadoras",
    "description": "Suministro, montaje e instalación de bandas transportadoras industriales. Bandas de caucho, PVC, PU y cable de acero. Desmontaje controlado y calibración bajo carga.",
    "provider": {
      "@type": "Organization",
      "name": "IberBandas",
      "url": "https://www.iberband.es",
    },
    "areaServed": { "@type": "Country", "name": "España" },
    "serviceType": "Instalación de Bandas Transportadoras",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ReplacementService() {
  return (
    <div className={styles.pageWrapper}>
      <BreadcrumbJsonLd />
      <ServiceJsonLd />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className="display-md">Instalación y Suministro de Bandas y Cintas Transportadoras Industriales en Andalucía</h1>
            <p className={styles.heroSubheadline}>
              Suministro de bandas transportadoras a medida, desmontaje de precisión e instalación de cintas transportadoras con tensado perfecto para máximas cargas operativas.
            </p>
            <div className={styles.heroFormContainer}>
              <LeadForm 
                formName="replacement-hero-form" 
                buttonText="Solicitar Evaluación para Sustitución" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution / Expertise */}
      <section className={styles.expertiseSection}>
        <div className={styles.container}>
          <div className={styles.expertiseContent}>
            <h2 className="headline-lg">Montaje de Cintas Transportadoras Adaptado a su Carga de Trabajo.</h2>
            <p className="body-md">
              No solo sustituimos: especificamos. Desplegar el material correcto — caucho multicapa, PVC higiénico, plástico modular o cable de acero de alta tracción — requiere un profundo conocimiento de su entorno industrial. El suministro de bandas transportadoras y la instalación de cintas transportadoras exigen resistencia al calor, exposición a aceites y zonas de impacto severo.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page Lead Form */}
      <section className={styles.midFormSection}>
        <div className={styles.container}>
          <div className={styles.midFormWrapper}>
            <LeadForm 
              formName="replacement-mid-form" 
              title="Obtener Presupuesto Técnico"
              subtitle="Indique las dimensiones de la banda y su sector. Un ingeniero le contactará."
              buttonText="Solicitar Presupuesto" 
            />
          </div>
        </div>
      </section>

      {/* Execution Strategy */}
      <section className={styles.strategySection}>
        <div className={styles.container}>
          <h2 className="headline-lg">Instalación de Cintas Transportadoras Impecable. Mínima Interrupción.</h2>
          <div className={styles.strategyGrid}>
            <div className={styles.strategyCard}>
              <Layers className={styles.strategyIcon} size={32} />
              <h3 className="title-sm">1. Suministro de Bandas Transportadoras</h3>
              <p className="body-md">Selección del material exacto según sus requisitos de carga y entorno operativo.</p>
            </div>
            <div className={styles.strategyCard}>
              <Hammer className={styles.strategyIcon} size={32} />
              <h3 className="title-sm">2. Desmontaje Controlado</h3>
              <p className="body-md">Retirada segura y sistemática de la banda antigua e inspección de la subestructura.</p>
            </div>
            <div className={styles.strategyCard}>
              <Zap className={styles.strategyIcon} size={32} />
              <h3 className="title-sm">3. Calibración Bajo Carga</h3>
              <p className="body-md">Tensado exacto, empalme y alineación de seguimiento antes de la entrega operativa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & CTA Segment */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className="headline-lg" style={{marginBottom: "1rem"}}>¿Necesita Renovar su Sistema de Bandas?</h2>
            <p className="body-md" style={{marginBottom: "2rem"}}>
              Trabajamos con bandas transportadoras desde 500mm hasta anchos industriales pesados de más de 3000mm. Hable con nuestro equipo de ingeniería para programar una visita técnica.
            </p>
            <div className={styles.finalFormContainer}>
              <LeadForm 
                formName="replacement-final-form" 
                buttonText="Hablar con un Ingeniero de Instalación" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ LOCAL COVERAGE ═══════════════ */}
      <section className={styles.localCoverageSection}>
        <div className={styles.container}>
          <h2 className="headline-lg">Instalación de Bandas Transportadoras en Andalucía</h2>
          <p className="body-md" style={{ color: 'var(--text-secondary)', marginBottom: '0', maxWidth: '700px' }}>
            Suministro y montaje profesional de cintas transportadoras in situ en los principales polígonos industriales de Andalucía.
          </p>
          <div className={styles.cityLinksGrid}>
            <Link href="/instalacion-bandas-transportadoras/sevilla" className={styles.cityLink}>Instalación en Sevilla</Link>
            <Link href="/instalacion-bandas-transportadoras/malaga" className={styles.cityLink}>Instalación en Málaga</Link>
            <Link href="/instalacion-bandas-transportadoras/granada" className={styles.cityLink}>Instalación en Granada</Link>
            <Link href="/instalacion-bandas-transportadoras/cordoba" className={styles.cityLink}>Instalación en Córdoba</Link>
            <Link href="/instalacion-bandas-transportadoras/almeria" className={styles.cityLink}>Instalación en Almería</Link>
            <Link href="/instalacion-bandas-transportadoras/cadiz" className={styles.cityLink}>Instalación en Cádiz</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
