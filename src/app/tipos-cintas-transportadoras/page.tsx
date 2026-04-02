import { Metadata } from 'next';
import Image from 'next/image';
import { LeadForm } from '@/components/forms/LeadForm';
import styles from './page.module.css';


export const metadata: Metadata = {
  title: "Tipos de Bandas Transportadoras | Tipos de Cintas Transportadoras Industriales",
  description: "Guía completa de tipos de bandas transportadoras y cintas transportadoras industriales: caucho para trabajos pesados, PVC/PU higiénico, plástico modular y cable de acero. Comparativa de materiales.",
  alternates: { canonical: "/tipos-cintas-transportadoras/" },
};

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberband.es" },
      { "@type": "ListItem", "position": 2, "name": "Tipos de Bandas Transportadoras", "item": "https://www.iberband.es/tipos-cintas-transportadoras" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ConveyorBeltTypesPage() {
  return (
    <div className={styles.pageWrapper}>
      <BreadcrumbJsonLd />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className="display-md">Tipos de Bandas Transportadoras: PVC, Caucho, Poliuretano y Bandas Especiales para la Industria</h1>
            <p className={styles.heroSubheadline}>
              La ciencia de los materiales es la base de la fiabilidad. La selección del compuesto correcto dicta la vida útil y la integridad estructural de su línea.
            </p>
            <div className={styles.heroFormContainer}>
              <LeadForm 
                formName="types-hero-form" 
                buttonText="Seleccionar Rápido mi Banda" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Strip */}
      <div className={styles.imageStrip} aria-hidden="true">
        <Image
          src="/images/BANDA-TRANSPORTADORA-A-REPARAR3.webp"
          alt="Distintos tipos de bandas transportadoras industriales"
          fill
          loading="lazy"
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
          sizes="100vw"
        />
        <div className={styles.imageStripOverlay}>
          <div className={styles.container}>
            <p className={styles.imageStripCaption}>Cada material tiene una aplicación. La elección correcta multiplica la vida útil de su sistema.</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.mainGrid}>
            
            {/* Left Column: Types */}
            <div className={styles.typesColumn}>
              <div className={styles.typeBlock}>
                <h2 className="headline-lg">Bandas de Caucho para Trabajos Pesados</h2>
                <div className={styles.typeBlockContent}>
                  <p className="body-md">
                    La columna vertebral de la industria pesada. Diseñadas para impactos severos, alta abrasión y cargas de volumen masivo. Disponibles en múltiples capas (EP) y grados de cubierta específicos (resistente a la abrasión, aceite, o calor).
                  </p>
                  <ul className={styles.attributeList}>
                    <li><strong>Mejor Para:</strong> Áridos, Minería, Reciclaje, Fabricación Pesada</li>
                    <li><strong>Tipo de Empalme:</strong> Vulcanizado en Caliente, Empalme en Frío, Cierres Mecánicos</li>
                    <li><strong>Beneficio Clave:</strong> Extrema durabilidad y absorción de impactos.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.typeBlock}>
                <h2 className="headline-lg">Bandas de PVC / PU (Uso Ligero)</h2>
                <div className={styles.typeBlockContent}>
                  <p className="body-md">
                    Bandas sintéticas diseñadas para limpieza, flexibilidad y precisión. Las bandas de Poliuretano (PU) y Cloruro de Polivinilo (PVC) no son tóxicas, son resistentes a grasas y aceites, e ideales para diámetros de polea más pequeños.
                  </p>
                  <ul className={styles.attributeList}>
                    <li><strong>Mejor Para:</strong> Procesamiento de Alimentos, Envasado, Clasificación de paquetes, Productos Farmacéuticos</li>
                    <li><strong>Tipo de Empalme:</strong> Empalme dentado (Soldadura por alta frecuencia)</li>
                    <li><strong>Beneficio Clave:</strong> Cumplimiento de normativas de higiene y funcionamiento silencioso.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.typeBlock}>
                <h2 className="headline-lg">Bandas Modulares de Plástico</h2>
                <div className={styles.typeBlockContent}>
                  <p className="body-md">
                    Construidas con módulos de plástico entrelazados accionados por piñones. Eliminan los problemas de seguimiento y permiten reparaciones localizadas sencillas (sustitución de eslabones individuales en lugar de empalmar toda la banda).
                  </p>
                  <ul className={styles.attributeList}>
                    <li><strong>Mejor Para:</strong> Líneas de Alimentación / Bebidas, refrigeración, curvas complejas</li>
                    <li><strong>Tipo de Empalme:</strong> Inserción de Pasadores Modulares</li>
                    <li><strong>Beneficio Clave:</strong> Estabilidad absoluta de seguimiento y fácil lavado.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.typeBlock}>
                <h2 className="headline-lg">Bandas de Cable de Acero</h2>
                <div className={styles.typeBlockContent}>
                  <p className="body-md">
                    Para las tensiones más extremas a largas distancias. En lugar de tejido textil, cables de acero de alta resistencia recorren toda la longitud de la banda, permitiendo prácticamente cero elongación y una capacidad de carga masiva.
                  </p>
                  <ul className={styles.attributeList}>
                    <li><strong>Mejor Para:</strong> Cintas transportadoras terrestres, Minería en pozo profundo</li>
                    <li><strong>Tipo de Empalme:</strong> Vulcanizado en Caliente Especializado (Escalonado)</li>
                    <li><strong>Beneficio Clave:</strong> Límites de tensión ultra-altos con baja elongación.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className={styles.sidebarColumn}>
              <div className={styles.consultBox}>
                <h3 className="headline-lg">¿Necesita ayuda para seleccionar una banda?</h3>
                <p className="body-md" style={{margin: "1rem 0 2rem 0", color: "var(--text-secondary)"}}>
                  El uso del compuesto de banda incorrecto provoca desgaste prematuro, fallos de seguimiento y roturas. Deje que nuestros ingenieros evalúen su carga, velocidad y exposición ambiental para recomendar el material perfecto.
                </p>
                <LeadForm 
                  formName="types-mid-form" 
                  buttonText="Que un ingeniero me recomiende" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className={styles.finalSection}>
        <div className={styles.container}>
          <div className={styles.finalFormContainer}>
            <LeadForm 
              formName="types-final-form" 
              title="Solicitar Presupuesto Especializado"
              subtitle="Si ya conoce el material que necesita, pídanos valoración directa."
              buttonText="Recibir Presupuesto del Material" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
