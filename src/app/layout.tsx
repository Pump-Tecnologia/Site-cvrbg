import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portal institucional do Grupo CVRBG para gestores publicos, governos e prefeituras.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
