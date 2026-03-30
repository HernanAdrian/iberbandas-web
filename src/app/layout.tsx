import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "IberBandas | Reparación de Bandas Transportadoras Industriales",
    template: "%s | IberBandas",
  },
  description: "Reparación urgente 24/7, mantenimiento preventivo y sustitución de bandas transportadoras industriales en toda España. +25 años de experiencia. Servicio técnico 24/7.",
  metadataBase: new URL("https://www.iberbandas.es"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/fav-icon-512px.webp", sizes: "512x512", type: "image/webp" },
    ],
    apple: [
      { url: "/images/fav-icon-512px.webp", sizes: "512x512", type: "image/webp" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "IberBandas",
    title: "IberBandas | Reparación de Bandas Transportadoras Industriales",
    description: "Reparación urgente 24/7, mantenimiento preventivo y sustitución de bandas transportadoras industriales en toda España.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IberBandas",
    "description": "Empresa especializada en reparación, mantenimiento y sustitución de bandas transportadoras industriales en España.",
    "url": "https://www.iberbandas.es",
    "logo": "https://www.iberbandas.es/images/LOGOTIPO.webp",
    "image": "https://www.iberbandas.es/images/LOGOTIPO.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Polígono Industrial Principal, Nave 4",
      "addressLocality": "Madrid",
      "postalCode": "28000",
      "addressCountry": "ES",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.4168",
      "longitude": "-3.7038",
    },
    "email": "industria@iberbandas.es",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00",
      },
    ],
    "areaServed": {
      "@type": "Country",
      "name": "España",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Bandas Transportadoras",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reparación de Bandas Transportadoras",
            "description": "Vulcanizado en caliente, empalme en frío y reparación mecánica de bandas transportadoras industriales.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mantenimiento Preventivo de Bandas",
            "description": "Auditorías, alineación láser, calibración de tensión y monitorización del desgaste.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sustitución de Bandas Transportadoras",
            "description": "Suministro e instalación de bandas nuevas de caucho, PVC, PU y cable de acero.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intervención Urgente 24/7",
            "description": "Equipo de emergencia con despacho inmediato para reparación de bandas transportadoras.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <OrganizationJsonLd />
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
