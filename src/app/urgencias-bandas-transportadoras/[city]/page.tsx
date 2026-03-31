import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LeadForm } from '@/components/forms/LeadForm';
import { AlertTriangle, Clock, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
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
    title: `Urgencias 24h Bandas Transportadoras en ${city.displayName} | IberBandas`,
    description: `Servicio técnico urgente 24/7 en ${city.displayName}. Servicio urgente 24/7 para reparación de cintas transportadoras en ${city.industrialZone}. Atendemos paradas críticas en todos los sectores industriales.`,
    alternates: { canonical: `/urgencias-bandas-transportadoras/${citySlug}` },
  };
}

export default async function LocalUrgentPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getAndaluciaCity(citySlug);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.iberband.es' },
      { '@type': 'ListItem', position: 2, name: 'Urgencias 24h', item: 'https://www.iberband.es/urgencias' },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Urgencias en ${city.displayName}`,
        item: `https://www.iberband.es/urgencias-bandas-transportadoras/${citySlug}`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Reparación Urgente de Bandas Transportadoras en ${city.displayName}`,
    description: `Servicio técnico urgente 24/7 para bandas transportadoras en ${city.displayName}. Servicio urgente 24/7. Cobertura en ${city.industrialZone}.`,
    provider: {
      '@type': 'LocalBusiness',
      name: `IberBandas ${city.displayName}`,
      url: `https://www.iberband.es/urgencias-bandas-transportadoras/${citySlug}`,
      areaServed: { '@type': 'City', name: city.displayName },
    },
    serviceType: 'Reparación Urgente de Bandas Transportadoras',
    areaServed: { '@type': 'City', name: city.displayName },
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

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.alertBadge}>
                <AlertTriangle size={16} />
                <span>Atención Prioritaria en {city.displayName}</span>
              </div>
              <h1 className={styles.heroTitle}>
                Reparación Urgente de Bandas y Cintas Transportadoras en {city.displayName} — Servicio 24/7
              </h1>
              <p className={styles.heroSub}>{city.urgency.intro}</p>
              <div className={styles.heroBenefits}>
                <span>
                  <Clock size={16} /> Disponibilidad 24/7
                </span>
                <span>
                  <Zap size={16} /> Respuesta Express
                </span>
              </div>
            </div>

            <div className={styles.heroFormWrap}>
              <LeadForm
                formName="local-urgent-hero-form"
                title={`Urgencia en ${city.displayName}`}
                subtitle="Prioridad máxima. Le llamamos ya."
                buttonText="Solicitar Técnico Urgente"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className={styles.statsBar}>
        <div className={styles.container}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <strong>Urgente</strong>
              <span>tiempo de respuesta</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <strong>24/7</strong>
              <span>operativo</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <strong>+500</strong>
              <span>urgencias atendidas</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <strong>Garantía</strong>
              <span>de rearranque</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── URGENCIA IMAGE ── */}
      <div className={styles.urgenciaImageSection} aria-hidden="true">
        <Image
          src="/images/URGENCIA.webp"
          alt="Técnico de urgencias atendiendo banda transportadora averiada"
          fill
          loading="lazy"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="100vw"
        />
        <div className={styles.urgenciaImageOverlay}>
          <div className={styles.container}>
            <p className={styles.urgenciaImageCaption}>Técnico en camino. Cada minuto de parada tiene un coste. Nosotros lo reducimos al mínimo.</p>
          </div>
        </div>
      </div>

      {/* ── COVERAGE ── */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cobertura 24/7 en {city.displayName}</h2>
          <p className={styles.problemDescription}>{city.urgency.intro}</p>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <Clock size={22} className={styles.problemIcon} />
              <div>
                <strong>Respuesta urgente 24/7</strong>
                <p>
                  Disponemos de equipos de retén en {city.displayName} listos para actuar en
                  cualquier momento, día o noche, incluso en festivos.
                </p>
              </div>
            </div>
            <div className={styles.problemCard}>
              <CheckCircle2 size={22} className={styles.problemIcon} />
              <div>
                <strong>Reparación In Situ</strong>
                <p>
                  Llegamos con todo el material necesario para rearrancar su línea en el acto: banda
                  de repuesto, prensa de vulcanizado y herramienta especializada.
                </p>
              </div>
            </div>
          </div>
          <p className={styles.backLink}>
            <Link href="/urgencias">Ver más sobre nuestro servicio de urgencias →</Link>
          </p>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Nuestra garantía de urgencia en {city.displayName}
          </h2>
          <p className={styles.problemDescription}>{city.urgency.guarantee}</p>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <strong>1. Llamada de confirmación en 5 min</strong>
                <p>
                  En cuanto recibimos su solicitud, un técnico le llama en menos de 5 minutos para
                  confirmar la incidencia y preparar el material exacto que necesita.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Clock size={22} />
              </div>
              <div>
                <strong>2. Técnico en camino con prioridad</strong>
                <p>
                  Nuestro equipo sale hacia su instalación en {city.displayName} en el tiempo
                  comprometido, sin excusas y con GPS de seguimiento disponible.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <CheckCircle2 size={22} />
              </div>
              <div>
                <strong>3. Línea operativa o reemplazo garantizado</strong>
                <p>
                  Si no podemos reparar in situ en la primera visita, instalamos una banda de
                  sustitución para que su producción no se detenga ni un minuto más.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MID FORM ── */}
      <section className={styles.midFormSection}>
        <div className={styles.container}>
          <div className={styles.midFormWrap}>
            <LeadForm
              formName="local-urgent-mid-form"
              title={`Solicitar técnico urgente en ${city.displayName}`}
              subtitle={`Cobertura en ${city.industrialZone}. Servicio urgente 24/7.`}
              buttonText="Movilizar Técnico Ahora"
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.finalSection}>
        <div className={styles.container}>
          <div className={styles.finalBox}>
            <div className={styles.finalText}>
              <h2>¿Cada minuto cuenta en {city.displayName}?</h2>
              <p>No pierda más dinero por parada.</p>
            </div>
            <div className={styles.finalFormWrap}>
              <LeadForm
                formName="local-urgent-final-form"
                buttonText="MOVILIZAR TÉCNICO URGENTE"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
