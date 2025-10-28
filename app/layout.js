import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = { title: "Arturo Fatecha" };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased bg-white text-gray-900">
        <header className="border-b border-gray-200">
          <nav className="mx-auto max-w-3xl px-6 py-3 flex items-center gap-4">
            <a href="/" className="font-semibold hover:underline">Inicio</a>
            <a href="/about" className="hover:underline">Sobre mí</a>
            <a href="/projects" className="hover:underline">Proyectos</a>
          </nav>
        </header>

        <main className="mx-auto max-w-3xl px-6 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
