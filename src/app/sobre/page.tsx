import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Sobre Nós",
};

export default function SobrePage() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
