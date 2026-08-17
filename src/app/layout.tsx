import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://austinrose.io"),
  title: {
    default: "Austin Rose | People Technology & AI",
    template: "%s | Austin Rose",
  },
  description:
    "Austin Rose is a People Technology Architect who builds the systems People teams run on: governed HR data warehouses, recruiting and HRIS platforms, data pipelines, and production AI agents. Previously led People Analytics for a 23,000+ employee healthcare enterprise.",
  keywords: [
    "People Technology",
    "AI Enablement",
    "Data Infrastructure",
    "People Analytics",
    "Data Governance",
    "AI Agents",
    "Databricks",
    "Workday",
  ],
  authors: [{ name: "Austin Rose" }],
  creator: "Austin Rose",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://austinrose.io",
    siteName: "Austin Rose",
    title: "Austin Rose | People Technology & AI",
    description:
      "People Technology Architect building governed data infrastructure and AI systems for People teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Rose | People Technology & AI",
    description:
      "People Technology Architect building governed data infrastructure and AI systems for People teams.",
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
      <body className="antialiased flex min-h-screen flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
