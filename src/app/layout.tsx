import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://austinrose.io"),
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
