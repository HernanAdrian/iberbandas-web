'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { AlertTriangle, ChevronDown, MapPin, Menu, X } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setCitiesOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink} onClick={closeMenu}>
            <span className={styles.logoIber}>Iber</span><span className={styles.logoBandas}>Bandas</span>
          </Link>
        </div>

        {/* Desktop navigation */}
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

        {/* Hamburger button (mobile only) */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/reparacion" className={styles.mobileNavLink} onClick={closeMenu}>Reparación</Link>
          <Link href="/mantenimiento" className={styles.mobileNavLink} onClick={closeMenu}>Mantenimiento</Link>
          <Link href="/instalacion" className={styles.mobileNavLink} onClick={closeMenu}>Instalación</Link>

          <button
            className={styles.mobileCitiesToggle}
            onClick={() => setCitiesOpen(!citiesOpen)}
          >
            <span>Ciudades</span>
            <ChevronDown size={16} className={citiesOpen ? styles.chevronOpen : ''} />
          </button>
          {citiesOpen && (
            <div className={styles.mobileCitiesList}>
              {ANDALUCIA_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/bandas-transportadoras/${city.slug}`}
                  className={styles.mobileCityLink}
                  onClick={closeMenu}
                >
                  <MapPin size={13} />
                  {city.name}
                </Link>
              ))}
            </div>
          )}

          <Link href="/industrias" className={styles.mobileNavLink} onClick={closeMenu}>Industrias</Link>
          <Link href="/contacto" className={styles.mobileNavLink} onClick={closeMenu}>Contacto</Link>

          <div className={styles.mobileActions}>
            <Link href="/contacto" onClick={closeMenu} style={{ display: 'block' }}>
              <Button variant="secondary" size="sm" style={{ width: '100%' }}>Solicitar Presupuesto</Button>
            </Link>
            <Link href="/urgencias" onClick={closeMenu} style={{ display: 'block' }}>
              <Button variant="primary" size="sm" style={{ width: '100%' }}>
                <AlertTriangle size={15} />
                Urgencia 24/7
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
