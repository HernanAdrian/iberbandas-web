import Link from 'next/link';
import { Button } from '../ui/Button';
import { AlertTriangle, ChevronDown, MapPin } from 'lucide-react';
import styles from './Header.module.css';

const ANDALUCIA_CITIES = [
  { slug: 'sevilla', name: 'Sevilla' },
  { slug: 'malaga', name: 'Málaga' },
  { slug: 'granada', name: 'Granada' },
  { slug: 'cordoba', name: 'Córdoba' },
  { slug: 'almeria', name: 'Almería' },
  { slug: 'cadiz', name: 'Cádiz' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoIber}>Iber</span><span className={styles.logoBandas}>Bandas</span>
          </Link>
        </div>

        <nav className={styles.navigation}>
          <Link href="/reparacion" className={styles.navLink}>Reparación</Link>
          <Link href="/mantenimiento" className={styles.navLink}>Mantenimiento</Link>
          <Link href="/instalacion" className={styles.navLink}>Instalación</Link>

          <div className={styles.dropdown}>
            <button className={styles.dropdownTrigger}>
              <MapPin size={14} />
              <span>Ciudades</span>
              <ChevronDown size={14} className={styles.chevron} />
            </button>
            <div className={styles.dropdownMenu}>
              {ANDALUCIA_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/bandas-transportadoras/${city.slug}`}
                  className={styles.dropdownItem}
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/industrias" className={styles.navLink}>Industrias</Link>
          <Link href="/contacto" className={styles.navLink}>Contacto</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/contacto" className={styles.ghostLink}>
            <Button variant="secondary" size="sm">Presupuesto</Button>
          </Link>
          <Link href="/urgencias" className={styles.emergencyLink}>
            <Button variant="primary" size="sm" className={styles.emergencyBtn}>
              <AlertTriangle size={16} className={styles.phoneIcon} />
              <span className={styles.emergencyText}>Urgencia 24/7</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
