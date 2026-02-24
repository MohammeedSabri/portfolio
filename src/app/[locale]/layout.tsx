import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { i18nConfig } from "../../../i18nConfig";
import Navigation from "../../components/Navigation";
import GlobalBackground from "../../components/GlobalBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Sabri | AI & Full-Stack Engineer",
  description: "Portfolio of Mohammed Sabri, Data Science & AI Engineering Student",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Navigation />
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
