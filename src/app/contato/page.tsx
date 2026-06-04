import { SiteShell } from "@/components/layout/SiteShell";
import { InstitutionalPage } from "@/components/pages/InstitutionalPage";

export default function ContatoPage() {
  return (
    <SiteShell>
      <InstitutionalPage
        eyebrow="Fale com o Grupo"
        title="Contato para gestores públicos"
        description="Canal institucional para prefeituras, secretarias, governos e órgãos interessados em estruturar programas de saúde pública animal."
        points={[
          "Identificação do órgão público, cidade e estado.",
          "Descrição da demanda: castração, resgate, UBS Animal, SAMU Animal ou operação integrada.",
          "Volume estimado, urgência e região de atendimento.",
          "Dados de contato do gestor responsável pela demanda.",
        ]}
      />
    </SiteShell>
  );
}

