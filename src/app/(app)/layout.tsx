import { PageLayout } from "@/components/layouts/page-layout";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Onest, Libre_Caslon_Text as SerifFont } from "next/font/google";

import { MainNavigation } from "@/components/shared/main-navigation";
import "./globals.css";

const garamond = SerifFont({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-custom-serif",
});
const onest = Onest({
  subsets: ["latin"],
  variable: "--font-custom-sans",
});

export const metadata: Metadata = {
  title: "Explore Madeira",
  description: "Your Madeira pocket guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} ${garamond.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageLayout>
            <MainNavigation />

            {children}

            <footer className="py-12 border-t mt-12">Footer</footer>
          </PageLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
