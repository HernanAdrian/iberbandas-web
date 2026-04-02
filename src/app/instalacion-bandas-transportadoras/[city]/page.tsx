import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LeadForm } from '@/components/forms/LeadForm';
import {
  MapPin,
  Truck,
  Ruler,
  Cog,
  CheckCircle2,
  Zap,
  Factory,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { ANDALUCIA_CITY_SLUGS, getAndaluciaCity } from '@/lib/andalucia';
import styles from './page.module.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return ANDALUCIA_CITY_SLUGS.map((city) => ({ city }));
}

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getAndaluciaCity(citySlug);
  return {
    title: `Instalación de Bandas Transportadoras en ${city.displayName} | IberBandas`,
    description: `Suministro e instalación de bandas transportadoras en ${city.displayName}. Medición in situ, empalme vulcanizado y calibración bajo carga real. Cobertura en ${city.industrialZone}. Servicio urgente 24/7.`,
    alternates: {
      canonical: `/instalacion-bandas-transportadoras/${citySlug}/`,
    },
  };
}

export default async function LocalInstallationPage({ params }: Props) {
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
        name: 'Instalación de Bandas Transportadoras',
        item: 'https://www.iberband.es/instalacion',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Instalación en ${city.displayName}`,
        item: `https://www.iberband.es/instalacion-bandas-transportadoras/${citySlug}`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Instalación de Bandas Transportadoras en ${city.displayName}`,
    description: `Suministro e instalación de bandas transportadoras en ${city.displayName}. Medición in situ, selección de compuesto óptimo, empalme vulcanizado y calibración bajo carga real. Cobertura en ${city.industrialZone}.`,
    provider: {
      '@type': 'LocalBusiness',
      name: `IberBandas ${city.displayName}`,
      url: `https://www.iberband.es/instalacion-bandas-transportadoras/${citySlug}`,
      areaServed: { '@type': 'City', name: city.displayName },
    },
    serviceType: 'Instalación de Bandas Transportadoras',
    areaServed: { '@type': 'City', name: city.displayName },
    url: `https://www.iberband.es/instalacion-bandas-transportadoras/${citySlug}`,
  };

  return (
    <div className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.localBadge}>
                <MapPin size={14} />
                <span>Montaje Industrial en {city.displayName}</span>
              </div>
              <h1 className={styles.heroTitle}>
                Instalación y Suministro de Bandas y Cintas Transportadoras en {city.displayName}
              </h1>
              <p className={styles.heroSub}>{city.installation.intro}</p>
              <div className={styles.heroBenefits}>
                <span>
                  <Truck size={16} />
                  Suministro Directo
                </span>
                <span>
                  <Ruler size={16} />
                  Medición In Situ
                </span>
              </div>
            </div>
            <div className={styles.heroFormWrap}>
              <LeadForm
                formName="local-installation-hero-form"
                title={`Nueva Instalación en ${city.displayName}`}
                buttonText="Solicitar Montaje"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <div className={styles.statsBar}>
        <div className={styles.container}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <Factory size={16} className={styles.statIcon} />
              <span>
                <strong>Stock</strong> permanente
              </span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <CheckCircle2 size={16} className={styles.statIcon} />
              <span>
                <strong>+300 instalaciones</strong> realizadas
              </span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <Zap size={16} className={styles.statIcon} />
              <span>
                <strong>Garantía</strong> 2 años
              </span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <Clock size={16} className={styles.statIcon} />
              <span>
                <strong>+25 años</strong> de experiencia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ LOCAL CONTEXT ═══════════════ */}
      <section className={styles.localContextSection}>
        <div className={styles.container}>
          <div className={styles.localContextGrid}>
            <div>
              <span className={styles.sectionLabel}>
                <MapPin size={12} />
                Cobertura local
              </span>
              <h2 className={styles.localContextTitle}>
                Instalación de bandas transportadoras en {city.displayName}
              </h2>
              <p className={styles.localContextDesc}>{city.installation.intro}</p>
              <ul className={styles.sectorList}>
                {city.sectors.map((sector) => (
                  <li key={sector}>{sector}</li>
                ))}
              </ul>
              <Link href="/instalacion" className={styles.backLink}>
                Ver catálogo completo de instalación
                <ArrowRight size={14} />
              </Link>
            </div>
            <div>
              <span className={styles.sectionLabel}>
                <Factory size={12} />
                Zona industrial
              </span>
              <p className={styles.localContextDesc}>{city.industrialZone}</p>
              <p className={styles.localContextDesc}>
                Disponibilidad: <strong>24/7</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SPECS (problemSection) ═══════════════ */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Especificaciones técnicas para {city.displayName}
          </h2>
          <p className={styles.problemDescription}>
            Cada instalación en {city.displayName} se adapta a las condiciones específicas de la zona:
            clima, tipo de carga, velocidad de línea y exigencias del sector. A continuación, las
            especificaciones clave que aplicamos en su entorno.
          </p>
          <div className={styles.problemGrid}>
            {city.installation.specs.map((spec) => (
              <div key={spec.title} className={styles.problemCard}>
                <Cog size={22} className={styles.problemIcon} />
                <div>
                  <strong>{spec.title}</strong>
                  <p>{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS (serviceSection) ═══════════════ */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Proceso de instalación en {city.displayName}
          </h2>
          <p className={styles.problemDescription}>
            Seguimos un protocolo riguroso en cada proyecto para garantizar la máxima fiabilidad de
            la instalación desde el primer día de funcionamiento.
          </p>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  1
                </div>
                <strong>Medición y diagnóstico</strong>
                <p>
                  Visita técnica in situ en {city.displayName} para medir la línea, analizar el tipo
                  de carga, la temperatura de trabajo y los requisitos de resistencia. Seleccionamos
                  el compuesto y el tejido óptimos.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  2
                </div>
                <strong>Suministro y preparación</strong>
                <p>
                  Suministro de la banda desde nuestro stock permanente o fabricación a medida.
                  Preparación de empalmes, herramientas de vulcanizado y materiales de fijación
                  para el día del montaje.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  3
                </div>
                <strong>Montaje e inspección final</strong>
                <p>
                  Instalación del sistema, empalme vulcanizado de precisión y calibración bajo carga
                  real. Verificación de tensión, alineación y velocidad antes de la puesta en marcha
                  definitiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ INSTALACION IMAGE ═══════════════ */}
      <section className={styles.instalacionImageSection} aria-hidden="true">
        <div className={styles.instalacionImageWrap}>
          <Image
            src="/images/INSTALACION.webp"
            alt="Instalación profesional de banda transportadora industrial"
            fill
            loading="lazy"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            sizes="100vw"
          />
          <div className={styles.instalacionImageOverlay}>
            <div className={styles.container}>
              <p className={styles.instalacionImageCaption}>
                Instalación y puesta en marcha en {city.displayName} — Garantía 2 años
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MID LEAD FORM ═══════════════ */}
      <section className={styles.midFormSection}>
        <div className={styles.container}>
          <div className={styles.midFormWrap}>
            <LeadForm
              formName="local-installation-mid-form"
              title={`Presupuesto de instalación en ${city.displayName}`}
              buttonText="Solicitar Presupuesto de Instalación"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST ═══════════════ */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Por qué confiar en IberBandas</h2>
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>
                <Truck size={32} />
              </div>
              <strong>Suministro directo</strong>
              <p>
                Stock permanente de bandas de PVC, caucho y poliuretano. Entrega y montaje en{' '}
                {city.displayName} sin esperas ni intermediarios.
              </p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>
                <CheckCircle2 size={32} />
              </div>
              <strong>Garantía total</strong>
              <p>
                Garantía de 2 años sobre la banda instalada y el empalme vulcanizado. Respaldo
                técnico completo durante todo el período de garantía.
              </p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>
                <Zap size={32} />
              </div>
              <strong>Puesta en marcha rápida</strong>
              <p>
                Equipo técnico especializado en {city.displayName}. Minimizamos el tiempo de parada
                de línea con un protocolo de instalación ágil y probado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className={styles.finalSection}>
        <div className={styles.container}>
          <div className={styles.finalBox}>
            <div className={styles.finalText}>
              <h2>Renueve su línea en {city.displayName}</h2>
              <p>
                Hable con un técnico especializado en instalaciones en {city.displayName}. Le
                asesoramos sobre la banda óptima para su aplicación, le enviamos presupuesto sin
                compromiso y coordinamos el montaje adaptado a sus turnos de producción.
              </p>
            </div>
            <div className={styles.finalFormWrap}>
              <LeadForm
                formName="local-installation-final-form"
                buttonText="Solicitar Asesoría"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
