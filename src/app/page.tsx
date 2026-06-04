import { SiteShell } from "@/components/layout/SiteShell";
import { HeroSection } from "@/components/sections/HeroSection";
import {
  AuthoritySection,
  FinalCtaSection,
  PresenceSection,
  SolutionsSection,
  StructureSection,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <AuthoritySection />
      <SolutionsSection />
      <StructureSection />
      <PresenceSection />
      <FinalCtaSection />
    </SiteShell>
  );
}

