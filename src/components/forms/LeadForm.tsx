import React from 'react';
import { Button } from '@/components/ui/Button';
import { Phone, CheckCircle2, Calendar } from 'lucide-react';
import styles from './LeadForm.module.css';

interface LeadFormProps {
  formName: string;
  buttonText: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function LeadForm({
  formName,
  buttonText,
  title,
  subtitle,
  className = '',
}: LeadFormProps) {
  return (
    <div className={`${styles.formWrapper} ${className}`}>
      {(title || subtitle) && (
        <div className={styles.formHeader}>
          {title && <h3 className={`headline-sm ${styles.title}`}>{title}</h3>}
          {subtitle && <p className={`body-sm ${styles.subtitle}`}>{subtitle}</p>}
        </div>
      )}

      <form
        name={formName}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className={styles.form}
        action="/success"
      >
        <input type="hidden" name="form-name" value={formName} />
        <p style={{ display: 'none' }}>
          <label>
            No rellenar: <input name="bot-field" />
          </label>
        </p>

        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label htmlFor={`${formName}-name`} className={styles.label}>Nombre completo *</label>
            <input
              type="text"
              id={`${formName}-name`}
              name="name"
              className={styles.input}
              placeholder="Ej. Juan Pérez"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor={`${formName}-phone`} className={styles.label}>Teléfono de contacto *</label>
            <input
              type="tel"
              id={`${formName}-phone`}
              name="phone"
              className={styles.input}
              placeholder="Ej. +34 600 000 000"
              required
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor={`${formName}-description`} className={styles.label}>¿Qué necesita? *</label>
          <textarea
            id={`${formName}-description`}
            name="description"
            className={styles.textarea}
            placeholder="Describa brevemente el servicio o avería..."
            required
            rows={3}
          ></textarea>
        </div>

        <Button variant="primary" size="lg" type="submit" className={styles.submitBtn}>
          {buttonText}
        </Button>

        <div className={styles.nextSteps}>
          <p className={styles.nextStepsTitle}>¿Qué ocurre después?</p>
          <ul className={styles.nextStepsList}>
            <li>
              <Phone size={13} />
              <span>Le llamamos para confirmar su solicitud</span>
            </li>
            <li>
              <CheckCircle2 size={13} />
              <span>Le damos una valoración sin compromiso</span>
            </li>
            <li>
              <Calendar size={13} />
              <span>Coordinamos la visita o intervención técnica</span>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
