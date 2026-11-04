import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { CONDO_IMAGES, LOT_DETAILS } from '../data/condoData';
import './globals.css';

const title = 'Terreno de 300 m² no Jardins Barcelona | Venda Particular';
const description =
  'Conheça o terreno de 300 m² no Condomínio Jardins Barcelona. Veja imagens do empreendimento e fale com o vendedor para confirmar localização e condições.';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  ...(metadataBase
    ? {
        metadataBase,
        alternates: { canonical: '/' },
      }
    : {}),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'pt_BR',
    ...(metadataBase
      ? {
          images: [
            {
              url: CONDO_IMAGES.entranceAerial,
              alt: `Acesso ao Condomínio ${LOT_DETAILS.condoName}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    ...(metadataBase ? { images: [CONDO_IMAGES.entranceAerial] } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700;1,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#17221c] text-stone-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
