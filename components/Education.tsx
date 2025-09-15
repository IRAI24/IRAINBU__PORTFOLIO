import React from 'react';
import Section from './Section';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
          <h3 className="text-2xl font-semibold text-center text-light-text dark:text-dark-text mb-6">Education</h3>
          <div className="space-y-6">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={index} className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-light-text dark:text-dark-text">{edu.degree}</h4>
                    <p className="text-light-text/80 dark:text-dark-text/80">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-light-text/60 dark:text-dark-text/60 whitespace-nowrap pl-4">{edu.duration}</p>
                </div>
                <p className="text-sm font-semibold text-accent mt-1">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '500ms', opacity: 0 }}>
          <h3 className="text-2xl font-semibold text-center text-light-text dark:text-dark-text mb-6">Certifications</h3>
          <div className="space-y-6">
            {CERTIFICATIONS_DATA.map((cert, index) => (
              <div key={index} className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-4 rounded-lg shadow-sm flex items-center">
                 <svg className="w-8 h-8 text-accent mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                <div>
                  <h4 className="font-bold text-light-text dark:text-dark-text">{cert.title}</h4>
                  <p className="text-light-text/80 dark:text-dark-text/80 text-sm">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;