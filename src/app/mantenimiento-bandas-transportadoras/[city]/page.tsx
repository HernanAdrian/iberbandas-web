import { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/forms/LeadForm';
import { MapPin, ShieldCheck, Calendar, Zap, CheckCircle2, Factory, Clock } from 'lucide-react';
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
    title: `Mantenimiento de Bandas Transportadoras en ${city.displayName} | IberBandas`,
    description: `Plan de mantenimiento preventivo de cintas transportadoras en ${city.displayName}. Auditoría gratuita, inspecciones programadas y respuesta rápida. Cobertura en ${city.industrialZone}.`,
    alternates: { canonical: `/mantenimiento-bandas-transportadoras/${citySlug}` },
  };
}

export default async function LocalMaintenancePage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getAndaluciaCity(citySlug);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.iberbandas.es' },
      { '@type': 'ListItem', position: 2, name: 'Mantenimiento', item: 'https://www.iberbandas.es/mantenimiento' },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Mantenimiento en ${city.displayName}`,
        item: `https://www.iberbandas.es/mantenimiento-bandas-transportadoras/${citySlug}`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Mantenimiento de Bandas Transportadoras en ${city.displayName}`,
    description: `Plan de mantenimiento preventivo y predictivo de cintas transportadoras en ${city.displayName}. Cobertura en ${city.industrialZone}. Servicio preventivo 24/7.`,
    provider: {
      '@type': 'LocalBusiness',
      name: `IberBandas ${city.displayName}`,
      url: `https://www.iberbandas.es/mantenimiento-bandas-transportadoras/${citySlug}`,
      areaServed: { '@type': 'City', name: city.displayName },
    },
    serviceType: 'Mantenimiento de Bandas Transportadoras',
    areaServed: { '@type': 'City', name: city.displayName },
  };

  return (
    <div className={styles.pageWrapper}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.localBadge}>
                <MapPin size={15} />
                <span>Servicio Técnico en {city.displayName}</span>
              </div>
              <h1 className={styles.heroTitle}>
                Mantenimiento Preventivo de Bandas y Cintas Transportadoras en {city.displayName}
              </h1>
              <p className={styles.heroSub}>{city.maintenance.intro}</p>
              <div className={styles.heroBenefits}>
                <span><ShieldCheck size={16} /> Auditoría Gratuita</span>
                <span><Calendar size={16} /> Inspecciones Programadas</span>
              </div>
            </div>
            <div className={styles.heroFormWrap}>
              <LeadForm
                formName="local-maintenance-hero-form"
                title={`Plan de Mantenimiento en ${city.displayName}`}
                buttonText="Solicitar Información"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <Clock size={28} className={styles.serviceIcon} />
              <div>
                <strong>Prioritaria</strong>
                <p>Tiempo de respuesta garantizado en {city.displayName}</p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <CheckCircle2 size={28} className={styles.serviceIcon} />
              <div>
                <strong>+200 planes activos</strong>
                <p>Empresas con mantenimiento preventivo activo en Andalucía</p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <Zap size={28} className={styles.serviceIcon} />
              <div>
                <strong>24/7 disponibilidad</strong>
                <p>Asistencia técnica continua para emergencias y urgencias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL CONTEXT ── */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Por qué el mantenimiento es clave en {city.displayName}
          </h2>
          <p className={styles.problemDescription}>{city.maintenance.intro}</p>
          <div className={styles.problemGrid}>
            {city.sectors.map((sector) => (
              <div key={sector} className={styles.problemCard}>
                <Factory size={22} className={styles.problemIcon} />
                <div>
                  <strong>{sector.charAt(0).toUpperCase() + sector.slice(1)}</strong>
                  <p>
                    Sector con alta demanda de mantenimiento preventivo en {city.displayName}.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.backLink}>
            <Link href="/mantenimiento">Ver servicios generales de mantenimiento →</Link>
          </p>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Riesgos más frecuentes en {city.displayName}
          </h2>
          <p className={styles.problemDescription}>
            Cada entorno industrial presenta desafíos específicos. En {city.displayName}, detectamos
            y corregimos estos problemas antes de que provoquen una parada.
          </p>
          <div className={styles.problemGrid}>
            {city.maintenance.challenges.map((challenge) => (
              <div key={challenge.title} className={styles.problemCard}>
                <ShieldCheck size={22} className={styles.problemIcon} />
                <div>
                  <strong>{challenge.title}</strong>
                  <p>{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROTOCOL ── */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Nuestro protocolo de mantenimiento en {city.displayName}
          </h2>
          <p className={styles.problemDescription}>{city.maintenance.protocol}</p>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div>
                <div className={styles.serviceIcon}>
                  <CheckCircle2 size={28} />
                </div>
                <strong>1. Inspección técnica completa</strong>
                <p>
                  Evaluación integral del estado de bandas, empalmes, rodillos y tambores en sus
                  instalaciones de {city.displayName}.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div>
                <div className={styles.serviceIcon}>
                  <Calendar size={28} />
                </div>
                <strong>2. Plan de acciones preventivas</strong>
                <p>
                  Diseño de un calendario de intervenciones personalizado, adaptado a sus turnos
                  de producción y presupuesto.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div>
                <div className={styles.serviceIcon}>
                  <Zap size={28} />
                </div>
                <strong>3. Seguimiento continuo</strong>
                <p>
                  Monitorización del estado de sus cintas tras cada intervención y ajuste del
                  plan según la evolución del desgaste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MID LEAD FORM ── */}
      <section className={styles.midFormSection}>
        <div className={styles.container}>
          <div className={styles.midFormWrap}>
            <LeadForm
              formName="local-maintenance-mid-form"
              title={`Solicite su plan de mantenimiento en ${city.displayName}`}
              buttonText="Solicitar Plan de Mantenimiento"
            />
          </div>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Por qué confiar en IberBandas</h2>
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>
                <ShieldCheck size={36} />
              </div>
              <strong>Sin Paradas Imprevistas</strong>
              <p>
                Nuestros planes preventivos reducen más de un 80% la probabilidad de avería
                catastrófica en producción.
              </p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>
                <Calendar size={36} />
              </div>
              <strong>Revisiones Periódicas</strong>
              <p>
                Calendario de inspecciones adaptado a sus turnos para intervenir sin afectar a
                la producción.
              </p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>
                <Zap size={36} />
              </div>
              <strong>Optimización Energética</strong>
              <p>
                El ajuste correcto de tensión, alineación y rascadores reduce el consumo
                eléctrico de sus líneas.
              </p>
            </div>
          </div>

          <h3 className={styles.processTitle}>+25 años manteniendo la industria de Andalucía</h3>
          <div className={styles.processRow}>
            <div className={styles.processStep}>
              <div className={styles.stepNum}>1</div>
              <strong>Auditoría inicial gratuita</strong>
              <p>Visita técnica sin coste para evaluar el estado de sus bandas y empalmes.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNum}>2</div>
              <strong>Plan personalizado</strong>
              <p>
                Propuesta de mantenimiento adaptada a su sector, turnos y presupuesto en{' '}
                {city.displayName}.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNum}>3</div>
              <strong>Ejecución y seguimiento</strong>
              <p>
                Intervenciones planificadas con informe técnico y acceso a nuestro equipo
                las 24 h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.finalSection}>
        <div className={styles.container}>
          <div className={styles.finalBox}>
            <div className={styles.finalText}>
              <h2>Proteja su producción en {city.displayName}</h2>
              <p>
                Solicite ahora su auditoría gratuita. Nuestros técnicos locales se desplazan a
                sus instalaciones en {city.industrialZone} y le entregan un plan de
                mantenimiento a medida sin compromiso.
              </p>
            </div>
            <div className={styles.finalFormWrap}>
              <LeadForm
                formName="local-maintenance-final-form"
                buttonText="Contactar ahora"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
