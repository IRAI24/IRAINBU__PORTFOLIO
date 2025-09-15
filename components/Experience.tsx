import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  if (EXPERIENCE_DATA.length === 0) {
    return null;
  }

  return (
    <Section id="experience" title="Internship Experience">
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="absolute h-full w-0.5 bg-light-border dark:bg-dark-border top-0 left-4 md:left-1/2 md:-translate-x-1/2"></div>
        
        <div className="space-y-12">
          {EXPERIENCE_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`relative ${index % 2 === 0 ? 'md:animate-slide-in-left' : 'md:animate-slide-in-right'} animate-slide-in-left`} 
              style={{ animationDelay: `${200 * (index + 1)}ms`, opacity: 0 }}
              >
              <div className="absolute top-1 left-4 w-8 h-8 rounded-full bg-accent z-10 flex items-center justify-center ring-8 ring-light-background dark:ring-dark-background transform -translate-x-1/2 md:left-1/2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>

              <div className={`pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-8`}>
                <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                  <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg shadow-md p-6">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <p className={`text-sm text-accent mb-1`}>{item.duration}</p>
                      <h3 className={`font-bold text-light-text dark:text-dark-text text-lg`}>{item.role}</h3>
                      <p className={`text-sm font-medium text-light-text/70 dark:text-dark-text/70`}>{item.company}</p>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-light-text/80 dark:text-dark-text/80 text-sm text-left">
                        {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;