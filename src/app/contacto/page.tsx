import { Metadata } from 'next';
import { LeadForm } from '@/components/forms/LeadForm';
import { ShieldCheck, Clock } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Presupuesto Bandas Transportadoras | Contactar Servicio Técnico",
  description: "Solicite presupuesto para reparación, mantenimiento o montaje de bandas transportadoras y cintas transportadoras industriales. Atendemos su consulta con prioridad. Formulario directo.",
  alternates: { canonical: "/contacto" },
};

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberbandas.es" },
      { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://www.iberbandas.es/contacto" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
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
