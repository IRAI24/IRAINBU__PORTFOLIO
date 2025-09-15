import React, { useState } from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! It has been logged to the console.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-light-text/80 dark:text-dark-text/80 mb-8">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, feel free to use the form below!
        </p>
        
        <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-light-text/80 dark:text-dark-text/80 text-left">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-light-background dark:bg-dark-background/50 border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-light-text/80 dark:text-dark-text/80 text-left">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-light-background dark:bg-dark-background/50 border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-light-text/80 dark:text-dark-text/80 text-left">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 bg-light-background dark:bg-dark-background/50 border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-accent-hover transition-all duration-300 shadow-lg text-lg transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
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
                <IconComponent className="w-8 h-8" />
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Contact;