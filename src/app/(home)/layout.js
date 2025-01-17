import Header from "../components/Header";
import "../globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700", "100"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Harri",
  description: "| Euskal Herria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
