import Navbar from "@/components/Navbar";
import "../globals.css";

export const metadata = {
  title: "Harri |",
  description: "Created in Euskal Herria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}</body>
    </html>
  );
}
