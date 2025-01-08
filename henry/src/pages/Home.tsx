import Layout from './layout';

import HeroSection from '../components/HeroSection';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage = () => {

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <SkillSection />

      {/* CTA Section */}
      <CTASection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />  
    </Layout>
  );
};

export default HomePage;