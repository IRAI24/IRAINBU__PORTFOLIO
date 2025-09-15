import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<{ className?: string }>;
}

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  photoUrl: string;
  socials: SocialLink[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: 'Internship';
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
}

export interface Certification {
  title: string;
  issuer: string;
}