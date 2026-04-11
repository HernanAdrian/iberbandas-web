import { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/forms/LeadForm';
import Image from 'next/image';
import { CheckCircle2, AlertTriangle, Wrench, Clock, ShieldCheck, Zap } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Reparación de Bandas Transportadoras | Arreglo de Cintas Transportadoras",
  description: "Reparación profesional de bandas transportadoras y arreglo de cintas transportadoras. Vulcanizado, empalme y reparación mecánica in situ. ¿Problemas con su banda transportadora? Respuesta inmediata.",
  alternates: { canonical: "/reparacion/" },
};

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberband.es" },
      { "@type": "ListItem", "position": 2, "name": "Reparación de Bandas Transportadoras", "item": "https://www.iberband.es/reparacion" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Reparación de Bandas Transportadoras",
    "description": "Servicio profesional de reparación de bandas transportadoras y arreglo de cintas transportadoras industriales en Andalucía. Vulcanizado in situ, empalme mecánico y reparación de emergencia 24/7 en Málaga, Sevilla, Granada, Córdoba, Almería y Cádiz.",
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
    "serviceType": "Reparación de Bandas Transportadoras",
    "availableLanguage": "es",
    "priceRange": "€€",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function HowToJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo funciona el servicio de reparación de bandas transportadoras de IberBandas",
    "description": "Proceso paso a paso para solicitar y recibir reparación de una banda transportadora averiada.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Contacto y diagnóstico inicial",
        "text": "Rellene el formulario describiendo el problema de su banda transportadora. Un ingeniero evaluará su caso y le contactará con la máxima prioridad.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Inspección y presupuesto in situ",
        "text": "Desplazamos un equipo técnico a su instalación para diagnosticar el fallo, evaluar el estado de la cinta transportadora y proponer la mejor solución sin compromiso.",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Reparación y puesta en marcha",
        "text": "Ejecutamos la reparación de la banda transportadora in situ con la técnica adecuada (vulcanizado, empalme frío o mecánico). Validamos la resistencia bajo carga y entregamos la línea operativa con garantía.",
      },
    ],
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
        "name": "¿Cuánto tarda una reparación urgente de banda transportadora?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En urgencias, nuestro equipo se desplaza con prioridad máxima. El tiempo de intervención depende de la distancia, pero el objetivo es tener la línea operativa en la misma visita. Para reparaciones programadas, coordinamos la visita con sus turnos de producción.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Reparáis bandas transportadoras los fines de semana y festivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. IberBandas ofrece servicio de reparación urgente de bandas transportadoras 24 horas al día, 7 días a la semana, incluyendo fines de semana y festivos nacionales y regionales en Andalucía.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Qué tipos de bandas transportadoras reparáis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reparamos todo tipo de bandas y cintas transportadoras industriales: caucho multicapa, PVC, poliuretano (PU), plástico modular, cable de acero y bandas especiales resistentes al calor, aceites o productos químicos.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Hacéis presupuesto gratuito de reparación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. La evaluación inicial y el presupuesto de reparación son gratuitos y sin compromiso. Un ingeniero visita su instalación en Andalucía para diagnosticar el fallo y proponer la solución más adecuada.",
        },
      },
      {
        "@type": "Question",
        "name": "¿Qué garantía incluye la reparación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Todas nuestras reparaciones incluyen garantía sobre el empalme y la zona reparada. Las reparaciones por vulcanizado en caliente tienen garantía de hasta 2 años. Utilizamos materiales homologados y protocolos ISO.",
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function RepairService() {
  return (
    <div className={styles.pageWrapper}>
      <BreadcrumbJsonLd />
      <ServiceJsonLd />
      <HowToJsonLd />
      <FAQJsonLd />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.urgencyBadge}>
                <AlertTriangle size={16} />
                <span>Servicio urgente 24/7</span>
              </div>
              <h1 className="display-md">
                Reparación de Bandas y Cintas Transportadoras Industriales — Servicio Urgente 24/7
              </h1>
              <p className={styles.heroSubheadline}>
                Servicio profesional de reparación de bandas transportadoras y arreglo de cintas transportadoras in situ. Vulcanizado, empalme mecánico y soluciones de emergencia para que su línea vuelva a producir.
              </p>
              <ul className={styles.heroBenefits}>
                <li><CheckCircle2 size={18} /> Sin compromiso</li>
                <li><CheckCircle2 size={18} /> Respuesta rápida</li>
                <li><CheckCircle2 size={18} /> Reparación in situ</li>
              </ul>
            </div>
            <div className={styles.heroFormContainer}>
              <LeadForm 
                formName="repair-hero-form" 
                title="Solicitar Reparación"
                subtitle="Le contactamos cuanto antes. Sin compromiso."
                buttonText="Enviar Solicitud de Reparación" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ VISUAL STRIP — PROBLEMAS ═══════════════ */}
      <div className={styles.imageStrip}>
        <Image
          src="/images/PROBLEMAS.webp"
          alt="Banda transportadora con desgaste y problemas visibles"
          fill
          loading="lazy"
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          sizes="100vw"
        />
        <div className={styles.imageStripOverlay}>
          <div className={styles.container}>
            <p className={styles.imageStripCaption}>¿Reconoce alguno de estos síntomas en su instalación?</p>
          </div>
        </div>
      </div>

      {/* ═══════════════ PROBLEM SECTION ═══════════════ */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <h2 className="headline-lg">Problemas Comunes en Bandas Transportadoras y Cintas Industriales</h2>
          <p className={styles.sectionIntro}>
            Los problemas en una banda transportadora no avisan. Un desgarro, una desalineación o un empalme deteriorado puede detener toda su línea de producción en segundos. Si identifica alguno de estos síntomas, necesita reparar su cinta transportadora antes de que la avería se convierta en una parada total.
          </p>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <AlertTriangle size={28} />
              </div>
              <h3 className="title-sm">Desgarros y Roturas</h3>
              <p className="body-md">Cortes longitudinales o transversales en la banda que provocan pérdida de material transportado y riesgo de rotura completa.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <AlertTriangle size={28} />
              </div>
              <h3 className="title-sm">Desalineación de la Banda</h3>
              <p className="body-md">La cinta transportadora se desplaza lateralmente, provocando desgaste acelerado en los bordes, daño a la estructura y riesgo de caída de carga.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <AlertTriangle size={28} />
              </div>
              <h3 className="title-sm">Desgaste Prematuro de la Superficie</h3>
              <p className="body-md">Abrasión excesiva, pérdida de espesor y deterioro de la cubierta superior de la banda transportadora por materiales agresivos o tensión incorrecta.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <AlertTriangle size={28} />
              </div>
              <h3 className="title-sm">Empalmes Deteriorados</h3>
              <p className="body-md">Los empalmes son el punto más vulnerable de una cinta transportadora. Fallos en la unión causan paradas imprevistas y pérdida de producción.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <AlertTriangle size={28} />
              </div>
              <h3 className="title-sm">Deslizamiento de la Banda</h3>
              <p className="body-md">Pérdida de tracción entre la banda y el tambor motor por tensión insuficiente, superficie contaminada o desgaste del recubrimiento.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <AlertTriangle size={28} />
              </div>
              <h3 className="title-sm">Paradas No Planificadas</h3>
              <p className="body-md">Cualquier avería no resuelta se convierte en una parada completa. Cada hora de línea parada puede costar miles de euros en producción perdida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICE SECTION ═══════════════ */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <h2 className="headline-lg">Servicios de Reparación de Bandas Transportadoras</h2>
          <p className={styles.sectionIntro}>
            Nuestro equipo técnico está especializado en el arreglo de cintas transportadoras de cualquier tipo: caucho, PVC, PU, cable de acero o modular. Cada reparación se ejecuta in situ para minimizar el tiempo de parada de su instalación.
          </p>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <CheckCircle2 className={styles.serviceIcon} size={28} />
              <div>
                <h3 className="title-sm">Diagnóstico Técnico In Situ</h3>
                <p className="body-md">Inspección visual e instrumental de la banda transportadora para identificar la causa raíz del fallo: desalineación, desgaste, impacto o defecto del empalme.</p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <CheckCircle2 className={styles.serviceIcon} size={28} />
              <div>
                <h3 className="title-sm">Vulcanizado en Caliente</h3>
                <p className="body-md">Reparación de máxima resistencia para bandas transportadoras de carga crítica. Restaura la integridad estructural de la banda al 100% de su capacidad original.</p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <CheckCircle2 className={styles.serviceIcon} size={28} />
              <div>
                <h3 className="title-sm">Empalme en Frío</h3>
                <p className="body-md">Técnica rápida para reparar cintas transportadoras en entornos donde no es posible aplicar calor. Ideal para zonas con riesgo de explosión o material inflamable.</p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <CheckCircle2 className={styles.serviceIcon} size={28} />
              <div>
                <h3 className="title-sm">Grapas y Empalme Mecánico</h3>
                <p className="body-md">Solución temporal de alta carga para reiniciar la producción en minutos. Ideal cuando necesita reparar una cinta transportadora de forma urgente.</p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <CheckCircle2 className={styles.serviceIcon} size={28} />
              <div>
                <h3 className="title-sm">Reparación de Bordes y Desgarros</h3>
                <p className="body-md">Parcheo localizado y reconstrucción de bordes dañados para prevenir la rotura completa de la banda transportadora.</p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <CheckCircle2 className={styles.serviceIcon} size={28} />
              <div>
                <h3 className="title-sm">Sustitución de Banda si es Necesario</h3>
                <p className="body-md">Si la banda está más allá de la reparación, suministramos e instalamos la banda transportadora de recambio correcta para su aplicación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MID-PAGE FORM ═══════════════ */}
      <section className={styles.midFormSection}>
        <div className={styles.container}>
          <div className={styles.midFormWrapper}>
            <LeadForm 
              formName="repair-mid-form" 
              title="Solicitar Presupuesto de Reparación"
              subtitle="Describa el problema de su banda transportadora. Un ingeniero le contactará rápidamente. Sin compromiso."
              buttonText="Obtener Presupuesto Gratuito" 
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST SECTION ═══════════════ */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <h2 className="headline-lg">¿Por Qué Confiar en IberBandas para Reparar su Cinta Transportadora?</h2>
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <Wrench className={styles.trustIcon} size={36} />
              <h3 className="title-sm">+25 Años de Experiencia Industrial</h3>
              <p className="body-md">Más de 500 intervenciones al año en reparación de bandas transportadoras para sectores como minería, logística, alimentación y reciclaje.</p>
            </div>
            <div className={styles.trustCard}>
              <Clock className={styles.trustIcon} size={36} />
              <h3 className="title-sm">Respuesta en Menos de 2 Horas</h3>
              <p className="body-md">Equipos móviles con prensas de vulcanizado, herramientas de empalme y material de reparación listos para desplegar de inmediato.</p>
            </div>
            <div className={styles.trustCard}>
              <ShieldCheck className={styles.trustIcon} size={36} />
              <h3 className="title-sm">Fiabilidad y Garantía</h3>
              <p className="body-md">Utilizamos materiales homologados y protocolos ISO. Cada reparación de banda transportadora incluye garantía de resistencia y durabilidad.</p>
            </div>
            <div className={styles.trustCard}>
              <Zap className={styles.trustIcon} size={36} />
              <h3 className="title-sm">Servicio 24/7 en Toda España</h3>
              <p className="body-md">Disponibilidad total, incluyendo noches, fines de semana y festivos. Porque los problemas en cintas transportadoras no esperan al lunes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS SECTION ═══════════════ */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className="headline-lg" style={{ textAlign: 'center', marginBottom: '3rem' }}>Cómo Funciona Nuestro Servicio de Reparación</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3 className="title-sm">Contacto y Diagnóstico Inicial</h3>
              <p className="body-md">Rellene el formulario describiendo el problema de su banda transportadora. Un ingeniero evaluará su caso y le contactará con la máxima prioridad.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3 className="title-sm">Inspección y Presupuesto In Situ</h3>
              <p className="body-md">Desplazamos un equipo técnico a su instalación para diagnosticar el fallo, evaluar el estado de la cinta transportadora y proponer la mejor solución.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3 className="title-sm">Reparación y Puesta en Marcha</h3>
              <p className="body-md">Ejecutamos la reparación de la banda transportadora in situ con la técnica adecuada. Validamos la resistencia y le entregamos la línea operativa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ LOCAL COVERAGE ═══════════════ */}
      <section className={styles.localCoverageSection}>
        <div className={styles.container}>
          <h2 className="headline-lg" style={{ marginBottom: '1rem' }}>Reparación de Bandas Transportadoras en Andalucía</h2>
          <p className="body-md" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '700px' }}>
            Disponemos de equipos técnicos locales para la reparación de cintas transportadoras en los principales polígonos industriales de Andalucía.
          </p>
          <div className={styles.cityLinksGrid}>
            <Link href="/reparacion-bandas-transportadoras/sevilla" className={styles.cityLink}>Reparación en Sevilla</Link>
            <Link href="/reparacion-bandas-transportadoras/malaga" className={styles.cityLink}>Reparación en Málaga</Link>
            <Link href="/reparacion-bandas-transportadoras/granada" className={styles.cityLink}>Reparación en Granada</Link>
            <Link href="/reparacion-bandas-transportadoras/cordoba" className={styles.cityLink}>Reparación en Córdoba</Link>
            <Link href="/reparacion-bandas-transportadoras/almeria" className={styles.cityLink}>Reparación en Almería</Link>
            <Link href="/reparacion-bandas-transportadoras/cadiz" className={styles.cityLink}>Reparación en Cádiz</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ RESULTADO — BANDA PERFECTA ═══════════════ */}
      <div className={styles.resultStrip}>
        <Image
          src="/images/BANDA PERFECTA.webp"
          alt="Banda transportadora reparada y funcionando a pleno rendimiento"
          fill
          loading="lazy"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        <div className={styles.resultStripOverlay}>
          <div className={styles.container}>
            <p className={styles.resultStripCaption}>Así queda su línea tras la intervención. Garantía incluida.</p>
          </div>
        </div>
      </div>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className={styles.finalCtaSection}>
        <div className={styles.container}>
          <div className={styles.finalCtaBox}>
            <div className={styles.finalCtaText}>
              <h2 className="headline-lg" style={{ color: 'var(--primary-foreground)' }}>
                ¿Su banda transportadora tiene un problema? No espere a la rotura completa.
              </h2>
              <p className="body-md" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '1rem' }}>
                Cada hora de parada cuesta miles de euros. Contacte ahora con nuestro equipo de reparación de bandas transportadoras y resuelva la avería hoy mismo.
              </p>
            </div>
            <div className={styles.finalFormContainer}>
              <LeadForm 
                formName="repair-final-form" 
                buttonText="Solicitar Reparación Urgente" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
