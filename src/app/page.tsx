import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LeadForm } from '@/components/forms/LeadForm';
import { Wrench, ShieldCheck, Truck, ClockAlert, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Cintas Transportadoras y Bandas Transportadoras Industriales | IberBandas",
  description: "Especialistas en cintas transportadoras y bandas transportadoras industriales. Reparación, mantenimiento y sustitución en toda España. Respuesta prioritaria 24/7.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "IberBandas | Cintas y Bandas Transportadoras Industriales",
    description: "Especialistas en cintas transportadoras y bandas transportadoras industriales. Reparación, mantenimiento y sustitución en toda España.",
  },
};

function WebPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IberBandas — Cintas Transportadoras y Bandas Transportadoras Industriales",
    "description": "Especialistas en cintas transportadoras y bandas transportadoras industriales. Reparación, mantenimiento y sustitución en toda España.",
    "url": "https://www.iberband.es",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "IberBandas",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <WebPageJsonLd />

      {/* ═══════════════ HERO — HERO.webp background ═══════════════ */}
      <section className={styles.heroSection}>
        <Image
          src="/images/HERO.webp"
          alt="Técnico especialista reparando banda transportadora industrial en Andalucía"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContentLayer}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <div className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot}></span>
                  Servicio de emergencia activo 24/7
                </div>
                <h1 className={styles.heroTitle}>
                  Reparación, Mantenimiento e Instalación de Bandas Transportadoras Industriales en Andalucía
                </h1>
                <p className={styles.heroSubheadline}>
                  Especialistas en cintas transportadoras y bandas transportadoras para la industria. Servicio técnico urgente en toda Andalucía.
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.heroStat}>
                    <strong>+500</strong>
                    <span>intervenciones/año</span>
                  </div>
                  <div className={styles.heroStatDivider}></div>
                  <div className={styles.heroStat}>
                    <strong>24/7</strong>
                    <span>disponibilidad</span>
                  </div>
                  <div className={styles.heroStatDivider}></div>
                  <div className={styles.heroStat}>
                    <strong>+25 años</strong>
                    <span>de experiencia</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroFormCard}>
                <div className={styles.heroFormCardHeader}>
                  <span className={styles.heroFormCardLabel}>Solicita Presupuesto Ahora</span>
                  <p className={styles.heroFormCardSub}>Técnico disponible 24/7. Sin compromiso.</p>
                </div>
                <LeadForm
                  formName="home-hero-form"
                  buttonText="Solicitar Asistencia Inmediata"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CORE SERVICES GRID ═══════════════ */}
      <section className={styles.servicesSection} aria-label="Servicios de bandas transportadoras">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cintas y Bandas Transportadoras</h2>
          <div className={styles.servicesGrid}>
            <Link href="/urgencias" className={styles.serviceCardAlert}>
              <div className={styles.cardHeader}>
                <ClockAlert size={28} />
                <h3>Reparación de Emergencia 24/7</h3>
              </div>
              <p>Equipo de intervención inmediata en su instalación.</p>
              <span className={styles.cardArrow}><ArrowRight size={18} /></span>
            </Link>

            <Link href="/reparacion" className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <Wrench size={28} />
                <h3>Reparación de Bandas</h3>
              </div>
              <p>Vulcanizado in situ y empalmes mecánicos.</p>
              <span className={styles.cardArrow}><ArrowRight size={18} /></span>
            </Link>

            <Link href="/mantenimiento" className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <ShieldCheck size={28} />
                <h3>Mantenimiento Preventivo</h3>
              </div>
              <p>Programas preventivos para evitar paradas.</p>
              <span className={styles.cardArrow}><ArrowRight size={18} /></span>
            </Link>

            <Link href="/instalacion" className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <Truck size={28} />
                <h3>Sustitución de Bandas</h3>
              </div>
              <p>Suministro e instalación de bandas nuevas.</p>
              <span className={styles.cardArrow}><ArrowRight size={18} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ LOCAL COVERAGE — Andalucía ═══════════════ */}
      <section className={styles.localCoverageSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cobertura en Andalucía</h2>
          <div className={styles.cityGrid}>
            <Link href="/bandas-transportadoras/sevilla" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Sevilla</span>
            </Link>
            <Link href="/bandas-transportadoras/malaga" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Málaga</span>
            </Link>
            <Link href="/bandas-transportadoras/granada" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Granada</span>
            </Link>
            <Link href="/bandas-transportadoras/cordoba" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Córdoba</span>
            </Link>
            <Link href="/bandas-transportadoras/almeria" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Almería</span>
            </Link>
            <Link href="/bandas-transportadoras/cadiz" className={styles.cityCard}>
              <MapPin size={18} />
              <span>Cádiz</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICIOS EN MÁLAGA ═══════════════ */}
      <section className={styles.malagaSection}>
        <div className={styles.container}>
          <div className={styles.malagaHeader}>
            <MapPin size={20} className={styles.malagaPin} aria-hidden="true" />
            <h2 className={styles.sectionTitle}>Servicios de Bandas Transportadoras en Málaga</h2>
          </div>
          <p className={styles.malagaDesc}>
            Málaga y su provincia concentran un tejido industrial variado — logística, agroalimentación, manipulación, distribución y sector servicios. Nuestros equipos técnicos cubren toda la provincia: capital, Antequera, Axarquía, Costa del Sol e interior.
          </p>
          <div className={styles.malagaGrid}>
            <Link href="/reparacion-bandas-transportadoras/malaga" className={styles.malagaCard}>
              <Wrench size={22} className={styles.malagaCardIcon} aria-hidden="true" />
              <strong>Reparación en Málaga</strong>
              <span>Urgente 24/7 · in situ</span>
              <ArrowRight size={14} className={styles.malagaCardArrow} aria-hidden="true" />
            </Link>
            <Link href="/mantenimiento-bandas-transportadoras/malaga" className={styles.malagaCard}>
              <ShieldCheck size={22} className={styles.malagaCardIcon} aria-hidden="true" />
              <strong>Mantenimiento en Málaga</strong>
              <span>Preventivo · auditoría gratuita</span>
              <ArrowRight size={14} className={styles.malagaCardArrow} aria-hidden="true" />
            </Link>
            <Link href="/instalacion-bandas-transportadoras/malaga" className={styles.malagaCard}>
              <Truck size={22} className={styles.malagaCardIcon} aria-hidden="true" />
              <strong>Instalación en Málaga</strong>
              <span>Suministro e instalación</span>
              <ArrowRight size={14} className={styles.malagaCardArrow} aria-hidden="true" />
            </Link>
            <Link href="/urgencias-bandas-transportadoras/malaga" className={styles.malagaCard}>
              <ClockAlert size={22} className={styles.malagaCardIcon} aria-hidden="true" />
              <strong>Urgencias en Málaga</strong>
              <span>Respuesta inmediata 24h</span>
              <ArrowRight size={14} className={styles.malagaCardArrow} aria-hidden="true" />
            </Link>
          </div>
          <p className={styles.malagaMore}>
            <Link href="/bandas-transportadoras/malaga">Ver todos los servicios en Málaga →</Link>
          </p>
        </div>
      </section>

      {/* ═══════════════ RESULTADO — BANDA PERFECTA ═══════════════ */}
      <section className={styles.resultSection} aria-label="Resultado de nuestro trabajo">
        <div className={styles.resultImageWrap}>
          <Image
            src="/images/BANDA PERFECTA.webp"
            alt="Banda transportadora perfectamente instalada y en funcionamiento"
            fill
            loading="lazy"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div className={styles.resultImageOverlay} />
        </div>
        <div className={styles.resultContent}>
          <span className={styles.resultLabel}>El resultado de nuestro trabajo</span>
          <h2 className={styles.resultTitle}>
            Línea en marcha.<br />Garantía de 2 años.
          </h2>
          <p className={styles.resultDesc}>
            Cada intervención termina con una banda perfectamente calibrada, empalme vulcanizado certificado y prueba bajo carga real. Sin medias tintas.
          </p>
          <ul className={styles.resultList}>
            <li><CheckCircle2 size={14} /> Vulcanizado certificado en campo</li>
            <li><CheckCircle2 size={14} /> Prueba bajo carga real</li>
            <li><CheckCircle2 size={14} /> Garantía de 2 años sobre el empalme</li>
          </ul>
          <Link href="/reparacion" className={styles.resultCta}>
            Ver servicio de reparación <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ═══════════════ MID-PAGE FORM — URGENCIA background ═══════════════ */}
      <section className={styles.midFormSection}>
        <Image
          src="/images/URGENCIA.webp"
          alt="Intervención de emergencia 24/7 en banda transportadora averiada"
          fill
          loading="lazy"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        <div className={styles.midFormOverlay} />
        <div className={styles.midFormContentLayer}>
          <div className={styles.container}>
            <div className={styles.midFormLayout}>
              <div className={styles.midFormText}>
                <h2 className={styles.midFormTitle}>¿Necesita atención técnica rápida?</h2>
                <p className={styles.midFormSubtitle}>Un técnico evaluará su caso y le dará solución sin compromiso.</p>
                <ul className={styles.midFormBullets}>
                  <li><ShieldCheck size={16} /> Sin compromiso ni coste</li>
                  <li><ArrowRight size={16} /> Respuesta prioritaria 24/7</li>
                  <li><Truck size={16} /> Técnicos en toda Andalucía</li>
                </ul>
              </div>
              <div className={styles.midFormWrapper}>
                <LeadForm
                  formName="home-mid-form"
                  buttonText="Obtener Presupuesto de Servicio"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST STRIP ═══════════════ */}
      <section className={styles.trustStrip} aria-label="Credenciales">
        <div className={styles.container}>
          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <strong>+25 años</strong> resolviendo averías en cintas y bandas transportadoras
            </div>
            <div className={styles.trustItem}>
              <strong>Protocolos ISO</strong> para cumplimiento normativo
            </div>
            <div className={styles.trustItem}>
              <strong>Cobertura Andalucía</strong> con equipos técnicos locales
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className={styles.finalCtaSection}>
        <div className={styles.container}>
          <div className={styles.finalCtaContent}>
            <div className={styles.finalCtaText}>
              <div className={styles.finalCtaBadge}>
                <ClockAlert size={13} />
                Emergencia 24/7
              </div>
              <h2>¿Cinta transportadora parada? Resolvemos la emergencia hoy.</h2>
              <p>Solicite una unidad móvil de reparación de bandas transportadoras inmediatamente. Sin esperas.</p>
            </div>
            <div className={styles.finalFormContainer}>
              <LeadForm
                formName="home-final-form"
                buttonText="Necesito un técnico urgente"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
