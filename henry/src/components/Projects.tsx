// src/components/Projects.tsx
import React, { useState } from 'react';
import Cow from '../assets/images/Cow.jpeg';
import Event from '../assets/images/Event.jpeg';
import School from '../assets/images/school.jpeg';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  category: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, technologies, imageUrl, link }) => (
  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
        View Project
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "School Management System",
      description: "The School Management System is a web application built using Python Django that aims to streamline administrative tasks in educational institutions. It provides functionalities for managing students, staff, courses, grades, attendance, and more.",
      technologies: ["Python", "SQlite", "Django", "matplotlib", "pandas"],
      imageUrl: School,
      link: "https://github.com/H3nryK/Milimani_High-School-Management-System",
      category: "Web App"
    },
    {
      title: "Event Organizers",
      description: "A web-based application designed to streamline the process of organizing and managing events. It provides a user-friendly interface for event organizers to create, and view details of various events they are managing.",
      technologies: ["php", "Wamp Server", "HTML", "CSS"],
      imageUrl: Event,
      link: "https://github.com/H3nryK/Event-organizers-Wamp-Server",
      category: "Web App"
    },
    {
      title: "Dairy Farming Project",
      description: "Backend canister written in Rust for managing dairy farming operations, including adding cows, recording milk production, and retrieving cow data. The canister is deployed on the Internet Computer (IC) blockchain.",
      technologies: ["Rust", "IC Blockchain", "DFX"],
      imageUrl: Cow,
      link: "https://github.com/H3nryK/dairy",
      category: "Blockchain App"
    },
    // Add more projects as needed
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded ${
                filter === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;