import { SiteShell } from "@/components/layout/SiteShell";
import { InstitutionalPage } from "@/components/pages/InstitutionalPage";

export default function EstruturaOperacionalPage() {
  return (
    <SiteShell>
      <InstitutionalPage
        eyebrow="Frota e equipe"
        title="Estrutura operacional em escala"
        description="A operação reúne frota, unidades móveis, equipe técnica e protocolos próprios para entregar programas públicos com controle."
        points={[
          "Mais de 65 veículos, incluindo ônibus castramóveis, caminhões de resgate, ambulâncias e vans adaptadas.",
          "11 castramóveis e capacidade técnica para até 2.750 animais por dia.",
          "Equipe com mais de 300 colaboradores e diretores técnicos responsáveis pela seleção e protocolos.",
          "Controles de qualidade, equipamentos de emergência, climatização e suporte veterinário remoto.",
        ]}
      />
    </SiteShell>
  );
}

