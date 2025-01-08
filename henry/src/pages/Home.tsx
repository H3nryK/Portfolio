import Layout from './layout';

import HeroSection from '../components/HeroSection';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <SkillSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
};

export default HomePage;