import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LeadForm } from '@/components/forms/LeadForm';
import { Clock, Truck, Wrench } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Reparación Urgente Banda Transportadora | Servicio Técnico 24/7",
  description: "¿Cinta transportadora averiada? Servicio técnico de bandas transportadoras con despacho inmediato 24/7. Reparación urgente in situ. Respuesta en menos de 1 hora.",
  alternates: { canonical: "/urgencias/" },
};

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberband.es" },
      { "@type": "ListItem", "position": 2, "name": "Urgencias 24h", "item": "https://www.iberband.es/urgencias" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Reparación Urgente de Bandas Transportadoras 24/7",
    "description": "Servicio técnico urgente 24/7 para reparación de bandas transportadoras y cintas industriales en Andalucía. Despacho inmediato, intervención in situ en Málaga, Sevilla, Granada, Córdoba, Almería y Cádiz.",
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
    "serviceType": "Reparación Urgente de Bandas Transportadoras",
    "availableLanguage": "es",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
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
        "name": "¿En cuánto tiempo llega el técnico de urgencias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestro servicio de urgencias 24/7 garantiza despacho inmediato. En cuanto recibimos la solicitud, un técnico le contacta en menos de 5 minutos para confirmar la incidencia y ponerse en camino con la prioridad máxima.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Trabajáis 24 horas los fines de semana y festivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. El servicio de urgencias de IberBandas opera los 365 días del año, incluyendo sábados, domingos y festivos. Las averías en bandas transportadoras no esperan al lunes.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Qué lleváis en el vehículo de urgencias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestros equipos móviles van equipados con prensas de vulcanizado en caliente, herramientas de empalme en frío, grapas mecánicas, material de parcheo y banda de repuesto de los tipos más habituales. El objetivo es reparar in situ sin necesidad de una segunda visita.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Cubrís toda Andalucía en urgencias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Disponemos de equipos técnicos en Málaga, Sevilla, Granada, Córdoba, Almería y Cádiz, lo que nos permite cubrir toda la comunidad de Andalucía con tiempos de respuesta mínimos.",
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function UrgentService() {
  return (
    <div className={styles.pageWrapper}>
      <BreadcrumbJsonLd />
      <ServiceJsonLd />
      <FAQJsonLd />

      {/* ═══════════════ HERO — URGENCIA.webp background ═══════════════ */}
      <section className={styles.heroSection}>
        <Image
          src="/images/URGENCIA.webp"
          alt="Servicio técnico urgente 24/7 — técnico desplegado para reparar banda transportadora averiada"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContentLayer}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.alertBadge}>
                <Clock size={20} />
                <span>Despacho de Emergencia Prioritario 24/7</span>
              </div>
              <h1 className={styles.heroTitle}>
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
