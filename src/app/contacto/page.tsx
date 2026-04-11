import { Metadata } from 'next';
import { LeadForm } from '@/components/forms/LeadForm';
import { ShieldCheck, Clock } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Presupuesto Bandas Transportadoras | Contactar Servicio Técnico",
  description: "Solicite presupuesto para reparación, mantenimiento o montaje de bandas transportadoras y cintas transportadoras industriales. Atendemos su consulta con prioridad. Formulario directo.",
  alternates: { canonical: "/contacto/" },
};

function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IberBandas",
    "description": "Empresa especializada en reparación, mantenimiento e instalación de bandas transportadoras industriales en Andalucía. Servicio urgente 24/7.",
    "url": "https://www.iberband.es",
    "email": "industria@iberband.es",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Málaga",
      "addressRegion": "Andalucía",
      "addressCountry": "ES",
    },
    "areaServed": [
      { "@type": "State", "name": "Andalucía" },
      { "@type": "City", "name": "Málaga" },
      { "@type": "City", "name": "Sevilla" },
      { "@type": "City", "name": "Granada" },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "industria@iberband.es",
      "availableLanguage": "es",
      "areaServed": "ES",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberband.es" },
      { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://www.iberband.es/contacto" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd />
      {/* Header */}
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <h1 className="display-md">Solicitar Presupuesto de Reparación, Mantenimiento o Instalación de Bandas Transportadoras</h1>
            <p className="body-md" style={{ color: "var(--text-secondary)", marginTop: "1rem" }}>
              Atendemos su consulta con prioridad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <LeadForm 
              formName="contact-page-form"
              title="Cuéntenos su Necesidad"
              subtitle="Un ingeniero revisará sus datos y le contactará hoy."
              buttonText="Enviar Solicitud de Diagnóstico"
            />
          </div>

          <div className={styles.guaranteeSection}>
            <div className={styles.guaranteeCard}>
              <Clock size={32} className={styles.guaranteeIcon} />
              <h3 className="title-sm">Respuesta prioritaria</h3>
              <p className="body-md">Nuestro compromiso de asistencia inmediata para la industria.</p>
            </div>
            <div className={styles.guaranteeCard}>
              <ShieldCheck size={32} className={styles.guaranteeIcon} />
              <h3 className="title-sm">Evaluación Técnica Gratuita</h3>
              <p className="body-md">Análisis inicial de su problema sin ningún compromiso.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
