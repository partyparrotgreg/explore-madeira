import { PageLayout } from "@/components/layouts/page-layout";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Onest } from "next/font/google";

import { MainNavigation } from "@/components/shared/main-navigation";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
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
      <body className={`${onest.className} antialiased`}>
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
