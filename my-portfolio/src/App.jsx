import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample data - replace with your actual content
  const skills = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Vue.js'],
    backend: ['Node.js', 'Python', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    tools: ['Git', 'VS Code', 'Figma', 'Docker', 'AWS', 'Vercel']
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, shopping cart, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/yourusername/project1",
      demo: null,
      image: "/api/placeholder/400/250",
      type: "Web App"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      tech: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      demo: null,
      image: "/api/placeholder/400/250",
      type: "Web App"
    },
    {
      id: 3,
      title: "2D Puzzle Game",
      description: "An interactive puzzle game built with vanilla JavaScript featuring multiple levels and score tracking.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
      github: "https://github.com/yourusername/project3",
      demo: "https://your-game-demo.com",
      image: "/api/placeholder/400/250",
      type: "Game"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive maps.",
      tech: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/project4",
      demo: null,
      image: "/api/placeholder/400/250",
      type: "Web App"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "A data visualization tool for social media metrics with real-time dashboard and insights.",
      tech: ["Python", "Flask", "D3.js", "PostgreSQL"],
      github: "https://github.com/yourusername/project5",
      demo: null,
      image: "/api/placeholder/400/250",
      type: "Web App"
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-400">Your Name</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-blue-400">Your Name</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Computer Science Student & Aspiring Full-Stack Developer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionate about creating innovative web applications and games. 
              Currently seeking internship opportunities to grow and contribute to meaningful projects.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/yourusername" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>

          <div className="mt-16">
            <ChevronDown 
              size={32} 
              className="mx-auto text-gray-400 animate-bounce cursor-pointer"
              onClick={() => scrollToSection('skills')}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <Globe className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <Database className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <Code className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-200 hover:transform hover:scale-105">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <Code size={48} className="mx-auto mb-2" />
                    <p className="text-sm">{project.type}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities and would love to discuss how I can contribute to your team. 
            Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:your.email@example.com"
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-200 hover:transform hover:scale-105"
            >
              <Mail className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">your.email@example.com</p>
            </a>
            
            <a
              href="https://linkedin.com/in/yourusername"
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-200 hover:transform hover:scale-105"
            >
              <Linkedin className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
            
            <a
              href="https://github.com/yourusername"
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-200 hover:transform hover:scale-105"
            >
              <Github className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">View my repositories</p>
            </a>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Ready to collaborate?</h3>
            <p className="text-gray-400 mb-6">
              Download my resume to learn more about my experience and skills.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Your Name. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;