import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { SolutionsPage } from "@/components/pages/SolutionsPage";

export const metadata: Metadata = {
  title: "Soluções",
};

export default function SolucoesPage() {
  return (
    <SiteShell>
      <SolutionsPage />
    </SiteShell>
  );
}
