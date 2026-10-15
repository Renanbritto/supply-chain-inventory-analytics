import type { Metadata, Viewport } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import React from "react";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://supply-chain-inventory-analytics.vercel.app"),
  title: "Supply Chain & Estoque | AI Executive Copilot • RN Intelligence",
  description:
    "Ecossistema analítico de Supply Chain & Gestão Estratégica de Estoque com motor preditivo D-Day de reposição, Curva ABC, mitigação de ruptura e controle de SLA de compras.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Supply Chain & Estoque | AI Executive Copilot • RN Intelligence",
    description:
      "Ecossistema analítico de Supply Chain & Gestão Estratégica de Estoque com motor preditivo D-Day de reposição, Curva ABC, mitigação de ruptura e controle de SLA de compras.",
    url: "https://supply-chain-inventory-analytics.vercel.app",
    siteName: "Supply Chain Analytics • RN Intelligence",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supply Chain & Estoque Analytics • RN Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supply Chain & Estoque | AI Executive Copilot • RN Intelligence",
    description:
      "Ecossistema analítico de Supply Chain com motor preditivo D-Day, Curva ABC e IA Copilot. Powered by RN Intelligence.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${comfortaa.variable}`}>
      <body
        className={`${comfortaa.className} font-sans min-h-screen antialiased bg-[#090d16] text-slate-100 selection:bg-rose-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}