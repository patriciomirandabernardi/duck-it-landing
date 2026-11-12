import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Duck IT Systems | Desarrollo de software y soporte IT",
  description:
    "Agencia de desarrollo y soporte IT en Rosario, Santa Fe. Sistemas de gestión a medida, infraestructura y soporte técnico con cobertura nacional remota.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
