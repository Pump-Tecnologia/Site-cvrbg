import { SiteShell } from "@/components/layout/SiteShell";
import { InstitutionalPage } from "@/components/pages/InstitutionalPage";

export default function GrupoCvrbgPage() {
  return (
    <SiteShell>
      <InstitutionalPage
        eyebrow="Desde 2005"
        title="História, governança e impacto"
        description="A trajetória do Grupo CVRBG nasce da Clínica Veterinária Ricardo e se consolida com uma operação pública de alto impacto."
        points={[
          "Nascimento em 2005 com foco em ética, segurança, respeito aos processos e uso consciente de recursos.",
          "Expansão para prestação de serviços a municípios com resgate, alojamento, tratamento, internação e reabilitação.",
          "Pioneirismo na esterilização de cães e gatos em castramóveis.",
          "Criação da BG Zangrossi Serviços Veterinários em 2015 para ampliar alcance operacional.",
        ]}
      />
    </SiteShell>
  );
}

