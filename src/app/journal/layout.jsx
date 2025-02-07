import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Harri | Journal",
  description: "Journal of Harri.cc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}</body>
    </html>
  );
}
