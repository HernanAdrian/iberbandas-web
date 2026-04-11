import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "IberBandas | Reparación de Bandas Transportadoras Industriales",
    template: "%s | IberBandas",
  },
  description: "Reparación urgente 24/7, mantenimiento preventivo e instalación de bandas transportadoras industriales en Andalucía. Servicio técnico especializado en Málaga, Sevilla, Granada, Córdoba, Almería y Cádiz. +25 años de experiencia.",
  metadataBase: new URL("https://www.iberband.es"),
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
    title: "IberBandas | Reparación de Bandas Transportadoras en Andalucía",
    description: "Reparación urgente 24/7, mantenimiento preventivo e instalación de bandas transportadoras industriales en Andalucía. Cobertura en Málaga, Sevilla, Granada, Córdoba, Almería y Cádiz.",
    images: [
      {
        url: "/images/HERO.webp",
        width: 1200,
        height: 630,
        alt: "IberBandas — Reparación y mantenimiento de bandas transportadoras industriales en Andalucía",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IberBandas | Reparación de Bandas Transportadoras en Andalucía",
    description: "Servicio técnico urgente 24/7 de bandas y cintas transportadoras industriales. Cobertura en Málaga, Sevilla y toda Andalucía.",
    images: ["/images/HERO.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "qKY79NqtG4hVawZRx4eZB9Tr2pRPwekNMXoEUMYUpeI",
  },
};

function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IberBandas",
    "description": "Empresa especializada en reparación, mantenimiento y sustitución de bandas transportadoras industriales en España.",
    "url": "https://www.iberband.es",
    "logo": "https://www.iberband.es/images/LOGOTIPO.webp",
    "image": "https://www.iberband.es/images/LOGOTIPO.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Málaga",
      "addressRegion": "Andalucía",
      "addressCountry": "ES",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.7213",
      "longitude": "-4.4217",
    },
    "email": "industria@iberband.es",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "areaServed": [
      { "@type": "State", "name": "Andalucía" },
      { "@type": "City", "name": "Málaga" },
      { "@type": "City", "name": "Sevilla" },
      { "@type": "City", "name": "Granada" },
      { "@type": "City", "name": "Córdoba" },
      { "@type": "City", "name": "Almería" },
      { "@type": "City", "name": "Cádiz" },
    ],
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-434265689"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-434265689');
          `}
        </Script>
      </head>
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
