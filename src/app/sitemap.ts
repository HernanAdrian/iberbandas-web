import { MetadataRoute } from 'next';
import { ANDALUCIA_CITY_SLUGS } from '@/lib/andalucia';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.iberbandas.es';
  const today = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/reparacion`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/mantenimiento`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/instalacion`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/urgencias`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/industrias`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/tipos-cintas-transportadoras`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contacto`, lastModified: today, changeFrequency: 'yearly', priority: 0.6 },
  ];

  const cityHubPages: MetadataRoute.Sitemap = ANDALUCIA_CITY_SLUGS.map((city) => ({
    url: `${base}/bandas-transportadoras/${city}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const repairPages: MetadataRoute.Sitemap = ANDALUCIA_CITY_SLUGS.map((city) => ({
    url: `${base}/reparacion-bandas-transportadoras/${city}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const maintenancePages: MetadataRoute.Sitemap = ANDALUCIA_CITY_SLUGS.map((city) => ({
    url: `${base}/mantenimiento-bandas-transportadoras/${city}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const installationPages: MetadataRoute.Sitemap = ANDALUCIA_CITY_SLUGS.map((city) => ({
    url: `${base}/instalacion-bandas-transportadoras/${city}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const urgencyPages: MetadataRoute.Sitemap = ANDALUCIA_CITY_SLUGS.map((city) => ({
    url: `${base}/urgencias-bandas-transportadoras/${city}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...cityHubPages,
    ...repairPages,
    ...maintenancePages,
    ...installationPages,
    ...urgencyPages,
  ];
}
