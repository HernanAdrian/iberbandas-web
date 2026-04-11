import { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/forms/LeadForm';
import Image from 'next/image';
import { Target, RotateCw, MonitorPlay, Ruler } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Mantenimiento de Bandas Transportadoras | Mantenimiento Preventivo Cintas",
  description: "Mantenimiento de bandas transportadoras y cintas transportadoras industriales. Programas preventivos: alineación láser, calibración de tensión y auditorías de desgaste. Evite paradas no planificadas.",
  alternates: { canonical: "/mantenimiento/" },
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
    "name": "Mantenimiento Preventivo de Bandas Transportadoras",
    "description": "Mantenimiento preventivo y predictivo de bandas transportadoras y cintas industriales en Andalucía. Alineación láser, calibración de tensión, auditorías de desgaste y optimización de rodillos en Málaga, Sevilla, Granada, Córdoba, Almería y Cádiz.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "IberBandas",
      "url": "https://www.iberband.es",
    },
    "areaServed": [
      { "@type": "State", "name": "Andalucía" },
      { "@type": "City", "name": "Málaga" },
      { "@type": "City", "name": "Sevilla" },
      { "@type": "City", "name": "Granada" },
      { "@type": "City", "name": "Córdoba" },
      { "@type": "City", "name": "Almería" },
      { "@type": "City", "name": "Cádiz" },
    ],
    "serviceType": "Mantenimiento de Bandas Transportadoras",
    "availableLanguage": "es",
    "priceRange": "€€",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function FAQJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué incluye el plan de mantenimiento preventivo de bandas transportadoras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El plan incluye: auditoría técnica inicial gratuita, inspección visual e instrumental de bandas y empalmes, alineación láser, calibración de tensión, revisión y rotación de rodillos, escaneo de desgaste, y un informe técnico con plan de acciones preventivas personalizado.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Con qué frecuencia hay que revisar una banda transportadora?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende del uso y sector. En entornos de alta producción (logística, minería, agroalimentación) recomendamos revisiones trimestrales. En usos moderados, cada 6 meses es suficiente. La auditoría inicial identifica el plan óptimo para su instalación específica.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Hacéis auditoría inicial gratuita?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. La primera visita técnica es completamente gratuita y sin compromiso. Nuestro equipo se desplaza a sus instalaciones en Andalucía para evaluar el estado de sus bandas transportadoras y entregarle un plan de mantenimiento personalizado.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Cuánto se reduce el riesgo de avería con mantenimiento preventivo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestros planes de mantenimiento preventivo reducen más del 80% la probabilidad de avería catastrófica en producción. El coste de mantenimiento es entre 5 y 10 veces menor que el coste de una parada no planificada.",
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function MaintenanceService() {
  return (
    <div className={styles.pageWrapper}>
      <BreadcrumbJsonLd />
      <ServiceJsonLd />
      <FAQJsonLd />

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

      {/* ═══════════════ BANDA PERFECTA — resultado del mantenimiento ═══════════════ */}
      <div className={styles.resultImageSection}>
        <Image
          src="/images/BANDA PERFECTA.webp"
          alt="Banda transportadora en perfecto estado tras mantenimiento preventivo"
          fill
          loading="lazy"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="100vw"
        />
        <div className={styles.resultImageOverlay}>
          <div className={styles.container}>
            <p className={styles.resultImageText}>El mantenimiento preventivo es la diferencia entre esta imagen y una parada imprevista.</p>
          </div>
        </div>
      </div>

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
