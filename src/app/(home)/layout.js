import "../globals.css";



export const metadata = {
  title: "Harri",
  description: "| Euskal Herria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
      >
        {children}
      </body>
    </html>
  );
}
