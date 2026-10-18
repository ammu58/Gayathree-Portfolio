import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Generative AI & RAG', label: 'Generative AI & RAG' },
    { id: 'AI/ML & Vision', label: 'Computer Vision & AI' },
    { id: 'Web Engineering', label: 'Web Engineering' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/60 bg-slate-50 dark:bg-[#080b11] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Scroll-Triggered Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              Engineered for accuracy, usability, and scale.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Real projects built from ground-up specifications. Click any project card to inspect
              its system architecture, problem analysis, and interactive sandbox.
            </p>
          </div>

          {/* Interactive Category Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'text-white dark:text-slate-950 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/40'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-sky-600 dark:bg-sky-400 rounded-md shadow-sm -z-0"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards Grid with Scroll-Triggered Reveal */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.12,
                  ease: 'easeOut' as const,
                }}
                whileHover={{ y: -6 }}
                className="flex flex-col rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 overflow-hidden group shadow-md dark:shadow-lg dark:shadow-black/20"
              >
                {/* Card Media Preview Container */}
                <div className="relative aspect-video overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800/80">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Visual subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {/* Clean unboxed category kicker with typographic separator */}
                    <div className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                      <span>{project.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Contribution Highlight */}
                    <div className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                      <span className="font-semibold text-slate-800 dark:text-slate-300">My Contribution: </span>
                      {project.myContribution}
                    </div>
                  </div>

                  {/* Card Bottom Meta & Actions */}
                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {/* Tech stack as clean unboxed text with bullets */}
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span key={tech}>
                          <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                          {tIdx < Math.min(project.technologies.length, 4) - 1 && (
                            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600 ml-1.5">·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelectProject(project)}
                        className="px-4 py-2 text-xs font-semibold text-white dark:text-slate-950 bg-slate-900 dark:bg-white hover:bg-sky-600 dark:hover:bg-sky-400 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <span>Architecture &amp; Sandbox</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                        title="View GitHub Repository"
                        aria-label="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
