import Navbar from "@/components/Navbar";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Content from "@/components/Content";
import CookieConsent from "@/components/CookieConsent";
export const metadata = {
  title: "Harri |",
  description: "Created in Euskal Herria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <Header />
        <Content />
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
