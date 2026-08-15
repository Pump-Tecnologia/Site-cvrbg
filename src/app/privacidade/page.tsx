import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PrivacyPage } from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Política de Privacidade — ConectaPet",
  description:
    "Como o ConectaPet, aplicativo do Grupo CVRBG, coleta, usa, compartilha e protege os dados de tutores e pets.",
};

export default function PrivacidadePage() {
  return (
    <SiteShell>
      <PrivacyPage />
    </SiteShell>
  );
}
