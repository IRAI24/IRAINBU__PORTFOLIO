import React, { useState } from 'react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  const [imgStyle, setImgStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    const rotateY = x * 25; // Tilt intensity
    const rotateX = -y * 25;
    setImgStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'none',
    });
  };

  const handleMouseLeave = () => {
    setImgStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-in-out',
    });
  };

  const handleViewProjectsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[calc(100vh-80px)] py-20 md:py-0">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-light-text dark:text-dark-text leading-tight animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
          Hi, I'm <span className="text-accent">{PROFILE_DATA.name}</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-light-text/80 dark:text-dark-text/80 animate-fade-in-up" style={{ animationDelay: '500ms', opacity: 0 }}>
          {PROFILE_DATA.title}
        </p>
        <p className="mt-6 max-w-xl text-light-text/70 dark:text-dark-text/70 animate-fade-in-up" style={{ animationDelay: '700ms', opacity: 0 }}>
          Passionate about building scalable, user-centric applications and eager to contribute to cutting-edge fintech platforms.
        </p>

        <div className="mt-8 flex justify-center md:justify-start space-x-4 animate-fade-in-up" style={{ animationDelay: '900ms', opacity: 0 }}>
          {PROFILE_DATA.socials.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-light-text/60 dark:text-dark-text/60 hover:text-accent transition-transform duration-300 hover:scale-125"
              >
                <IconComponent className="w-7 h-7" />
              </a>
            );
          })}
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '1100ms', opacity: 0 }}>
          <a
            href="#projects"
            onClick={handleViewProjectsClick}
            className="inline-block mt-10 bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-accent-hover transition-all duration-300 shadow-lg text-lg transform hover:scale-105"
          >
            View My Projects
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
       <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div
          className="relative group animate-fade-in-up"
          style={{ animationDelay: '100ms', opacity: 0, perspective: '1000px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute -inset-2 rounded-full border-4 border-accent animate-pulseRing"></div>
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl z-10 bg-light-card dark:bg-dark-card"
            style={imgStyle}
          >
            <img
              src={PROFILE_DATA.photoUrl}
              alt={PROFILE_DATA.name}
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;