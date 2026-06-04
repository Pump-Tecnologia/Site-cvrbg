import { SiteShell } from "@/components/layout/SiteShell";
import { InstitutionalPage } from "@/components/pages/InstitutionalPage";

export default function AtuacaoB2gPage() {
  return (
    <SiteShell>
      <InstitutionalPage
        eyebrow="Saúde pública animal"
        title="Atuação para governos e prefeituras"
        description="A comunicação desta página deve falar diretamente com gestores públicos, secretários de saúde e órgãos contratantes."
        points={[
          "Controle populacional como ação estratégica de saúde pública.",
          "Transparência, rastreabilidade e gestão para os contratantes.",
          "Acesso facilitado para a população por meio de processos de agendamento e controle.",
          "Capacidade para implantação em diferentes municípios e estados.",
        ]}
      />
    </SiteShell>
  );
}

