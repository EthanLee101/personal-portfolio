import React, { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, MapPin, Calendar, Download, Star, Menu, X, Eye, Play, FileText, Code, Server, Monitor, Brain } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const sections = ['home', 'about', 'projects', 'skills', 'engineering', 'contact'];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements = document.querySelectorAll('section');
      
      let currentSection = 0;
      sectionElements.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = index;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionIndex) => {
    const sectionElements = document.querySelectorAll('section');
    if (sectionElements[sectionIndex]) {
      const targetY = sectionElements[sectionIndex].offsetTop;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleModalClose = useMemo(() => () => setSelectedProject(null), []);

  const projects = [
    {
      id: 1,
      title: 'Journal Buddy',
      description:
        'AI-powered journaling platform with sentiment analysis and vector search capabilities',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI', 'Pinecone'],
      stats: '300+ users, 95% uptime, 2.3s load time',
      image: '/journal-buddy-image.png',
      github: 'https://github.com/EthanLee101/journal-buddy',
      category: 'Full-Stack',
      modalContent: {
        type: 'demo',
        embedUrl:
          'https://www.youtube.com/embed/fy3hEIOlHzI?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0',
        description:
          'A comprehensive journaling platform that uses AI to provide personalized insights and mood tracking.',
        features: [
          'Real-time AI insights with 87% accuracy sentiment analysis',
          'Vector search using Pinecone with sub-200ms query response',
          'Secure OAuth 2.0 authentication and row-level security',
          'TypeScript codebase with 90%+ type coverage',
          'Automated testing pipeline with 85% code coverage'
        ]
      }
    },
    {
      id: 2,
      title: 'Bruin Plan',
      description:
        'Schedule optimization tool for UCLA students with conflict detection',
      tech: ['React', 'Node.js', 'MongoDB', 'OAuth 2.0'],
      stats: '500+ users, 99.2% uptime, <500ms API response',
      image: '/bruin-learn-image.png',
      github: 'https://github.com/kouseph/BruinPlan',
      category: 'Full-Stack',
      modalContent: {
        type: 'demo',
        embedUrl:
          'https://www.youtube.com/embed/3aBBAZNqbBA?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0',
        description:
          'A comprehensive schedule planning tool designed specifically for UCLA students.',
        features: [
          'Algorithm-based conflict detection with 99.1% accuracy',
          'RESTful API design with comprehensive error handling',
          'MongoDB indexing optimization for 3x faster queries',
          'Implemented JWT authentication with refresh tokens',
          'Responsive design tested across 15+ device types'
        ]
      }
    },
    {
      id: 3,
      title: 'IoT Pet Feeder',
      description:
        'Arduino-powered remote pet feeding system with real-time control',
      tech: ['React', 'Arduino', 'C++', 'Firebase'],
      stats: 'Sub-2s latency, 100+ daily requests',
      image: '/pet-feeder.jpg',
      github: 'https://github.com/EthanLee101/pet-feeder-project',
      category: 'IoT'
    },
    {
      id: 4,
      title: 'MNIST Classifier',
      description:
        'Custom CNN achieving 99.9% accuracy with advanced data augmentation',
      tech: ['PyTorch', 'Python', 'CNNs', 'CUDA'],
      stats: '99.9% accuracy, 12ms inference time',
      image: '/dcm-image.png',
      github: 'https://github.com/EthanLee101/digit-classification-model',
      category: 'AI/ML',
      modalContent: {
        type: 'slides',
        embedUrl:
          'https://docs.google.com/presentation/d/e/2PACX-1vRBzTh2d3ACS0G7_6C43Hd0LJgLU8ZlJWc1c_VljM75Dz9wcei3eTHz69P-zboHjuIe3AcbYtUXUN8J/embed?start=false&loop=false&delayms=3000&rm=minimal',
        description:
          'A high-accuracy digit classification model using custom CNN architecture.',
        features: [
          'Custom CNN architecture optimized for 40% faster training',
          'Automated hyperparameter tuning with grid search',
          'CUDA acceleration reducing inference time by 85%',
          'Comprehensive model validation with k-fold cross-validation',
          'Production-ready model serialization and versioning'
        ]
      }
    },
    {
      id: 5,
      title: 'Frogs Go Nuclear',
      description: '2D platformer game with team leadership and custom physics',
      tech: ['Unity', 'C#', 'Git', 'Game Design'],
      stats: '4.7★ rating, 2K+ downloads, team lead',
      image: '/game-image.png',
      github: 'https://github.com/sidalok1/Frogs-Game',
      demo: 'https://eciujeye.itch.io/frogs-go-nuclear',
      category: 'Game Dev',
      modalContent: {
        type: 'demo',
        embedUrl:
          'https://www.youtube.com/embed/jwLuVXh9DQ4?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0',
        description:
          'An exciting 2D platformer where radioactive frogs must navigate through challenging levels.',
        features: [
          'Agile development with 2-week sprints and team standup',
          'Version control workflow with feature branches and code reviews',
          'Custom physics engine with collision detection optimization',
          'Modular architecture enabling 40% faster feature development',
          'Comprehensive testing across 10+ device configurations'
        ]
      }
    },
    {
      id: 6,
      title: 'Marble Madness',
      description: '2D dungeon crawler with custom engine and advanced AI',
      tech: ['C++', 'Custom Graphics', 'OOP', 'Game AI'],
      stats: '15K+ lines, 60fps performance, memory-safe',
      image: '/marble-madness-image.png',
      github: 'https://github.com/EthanLee101/marble-madness',
      category: 'Game Dev',
      modalContent: {
        type: 'demo',
        embedUrl:
          'https://www.youtube.com/embed/Rlqs-BGHmDI?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0',
        description:
          'A complex 2D dungeon crawler built from scratch in C++ featuring custom graphics engine.',
        features: [
          'Memory management with RAII patterns preventing leaks',
          'Object-oriented design with 95% code reusability',
          'Performance profiling achieving consistent 60fps',
          'Comprehensive unit testing with custom testing framework',
          'Modular architecture with dependency injection'
        ]
      }
    }
  ];

  const skills = [
    {
      category: 'Languages',
      items: [
        'TypeScript',
        'JavaScript',
        'Python',
        'C++/C#',
        'HTML/CSS',
        'SQL'
      ],
      icon: <Code className="w-8 h-8" />
    },
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'Unity', 'Responsive Design'],
      icon: <Monitor className="w-8 h-8" />
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'Firebase',
        'REST APIs'
      ],
      icon: <Server className="w-8 h-8" />
    },
    {
      category: 'AI/ML & Tools',
      items: ['PyTorch', 'TensorFlow', 'Git', 'Docker', 'AWS/GCP', 'Jest'],
      icon: <Brain className="w-8 h-8" />
    }
  ];

  const ProjectModal = React.memo(({ project, onClose, isMobile }) => {
    const modalContent = React.useMemo(() => {
      if (!project || !project.modalContent) return null;
      
      return {
        title: project.title,
        description: project.modalContent.description,
        features: project.modalContent.features,
        tech: project.tech,
        github: project.github,
        demo: project.demo,
        embedUrl: project.modalContent.embedUrl,
        contentType: project.modalContent.type
      };
    }, [project]);

    if (!modalContent) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-75 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-slate-800 rounded-xl sm:rounded-2xl max-w-6xl w-full h-[90vh] sm:h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-700" onClick={(e) => e.stopPropagation()}>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 sm:p-6 border-b border-slate-700 flex-shrink-0">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-teal-400">{modalContent.title}</h2>
                <p className="text-slate-400 text-sm sm:text-base">{modalContent.description}</p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors hover:rotate-90 transform duration-300 flex-shrink-0 p-1 sm:p-2"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-3 sm:p-6 overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 h-full">
              <div className="lg:col-span-1 flex flex-col h-full overflow-hidden">
                <div className="overflow-y-auto flex-1">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-teal-400">Key Features</h3>
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {modalContent.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                        <span className="text-slate-300 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-teal-400">Technologies</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {modalContent.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-slate-700 text-slate-300 px-2 sm:px-3 py-1 rounded-full border border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 flex-shrink-0">
                  <a
                    href={modalContent.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium"
                  >
                    <Github size={14} className="mr-1.5 sm:mr-2 sm:w-4 sm:h-4" />
                    View Source Code
                  </a>
                  {modalContent.demo && (
                    <a
                      href={modalContent.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium"
                    >
                      <ExternalLink size={14} className="mr-1.5 sm:mr-2 sm:w-4 sm:h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              <div className="lg:col-span-2 h-full flex flex-col">
                <div className="bg-slate-900 rounded-lg sm:rounded-xl border border-slate-700 flex flex-col h-full overflow-hidden">
                  <div className="flex items-center justify-between p-3 sm:p-4 border-b border-slate-700 flex-shrink-0">
                    {isMobile ? (
                      <a
                        href={modalContent.embedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full text-xs sm:text-sm text-slate-400 hover:text-teal-400 transition-colors cursor-pointer group"
                      >
                        <span>
                          {modalContent.contentType === 'demo' && 'Demo Preview'}
                          {modalContent.contentType === 'slides' && 'Presentation'}
                        </span>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <ExternalLink className="text-teal-400 group-hover:text-teal-300 transition-colors" size={14} />
                          {modalContent.contentType === 'demo' && <Play className="text-teal-400 group-hover:text-teal-300 transition-colors" size={16} />}
                          {modalContent.contentType === 'slides' && <FileText className="text-teal-400 group-hover:text-teal-300 transition-colors" size={16} />}
                        </div>
                      </a>
                    ) : (
                      <>
                        <h3 className="text-xs sm:text-sm text-slate-400 font-medium">
                          {modalContent.contentType === 'demo' && 'Demo Preview'}
                          {modalContent.contentType === 'slides' && 'Presentation'}
                        </h3>
                        {modalContent.contentType === 'demo' && <Play className="text-teal-400 w-4 h-4 sm:w-4.5 sm:h-4.5" size={16} />}
                        {modalContent.contentType === 'slides' && <FileText className="text-teal-400 w-4 h-4 sm:w-4.5 sm:h-4.5" size={16} />}
                      </>
                    )}
                  </div>

                  {!isMobile && (
                    <div className="flex-1 bg-black overflow-hidden relative rounded-b-lg sm:rounded-b-xl">
                      <iframe
                        key={`iframe-${modalContent.title}-${modalContent.embedUrl}`}
                        src={modalContent.embedUrl}
                        className="absolute inset-0 w-full h-full"
                        title={`${modalContent.title} Content`}
                        allow="autoplay; encrypted-media; fullscreen"
                        allowFullScreen
                        loading="lazy"
                        style={{ 
                          border: 'none',
                          display: 'block',
                          margin: 0,
                          padding: 0,
                          pointerEvents: 'auto'
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, (prevProps, nextProps) => {
    if (!prevProps.project && !nextProps.project) return true;
    if (!prevProps.project || !nextProps.project) return false;
    
    return (
      prevProps.project.id === nextProps.project.id &&
      prevProps.project.modalContent?.embedUrl === nextProps.project.modalContent?.embedUrl &&
      prevProps.project.title === nextProps.project.title &&
      prevProps.isMobile === nextProps.isMobile
    );
  });

  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <div className="hidden md:flex space-x-12">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(index)}
                  className={`capitalize transition-all duration-300 relative text-lg font-medium ${
                    activeSection === index 
                      ? 'text-teal-400' 
                      : 'text-slate-300 hover:text-teal-400'
                  }`}
                >
                  {section}
                  {activeSection === index && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 text-slate-300 hover:text-teal-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-700 mt-4">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(index)}
                  className="block w-full text-center py-3 px-2 capitalize text-slate-300 hover:text-teal-400 transition-colors font-medium"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-3 md:gap-4 hidden sm:flex">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === index 
                ? 'bg-teal-400 border-teal-400 scale-125 shadow-lg shadow-teal-400/30' 
                : 'border-slate-400 hover:border-teal-400 hover:scale-110'
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 sm:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
                  I'm <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">Ethan</span>
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-slate-300 mb-6 sm:mb-8 font-light px-4 sm:px-0">
                  Full-Stack Developer & AI Enthusiast
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
                  Computer Science junior at UCLA building scalable applications 
                  that solve real-world problems.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 mb-8 sm:mb-12 text-slate-400 px-4 sm:px-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin size={20} className="text-teal-400 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base lg:text-lg">Los Angeles, CA</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Calendar size={20} className="text-teal-400 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base lg:text-lg text-center sm:text-left">Available Summer 2026</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-4 sm:px-0">
                <button
                  onClick={() => scrollToSection(2)}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-600/30"
                >
                  View My Work
                </button>
                <a
                  href="/Ethan_Lee_Resume.pdf"
                  download="Ethan_Lee_Resume.pdf"
                  className="border-2 border-slate-600 hover:border-teal-400 text-slate-300 hover:text-teal-400 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                >
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  Resume
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-teal-400/30 shadow-2xl shadow-teal-400/20">
                  <img
                    src="/profile-image.jpg"
                    alt="Ethan Lee"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-slate-600/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection(1)}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-teal-400 transition-colors animate-bounce"
        >
          <ArrowDown size={24} className="sm:w-8 sm:h-8" />
        </button>
      </section>

      <section className="min-h-screen py-16 sm:py-20 flex items-center justify-center bg-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-center lg:text-left">
                About <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">Me</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
                <p>
                  I'm passionate about creating impactful software that bridges the gap between 
                  complex technical challenges and real-world solutions.
                </p>
                <p>
                  Currently pursuing Computer Science at UCLA, I've developed applications 
                  serving hundreds of users while maintaining 99.8% uptime. My experience 
                  spans from AI-powered platforms to IoT systems.
                </p>
                <p>
                  When I'm not coding, you'll find me playing volleyball, exploring new 
                  restaurants, or working on side projects that push my technical boundaries.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3 sm:gap-6 px-4 sm:px-0">
                <div className="bg-slate-900/70 backdrop-blur p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-700/50 text-center">
                  <span className="text-xl sm:text-3xl font-bold text-teal-400 block">300+</span>
                  <span className="text-slate-400 text-xs sm:text-sm">Active Users</span>
                </div>
                <div className="bg-slate-900/70 backdrop-blur p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-700/50 text-center">
                  <span className="text-xl sm:text-3xl font-bold text-teal-400 block">6</span>
                  <span className="text-slate-400 text-xs sm:text-sm">Major Projects</span>
                </div>
                <div className="bg-slate-900/70 backdrop-blur p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-700/50 text-center">
                  <span className="text-xl sm:text-3xl font-bold text-teal-400 block">3+</span>
                  <span className="text-slate-400 text-xs sm:text-sm">Years Coding</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 lg:mt-0">
              <div className="bg-slate-900/50 backdrop-blur p-6 sm:p-8 rounded-3xl border border-slate-700/50 shadow-2xl w-full max-w-md mx-4 sm:mx-0">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Current Focus</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg">Seeking Summer 2026 internships</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg">Building AI-powered applications</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg">Exploring machine learning</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg">Contributing to open source</span>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-center mb-3 sm:mb-4 text-sm sm:text-base">Let's connect:</p>
                  <div className="flex justify-center gap-4 sm:gap-6">
                    <a href="mailto:ethanplee24@gmail.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <Mail size={24} className="sm:w-7 sm:h-7" />
                    </a>
                    <a href="https://www.linkedin.com/in/ethan-p-lee/" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <Linkedin size={24} className="sm:w-7 sm:h-7" />
                    </a>
                    <a href="https://github.com/EthanLee101" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <Github size={24} className="sm:w-7 sm:h-7" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16 sm:py-20 flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Featured <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 px-4 sm:px-0">
              Applications I've built from the ground up
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 flex-1 content-center">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl h-fit">
                <div className="h-32 sm:h-40 bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Star className="text-teal-400" size={14} />
                      <h3 className="text-base sm:text-lg font-bold">{project.title}</h3>
                    </div>
                    <span className="text-xs bg-teal-600/20 text-teal-400 px-2 py-1 rounded-full border border-teal-400/30 flex-shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-400 mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                    {project.tech.slice(0, isMobile ? 2 : 3).map((tech) => (
                      <span key={tech} className="text-xs bg-slate-900/70 text-slate-300 px-2 py-1 rounded-full border border-slate-600/50">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > (isMobile ? 2 : 3) && (
                      <span className="text-xs text-slate-500">+{project.tech.length - (isMobile ? 2 : 3)}</span>
                    )}
                  </div>
                  
                  <div className="text-xs sm:text-sm text-teal-400 font-medium mb-2 sm:mb-3 text-center bg-slate-900/30 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg">
                    {project.stats}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1.5 sm:space-x-2">
                      <a
                        href={project.github}
                        className="flex items-center text-teal-400 hover:text-teal-300 text-xs sm:text-sm font-medium transition-colors"
                      >
                        <Github size={12} className="mr-0.5 sm:mr-1 sm:w-3.5 sm:h-3.5" />
                        Code
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="flex items-center text-slate-400 hover:text-slate-300 text-xs sm:text-sm font-medium transition-colors"
                        >
                          <ExternalLink size={12} className="mr-0.5 sm:mr-1 sm:w-3.5 sm:h-3.5" />
                          Demo
                        </a>
                      )}
                    </div>

                    {project.modalContent && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center text-white text-xs bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 px-1.5 sm:px-2 py-1 rounded-lg transition-all duration-300 font-medium flex-shrink-0"
                      >
                        <Eye size={10} className="mr-0.5 sm:mr-1 sm:w-3 sm:h-3" />
                        Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16 sm:py-20 flex items-center justify-center bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Technical <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">Skills</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 px-4 sm:px-0">
              Technologies I work with daily
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 flex-1 content-center">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-700/50 text-center hover:border-teal-400/50 transition-all duration-300 hover:scale-105 shadow-xl h-fit">
                <div className="text-teal-400 mb-4 sm:mb-6 flex justify-center">
                  {React.cloneElement(skillGroup.icon, { className: 'w-6 h-6 sm:w-8 sm:h-8' })}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-teal-400">{skillGroup.category}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-800/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-slate-400 text-base sm:text-lg mb-4 sm:mb-6 px-4 sm:px-0">
              Always learning and exploring new technologies
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-slate-500 text-xs sm:text-sm px-4 sm:px-0">
              <span className="px-2.5 sm:px-3 py-1 bg-slate-900/50 rounded-full">Rust</span>
              <span className="px-2.5 sm:px-3 py-1 bg-slate-900/50 rounded-full">GraphQL</span>
              <span className="px-2.5 sm:px-3 py-1 bg-slate-900/50 rounded-full">Kubernetes</span>
              <span className="px-2.5 sm:px-3 py-1 bg-slate-900/50 rounded-full">WebAssembly</span>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16 sm:py-20 flex items-center justify-center bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Engineering <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">Excellence</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 px-4 sm:px-0">
              Software engineering practices I follow
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 flex-1 content-center">
            <div className="bg-slate-800/50 backdrop-blur p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-700/50 text-center hover:border-teal-400/50 transition-all duration-300 hover:scale-105 shadow-xl h-fit">
              <div className="text-teal-400 mb-4 sm:mb-6 flex justify-center">
                <Code className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-teal-400">Code Quality</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  TypeScript for type safety
                </div>
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  ESLint + Prettier formatting
                </div>
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  Code reviews & documentation
                </div>
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  SOLID principles
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-700/50 text-center hover:border-teal-400/50 transition-all duration-300 hover:scale-105 shadow-xl h-fit">
              <div className="text-teal-400 mb-4 sm:mb-6 flex justify-center">
                <Server className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-teal-400">Testing & CI/CD</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  Unit & integration testing
                </div>
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  GitHub Actions pipelines
                </div>
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  Automated deployment
                </div>
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  Performance monitoring
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-700/50 text-center hover:border-teal-400/50 transition-all duration-300 hover:scale-105 shadow-xl h-fit">
              <div className="text-teal-400 mb-4 sm:mb-6 flex justify-center">
                <Monitor className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-teal-400">Architecture & Scale</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  RESTful API design
                </div>
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  Database optimization
                </div>
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  Caching strategies
                </div>
                <div className="text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 bg-slate-900/70 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-700/30 hover:border-teal-400/30 transition-colors">
                  Security best practices
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
              <div className="bg-slate-800/50 backdrop-blur p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700/50">
                <span className="text-lg sm:text-2xl font-bold text-teal-400 block">85%</span>
                <span className="text-slate-400 text-xs sm:text-sm">Avg Test Coverage</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700/50">
                <span className="text-lg sm:text-2xl font-bold text-teal-400 block">99%</span>
                <span className="text-slate-400 text-xs sm:text-sm">Uptime Achieved</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700/50">
                <span className="text-lg sm:text-2xl font-bold text-teal-400 block">&lt;3s</span>
                <span className="text-slate-400 text-xs sm:text-sm">Avg Load Time</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700/50">
                <span className="text-lg sm:text-2xl font-bold text-teal-400 block">15+</span>
                <span className="text-slate-400 text-xs sm:text-sm">Code Reviews</span>
              </div>
            </div>
            <p className="text-slate-400 text-base sm:text-lg px-4 sm:px-0">
              Committed to writing maintainable, scalable, and secure code
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16 sm:py-20 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            Let's <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 mb-12 sm:mb-16 leading-relaxed px-4 sm:px-0">
            I'm actively seeking Summer 2026 internship opportunities.
            <br className="hidden sm:block" />
            <span className="block sm:inline">Ready to discuss how I can contribute to your team.</span>
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <a
              href="mailto:ethanplee24@gmail.com"
              className="bg-slate-800/50 backdrop-blur p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 group shadow-xl hover:shadow-2xl"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-teal-500 group-hover:to-cyan-500 transition-colors shadow-lg">
                <Mail size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Email</h3>
              <p className="text-slate-400 text-sm sm:text-base">ethanplee24@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/ethan-p-lee/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 group shadow-xl hover:shadow-2xl"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-teal-500 group-hover:to-cyan-500 transition-colors shadow-lg">
                <Linkedin size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">LinkedIn</h3>
              <p className="text-slate-400 text-sm sm:text-base">Professional Network</p>
            </a>

            <a
              href="https://github.com/EthanLee101"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 group shadow-xl hover:shadow-2xl sm:col-span-2 md:col-span-1"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-teal-500 group-hover:to-cyan-500 transition-colors shadow-lg">
                <Github size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">GitHub</h3>
              <p className="text-slate-400 text-sm sm:text-base">Code Portfolio</p>
            </a>
          </div>

          <div className="text-slate-400">
            <p className="mb-3 sm:mb-4 text-sm sm:text-lg px-4 sm:px-0">© 2025 Ethan Lee • Built with React & Tailwind CSS</p>
            <p className="text-sm sm:text-lg px-4 sm:px-0">Available for internship opportunities starting Summer 2026</p>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal 
          key={selectedProject.id} 
          project={selectedProject} 
          onClose={handleModalClose}
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

export default Portfolio;