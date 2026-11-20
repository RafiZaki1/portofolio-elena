import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

// Judul: Space Grotesk. Isi: IBM Plex Sans. Label dan angka: IBM Plex Mono.
const heading = Space_Grotesk({ variable: "--font-heading", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });
const body = IBM_Plex_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const SITE_URL = "https://YOUR-DOMAIN.vercel.app"; // TODO: ganti setelah deploy
const TITLE = `${portfolio.profile.name} — Perbankan Syariah`;
const DESCRIPTION =
  "Portofolio Elen Nuraini, siswi Layanan Perbankan Syariah SMK Negeri 2 Mojokerto. Pengalaman PKL 6 bulan di BPKPD Kota Mojokerto: pelayanan pembayaran pajak dan pengelolaan setoran.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s — ${portfolio.profile.name}` },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "id_ID", url: "/", title: TITLE, description: DESCRIPTION, siteName: portfolio.profile.name },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F1E7" },
    { media: "(prefers-color-scheme: dark)", color: "#121718" },
  ],
};

// Tema manual disimpan di localStorage. Tanpa pilihan, ikuti prefers-color-scheme (lewat CSS).
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();
`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.profile.name,
  jobTitle: "Calon profesional perbankan syariah",
  email: `mailto:${portfolio.profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Jombang", addressRegion: "Jawa Timur", addressCountry: "ID" },
  alumniOf: { "@type": "EducationalOrganization", name: portfolio.education.school },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${heading.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
