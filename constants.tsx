import React from 'react';
import type { ProfileData, SkillCategory, Project, ExperienceItem, EducationItem, Certification } from './types';

// SVG Icons
export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
export const LeetCodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 5.844a1.38 1.38 0 0 0-.438.961V24h13.407V5.844a1.38 1.38 0 0 0-.438-.961L14.444.438A1.374 1.374 0 0 0 13.483 0zM19.16 9.423l-2.455 2.455-2.427-2.427-2.455 2.455-2.427-2.427-1.012 1.012 2.427 2.427-2.455 2.455 1.012 1.012 2.455-2.455 2.427 2.427 2.455-2.455 2.427 2.427 1.012-1.012-2.427-2.427 2.455-2.455-1.012-1.012z" />
  </svg>
);
export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);
export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);
export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
export const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
export const LayersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
);
export const DatabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);
export const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.5.5 0 0 0 .12-.61l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.5.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.5.5 0 0 0-.61.22l-1.92 3.32a.5.5 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07-.94l-2.03 1.58a.5.5 0 0 0-.12.61l1.92 3.32a.5.5 0 0 0 .61.22l2.49 1c.52.4 1.08.73 1.69.98l.38 2.65a.5.5 0 0 0 .5.42h4a.5.5 0 0 0 .5-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1a.5.5 0 0 0 .61-.22l1.92-3.32a.5.5 0 0 0-.12-.61l-2.03-1.58z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>
);
export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);


// --- PROFILE DATA ---
export const PROFILE_DATA: ProfileData = {
  name: 'Iraianbu Sakthivel',
  title: 'Information Technology Student',
  email: 'iraianbu24@gmail.com',
  phone: '+91 95145 57016',
  location: 'Namakkal, Tamil Nadu, India',
  photoUrl: '/assets/profile.jpg', // Corrected path to the existing SVG file.
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/iraianbu-s-b28689308',
      icon: LinkedInIcon,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Irai24',
      icon: GitHubIcon,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/iraianbu24/',
      icon: LeetCodeIcon,
    },
  ],
};

// --- ABOUT DATA ---
export const CAREER_OBJECTIVE = "Aspiring Software Development Engineer with a strong foundation in Data Structures & Algorithms and Frontend Web Development (JavaScript, HTML, CSS, SQL). Passionate about building scalable, user-centric applications and eager to contribute to cutting-edge fintech platforms like Upstox.";
export const ACHIEVEMENTS_DATA = [
  "Solved 300+ problems on LeetCode",
  "Presented papers at Sri Krishna Engineering College (Coimbatore)",
  "Participated in Data Science workshops organized by IIT Madras",
];

// --- SKILLS DATA ---
export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Responsive Web Design', 'UI/UX Design'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Concepts & Tools',
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Git', 'GitHub'],
  },
];

// --- PROJECTS DATA ---
export const PROJECTS_DATA: Project[] = [
  {
    title: 'Recipe Sharing Platform',
    description: 'Built a full-stack web application enabling users to create, share, and manage recipes. Implemented user authentication, real-time updates, and collaborative features using MERN stack technologies. Integrated MongoDB for document storage and Express.js for backend API development.',
    technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Iraianbu2404',
    liveUrl: '#',
    imageUrl: 'https://placehold.co/500x300/60A5FA/FFFFFF?text=Recipe+App',
  },
  {
    title: 'CloudFlex Multiplex Manager',
    description: 'A unified cloud access platform that allows users to seamlessly manage and interact with multiple cloud storage services—such as Google Drive, OneDrive, and local storage—through a single, intuitive interface.',
    technologies: ['Java', 'SQL', 'REST APIs'],
    githubUrl: 'https://github.com/Iraianbu2404',
    imageUrl: 'https://placehold.co/500x300/60A5FA/FFFFFF?text=CloudFlex',
  },
   {
    title: 'Portfolio Website',
    description: 'This personal portfolio website. Built with React, TypeScript, and Tailwind CSS, it is designed to be fully responsive and showcase my skills and projects.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Iraianbu2404',
    liveUrl: '#',
    imageUrl: 'https://placehold.co/500x300/60A5FA/FFFFFF?text=Portfolio',
  }
];

// --- EXPERIENCE DATA ---
export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        role: 'Full Stack Web Development Intern (MERN)',
        company: 'Edunet Foundation (in collaboration with EY GDS & AICTE)',
        duration: 'Feb 2025 – Mar 2025',
        description: [
            'Selected for a 6-week MERN stack program to develop a full-stack Recipe Sharing Platform under industry mentorship.',
            'Engaging in masterclasses on AI development tools and UI/UX design principles.',
            'The program culminates in a project presentation to a panel of industry experts.',
        ],
        type: 'Internship',
    },
    {
        role: 'Java Full Stack Web Development Intern',
        company: 'Infosys Springboard',
        duration: 'Nov 2024 – Dec 2024',
        description: [
            'Developed CloudFlex Multiplex Manager, a Java-based application integrated with SQL for database management and a user-friendly UI, enabling streamlined operations like ticket booking, scheduling, and real-time multiplex management.',
        ],
        type: 'Internship',
    },
    {
        role: 'Frontend Web Development Intern',
        company: 'NovaNectar Services Pvt. Ltd',
        duration: 'Jun 2023 – Jul 2023',
        description: [
            'Designed and developed a full-stack e-commerce website featuring intuitive user interfaces, secure payment integration, real-time inventory updates, and an admin panel for efficient management of products and orders.',
        ],
        type: 'Internship',
    },
];

// --- EDUCATION DATA ---
export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: 'B.Tech Information Technology',
        institution: 'VSB Engineering College',
        duration: '2022 - Present',
        grade: 'CGPA: 8.0',
    },
    {
        degree: 'HSC',
        institution: 'Green Park Matric Hr.Sec.School',
        duration: '2021 - 2022',
        grade: 'Grade: 75.5%',
    },
    {
        degree: 'SSLC',
        institution: 'R.N.Oxford Matric Hr.Sec.School',
        duration: '2019 - 2020',
        grade: 'Grade: 96.2%',
    }
];

// --- CERTIFICATIONS DATA ---
export const CERTIFICATIONS_DATA: Certification[] = [
    {
        title: 'Cybersecurity and Privacy',
        issuer: 'NPTEL (Elite)',
    },
    {
        title: 'Java Foundation',
        issuer: 'Infosys Springboard',
    }
];