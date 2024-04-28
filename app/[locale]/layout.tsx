import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Noto_Sans_Arabic } from "next/font/google";
import { siteConfig } from "@/components/SiteConfig";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/images/favicon.ico",
  },
};

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans-arabic",
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${arabic.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
