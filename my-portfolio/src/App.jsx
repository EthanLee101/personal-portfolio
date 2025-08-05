import React, { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, ChevronDown, Menu, X, Maximize2, Cpu, Wrench, FileText, Play, Info, Eye, Sparkles, MousePointer } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeFullscreen, setIsResumeFullscreen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFunFacts, setShowFunFacts] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Fun facts that appear on hover
  const funFacts = [
    "🏐 Volleyball enthusiast",
    "🕺 Passionate dancer",
    "🎮 Gaming aficionado",
    "🍜 Food explorer",
    "🎨 Creative problem solver"
  ];

  // Track screen size for mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mouse position for gradient effect - optimized to prevent modal interference
  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      // Skip mouse tracking when modal is open to prevent iframe re-renders
      if (selectedProject) return;
      
      // Use requestAnimationFrame to throttle updates and prevent excessive re-renders
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [selectedProject]);

  // Memoize the onClose function to prevent unnecessary re-renders
  const handleModalClose = useMemo(() => () => setSelectedProject(null), []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Track active section on scroll
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

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Updated skills
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
      { name: 'Linux', proficiency: 'Intermediate' },
      { name: 'CI/CD', proficiency: 'Intermediate' }
    ],
    libraries: [
      { name: 'PyTorch', proficiency: 'Advanced' },
      { name: 'TensorFlow', proficiency: 'Intermediate' },
      { name: 'Matplotlib', proficiency: 'Advanced' },
      { name: 'Pandas', proficiency: 'Advanced' },
      { name: 'Scikit-Learn', proficiency: 'Intermediate' },
      { name: 'Selenium', proficiency: 'Intermediate' }
    ]
  };

  // Updated projects with modal content
  const projects = [
    {
      id: 1,
      title: "Journal Buddy",
      description: "Full-stack journaling platform with AI-powered insights, supporting 300+ users with vector search capabilities.",
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI", "Pinecone"],
      github: "https://github.com/EthanLee101/journal-buddy",
      demo: null,
      image: "/journal-buddy-image.png",
      type: "Web App",
      status: "In Development",
      highlights: ["300+ users", "60% engagement increase", "99.9% uptime"],
      modalContent: {
        type: "demo",
        embedUrl: "https://www.youtube.com/embed/fy3hEIOlHzI?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0",
        description: "A comprehensive journaling platform that uses AI to provide personalized insights and mood tracking. Features include secure authentication, vector search for finding related entries, and AI-powered sentiment analysis.",
        features: [
          "Real-time AI insights for journal entries",
          "Vector search using Pinecone for semantic similarity",
          "Mood tracking and visualization",
          "Secure user authentication with Supabase",
          "Responsive design for mobile and desktop"
        ]
      }
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
      highlights: ["500+ users", "Course optimization", "Google OAuth integration"],
      modalContent: {
        type: "demo",
        embedUrl: "https://www.youtube.com/embed/3aBBAZNqbBA?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0",
        description: "A comprehensive schedule planning tool designed specifically for UCLA students to optimize their course selections and create balanced schedules.",
        features: [
          "Smart course conflict detection",
          "Professor rating integration",
          "Course prerequisite tracking",
          "Social features for sharing schedules",
          "Mobile-responsive design"
        ]
      }
    },
    {
      id: 3,
      title: "Automated Pet Feeder Web App",
      description: "IoT solution combining web app with Arduino hardware for remote pet feeding control with real-time updates.",
      tech: ["C++", "Firebase", "React", "JavaScript", "Express", "Arduino"],
      github: "https://github.com/EthanLee101/pet-feeder-project",
      demo: null,
      image: "/pet-feeder.jpg",
      type: "IoT Project",
      status: "Completed",
      highlights: ["REST APIs", "SSL-encrypted Wi-Fi", "Hardware integration"],
      modalContent: null // No modal for this project as requested
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
      highlights: ["99.9% accuracy", "Custom CNN", "Data augmentation"],
      modalContent: {
        type: "slides",
        embedUrl: "https://docs.google.com/presentation/d/e/2PACX-1vRBzTh2d3ACS0G7_6C43Hd0LJgLU8ZlJWc1c_VljM75Dz9wcei3eTHz69P-zboHjuIe3AcbYtUXUN8J/embed?start=false&loop=false&delayms=3000&rm=minimal",
        description: "A high-accuracy digit classification model using custom CNN architecture with comprehensive data augmentation techniques.",
        features: [
          "Custom CNN architecture with multiple convolutional layers",
          "Advanced data augmentation pipeline",
          "Real-time prediction visualization",
          "Model performance analytics",
          "Extensive hyperparameter tuning"
        ]
      }
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
      highlights: ["Team leadership", "50+ commits", "Interactive elements"],
      modalContent: {
        type: "demo",
        embedUrl: "https://www.youtube.com/embed/jwLuVXh9DQ4?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0",
        description: "An exciting 2D platformer where radioactive frogs must navigate through challenging levels. Led a team of 5 developers to create engaging gameplay mechanics.",
        features: [
          "Multiple challenging levels",
          "Custom physics system",
          "Original artwork and animations",
          "Sound effects and background music",
          "Leaderboard system"
        ]
      }
    },
    {
      id: 6,
      title: "Marble Madness",
      description: "2D Dungeon crawler in C++ with custom level creation, collision detection, and polymorphic enemy system.",
      tech: ["C++", "Custom Graphics", "OOP", "Game Architecture"],
      github: "https://github.com/EthanLee101/marble-madness",
      demo: null,
      image: "/marble-madness-image.png",
      type: "Game",
      status: "Completed",
      highlights: ["Custom level system", "10 enemy types", "20% code reduction"],
      modalContent: {
        type: "demo",
        embedUrl: "https://www.youtube.com/embed/Rlqs-BGHmDI?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0",
        description: "A complex 2D dungeon crawler built from scratch in C++ featuring custom graphics engine and sophisticated enemy AI.",
        features: [
          "Custom graphics rendering engine",
          "Advanced collision detection system",
          "10 unique enemy types with different behaviors",
          "Dynamic level generation",
          "Optimized game loop for smooth performance"
        ]
      }
    }
  ];

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Advanced': return 'bg-gradient-to-r from-green-500 to-emerald-600';
      case 'Intermediate': return 'bg-gradient-to-r from-blue-500 to-cyan-600';
      case 'Learning': return 'bg-gradient-to-r from-yellow-500 to-orange-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development': return 'bg-gradient-to-r from-yellow-500 to-amber-600';
      case 'Completed': return 'bg-gradient-to-r from-green-500 to-emerald-600';
      case 'Published': return 'bg-gradient-to-r from-blue-500 to-indigo-600';
      default: return 'bg-gray-600';
    }
  };

  // Modal Component - Memoized to prevent unnecessary re-renders
const ProjectModal = React.memo(({ project, onClose, isMobile }) => {
  // Memoize the modal content to prevent unnecessary recalculations
  const modalContent = React.useMemo(() => {
    if (!project || !project.modalContent) return null;
    
    return {
      title: project.title,
      status: project.status,
      type: project.type,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-gray-900 rounded-xl max-w-6xl w-full h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-gray-700" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b border-gray-700 flex-shrink-0">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-montserrat font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{modalContent.title}</h2>
              <div className="flex gap-2 mb-2">
                <span className={`text-xs text-white px-3 py-1 rounded-full ${getStatusColor(modalContent.status)}`}>
                  {modalContent.status}
                </span>
                <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full">
                  {modalContent.type}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{modalContent.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors hover:rotate-90 transform duration-300 flex-shrink-0"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-4 overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-4 h-full">
            {/* Left side - Features/Details */}
            <div className="lg:col-span-1 flex flex-col h-full overflow-hidden">
              <div className="overflow-y-auto flex-1">
                <h3 className="text-md font-montserrat font-semibold mb-3 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Key Features</h3>
                <ul className="space-y-1 mb-4">
                  {modalContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="text-blue-400 mr-2 mt-1 group-hover:text-purple-400 transition-colors">•</span>
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-md font-montserrat font-semibold mb-3 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Technologies Used</h3>
                <div className="flex flex-wrap gap-1 mb-4">
                  {modalContent.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded-full transition-all hover:scale-105 border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 flex-shrink-0">
                <a
                  href={modalContent.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 border border-gray-600 text-sm"
                >
                  <Github size={16} className="mr-2" />
                  View Source Code
                </a>
                {modalContent.demo && (
                  <a
                    href={modalContent.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Open Full Demo
                  </a>
                )}
              </div>
            </div>
            
            {/* Right side - Demo/Docs */}
            <div className="lg:col-span-2 h-full flex flex-col">
              <div className="bg-gray-800 rounded-lg border border-gray-700 flex flex-col h-full overflow-hidden">
                
                {/* Header for content type - Fixed at top */}
                <div className="flex items-center justify-between p-3 border-b border-gray-700 flex-shrink-0">
                  <h3 className="text-sm font-montserrat text-gray-400">
                    {modalContent.contentType === 'demo' && 'Live Demo Preview'}
                    {modalContent.contentType === 'slides' && 'Project Presentation'}
                    {modalContent.contentType === 'docs' && 'Technical Documentation'}
                  </h3>
                  {modalContent.contentType === 'demo' && <Play className="text-purple-400" size={16} />}
                  {(modalContent.contentType === 'slides' || modalContent.contentType === 'docs') && <FileText className="text-purple-400" size={16} />}
                </div>

                {/* Content area - Fills remaining space without scrolling */}
                <div className="flex-1 bg-black overflow-hidden relative">
                  
                  {isMobile ? (
                    /* Mobile: Show link button instead of iframe */
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-6 flex flex-col items-center justify-center text-center">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-20 h-20 mb-4 flex items-center justify-center">
                        {modalContent.contentType === 'demo' && <Play size={40} className="text-white" />}
                        {(modalContent.contentType === 'slides' || modalContent.contentType === 'docs') && <FileText size={40} className="text-white" />}
                      </div>
                      <p className="text-gray-300 mb-6 text-sm">
                        {modalContent.contentType === 'demo' && 'Watch the full demo video'}
                        {modalContent.contentType === 'slides' && 'View the project presentation'}
                        {modalContent.contentType === 'docs' && 'View the technical documentation'}
                      </p>
                      <a
                        href={modalContent.embedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-montserrat font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        {modalContent.contentType === 'demo' && 'Watch Video'}
                        {modalContent.contentType === 'slides' && 'View Slides'}
                        {modalContent.contentType === 'docs' && 'View Docs'}
                      </a>
                    </div>
                  ) : (
                    /* Desktop: Show iframe as before */
                    <>
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

                      {modalContent.contentType === 'docs' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 p-4 overflow-hidden">
                          <div className="prose prose-invert max-w-none h-full overflow-y-auto">
                            <h3 className="text-white mb-3">Project Overview</h3>
                            <p className="text-gray-300 mb-3 text-sm">{modalContent.description}</p>
                            <h3 className="text-white mb-3">Technical Implementation</h3>
                            <p className="text-gray-300 text-sm">
                              View the complete technical documentation and implementation details on GitHub.
                            </p>
                            <a
                              href={modalContent.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text hover:from-blue-300 hover:to-purple-400 mt-3 inline-block text-sm"
                            >
                              View Full Documentation →
                            </a>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function to prevent unnecessary re-renders
  // Only re-render if the project data actually changes
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
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Animated background gradient - isolated from modal */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`
        }}
        key="background-gradient"
      />

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full opacity-30" />
          </div>
        ))}
      </div>

      {/* Navigation - Simplified without logo */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4">
            {/* Desktop Navigation - Now centered without logo */}
            <div className="hidden md:flex space-x-8">
              {['home', 'projects', 'skills', 'resume', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 relative group ${activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                    }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-transform duration-300 ${activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 absolute right-4"
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

      {/* Hero Section - Enhanced with animations */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-0 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image with Fun Facts and Hover Indicator */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative group">
                {/* Hover me bubble */}
                <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${showFunFacts ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}>
                  <div className="relative">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce flex items-center gap-2">
                      <MousePointer size={16} />
                      Hover over me!
                      <Sparkles size={16} />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-purple-600"></div>
                  </div>
                </div>

                <div
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-2xl relative cursor-pointer transform transition-transform duration-500 hover:scale-105"
                  onMouseEnter={() => setShowFunFacts(true)}
                  onMouseLeave={() => setShowFunFacts(false)}
                >
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/profile-image.jpg"
                      alt="Ethan Lee"
                      className="w-full h-full object-cover transition-all duration-300"
                      style={{ filter: showFunFacts ? 'brightness(0.3)' : 'brightness(1)' }}
                    />

                    {/* Fun Facts Overlay */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${showFunFacts ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Fun Facts!</h3>
                      <div className="space-y-2 px-4">
                        {funFacts.map((fact, index) => (
                          <div
                            key={index}
                            className="text-sm text-white animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {fact}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated decorative elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Text Content - Enhanced typography */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-4 sm:mb-6">
                  Hello! I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">Ethan Lee</span>
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-8">
                  My Background
                </p>
                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                  I'm currently a junior at UCLA studying Computer Science with an interest in full-stack development,
                  software engineering, and machine learning/AI. I'm passionate about creating impactful, robust software
                  that solves real-world problems.
                </p>
                <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-10 leading-relaxed">
                  Feel free to contact me through email or connect with me on LinkedIn!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-montserrat font-medium transition-all duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg overflow-hidden group"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-montserrat font-medium transition-all duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg"
                >
                  Get In Touch
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/EthanLee101" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href="https://www.linkedin.com/in/ethan-p-lee/" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced with animations */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-16">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-transparent hover:ring-2 hover:ring-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center relative overflow-hidden group">
                  <img
                    src={project.image}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    alt="Project preview"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-montserrat font-bold hover:text-blue-400 transition-colors">{project.title}</h3>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs text-white px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full">
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
                          <span key={index} className="text-xs bg-gradient-to-r from-green-900 to-emerald-900 text-green-300 px-2 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full transition-all hover:scale-105 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-all duration-200 hover:scale-105"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="flex items-center text-purple-400 hover:text-purple-300 text-sm transition-all duration-200 hover:scale-105"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          Demo
                        </a>
                      )}
                    </div>

                    {/* View Details button */}
                    {project.modalContent && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center text-white text-sm bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <Eye size={16} className="mr-1" />
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Enhanced styling */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-16">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-3">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-montserrat font-semibold">Languages</h3>
              </div>
              <div className="space-y-2">
                {skills.languages.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between group">
                    <span className="text-sm group-hover:text-blue-400 transition-colors">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${getProficiencyColor(skill.proficiency)}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-3">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-montserrat font-semibold">Frameworks</h3>
              </div>
              <div className="space-y-2">
                {skills.frameworks.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between group">
                    <span className="text-sm group-hover:text-purple-400 transition-colors">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${getProficiencyColor(skill.proficiency)}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mr-3">
                  <Wrench className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-montserrat font-semibold">Tools</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between group">
                    <span className="text-sm group-hover:text-green-400 transition-colors">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${getProficiencyColor(skill.proficiency)}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg mr-3">
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-montserrat font-semibold">Libraries</h3>
              </div>
              <div className="space-y-2">
                {skills.libraries.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between group">
                    <span className="text-sm group-hover:text-orange-400 transition-colors">{skill.name}</span>
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

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-8">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Resume</span>
          </h2>

          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            {/* Mobile: Show download button instead of iframe */}
            <div className="block md:hidden mb-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <FileText size={40} className="text-white" />
                </div>
                <p className="text-gray-300 mb-4">View my resume on desktop or download it below</p>
                <a
                  href="/Ethan-Lee.pdf"
                  download="Ethan-Lee.pdf"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-montserrat font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Desktop: Show PDF viewer */}
            <div className="hidden md:block">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-montserrat font-semibold">Resume Preview</h3>
              </div>

              <div
                className={`bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${isResumeFullscreen ? 'fixed inset-4 z-50' : 'w-full max-w-5xl mx-auto'
                  }`}
                style={{
                  height: isResumeFullscreen ? 'calc(100vh - 32px)' : '80vh',
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
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-montserrat font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-8">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities and would love to discuss how I can contribute to your team.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:ethanplee24@gmail.com"
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">ethanplee24@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/ethan-p-lee/"
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="text-white" size={28} />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>

            <a
              href="https://github.com/EthanLee101"
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Github className="text-white" size={28} />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">View my repositories</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Ethan Lee</span>. Built with React & Tailwind CSS.
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

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          key={selectedProject.id} 
          project={selectedProject} 
          onClose={handleModalClose}
          isMobile={isMobile}
        />
      )}

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-10px) translateX(5px);
          }
          66% {
            transform: translateY(5px) translateX(-5px);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;