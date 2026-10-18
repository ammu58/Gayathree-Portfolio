import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { ArrowDown, FileText, Github, Linkedin, Mail, CheckCircle2, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import SGLogo from './SGLogo';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onOpenResume, onOpenContact }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [imgSrc, setImgSrc] = useState(PORTFOLIO_DATA.personal.portraitImage);
  const [imageError, setImageError] = useState(false);

  // 3D tilt effect on portrait card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
  const rotateY = useTransform(mouseX, [-150, 150], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Framer Motion entrance variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors duration-300">
      {/* Dynamic animated ambient background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.15, 0.28, 0.15],
          x: [-15, 15, -15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-sky-500/10 dark:bg-sky-500/15 blur-[140px] pointer-events-none rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.2, 0.1],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[150px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Split-screen desktop hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic & Action hierarchy with staggered entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Editorial kicker */}
            <motion.div
              variants={itemVariants}
              className="text-xs font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400 flex flex-wrap items-center gap-2"
            >
              <span>B.Tech CSE (Artificial Intelligence)</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>2027 Graduate</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>Visakhapatnam, India</span>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance"
            >
              Building intelligent systems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 dark:from-sky-400 dark:via-sky-300 dark:to-indigo-300">
                Generative AI
              </span>{' '}
              and robust software.
            </motion.h1>

            {/* Authentic personal intro */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              I am a fourth-year Artificial Intelligence student with hands-on experience in
              retrieval-augmented generation (RAG), computer vision workflows, and full-stack web
              engineering. Having completed two technical internships, I focus on turning complex
              requirements into dependable, production-ready software solutions.
            </motion.p>

            {/* Target goal announcement */}
            <motion.div
              variants={itemVariants}
              className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3 backdrop-blur-sm shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <span>
                Actively seeking technology internships and entry-level engineering roles (such as the
                Accenture Technology &amp; Consulting Internship) to contribute to client-facing business solutions.
              </span>
            </motion.div>

            {/* CTAs & Social Links */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white dark:text-slate-950 bg-sky-600 dark:bg-sky-400 hover:bg-sky-500 dark:hover:bg-sky-300 transition-all rounded-md shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenResume}
                className="px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 transition-all rounded-md whitespace-nowrap cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>View Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenContact}
                className="px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 transition-all rounded-md whitespace-nowrap cursor-pointer shadow-sm"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Direct Connect Links */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400"
            >
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <button
                onClick={copyEmail}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Click to copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Portrait visual frame with interactive 3D perspective tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' as const }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-sm sm:max-w-md perspective-[1000px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Outer decorative card frame with 3D tilt */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl group transition-shadow duration-300"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-slate-950">
                  {!imageError ? (
                    <img
                      src={imgSrc}
                      alt="Gayathree Singareddy, AI and Software Engineering Student"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                      onError={() => {
                        if (imgSrc !== '/src/assets/images/gayathree-profile.jpg') {
                          setImgSrc('/src/assets/images/gayathree-profile.jpg');
                        } else {
                          setImageError(true);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-900 text-center">
                      <div className="w-20 h-20 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-2xl mb-4">
                        GS
                      </div>
                      <h3 className="font-semibold text-white text-lg">Gayathree Singareddy</h3>
                      <p className="text-xs text-slate-400 mt-1">B.Tech CSE (Artificial Intelligence)</p>
                    </div>
                  )}

                  {/* Gradient shadow overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Identification placard inside frame bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5 text-white">
                    <div className="flex items-center gap-2.5">
                      <SGLogo size={28} className="w-7 h-7 shadow-lg" />
                      <p className="font-semibold text-lg leading-tight">
                        Gayathree Singareddy
                      </p>
                    </div>
                    <p className="text-xs text-slate-300">
                      Vignan's Institute of Engineering for Women · CGPA 7.6 / 10
                    </p>
                    <div className="text-[11px] text-sky-400 pt-1 flex items-center gap-1.5 font-medium">
                      <span>NPTEL Software Engineering</span>
                      <span aria-hidden="true">·</span>
                      <span>Google AI Certified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Full-width 4-metric strip below hero split with staggered scroll entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <motion.div whileHover={{ y: -3 }} className="space-y-1">
            <div className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">2</div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">Industry Internships</div>
            <div className="text-[11px] text-slate-500">JJH Global &amp; Data Valley India</div>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="space-y-1">
            <div className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">3</div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">Flagship Projects</div>
            <div className="text-[11px] text-slate-500">Dopply TryOn, RAG, STYLE</div>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="space-y-1">
            <div className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">3</div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">Verified Certifications</div>
            <div className="text-[11px] text-slate-500">NPTEL &amp; Google Cloud Skills</div>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="space-y-1">
            <div className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">2027</div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">B.Tech Graduation Year</div>
            <div className="text-[11px] text-slate-500">Available for Internships &amp; Roles</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
