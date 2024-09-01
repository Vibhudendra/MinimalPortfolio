import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import LenisScroll from "@/components/ui/LenisScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vibhu | Portfolio",
  description: "Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
