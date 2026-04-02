import { ANDALUCIA_CITY_SLUGS, getAndaluciaCity } from '@/lib/andalucia';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LeadForm } from '@/components/forms/LeadForm';
import {
  MapPin,
  Wrench,
  ShieldCheck,
  Package,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Factory,
} from 'lucide-react';
import styles from './page.module.css';

/* ── Static Params ── */
export const dynamicParams = false;

export async function generateStaticParams() {
  return ANDALUCIA_CITY_SLUGS.map((city) => ({ city }));
}

/* ── Metadata ── */
interface Props {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getAndaluciaCity(citySlug);
  const descriptionBase = city.hubIntro.slice(0, 155).trimEnd();
  return {
    title: `Bandas Transportadoras en ${city.displayName} | Reparación, Mantenimiento e Instalación — IberBandas`,
    description: `${descriptionBase}… Servicio en ${city.industrialZone}.`,
    alternates: { canonical: `/bandas-transportadoras/${citySlug}/` },
  };
}

/* ── Page ── */
export default async function CityHubPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getAndaluciaCity(citySlug);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://www.iberband.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ciudades',
        item: 'https://www.iberband.es/bandas-transportadoras',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.displayName,
        item: `https://www.iberband.es/bandas-transportadoras/${citySlug}`,
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'IberBandas',
    description: `Servicio de reparación, mantenimiento e instalación de bandas transportadoras en ${city.displayName}. Cobertura en ${city.industrialZone}. Servicio urgente 24/7.`,
    url: `https://www.iberband.es/bandas-transportadoras/${citySlug}`,
    areaServed: {
      '@type': 'City',
      name: city.displayName,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.displayName,
      addressRegion: city.province,
      addressCountry: 'ES',
    },
    serviceType: [
      'Reparación de Bandas Transportadoras',
      'Mantenimiento de Bandas Transportadoras',
      'Instalación de Bandas Transportadoras',
      'Urgencias de Bandas Transportadoras',
    ],
  };

  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main className={styles.pageWrapper}>
        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              {/* Left — text */}
              <div className={styles.heroText}>
                <div className={styles.localBadge}>
                  <MapPin size={14} aria-hidden="true" />
                  Cobertura Industrial en {city.displayName}
                </div>

                <h1 className={styles.heroTitle}>
                  Bandas y Cintas Transportadoras en {city.displayName}: Reparación, Mantenimiento Preventivo e Instalación Industrial
                </h1>

                <p className={styles.heroSub}>{city.hubIntro}</p>

                <div className={styles.heroBenefits}>
                  <span>
                    <Wrench size={16} aria-hidden="true" />
                    Reparación 24/7
                  </span>
                  <span>
                    <ShieldCheck size={16} aria-hidden="true" />
                    Mantenimiento Preventivo
                  </span>
                  <span>
                    <Package size={16} aria-hidden="true" />
                    Instalación y Suministro
                  </span>
                </div>
              </div>

              {/* Right — form */}
              <div className={styles.heroFormWrap}>
                <LeadForm
                  formName="hub-hero-form"
                  title={`Consulta en ${city.displayName}`}
                  buttonText="Solicitar Información"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SERVICES GRID
        ══════════════════════════════════════════ */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Servicios de bandas transportadoras en {city.displayName}
            </h2>

            <div className={styles.servicesGrid}>
              <Link
                href={`/reparacion-bandas-transportadoras/${citySlug}`}
                className={styles.serviceCard}
              >
                <span className={styles.serviceCardIcon}>
                  <Wrench size={28} aria-hidden="true" />
                </span>
                <strong className={styles.serviceCardTitle}>Reparación de Bandas</strong>
                <p className={styles.serviceCardDesc}>
                  Técnico in situ con prioridad máxima. Empalme, vulcanizado y
                  sustitución de emergencia.
                </p>
                <span className={styles.serviceCardArrow}>
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </Link>

              <Link
                href={`/mantenimiento-bandas-transportadoras/${citySlug}`}
                className={styles.serviceCard}
              >
                <span className={styles.serviceCardIcon}>
                  <ShieldCheck size={28} aria-hidden="true" />
                </span>
                <strong className={styles.serviceCardTitle}>Mantenimiento Preventivo</strong>
                <p className={styles.serviceCardDesc}>
                  Planes de revisión periódica para eliminar averías imprevistas.
                </p>
                <span className={styles.serviceCardArrow}>
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </Link>

              <Link
                href={`/instalacion-bandas-transportadoras/${citySlug}`}
                className={styles.serviceCard}
              >
                <span className={styles.serviceCardIcon}>
                  <Package size={28} aria-hidden="true" />
                </span>
                <strong className={styles.serviceCardTitle}>Instalación y Suministro</strong>
                <p className={styles.serviceCardDesc}>
                  Suministro e instalación de bandas PVC, caucho y PU para nuevas líneas.
                </p>
                <span className={styles.serviceCardArrow}>
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </Link>

              <Link
                href={`/urgencias-bandas-transportadoras/${citySlug}`}
                className={styles.serviceCard}
              >
                <span className={styles.serviceCardIcon}>
                  <AlertTriangle size={28} aria-hidden="true" />
                </span>
                <strong className={styles.serviceCardTitle}>Urgencias 24h</strong>
                <p className={styles.serviceCardDesc}>
                  Respuesta inmediata para paradas críticas. Disponible las 24 horas, 365 días.
                </p>
                <span className={styles.serviceCardArrow}>
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INDUSTRIAL ZONES
        ══════════════════════════════════════════ */}
        <section className={styles.zonesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Industria y polígonos en {city.displayName}
            </h2>
            <p className={styles.zonesDesc}>{city.repair.localContext}</p>

            <ul className={styles.zonesList}>
              {city.sectors.map((sector) => (
                <li key={sector} className={styles.zoneItem}>
                  <span className={styles.zoneIcon}>
                    <CheckCircle2 size={16} aria-hidden="true" />
                  </span>
                  {sector}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MID FORM
        ══════════════════════════════════════════ */}
        <section className={styles.midFormSection}>
          <div className={styles.container}>
            <div className={styles.midFormWrap}>
              <LeadForm
                formName="hub-mid-form"
                buttonText="Solicitar Presupuesto"
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STATS
        ══════════════════════════════════════════ */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Urgente</span>
                <span className={styles.statLabel}>tiempo de respuesta</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>+500</span>
                <span className={styles.statLabel}>reparaciones al año</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>disponibilidad</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>+25</span>
                <span className={styles.statLabel}>años de experiencia</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            RESULT IMAGE
        ══════════════════════════════════════════ */}
        <div className={styles.resultImageSection} aria-hidden="true">
          <Image
            src="/images/BANDA PERFECTA.webp"
            alt="Banda transportadora industrial en perfecto estado"
            fill
            loading="lazy"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            sizes="100vw"
          />
          <div className={styles.resultImageOverlay}>
            <div className={styles.container}>
              <p className={styles.resultImageCaption}>Así trabajan las líneas que mantenemos. Continuas, alineadas, sin pérdidas de producción.</p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalBox}>
              <div className={styles.finalText}>
                <h2>¿Necesita asistencia en {city.displayName}?</h2>
                <p>
                  Nuestros técnicos especializados en {city.displayName} están disponibles las 24
                  horas. Cubrimos {city.industrialZone} y toda la provincia de {city.province}. Desde
                  reparaciones de emergencia hasta contratos de mantenimiento a largo plazo, IberBandas
                  es su socio de confianza para la continuidad productiva.
                </p>
              </div>
              <div className={styles.finalFormWrap}>
                <LeadForm
                  formName="hub-final-form"
                  buttonText="Contactar con IberBandas"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
