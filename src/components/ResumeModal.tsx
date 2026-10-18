import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
GAYATHREE SINGAREDDY
Technology Intern Candidate | B.Tech CSE (Artificial Intelligence) | 2027 Graduate
Visakhapatnam, India | 9553810275 | singareddygayathree@gmail.com
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
GitHub: ${PORTFOLIO_DATA.personal.github}

PROFESSIONAL SUMMARY:
${PORTFOLIO_DATA.personal.summary}

TECHNICAL SKILLS:
- Programming Languages: ${PORTFOLIO_DATA.skills.programmingLanguages.join(', ')}
- Emerging Technologies: ${PORTFOLIO_DATA.skills.emergingTechnologies.join(', ')}
- Application Design & Development: ${PORTFOLIO_DATA.skills.applicationDevelopment.join(', ')}
- Computer Science Fundamentals: ${PORTFOLIO_DATA.skills.computerScienceFundamentals.join(', ')}
- Engineering Practices: ${PORTFOLIO_DATA.skills.engineeringPractices.join(', ')}

INTERNSHIP EXPERIENCE:
1. ${PORTFOLIO_DATA.internships[0].role} — ${PORTFOLIO_DATA.internships[0].company} (${PORTFOLIO_DATA.internships[0].duration})
${PORTFOLIO_DATA.internships[0].highlights.map((h) => `   * ${h}`).join('\n')}

2. ${PORTFOLIO_DATA.internships[1].role} — ${PORTFOLIO_DATA.internships[1].company} (${PORTFOLIO_DATA.internships[1].duration})
${PORTFOLIO_DATA.internships[1].highlights.map((h) => `   * ${h}`).join('\n')}

PROJECTS:
1. STYLE — Fashion E-commerce Web Application (HTML, CSS, JavaScript)
   * Designed and developed a responsive web application with user authentication and product management, supporting end-to-end business workflows.
   * Tested and debugged user flows to verify functionality against business requirements and deliver a reliable user experience.

2. RAG-Based AI Assistant (Python, RAG, Prompt Engineering)
   * Designed and built a document-grounded assistant that retrieves relevant information to answer queries with context-aware responses.
   * Tested and validated response quality, improving accuracy through iterative refinement.

3. Dopply TryOn — AI Virtual Try-On App (AI Application)
   * Built an AI application for digital clothing visualization, applying emerging technology to a retail use case with a user-focused interface.
   * Applied problem solving and iterative testing to improve functionality.

EDUCATION:
- B.Tech, Computer Science & Engineering (Artificial Intelligence) — CGPA: 7.6 / 10 (2023 – 2027)
  Vignan's Institute of Engineering for Women, Visakhapatnam
- Intermediate — Sri Chaitanya Junior College — 86% (2021 – 2023)
- SSC / Class X — Bhashyam Public School — 100% (2021)

CERTIFICATIONS:
- Software Engineering — NPTEL
- Google AI Essentials — Google
- Introduction to Generative AI — Google Cloud Skills Boost
`;
    navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' as const }}
            className="relative w-full max-w-4xl bg-white dark:bg-[#0b0f17] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col text-slate-800 dark:text-slate-200"
          >
            {/* Header toolbar */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d121c] shrink-0">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Official Resume Document
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Verified records for Gayathree Singareddy
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>

                <button
                  onClick={handleCopyText}
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                  title="Copy plain-text resume"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
                  aria-label="Close resume view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Formatted Document Canvas */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-[#090d14] text-slate-800 dark:text-slate-200 print:bg-white print:text-black">
              {/* Document Header */}
              <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight uppercase">
                  {PORTFOLIO_DATA.personal.name}
                </h1>
                <p className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400">
                  Technology Intern Candidate · B.Tech CSE (Artificial Intelligence) · 2027 Graduate
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap justify-center items-center gap-2 pt-1">
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{PORTFOLIO_DATA.personal.phone}</span>
                  <span aria-hidden="true">·</span>
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-sky-600 dark:text-sky-400 hover:underline">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex justify-center items-center gap-4 pt-1">
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                  <span aria-hidden="true">·</span>
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800/80 pb-1">
                  Professional Summary
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.personal.summary}
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800/80 pb-1">
                  Technical Skills
                </h3>
                <div className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                  <div>
                    <strong className="text-slate-900 dark:text-white">Programming Languages: </strong>
                    {PORTFOLIO_DATA.skills.programmingLanguages.join(', ')}
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Application Design &amp; Development: </strong>
                    {PORTFOLIO_DATA.skills.applicationDevelopment.join(', ')}
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Computer Science Fundamentals: </strong>
                    {PORTFOLIO_DATA.skills.computerScienceFundamentals.join(', ')}
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Emerging Technologies: </strong>
                    {PORTFOLIO_DATA.skills.emergingTechnologies.join(', ')}
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Engineering Practices: </strong>
                    {PORTFOLIO_DATA.skills.engineeringPractices.join(', ')}
                  </div>
                </div>
              </div>

              {/* Internship Experience */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800/80 pb-1">
                  Internship Experience
                </h3>
                {PORTFOLIO_DATA.internships.map((job) => (
                  <div key={job.company} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      <span>
                        {job.role} — <span className="text-slate-600 dark:text-slate-300 font-normal">{job.company}</span>
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 font-mono text-xs">{job.duration}</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {job.highlights.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800/80 pb-1">
                  Projects
                </h3>
                {PORTFOLIO_DATA.projects.map((proj) => (
                  <div key={proj.title} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      <span>
                        {proj.title}
                      </span>
                      <span className="text-sky-600 dark:text-sky-400 text-xs font-mono">
                        {proj.technologies.slice(0, 3).join(', ')}
                      </span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {proj.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800/80 pb-1">
                  Education
                </h3>
                {PORTFOLIO_DATA.education.map((edu) => (
                  <div key={edu.degree} className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm">
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{edu.degree}</div>
                      <div className="text-slate-500 dark:text-slate-400 text-xs">{edu.institution}</div>
                    </div>
                    <div className="text-right sm:mt-0 mt-1 font-mono text-xs text-slate-700 dark:text-slate-300">
                      <span>{edu.score}</span> · <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800/80 pb-1">
                  Certifications
                </h3>
                <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
                  {PORTFOLIO_DATA.certifications.map((cert) => (
                    <li key={cert.name}>
                      <strong className="text-slate-900 dark:text-white">{cert.name}</strong> — {cert.issuer}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d121c] flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Official candidate credentials for recruitment evaluation.
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-white dark:text-slate-950 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              >
                Close Viewer
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
