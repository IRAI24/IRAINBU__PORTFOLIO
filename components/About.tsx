import React from 'react';
import Section from './Section';
import { CAREER_OBJECTIVE, ACHIEVEMENTS_DATA, ExternalLinkIcon } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">
        {/* Left Side: Career Objective & Resume Button */}
        <div className="lg:w-2/3 text-center lg:text-left flex flex-col justify-center">
          <p className="text-lg text-light-text/80 dark:text-dark-text/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
            {CAREER_OBJECTIVE}
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '500ms', opacity: 0 }}>
             <a
              href="https://drive.google.com/file/d/1YtpNtfGhz-Wl3ucrceBwL79-NNqnjmwF/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-accent-hover transition-all duration-300 shadow-lg text-lg transform hover:scale-105"
            >
              <ExternalLinkIcon className="w-5 h-5 mr-2" />
              View Resume
            </a>
          </div>
        </div>

        {/* Right Side: Key Achievements Card */}
        <div className="lg:w-1/3 w-full animate-fade-in-up" style={{ animationDelay: '400ms', opacity: 0 }}>
          <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-6 shadow-lg h-full">
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Key Achievements
            </h3>
            <ul className="space-y-4">
              {ACHIEVEMENTS_DATA.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start animate-fade-in-up"
                  style={{ animationDelay: `${600 + 150 * index}ms`, opacity: 0 }}
                >
                  <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-light-text/90 dark:text-dark-text/90">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
