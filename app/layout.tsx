import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClient from "./components/LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domain = process.env.NODE_ENV === 'production' 
  ? 'https://geist.im'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    default: 'Geist AI - Privacy-First AI for Everyone',
    template: '%s | Geist AI',
  },
  description: 'Your privacy-focused AI companion that keeps every conversation secure and your data in your hands. Built with privacy by design, open source, and hosted in Germany under GDPR protection.',
  keywords: 'AI, artificial intelligence, privacy, secure, encrypted, open source, GDPR, mobile AI, private AI assistant, local storage, Germany hosting, chat privacy, AI companion, mobile-first AI',
  authors: [{ name: 'Geist AI' }],
  creator: 'Geist AI',
  publisher: 'Geist AI',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  metadataBase: new URL(domain),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: domain,
    title: 'Geist AI - Privacy-First AI for Everyone',
    description: 'Your privacy-focused AI companion that keeps every conversation secure and your data in your hands. Built with privacy by design, open source, and hosted in Germany under GDPR protection.',
    siteName: 'Geist AI',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Geist AI - Privacy-First AI for Everyone',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geist AI - Privacy-First AI for Everyone',
    description: 'Your privacy-focused AI companion that keeps every conversation secure and your data in your hands. Built with privacy by design, open source, and hosted in Germany under GDPR protection.',
    images: ['/thumbnail.png'],
    creator: '@geist-ai',
    site: '@geist-ai',
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Geist AI',
    'application-name': 'Geist AI',
    'msapplication-TileColor': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
