import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-24 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text inline-block relative">
          {title}
          <span className="block h-1 w-2/3 bg-accent mx-auto mt-2"></span>
        </h2>
      </div>
      {children}
    </section>
  );
};

export default Section;