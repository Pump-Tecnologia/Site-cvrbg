import { SiteShell } from "@/components/layout/SiteShell";
import { HeroSection } from "@/components/sections/HeroSection";
import {
  AuthoritySection,
  AboutSection,
  FinalCtaSection,
  PresenceSection,
  SolutionsSection,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <AuthoritySection />
      <SolutionsSection />
      <AboutSection />
      <PresenceSection />
      <FinalCtaSection />
    </SiteShell>
  );
}
