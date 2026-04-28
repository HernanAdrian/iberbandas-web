import Link from 'next/link';
import { LeadForm } from '@/components/forms/LeadForm';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Solicite Presupuesto en 30 Segundos.</h2>
          <p className={styles.ctaSubtitle}>
            Rellene estos datos y le respondemos hoy.
          </p>
          <LeadForm
            formName="footer-quick-form"
            buttonText="Enviar Solicitud"
            className={styles.footerForm}
          />
        </div>

        <div className={styles.corporateSection}>
          <div className={styles.corporateDetails}>
            <div className={styles.footerLogo}>
              <span className={styles.footerLogoIber}>Iber</span><span className={styles.footerLogoBandas}>Bandas</span>
            </div>
            <p className={styles.footerTagline}>Especialistas en bandas y cintas transportadoras industriales en Andalucía.</p>
          </div>
          <div className={styles.corpLinks}>
            <div className={styles.linkColumn}>
              <h4>Servicios</h4>
              <Link href="/reparacion">Reparación y Vulcanizado</Link>
              <Link href="/mantenimiento">Mantenimiento Preventivo</Link>
              <Link href="/instalacion">Instalación y Suministro</Link>
              <Link href="/urgencias">Urgencias 24/7</Link>
            </div>
            <div className={styles.linkColumn}>
              <h4>Ciudades</h4>
              <Link href="/bandas-transportadoras/sevilla">Sevilla</Link>
              <Link href="/bandas-transportadoras/malaga">Málaga</Link>
              <Link href="/bandas-transportadoras/granada">Granada</Link>
              <Link href="/bandas-transportadoras/cordoba">Córdoba</Link>
              <Link href="/bandas-transportadoras/almeria">Almería</Link>
              <Link href="/bandas-transportadoras/cadiz">Cádiz</Link>
            </div>
            <div className={styles.linkColumn}>
              <h4>Recursos</h4>
              <Link href="/blog">Blog Técnico</Link>
              <Link href="/industrias">Sectores Industriales</Link>
              <Link href="/tipos-cintas-transportadoras">Tipos de Bandas</Link>
              <Link href="/contacto">Solicitar Presupuesto</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} IberBandas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
