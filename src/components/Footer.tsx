import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import SGLogo from './SGLogo';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#06080d] py-12 text-slate-500 dark:text-slate-400 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand with SG Logo & Copyright */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <SGLogo size={28} className="w-7 h-7" />
            <div className="text-slate-900 dark:text-white font-bold text-sm tracking-tight">
              Gayathree Singareddy
            </div>
          </div>
          <p className="text-slate-500 text-xs">
            B.Tech CSE (Artificial Intelligence) · Class of 2027 · Visakhapatnam, India
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Skills
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            Resume Document
          </button>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Email Gayathree"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 rounded-md transition-colors cursor-pointer ml-2 shadow-sm"
            title="Back to Top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
