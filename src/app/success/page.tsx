import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solicitud recibida | IberBandas',
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1.5rem',
      background: 'var(--background)',
    }}>
      <div style={{ maxWidth: '520px', width: '100%', textAlign: 'center' }}>
        <div style={{
          width: '72px', height: '72px',
          borderRadius: '50%',
          background: 'rgba(255,107,0,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem',
        }}>
          <CheckCircle2 size={36} color="var(--primary)" />
        </div>

        <h1 style={{
          fontSize: '1.75rem', fontWeight: 800,
          color: 'var(--secondary)', marginBottom: '1rem', letterSpacing: '-0.02em',
        }}>
          Solicitud recibida
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem' }}>
          Hemos recibido su consulta. Nuestro equipo técnico la revisará y le llamaremos a la brevedad para confirmar los detalles y coordinar la intervención.
        </p>

        <div style={{
          background: 'var(--surface-low)',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          marginBottom: '2rem',
          borderLeft: '4px solid var(--primary)',
          textAlign: 'left',
        }}>
          <p style={{ fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
            ¿Qué ocurre ahora?
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              'Le llamamos para confirmar su solicitud',
              'Le damos una valoración sin compromiso',
              'Coordinamos la visita o intervención técnica',
            ].map((step, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Phone size={14} color="var(--primary)" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                {step}
              </li>
            ))}
          </ul>
        </div>

        <Link href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
        }}>
          Volver al inicio <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
