import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, ChevronDown, Menu, X, Maximize2, Cpu, Wrench } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeFullscreen, setIsResumeFullscreen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Track active section on scroll - Updated section order
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'resume', 'contact'];
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

  // Updated skills based on resume
  const skills = {
    languages: [
      { name: 'C++/C#', proficiency: 'Advanced' },
      { name: 'TypeScript', proficiency: 'Advanced' },
      { name: 'JavaScript', proficiency: 'Advanced' },
      { name: 'Python', proficiency: 'Advanced' },
      { name: 'HTML/CSS', proficiency: 'Advanced' }
    ],
    frameworks: [
      { name: 'React', proficiency: 'Advanced' },
      { name: 'Next.js', proficiency: 'Advanced' },
      { name: 'Express', proficiency: 'Advanced' },
      { name: 'Node.js', proficiency: 'Advanced' },
      { name: 'Unity', proficiency: 'Intermediate' },
      { name: 'Unreal Engine', proficiency: 'Learning' }
    ],
    tools: [
      { name: 'Git/GitHub', proficiency: 'Advanced' },
      { name: 'Docker', proficiency: 'Intermediate' },
      { name: 'Google Cloud Platform', proficiency: 'Intermediate' },
      { name: 'VS Code', proficiency: 'Advanced' },
      { name: 'Vercel', proficiency: 'Advanced' },
      { name: 'Linux', proficiency: 'Intermediate' }
    ],
    libraries: [
      { name: 'PyTorch', proficiency: 'Advanced' },
      { name: 'TensorFlow', proficiency: 'Intermediate' },
      { name: 'Matplotlib', proficiency: 'Advanced' },
      { name: 'Pandas', proficiency: 'Advanced' },
      { name: 'Prisma', proficiency: 'Advanced' },
      { name: 'Selenium', proficiency: 'Intermediate' }
    ]
  };

  // Updated projects based on resume
  const projects = [
    {
      id: 1,
      title: "Journal Buddy",
      description: "Full-stack journaling platform with AI-powered insights, supporting 300+ users with vector search capabilities.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "OpenAI", "Pinecone"],
      github: "https://github.com/EthanLee101/journal-buddy",
      demo: null,
      image: "/api/placeholder/400/250",
      type: "Web App",
      status: "In Development",
      highlights: ["2000+ users", "60% engagement increase", "99.9% uptime"]
    },
    {
      id: 2,
      title: "Bruin Plan",
      description: "Full-stack schedule optimization app for UCLA students with 188 course entries and 500+ secured user accounts.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Passport.js", "Google OAuth"],
      github: "https://github.com/kouseph/BruinPlan",
      demo: null,
      image: "/bruin-learn-image.png",
      type: "Web App",
      status: "Completed",
      highlights: ["2000+ users", "Course optimization", "Google OAuth integration"]
    },
    {
      id: 3,
      title: "Automated Pet Feeder Web App",
      description: "IoT solution combining web app with Arduino hardware for remote pet feeding control with real-time updates.",
      tech: ["C++", "Firebase", "React", "JavaScript", "Express", "Arduino"],
      github: "https://github.com/EthanLee101/pet-feeder",
      demo: null,
      image: "/api/placeholder/400/250",
      type: "IoT Project",
      status: "Completed",
      highlights: ["REST APIs", "SSL-encrypted Wi-Fi", "Hardware integration"]
    },
    {
      id: 4,
      title: "Digit Classification Model",
      description: "Custom CNN achieving 99.9% accuracy on MNIST dataset with advanced data augmentation pipeline.",
      tech: ["PyTorch", "Python", "CNNs", "Matplotlib", "Data Augmentation"],
      github: "https://github.com/EthanLee101/digit-classification-model",
      demo: null,
      image: "/dcm-image.png",
      type: "Machine Learning",
      status: "Completed",
      highlights: ["99.9% accuracy", "Custom CNN", "Data augmentation"]
    },
    {
      id: 5,
      title: "Frogs Go Nuclear",
      description: "2D Platformer game developed in Unity with a team of 5 developers, featuring robust user-controlled mechanics.",
      tech: ["Unity", "C#", "Git", "GitHub"],
      github: "https://github.com/sidalok1/Frogs-Game",
      demo: "https://eciujeye.itch.io/frogs-go-nuclear",
      image: "game-image.png",
      type: "Game",
      status: "Published",
      highlights: ["Team leadership", "50+ commits", "Interactive elements"]
    },
    {
      id: 6,
      title: "Marble Madness",
      description: "2D Dungeon crawler in C++ with custom level creation, collision detection, and polymorphic enemy system.",
      tech: ["C++", "Custom Graphics", "OOP", "Game Architecture"],
      github: "https://github.com/EthanLee101/marble-madness",
      demo: null,
      image: "/api/placeholder/400/250",
      type: "Game",
      status: "Completed",
      highlights: ["Custom level system", "10 enemy types", "20% code reduction"]
    }
  ];

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Advanced': return 'bg-green-600';
      case 'Intermediate': return 'bg-blue-600';
      case 'Learning': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development': return 'bg-yellow-600';
      case 'Completed': return 'bg-green-600';
      case 'Published': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation - Updated with new section order */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-montserrat font-bold text-blue-400">Ethan Lee</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'projects', 'skills', 'resume', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-400 ${activeSection === section ? 'text-blue-400' : 'text-gray-300'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'projects', 'skills', 'resume', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-2 capitalize text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                  <img
                    src="/profile-image.jpg" // Replace with your actual image filename
                    alt="Ethan Lee"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="mb-8">
                <h3 className="text-4xl sm:text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                  Hello! I'm <span className="text-blue-400">Ethan Lee</span>
                </h3>
                <p className="text-2xl sm:text-2xl text-gray-300 mb-8">
                  My Background
                </p>
                <p className="text- text-gray-400 mb-10">
                  I'm a current junior at UCLA studying Computer Science with an interest in full-stack development,
                  software engineering, and machine learning/AI. I’m passionate about creating impactful, robust software
                  that solves real-world problems. Some of my hobbies include volleyball, dance, video games, and eating.
                  Feel free to contact me through email or connect with me on LinkedIn!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-montserrat font-medium transition-colors duration-200"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-lg font-montserrat font-medium transition-all duration-200"
                >
                  Get In Touch
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/EthanLee101" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ethan-p-lee/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Mail size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Updated with resume projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-16">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-200 hover:transform hover:scale-105">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <img
                    src={project.image}
                    className="w-full h-full object-contain"
                    alt="Project preview"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-montserrat font-bold">{project.title}</h3>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs text-white px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project highlights */}
                  {project.highlights && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.map((highlight, index) => (
                          <span key={index} className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

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

      {/* Skills Section - Updated with resume skills */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-16">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <Code className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-montserrat font-semibold">Languages</h3>
              </div>
              <div className="space-y-2">
                {skills.languages.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${getProficiencyColor(skill.proficiency)}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <Globe className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-montserrat font-semibold">Frameworks</h3>
              </div>
              <div className="space-y-2">
                {skills.frameworks.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${getProficiencyColor(skill.proficiency)}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <Wrench className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-montserrat font-semibold">Tools</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${getProficiencyColor(skill.proficiency)}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <Database className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-montserrat font-semibold">Libraries</h3>
              </div>
              <div className="space-y-2">
                {skills.libraries.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${getProficiencyColor(skill.proficiency)}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section - Improved with mobile optimization */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-8">
            My <span className="text-blue-400">Resume</span>
          </h2>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            {/* Mobile: Show download button instead of iframe */}
            <div className="block md:hidden mb-6">
              <div className="bg-gray-700 p-8 rounded-lg text-center">
                <Code size={48} className="mx-auto mb-4 text-blue-400" />
                <p className="text-gray-300 mb-4">View my resume on desktop or download it below</p>
                <a
                  href="/Ethan-Lee.pdf"
                  download="Ethan-Lee.pdf"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-montserrat font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m5.78 2.22l-10-10a2 2 0 00-2.83 0l-10 10A2 2 0 003 14h4v6a2 2 0 002-2v-6h4a2 2 0 001.32-3.51z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Desktop: Show PDF viewer */}
            <div className="hidden md:block">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-montserrat font-semibold">Resume Preview</h3>
                <button
                  onClick={() => setIsResumeFullscreen(!isResumeFullscreen)}
                  className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  <Maximize2 size={16} className="mr-1" />
                  {isResumeFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
                </button>
              </div>

              <div
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isResumeFullscreen ? 'fixed inset-4 z-50' : 'w-full max-w-5xl mx-auto'
                  }`}
                style={{
                  height: isResumeFullscreen ? 'calc(100vh - 32px)' : '80vh', // Use relative height instead of fixed px
                }}
              >
                <iframe
                  src="/Ethan-Lee.pdf"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  title="Resume PDF"
                >
                  <p className="text-gray-400 p-4">
                    Your browser doesn't support PDF viewing.
                    <a
                      href="/Ethan-Lee.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 ml-1"
                    >
                      Click here to download the PDF
                    </a>
                  </p>
                </iframe>
              </div>

              <div className="text-center mt-4">
                <a
                  href="/Ethan-Lee.pdf"
                  download="Ethan-Lee.pdf"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-montserrat font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m5.78 2.22l-10-10a2 2 0 00-2.83 0l-10 10A2 2 0 003 14h4v6a2 2 0 002-2v-6h4a2 2 0 001.32-3.51z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-8">
            Let's <span className="text-blue-400">Connect</span>
          </h2>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities and would love to discuss how I can contribute to your team.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-200 hover:transform hover:scale-105"
            >
              <Mail className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="font-montserrat font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">ethanplee24@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/ethan-p-lee/"
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-200 hover:transform hover:scale-105"
            >
              <Linkedin className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="font-montserrat font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>

            <a
              href="https://github.com/EthanLee101"
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-200 hover:transform hover:scale-105"
            >
              <Github className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="font-montserrat font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">View my repositories</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Ethan Lee. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Fullscreen overlay backdrop */}
      {isResumeFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsResumeFullscreen(false)}
        />
      )}
    </div>
  );
};

export default Portfolio;