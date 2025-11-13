import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import TechnicalSkills from '@/components/TechnicalSkills';
import ProjectWorkflow from '@/components/ProjectWorkflow';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="max-w-">
        <Header />
        <div className="space-y-0">
          <ProfessionalSummary />
          <TechnicalSkills />
          <ProjectWorkflow />
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}
