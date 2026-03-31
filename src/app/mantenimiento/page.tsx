import { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/forms/LeadForm';
import { Target, RotateCw, MonitorPlay, Ruler } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Mantenimiento de Bandas Transportadoras | Mantenimiento Preventivo Cintas",
  description: "Mantenimiento de bandas transportadoras y cintas transportadoras industriales. Programas preventivos: alineación láser, calibración de tensión y auditorías de desgaste. Evite paradas no planificadas.",
  alternates: { canonical: "/mantenimiento" },
};

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberband.es" },
      { "@type": "ListItem", "position": 2, "name": "Mantenimiento Preventivo", "item": "https://www.iberband.es/mantenimiento" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mantenimiento de Bandas Transportadoras",
    "description": "Mantenimiento preventivo y predictivo de bandas transportadoras y cintas industriales. Alineación láser, calibración de tensión, auditorías de desgaste y optimización de rodillos.",
    "provider": {
      "@type": "Organization",
      "name": "IberBandas",
      "url": "https://www.iberband.es",
    },
    "areaServed": { "@type": "Country", "name": "España" },
    "serviceType": "Mantenimiento de Bandas Transportadoras",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function MaintenanceService() {
  return (
    <div className={styles.pageWrapper}>
      <BreadcrumbJsonLd />
      <ServiceJsonLd />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className="display-md">Mantenimiento Preventivo de Bandas y Cintas Transportadoras Industriales en Andalucía</h1>
            <p className={styles.heroSubheadline}>
              Mantenimiento preventivo de cintas transportadoras y bandas industriales. Anticipe los fallos con auditorías periódicas y ajuste estructural para sistemas de alto volumen.
            </p>
            <div className={styles.heroFormContainer}>
              <LeadForm 
                formName="maintenance-hero-form" 
                buttonText="Solicitar Mantenimiento" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Financial Argument */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.problemContent}>
            <h2 className="headline-lg">La Reparación Reactiva Cuesta 10x Más que el Mantenimiento de Cintas Transportadoras.</h2>
            <p className="body-md">
              El tiempo de inactividad no planificado destruye los KPIs logísticos. Nuestros programas de mantenimiento de bandas transportadoras y cintas industriales aseguran su producción base identificando microfracturas, desviaciones de alineación y pérdida de tensión mucho antes de que provoquen una parada crítica.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page Lead Form */}
      <section className={styles.midFormSection}>
        <div className={styles.container}>
          <div className={styles.midFormWrapper}>
            <LeadForm 
              formName="maintenance-mid-form" 
              title="Obtener Presupuesto Técnico"
              subtitle="Describa su instalación y un ingeniero le propondrá un plan de mantenimiento."
              buttonText="Solicitar Presupuesto" 
            />
          </div>
        </div>
      </section>

      {/* Maintenance Protocol */}
      <section className={styles.protocolSection}>
        <div className={styles.container}>
          <h2 className="headline-lg">Ciclo de Auditoría y Mantenimiento de Cintas y Bandas.</h2>
          <div className={styles.protocolGrid}>
            <div className={styles.protocolCard}>
              <Target className={styles.protocolIcon} size={32} />
              <h3 className="title-sm">Alineación Láser</h3>
              <p className="body-md">Control de seguimiento para prevenir desgaste lateral y sobrecarga del motor.</p>
            </div>
            <div className={styles.protocolCard}>
              <RotateCw className={styles.protocolIcon} size={32} />
              <h3 className="title-sm">Optimización de Rodillos</h3>
              <p className="body-md">Inspección y rotación programada de componentes desgastados o bloqueados.</p>
            </div>
            <div className={styles.protocolCard}>
              <Ruler className={styles.protocolIcon} size={32} />
              <h3 className="title-sm">Calibración de Tensión</h3>
              <p className="body-md">Re-tensado a especificaciones para prevenir deslizamiento y garantizar la transmisión de potencia.</p>
            </div>
            <div className={styles.protocolCard}>
              <MonitorPlay className={styles.protocolIcon} size={32} />
              <h3 className="title-sm">Auditoría de Espesor y Desgaste</h3>
              <p className="body-md">Escaneo ultrasónico para predecir el fin de vida útil de la banda transportadora.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Segment */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className="headline-lg" style={{marginBottom: "1rem"}}>Proteja Sus Activos Industriales.</h2>
            <p className="body-md" style={{marginBottom: "2rem"}}>
              Solicite un programa de mantenimiento preventivo personalizado, diseñado específicamente para las exigencias de su instalación.
            </p>
            <div className={styles.finalFormContainer}>
              <LeadForm 
                formName="maintenance-final-form" 
                buttonText="Programar Auditoría de Instalaciones" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ LOCAL COVERAGE ═══════════════ */}
      <section className={styles.localCoverageSection}>
        <div className={styles.container}>
          <h2 className="headline-lg">Mantenimiento de Bandas Transportadoras en Andalucía</h2>
          <p className="body-md" style={{ color: 'var(--text-secondary)', marginBottom: '0', maxWidth: '700px' }}>
            Planes de mantenimiento técnico preventivo en los principales polígonos industriales de Andalucía.
          </p>
          <div className={styles.cityLinksGrid}>
            <Link href="/mantenimiento-bandas-transportadoras/sevilla" className={styles.cityLink}>Mantenimiento en Sevilla</Link>
            <Link href="/mantenimiento-bandas-transportadoras/malaga" className={styles.cityLink}>Mantenimiento en Málaga</Link>
            <Link href="/mantenimiento-bandas-transportadoras/granada" className={styles.cityLink}>Mantenimiento en Granada</Link>
            <Link href="/mantenimiento-bandas-transportadoras/cordoba" className={styles.cityLink}>Mantenimiento en Córdoba</Link>
            <Link href="/mantenimiento-bandas-transportadoras/almeria" className={styles.cityLink}>Mantenimiento en Almería</Link>
            <Link href="/mantenimiento-bandas-transportadoras/cadiz" className={styles.cityLink}>Mantenimiento en Cádiz</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
