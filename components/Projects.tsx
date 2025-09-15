import React from 'react';
import Section from './Section';
import { PROJECTS_DATA, GitHubIcon, ExternalLinkIcon } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div 
            key={index} 
            className="bg-light-card dark:bg-dark-card rounded-lg shadow-md border border-light-border dark:border-dark-border overflow-hidden flex flex-col group card-3d-hover animate-zoom-in"
            style={{ animationDelay: `${100 * (index + 1)}ms`, opacity: 0 }}
            >
            <div className="relative overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">{project.title}</h3>
              <p className="text-light-text/80 dark:text-dark-text/80 mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-light-border dark:border-dark-border flex items-center justify-end space-x-4">
                {project.liveUrl && (
                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live Demo of ${project.title}`} className="flex items-center text-light-text/70 dark:text-dark-text/70 hover:text-accent transition-colors duration-300">
                    <ExternalLinkIcon className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`} className="flex items-center text-light-text/70 dark:text-dark-text/70 hover:text-accent transition-colors duration-300">
                  <GitHubIcon className="w-5 h-5 mr-1" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;