import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/60 bg-slate-100/50 dark:bg-[#080b11] transition-colors duration-300">
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
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Education and foundational coursework.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Structured computer science education specializing in Artificial Intelligence alongside
            a strong secondary academic track record.
          </p>
        </motion.div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm dark:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {item.degree}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item.institution}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.details}
                </p>
              </div>

              {/* Performance Indicator */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-baseline justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">{item.scoreType}</span>
                <span className="text-lg font-bold text-slate-900 dark:text-white tabular-nums">
                  {item.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
