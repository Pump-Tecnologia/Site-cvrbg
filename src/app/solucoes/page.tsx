import { SiteShell } from "@/components/layout/SiteShell";
import { InstitutionalPage } from "@/components/pages/InstitutionalPage";

export default function SolucoesPage() {
  return (
    <SiteShell>
      <InstitutionalPage
        eyebrow="Operação B2G"
        title="Soluções para gestão pública"
        description="Serviços veterinários estruturados para municípios, secretarias e governos que precisam de execução técnica e previsível."
        points={[
          "Castramóveis modernos e equipados para mutirões de castração.",
          "SAMU Animal para resgate e atendimento de animais atropelados.",
          "Administração de UBS Animal e suporte à população.",
          "Resgate de animais silvestres, de grande porte e manejo em zoológicos.",
        ]}
      />
    </SiteShell>
  );
}

