import Navbar from "@/components/Navbar";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Harri | Denda",
  description: "Created in Euskal Herria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
