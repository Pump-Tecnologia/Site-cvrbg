import { SiteShell } from "@/components/layout/SiteShell";
import { InstitutionalPage } from "@/components/pages/InstitutionalPage";

export default function PresencaParceriasPage() {
  return (
    <SiteShell>
      <InstitutionalPage
        eyebrow="Expansão nacional"
        title="Presença nacional e parcerias públicas"
        description="A atuação do Grupo CVRBG já passa por estados e municípios, demonstrando capacidade de adaptação a diferentes demandas públicas."
        points={[
          "Atuação em São Paulo, Paraná, Ceará, Pernambuco e Piauí.",
          "Parcerias com governos estaduais e municípios estratégicos.",
          "Experiência em cidades como Bauru, Sorocaba, Sertãozinho, Paulínia, Osasco e Marília.",
          "Base para posicionamento nacional em Medicina Veterinária do Coletivo.",
        ]}
      />
    </SiteShell>
  );
}

