import { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/forms/LeadForm';
import { MapPin, AlertTriangle, CheckCircle2, Clock, ShieldCheck, Zap, Factory, ArrowRight } from 'lucide-react';
import styles from './page.module.css';
import { ANDALUCIA_CITY_SLUGS, getAndaluciaCity, type AndaluciaCity } from '@/lib/andalucia';

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
  return {
    title: `Reparación de Bandas Transportadoras en ${city.displayName} | Servicio in situ 24/7 — IberBandas`,
    description: `Su cinta transportadora ha fallado en ${city.displayName}. Técnico in situ con prioridad máxima. Reparación de bandas en ${city.industrialZone}. Sin compromiso. Solicite presupuesto ahora.`,
    alternates: { canonical: `/reparacion-bandas-transportadoras/${citySlug}` },
  };
}

/* ── Page ── */
export default async function LocalRepairPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getAndaluciaCity(citySlug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberbandas.es" },
      { "@type": "ListItem", "position": 2, "name": "Reparación de Bandas", "item": "https://www.iberbandas.es/reparacion" },
      { "@type": "ListItem", "position": 3, "name": `Reparación en ${city.displayName}`, "item": `https://www.iberbandas.es/reparacion-bandas-transportadoras/${citySlug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Reparación de Bandas Transportadoras en ${city.displayName}`,
    "description": `Servicio técnico de reparación de bandas transportadoras in situ en ${city.displayName}. Servicio urgente 24/7. Cobertura en ${city.industrialZone}.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "IberBandas",
      "url": `https://www.iberbandas.es/reparacion-bandas-transportadoras/${citySlug}`,
      "areaServed": { "@type": "City", "name": city.displayName },
    },
    "serviceType": "Reparación de Bandas Transportadoras",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": city.displayName,
    },
  };

  return (
    <div className={styles.pageWrapper}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.localBadge}>
                <MapPin size={14} />
                <span>Equipo técnico en {city.displayName} · Disponible 24/7</span>
              </div>
              <h1 className={styles.heroTitle}>
                Reparación de Bandas y Cintas Transportadoras en {city.displayName}
              </h1>
              <p className={styles.heroSub}>
                ¿Cinta transportadora averiada en {city.industrialZone}? Técnico in situ con prioridad máxima. Vulcanizado, empalme mecánico y sustitución de emergencia. Sin burocracia.
              </p>
              <div className={styles.heroBenefits}>
                <span><CheckCircle2 size={15} /> Respuesta urgente · Disponible 24/7</span>
                <span><CheckCircle2 size={15} /> Reparación in situ sin traslados</span>
                <span><CheckCircle2 size={15} /> Presupuesto sin compromiso</span>
              </div>
              {city.repair.costWarning && (
                <div className={styles.costWarning}>
                  <AlertTriangle size={15} />
                  <span>{city.repair.costWarning}</span>
                </div>
              )}
            </div>
            <div className={styles.heroFormWrap}>
              <div className={styles.heroFormHeader}>
                <span className={styles.heroFormTitle}>Solicitar Reparación Urgente</span>
                <p className={styles.heroFormSub}>Disponible 24/7. Sin compromiso.</p>
              </div>
              <LeadForm
                formName="local-repair-hero-form"
                buttonText="Enviar Solicitud de Reparación"
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
              <Clock size={18} className={styles.statIcon} />
              <strong>Urgente</strong>
              <span>servicio prioritario</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <Zap size={18} className={styles.statIcon} />
              <strong>+500</strong>
              <span>reparaciones al año</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <ShieldCheck size={18} className={styles.statIcon} />
              <strong>24/7</strong>
              <span>incluso festivos</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <CheckCircle2 size={18} className={styles.statIcon} />
              <strong>+25 años</strong>
              <span>de experiencia</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ LOCAL CONTEXT ═══════════════ */}
      <section className={styles.localContextSection}>
        <div className={styles.container}>
          <div className={styles.localContextGrid}>
            <div className={styles.localContextText}>
              <div className={styles.sectionLabel}>
                <Factory size={14} /> Industria local en {city.displayName}
              </div>
              <h2 className={styles.localContextTitle}>
                La industria de {city.displayName} no puede permitirse paradas
              </h2>
              <p className={styles.localContextDesc}>{city.repair.localContext}</p>
              <p className={styles.sectorNote}>
                <strong>Sectores que atendemos en {city.displayName}:</strong>{' '}
                {city.sectors.join(' · ')}
              </p>
              <Link href="/reparacion" className={styles.backLink}>
                <ArrowRight size={15} /> Ver todos los servicios de reparación de bandas
              </Link>
            </div>
            <div className={styles.localZonesList}>
              <p className={styles.zonesLabel}>Zonas con cobertura directa</p>
              <ul className={styles.zonesUl}>
                {city.repair.industrialZones.map((zone) => (
                  <li key={zone} className={styles.zoneItem}>
                    <MapPin size={14} className={styles.zoneIcon} />
                    <span>{zone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ KEY PROBLEMS ═══════════════ */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <AlertTriangle size={14} /> Causas de avería más frecuentes en {city.displayName}
          </div>
          <h2 className={styles.sectionTitle}>
            Por qué fallan las bandas transportadoras en {city.displayName}
          </h2>
          <p className={styles.problemDescription}>{city.repair.localProblems}</p>
          <div className={styles.problemGrid}>
            {city.repair.keyProblems.map((problem) => (
              <div key={problem.title} className={styles.problemCard}>
                <AlertTriangle size={20} className={styles.problemIcon} />
                <div>
                  <strong>{problem.title}</strong>
                  <p>{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT WE DO ═══════════════ */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <CheckCircle2 size={14} /> Qué hacemos en {city.displayName}
          </div>
          <h2 className={styles.sectionTitle}>
            Reparación de bandas transportadoras en {city.displayName}: proceso y plazos
          </h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.stepNum}>1</div>
              <div>
                <strong>Desplazamiento inmediato</strong>
                <p>
                  Enviamos un técnico a {city.industrialZone} con prioridad máxima desde
                  que recibimos su solicitud. Sin esperas ni intermediarios.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.stepNum}>2</div>
              <div>
                <strong>Diagnóstico in situ</strong>
                <p>
                  Identificamos la causa raíz del fallo en su instalación: desgarro, empalme
                  reventado, desalineación o deterioro de cubierta. Le explicamos las opciones.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.stepNum}>3</div>
              <div>
                <strong>Reparación o sustitución</strong>
                <p>
                  Vulcanizado in situ, empalme mecánico de alta resistencia o sustitución completa
                  de la banda. Ejecutamos la solución óptima para su operativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MID FORM ═══════════════ */}
      <section className={styles.midFormSection}>
        <div className={styles.container}>
          <div className={styles.midFormLayout}>
            <div className={styles.midFormText}>
              <h2 className={styles.midFormTitle}>¿Avería ahora mismo en {city.displayName}?</h2>
              <p className={styles.midFormSub}>
                Describa el problema. Un técnico de IberBandas en {city.displayName} le contactará
                en menos de 2 horas. Sin compromiso ni coste de consulta.
              </p>
              <ul className={styles.midFormBullets}>
                <li><CheckCircle2 size={15} /> Presupuesto gratuito y sin compromiso</li>
                <li><CheckCircle2 size={15} /> Técnico local en {city.displayName}</li>
                <li><CheckCircle2 size={15} /> Disponibilidad 24/7 incluso festivos</li>
              </ul>
            </div>
            <div className={styles.midFormWrap}>
              <LeadForm
                formName="local-repair-mid-form"
                buttonText="Solicitar Presupuesto Gratuito"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST ═══════════════ */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>¿Por qué IberBandas en {city.displayName}?</h2>
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <Clock size={28} className={styles.trustIcon} />
              <strong>Respuesta prioritaria 24/7</strong>
              <p>
                Equipo técnico local con prensas de vulcanizado y material de reparación en el
                vehículo. Sin esperar a almacén central.
              </p>
            </div>
            <div className={styles.trustCard}>
              <ShieldCheck size={28} className={styles.trustIcon} />
              <strong>+25 años y +500 reparaciones/año</strong>
              <p>
                Experiencia real en bandas industriales de todos los sectores presentes en{' '}
                {city.displayName}: agroalimentación, logística, siderurgia.
              </p>
            </div>
            <div className={styles.trustCard}>
              <Zap size={28} className={styles.trustIcon} />
              <strong>24/7 sin excepciones</strong>
              <p>
                Noches, fines de semana, festivos y picos de campaña. Cuando su planta trabaja,
                nosotros también.
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
              <div className={styles.finalBadge}>
                <AlertTriangle size={13} /> Urgencia 24/7 · {city.displayName}
              </div>
              <h2>
                ¿Banda transportadora parada en {city.displayName}?<br />
                Cada hora que pasa tiene un coste.
              </h2>
              <p>
                Solicite ahora la intervención de nuestro equipo técnico en{' '}
                {city.industrialZone}. Servicio urgente 24/7.
              </p>
              {city.repair.costWarning && (
                <p className={styles.finalCostWarning}>{city.repair.costWarning}</p>
              )}
            </div>
            <div className={styles.finalFormWrap}>
              <LeadForm
                formName="local-repair-final-form"
                buttonText="Necesito un técnico ahora"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
