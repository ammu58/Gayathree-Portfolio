import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, Terminal, Brain, Layout, Database, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Terminal,
      skills: PORTFOLIO_DATA.skills.programmingLanguages,
      context: 'Core languages utilized for backend scripting, web applications, and data queries.',
    },
    {
      title: 'Emerging Technologies & AI',
      icon: Brain,
      skills: PORTFOLIO_DATA.skills.emergingTechnologies,
      context: 'Applied knowledge in retrieval architectures, prompt crafting, and machine learning pipelines.',
    },
    {
      title: 'Application Development',
      icon: Layout,
      skills: PORTFOLIO_DATA.skills.applicationDevelopment,
      context: 'Full lifecycle web engineering, responsive user interfaces, and user authentication.',
    },
    {
      title: 'Computer Science Fundamentals',
      icon: Database,
      skills: PORTFOLIO_DATA.skills.computerScienceFundamentals,
      context: 'Foundational principles in algorithms, data structures, DBMS, and OOP.',
    },
    {
      title: 'Engineering Practices & QA',
      icon: CheckCircle,
      skills: PORTFOLIO_DATA.skills.engineeringPractices,
      context: 'Rigorous unit testing, systematic debugging, data validation, and git workflows.',
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/60 bg-slate-50 dark:bg-[#07090e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14 space-y-3"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Technical Stack &amp; Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Verified technical skills and industry certifications.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Grouped cleanly by capability area without arbitrary percentage bars. Grounded in actual
            coursework, internships, and certified credentials.
          </p>
        </motion.div>

        {/* Certifications Spotlight Bar with NPTEL Software Engineering */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-gradient-to-r dark:from-slate-900/90 dark:to-slate-950 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm dark:shadow-xl"
        >
          <div className="flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400">
            <Award className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <span>Verified Professional Certifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/40 transition-colors flex items-start gap-3"
              >
                <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                    {cert.name}
                  </h4>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Issuer: <span className="text-slate-800 dark:text-slate-300 font-medium">{cert.issuer}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm dark:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-semibold text-base">
                    <Icon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>{cat.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                    {cat.context}
                  </p>
                </div>

                {/* Clean unboxed tags with subtle dot separators */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {cat.skills.map((s, sIdx) => (
                    <span key={s} className="inline-flex items-center">
                      <span className="font-medium text-slate-800 dark:text-slate-200">{s}</span>
                      {sIdx < cat.skills.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300 dark:text-slate-600 ml-2">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Professional Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm dark:shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-semibold text-base">
                <CheckCircle className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Professional &amp; Team Competencies</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                Soft skills proven in fast-paced collaborative team environments.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {PORTFOLIO_DATA.skills.professionalSkills.map((ps, pIdx) => (
                <span key={ps} className="inline-flex items-center">
                  <span className="font-medium text-slate-800 dark:text-slate-200">{ps}</span>
                  {pIdx < PORTFOLIO_DATA.skills.professionalSkills.length - 1 && (
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-600 ml-2">/</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
