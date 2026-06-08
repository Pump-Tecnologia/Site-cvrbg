import type { Metadata } from "next";
import { Figtree, Montserrat } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grupocvrbg.com.br"),
  title: {
    default: "Grupo CVRBG | Saúde animal para gestão pública",
    template: "%s | Grupo CVRBG",
  },
  description:
    "Há mais de 20 anos estruturando operações de saúde pública animal — castramóveis, UBS Animal, SAMU Animal, resgate e manejo — para governos, secretarias e prefeituras.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Grupo CVRBG",
    title: "Grupo CVRBG | Saúde animal para gestão pública",
    description:
      "Estrutura, equipe e operação para programas públicos de saúde animal, com mais de 20 anos de experiência.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${figtree.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
