import Hero from './Hero';
import ProblemSolution from './ProblemSolution';
import ChatDemo from './ChatDemo';
import DashboardMockup from './DashboardMockup';
import FeatureHighlight from './FeatureHighlight';
import ArchitectureDiagram from './ArchitectureDiagram';
import TechStack from './TechStack';
import DemoCTA from './DemoCTA';

const Home = () => {
  return (
    <main className="relative z-10">
      <section id="home" className="pt-40">
        <Hero />
      </section>
      
      <section id="solution">
        <ProblemSolution />
      </section>
      
      <section id="chat-demo">
        <ChatDemo />
      </section>
      
      <section id="dashboard">
        <DashboardMockup />
      </section>

      <FeatureHighlight />
      
      <section id="stacks">
        <ArchitectureDiagram />
        <TechStack />
      </section>

      <DemoCTA />
    </main>
  );
};

export default Home;
