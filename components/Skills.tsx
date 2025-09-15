import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';
import { CodeIcon, LayersIcon, DatabaseIcon, CogIcon } from '../constants'; // Assuming you add these icons

const categoryIcons: { [key: string]: React.FC<{className?: string}> } = {
  'Languages': CodeIcon,
  'Frontend': LayersIcon,
  'Backend & Databases': DatabaseIcon,
  'Concepts & Tools': CogIcon,
};


const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS_DATA.map((category, index) => {
          const Icon = categoryIcons[category.title];
          return (
            <div 
              key={category.title} 
              className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border hover:shadow-xl card-3d-hover animate-zoom-in"
              style={{ animationDelay: `${100 * (index + 1)}ms`, opacity: 0 }}
            >
              <div className="flex items-center mb-4">
                {Icon && <Icon className="w-8 h-8 text-accent mr-3" />}
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-light-text/90 dark:text-dark-text/90 bg-light-background dark:bg-dark-background/50 p-2 rounded">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;