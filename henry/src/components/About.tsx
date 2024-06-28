// src/components/About.tsx
import React from 'react';
import SkillBar from './SkillBar';

const About: React.FC = () => {
  const skills = [
    { name: 'React', level: 65 },
    { name: 'TypeScript', level: 65 },
    { name: 'Node.js', level: 70 },
    { name: 'CSS/Sass', level: 75 },
    { name: 'Python', level: 95 },
  ];

  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="mb-4">
              I'm a passionate software developer with a keen eye for design and a love for creating 
              intuitive, responsive software applications. With 2+ years of experience in the field, 
              I've honed my skills in front-end, back-end, android, AI &amp; blockchain technologies.
            </p>
            <p>
              When I'm not coding, you can find me playing Fifa. I believe in 
              continuous learning and am always excited to take on new challenges in the 
              ever-evolving world of web development.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;