import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Canal institucional para prefeituras, secretarias e governos interessados em estruturar programas de saúde pública animal com o Grupo CVRBG.",
};

export default function ContatoPage() {
  return (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  );
}
