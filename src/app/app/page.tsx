import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { TutorAppPage } from "@/components/pages/TutorAppPage";

export const metadata: Metadata = {
  title: "ConectaPet — App para tutores",
  description:
    "ConectaPet é o aplicativo do Grupo CVRBG para tutores se inscreverem nos eventos de castração gratuita e acompanharem cada etapa do atendimento do seu pet.",
};

export default function AppPage() {
  return (
    <SiteShell>
      <TutorAppPage />
    </SiteShell>
  );
}
