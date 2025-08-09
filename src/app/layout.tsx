import type { Metadata } from "next";
import { Libertinus_Mono, Poppins } from "next/font/google";
import "./globals.css";

const liberMono = Libertinus_Mono({
  variable: "--font-liber-mono",
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saidabbos Saidikromov | Professional Frontend Developer",
  description:
    "Frontend developer creating modern, responsive, and SEO-friendly websites for businesses and individuals.",
  // Open Graph (social preview)
  openGraph: {
    title: "Website Development | Saidabbos Saidikromov",
    description:
      "I build modern, responsive websites — Website development, responsive design, React & Next.js.",
    url: "https://your-domain.com", // <-- change to your real domain
    siteName: "Saidabbos Portfolio",
    images: [
      {
        url: "/og-image.jpg", // <-- add this image to public/
        width: 1200,
        height: 630,
        alt: "Saidabbos Portfolio - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${liberMono.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}