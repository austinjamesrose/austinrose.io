import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Serif } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Austin Rose | People Analytics Leader",
    template: "%s | Austin Rose",
  },
  description:
    "Austin Rose is a People Analytics leader specializing in workforce data strategy, executive reporting, and data-driven talent decisions. Explore his portfolio of analytics work impacting 23,000+ employees.",
  keywords: [
    "People Analytics",
    "HR Analytics",
    "Data Visualization",
    "Workforce Analytics",
    "Talent Analytics",
    "Workday",
    "Tableau",
  ],
  authors: [{ name: "Austin Rose" }],
  creator: "Austin Rose",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://austinrose.io",
    siteName: "Austin Rose",
    title: "Austin Rose | People Analytics Leader",
    description:
      "People Analytics leader specializing in workforce data strategy and executive reporting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Rose | People Analytics Leader",
    description:
      "People Analytics leader specializing in workforce data strategy and executive reporting.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexMono.variable} ${ibmPlexSerif.variable} antialiased flex min-h-screen flex-col`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
