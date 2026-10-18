import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/60 bg-slate-50 dark:bg-[#07090e] transition-colors duration-300">
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
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Internships focused on real software and machine learning workflows.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Direct team contributions translating business requirements into tested applications,
            data validation scripts, and comprehensive technical documentation.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.internships.map((job, idx) => (
            <motion.div
              key={job.company + job.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -3 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 shadow-sm dark:shadow-lg dark:shadow-black/20"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-5 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                    <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>{job.role}</span>
                  </h3>
                  <div className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {job.company}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{job.duration}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{job.location}</span>
                  </span>
                </div>
              </div>

              {/* Concrete Bullet Points */}
              <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {job.highlights.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Applied Competencies */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-800 dark:text-slate-300 mr-1">Skills Exercised:</span>
                {job.skills.map((skill, sIdx) => (
                  <span key={skill}>
                    <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                    {sIdx < job.skills.length - 1 && (
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-600 ml-2">/</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
