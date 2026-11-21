import { useState } from 'react';
import { ConnectFooterSection } from './components/ConnectFooterSection';
import { DisciplineMarquee } from './components/DisciplineMarquee';
import { ExperienceLogSection } from './components/ExperienceLogSection';
import { HeroCanvas } from './components/HeroCanvas';
import { Navbar } from './components/Navbar';
import { ProjectsLabsSection } from './components/ProjectsLabsSection';
import { SystemProfileSection } from './components/SystemProfileSection';
import { TechnicalArsenalSection } from './components/TechnicalArsenalSection';
import { HERO_ROLES } from './data/portfolioData';

export default function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const activeRole = HERO_ROLES[roleIndex] ?? HERO_ROLES[0];

  return (
    <div className="min-h-screen text-[#f3f3f5]">
      <Navbar />
      <HeroCanvas
        activeRole={activeRole}
        roleIndex={roleIndex}
        onSelectRole={setRoleIndex}
      />
      <DisciplineMarquee />
      <SystemProfileSection />
      <TechnicalArsenalSection />
      <ExperienceLogSection />
      <ProjectsLabsSection />
      <ConnectFooterSection />
    </div>
  );
}
