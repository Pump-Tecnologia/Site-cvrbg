import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { TutorAppPage } from "@/components/pages/TutorAppPage";

export const metadata: Metadata = {
  title: "App",
};

export default function AppPage() {
  return (
    <SiteShell>
      <TutorAppPage />
    </SiteShell>
  );
}
