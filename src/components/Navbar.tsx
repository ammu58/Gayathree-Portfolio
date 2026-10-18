import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import SGLogo from './SGLogo';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Navbar({
  theme,
  onToggleTheme,
  onOpenResume,
  onOpenContact,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/90 dark:bg-[#07090e]/90 backdrop-blur-md border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-lg dark:shadow-black/20 py-3.5'
          : 'bg-white/60 dark:bg-[#07090e]/60 backdrop-blur-sm border-slate-200/40 dark:border-slate-800/30 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title with bespoke SG Monogram Logo */}
        <a
          href="#"
          className="group text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <SGLogo size={34} className="w-8 h-8" />
          <span>Gayathree Singareddy</span>
        </a>

        {/* Zone 2: 4-5 single-line clean text nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline hover:decoration-sky-500 hover:underline-offset-8"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline hover:decoration-sky-500 hover:underline-offset-8 cursor-pointer flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
          </button>
        </nav>

        {/* Zone 3: Theme Toggle + 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.05 }}
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </motion.div>
          </motion.button>

          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-semibold tracking-wide text-white dark:text-slate-950 bg-slate-900 dark:bg-white hover:bg-sky-500 dark:hover:bg-sky-400 hover:text-white dark:hover:text-slate-950 transition-all rounded-md shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0d14] border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-left text-base font-medium text-sky-600 dark:text-sky-400 hover:text-sky-500 py-1 flex items-center justify-between"
            >
              <span>View Full Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white dark:text-slate-950 bg-slate-900 dark:bg-white hover:bg-sky-500 dark:hover:bg-sky-400 rounded-md transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
