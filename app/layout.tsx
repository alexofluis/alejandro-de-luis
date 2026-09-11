import type { Metadata, Viewport } from "next";
import { Momo_Trust_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const momoTrustSans = Momo_Trust_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Alejandro de Luis",
  description: "Industrial designer based in Valencia",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${momoTrustSans.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}



