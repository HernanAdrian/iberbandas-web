import { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/forms/LeadForm';
import Image from 'next/image';
import { Factory, Truck, Box, Recycle, Leaf, Compass } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Bandas Transportadoras por Sector Industrial | Cintas para Logística, Minería y Alimentación",
  description: "Cintas transportadoras y bandas transportadoras adaptadas a cada sector: logística, fabricación, reciclaje, alimentación, agricultura y minería. Materiales y especificaciones técnicas por industria.",
  alternates: { canonical: "/industrias" },
};

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberband.es" },
      { "@type": "ListItem", "position": 2, "name": "Industrias", "item": "https://www.iberband.es/industrias" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function IndustriesPage() {
  return (
    <div className={styles.pageWrapper}>
      <BreadcrumbJsonLd />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className="display-md">Bandas y Cintas Transportadoras por Sector Industrial: Alimentación, Logística, Minería, Aeronáutica y Más</h1>
            <p className={styles.heroSubheadline}>
              Cada industria impone exigencias únicas a sus sistemas de cintas transportadoras y bandas industriales. Diseñamos soluciones específicas para su entorno operativo.
            </p>
            <div className={styles.heroFormContainer}>
              <LeadForm 
                formName="industries-hero-form" 
                buttonText="Consultar Solución para mi Sector" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <h2 className="headline-lg" style={{ marginBottom: "2rem" }}>Sectores que Servimos</h2>
          <div className={styles.grid}>
            {/* Logistics */}
            <article className={styles.industryCard}>
              <div className={styles.cardHeader}>
                <Truck className={styles.icon} size={40} />
                <h3 className="headline-lg">Logística y Paquetería</h3>
              </div>
              <p className="body-md">
                Los centros de clasificación y distribución de alta velocidad requieren bandas transportadoras con acumulación de baja fricción y extrema resistencia al desgaste para mover millones de paquetes sin interrupción.
              </p>
              <ul className={styles.featureList}>
                <li>Bandas inclinadas de alto agarre</li>
                <li>Especificaciones operativas de bajo ruido</li>
                <li>Zonas de carga resistentes al impacto</li>
              </ul>
            </article>

            {/* Manufacturing */}
            <article className={styles.industryCard}>
              <div className={styles.cardHeader}>
                <Factory className={styles.icon} size={40} />
                <h3 className="headline-lg">Fabricación Industrial</h3>
              </div>
              <p className="body-md">
                Desde el ensamblaje automotriz hasta la fabricación pesada, las bandas transportadoras deben resistir aceite, abrasión química y cargas puntuales pesadas en tramos continuos largos.
              </p>
              <ul className={styles.featureList}>
                <li>Caucho NBR resistente al aceite</li>
                <li>Vulcanizado de alta temperatura</li>
                <li>Especificaciones estructurales para cargas pesadas</li>
              </ul>
            </article>

            {/* Recycling & Waste */}
            <article className={styles.industryCard}>
              <div className={styles.cardHeader}>
                <Recycle className={styles.icon} size={40} />
                <h3 className="headline-lg">Reciclaje y Recuperación</h3>
              </div>
              <p className="body-md">
                El entorno más exigente para cualquier banda transportadora. Desplegamos caucho resistente a cortes con cubiertas gruesas diseñado para soportar metales dentados, vidrio y escombros agresivos.
              </p>
              <ul className={styles.featureList}>
                <li>Carcasas resistentes a roturas y desgarros</li>
                <li>Cubiertas gruesas de alta abrasión</li>
                <li>Compatibles con separador magnético</li>
              </ul>
            </article>
          </div>

          {/* Image strip between grid sections */}
          <div className={styles.industriasBanner}>
            <Image
              src="/images/BANDA-TRANSPORTADORA-A-REPARAR2.webp"
              alt="Banda transportadora industrial en proceso de trabajo"
              fill
              loading="lazy"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="100vw"
            />
            <div className={styles.industriasBannerOverlay}>
              <p className={styles.industriasBannerText}>Cada sector tiene su banda. Cada aplicación, su solución técnica óptima.</p>
            </div>
          </div>

          <div className={styles.midFormContainer}>
            <LeadForm 
              formName="industries-mid-form" 
              title="Mejorar la Eficiencia de mi Línea"
              subtitle="Indique su sector y el reto actual. Un ingeniero especializado le asesorará."
              buttonText="Solicitar Asesoramiento" 
            />
          </div>

          <div className={styles.grid} style={{ marginTop: "var(--spacing-6)" }}>
            {/* Packaging */}
            <article className={styles.industryCard}>
              <div className={styles.cardHeader}>
                <Box className={styles.icon} size={40} />
                <h3 className="headline-lg">Alimentación y Envasado</h3>
              </div>
              <p className="body-md">
                El cumplimiento normativo es obligatorio. Instalamos bandas transportadoras higiénicas aprobadas por la FDA/UE (PU/PVC) fáciles de limpiar, resistentes a grasas y que evitan la proliferación bacteriana.
              </p>
              <ul className={styles.featureList}>
                <li>Materiales conformes a FDA/UE</li>
                <li>Bandas higiénicas homogéneas</li>
                <li>Perfiles con tacos y bordes de contención</li>
              </ul>
            </article>

            {/* Agriculture */}
            <article className={styles.industryCard}>
              <div className={styles.cardHeader}>
                <Leaf className={styles.icon} size={40} />
                <h3 className="headline-lg">Agricultura y Graneles</h3>
              </div>
              <p className="body-md">
                El transporte de grano, semillas y fertilizantes requiere bandas transportadoras para volumen a granel, a menudo con patrones en V (chevron) para manejar pendientes pronunciadas y evitar el retroceso del material.
              </p>
              <ul className={styles.featureList}>
                <li>Bandas nervadas y perfiladas</li>
                <li>Propiedades antiestáticas</li>
                <li>Manejo de graneles de alta capacidad</li>
              </ul>
            </article>

            {/* Mining & Aggregates */}
            <article className={styles.industryCard}>
              <div className={styles.cardHeader}>
                <Compass className={styles.icon} size={40} />
                <h3 className="headline-lg">Áridos y Minería</h3>
              </div>
              <p className="body-md">
                Tensión e impacto extremos. Bandas transportadoras de cable de acero y textiles muy reforzadas construidas para mover toneladas de tierra y piedra cruda por hora.
              </p>
              <ul className={styles.featureList}>
                <li>Refuerzo de cable de acero</li>
                <li>Extrema resistencia a la abrasión</li>
                <li>Cunas de impacto pesadas</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Cross-Sell */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className="headline-lg" style={{marginBottom: "1rem"}}>Consulte a un Especialista en Bandas Transportadoras.</h2>
            <p className="body-md" style={{color: "var(--text-secondary)", marginBottom: "2rem"}}>
              Hable de su entorno operativo para asegurarse de que su próxima sustitución o programa de mantenimiento de bandas transportadoras utilice los materiales óptimos.
            </p>
            <div className={styles.finalFormContainer}>
              <LeadForm 
                formName="industries-final-form" 
                buttonText="Agendar Evaluación con Ingeniero" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
