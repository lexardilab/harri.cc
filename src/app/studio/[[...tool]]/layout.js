export const metadata = {
  title: "Harri | Studio",
  description: "Created in Euskal Herria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
