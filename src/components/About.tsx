import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Target, Lightbulb, Code2, Layers } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/60 bg-slate-100/50 dark:bg-[#080b11] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 space-y-3"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Translating algorithmic intelligence into reliable software solutions.
          </h2>
        </motion.div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column with Staggered Scroll-Triggered Reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            <motion.p variants={cardVariants}>
              I am an undergraduate in Computer Science and Engineering specializing in Artificial
              Intelligence at Vignan's Institute of Engineering for Women, Visakhapatnam. My journey
              in tech is grounded in a deep curiosity for how emerging AI paradigms—particularly
              Generative AI and Retrieval-Augmented Generation—can be engineered into everyday,
              trustworthy software products.
            </motion.p>
            <motion.p variants={cardVariants}>
              Through internships at <strong className="text-slate-900 dark:text-white font-medium">JJH Global Solutions</strong> and{' '}
              <strong className="text-slate-900 dark:text-white font-medium">Data Valley India</strong>, I moved beyond theoretical
              model concepts to build practical Python applications, perform root-cause debugging,
              validate model responses, and write technical documentation for team collaboration.
            </motion.p>
            <motion.p variants={cardVariants}>
              Certified in <strong className="text-sky-600 dark:text-sky-300 font-medium">Software Engineering by NPTEL</strong>,
              I take pride in writing clean, well-tested code across Python, Java, JavaScript, and
              SQL. My emphasis is on end-to-end reliability: requirements analysis, systematic debugging,
              and verifying outputs at every stage of the software lifecycle.
            </motion.p>
            <motion.p variants={cardVariants} className="text-slate-800 dark:text-slate-200">
              I am actively seeking technology internship and consulting opportunities—including the
              Accenture Technology &amp; Consulting Internship—where I can apply my analytical skills,
              collaborate in high-performing teams, and help ship real-world client solutions.
            </motion.p>
          </motion.div>

          {/* Structured Highlights Column with Scroll Reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 space-y-4"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 transition-all hover:border-sky-500/40 shadow-sm"
            >
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-sm font-semibold">
                <Target className="w-4 h-4" />
                <span>Primary Objective</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-normal">
                Deliver value as a Technology &amp; Consulting Intern or Junior AI/Software Engineer
                by solving customer problems with structured thinking and code.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 transition-all hover:border-sky-500/40 shadow-sm"
            >
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-sm font-semibold">
                <Code2 className="w-4 h-4" />
                <span>Engineering Mindset</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-normal">
                Emphasis on data validation, iterative testing, and systematic debugging to ensure
                AI-driven workflows produce factual, dependable outcomes.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 transition-all hover:border-sky-500/40 shadow-sm"
            >
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-sm font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>Core Competencies</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 pt-1">
                <div>Generative AI · RAG Architectures · Prompt Design</div>
                <div>Python Workflows · Java · JavaScript · SQL</div>
                <div>NPTEL Software Engineering · Unit Testing · Documentation</div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 transition-all hover:border-sky-500/40 shadow-sm"
            >
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-sm font-semibold">
                <Layers className="w-4 h-4" />
                <span>Languages Spoken</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300">
                {PORTFOLIO_DATA.languages.map((l, i) => (
                  <span key={l.language}>
                    {l.language} ({l.proficiency})
                    {i < PORTFOLIO_DATA.languages.length - 1 && (
                      <span className="text-slate-300 dark:text-slate-600 ml-3">·</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
