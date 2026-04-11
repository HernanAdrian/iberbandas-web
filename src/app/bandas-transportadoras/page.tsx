import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Wrench, ShieldCheck, Package, AlertTriangle, ArrowRight } from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Bandas Transportadoras en Andalucía | Servicio por Ciudades — IberBandas",
  description: "Reparación, mantenimiento e instalación de bandas transportadoras en las principales ciudades de Andalucía. Servicio urgente 24/7 en Málaga, Sevilla, Granada, Córdoba, Almería y Cádiz.",
  alternates: { canonical: "/bandas-transportadoras/" },
};

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.iberband.es" },
      { "@type": "ListItem", "position": 2, "name": "Bandas Transportadoras en Andalucía", "item": "https://www.iberband.es/bandas-transportadoras/" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const CITIES = [
  {
    slug: 'malaga',
    name: 'Málaga',
    desc: 'Cobertura en toda la provincia: capital, Antequera, Axarquía, Costa del Sol e interior.',
  },
  {
    slug: 'sevilla',
    name: 'Sevilla',
    desc: 'Servicio técnico en el mayor tejido industrial de Andalucía occidental.',
  },
  {
    slug: 'granada',
    name: 'Granada',
    desc: 'Cobertura en polígonos industriales y sector agroalimentario de la provincia.',
  },
  {
    slug: 'cordoba',
    name: 'Córdoba',
    desc: 'Intervención en industria agroalimentaria, logística y fabricación.',
  },
  {
    slug: 'almeria',
    name: 'Almería',
    desc: 'Especialistas en sector agrícola, minería y manipulado de hortalizas.',
  },
  {
    slug: 'cadiz',
    name: 'Cádiz',
    desc: 'Cobertura en zona de bahía, industria naval y sector servicios.',
  },
];

const SERVICES = [
  { icon: Wrench, label: 'Reparación', path: 'reparacion-bandas-transportadoras' },
  { icon: ShieldCheck, label: 'Mantenimiento', path: 'mantenimiento-bandas-transportadoras' },
  { icon: Package, label: 'Instalación', path: 'instalacion-bandas-transportadoras' },
  { icon: AlertTriangle, label: 'Urgencias 24h', path: 'urgencias-bandas-transportadoras' },
];

export default function BandasAndaluciaPage() {
  return (
    <div className={styles.pageWrapper}>
      <BreadcrumbJsonLd />

      {/* HERO */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>
            Bandas Transportadoras en Andalucía — Reparación, Mantenimiento e Instalación por Ciudad
          </h1>
          <p className={styles.heroDesc}>
            IberBandas da cobertura técnica a las principales provincias de Andalucía. Seleccione su ciudad para ver todos los servicios disponibles en su zona.
          </p>
        </div>
      </section>

      {/* CITIES GRID */}
      <section className={styles.citiesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Seleccione su provincia</h2>
          <div className={styles.citiesGrid}>
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/bandas-transportadoras/${city.slug}/`}
                className={styles.cityCard}
              >
                <div className={styles.cityCardTop}>
                  <MapPin size={18} className={styles.cityPin} aria-hidden="true" />
                  <strong className={styles.cityName}>{city.name}</strong>
                </div>
                <p className={styles.cityDesc}>{city.desc}</p>
                <div className={styles.cityServices}>
                  {SERVICES.map(({ icon: Icon, label }) => (
                    <span key={label} className={styles.cityServiceTag}>
                      <Icon size={12} aria-hidden="true" /> {label}
                    </span>
                  ))}
                </div>
                <span className={styles.cityArrow}>
                  Ver servicios <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Qué hacemos en cada ciudad</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <Wrench size={28} className={styles.serviceIcon} aria-hidden="true" />
              <strong>Reparación urgente</strong>
              <p>Técnico in situ con prioridad máxima. Vulcanizado, empalme en frío y mecánico. Disponible 24/7.</p>
            </div>
            <div className={styles.serviceCard}>
              <ShieldCheck size={28} className={styles.serviceIcon} aria-hidden="true" />
              <strong>Mantenimiento preventivo</strong>
              <p>Planes de revisión periódica con alineación láser, calibración de tensión y auditoría de desgaste.</p>
            </div>
            <div className={styles.serviceCard}>
              <Package size={28} className={styles.serviceIcon} aria-hidden="true" />
              <strong>Instalación y suministro</strong>
              <p>Suministro e instalación de bandas PVC, caucho, PU y cable de acero. Garantía de 2 años.</p>
            </div>
            <div className={styles.serviceCard}>
              <AlertTriangle size={28} className={styles.serviceIcon} aria-hidden="true" />
              <strong>Urgencias 24h</strong>
              <p>Respuesta inmediata para paradas críticas. Equipo equipado con prensas de vulcanizado y material de repuesto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaText}>
              <h2>¿No encuentra su ciudad?</h2>
              <p>Cubrimos toda Andalucía. Si su provincia no aparece, contacte con nosotros y le informamos de la cobertura disponible.</p>
            </div>
            <div className={styles.ctaForm}>
              <LeadForm formName="bandas-andalucia-form" buttonText="Consultar Cobertura" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
