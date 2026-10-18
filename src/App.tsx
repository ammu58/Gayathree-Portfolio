import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import Skills from './components/Skills';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Theme state: default to dark, persist in localStorage
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gayathree_portfolio_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('gayathree_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-sky-500/20 selection:text-sky-500 dark:selection:text-sky-300 transition-colors duration-300">
      {/* Interactive Graphics Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections with Framer Motion Reveals */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenContact={handleOpenContact}
        />
        <About />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <EngineeringPhilosophy />
        <Skills />
        <Education />
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
