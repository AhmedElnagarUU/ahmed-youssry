import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import TechnicalSkills from '@/components/TechnicalSkills';
import ProjectWorkflow from '@/components/ProjectWorkflow';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Profile() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="min-h-screen">
        <Header />
      </div>
      <div className="space-y-0">
        <section className="min-h-screen">
          <ProfessionalSummary />
        </section>
        <section>
          <TechnicalSkills />
        </section>
        <section className="min-h-screen">
          <ProjectWorkflow />
        </section>
        <section>
          <Projects />
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
}
