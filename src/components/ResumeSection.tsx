import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Printer, Copy, Check, Eye, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export default function ResumeSection({ onOpenResumeModal }: ResumeSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const text = `GAYATHREE SINGAREDDY
Technology Intern Candidate | B.Tech CSE (Artificial Intelligence) | 2027 Graduate
Visakhapatnam, India | 9553810275 | singareddygayathree@gmail.com
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
GitHub: ${PORTFOLIO_DATA.personal.github}

PROFESSIONAL SUMMARY:
${PORTFOLIO_DATA.personal.summary}

SKILLS:
${PORTFOLIO_DATA.skills.programmingLanguages.join(', ')} | ${PORTFOLIO_DATA.skills.emergingTechnologies.join(', ')} | ${PORTFOLIO_DATA.skills.applicationDevelopment.join(', ')}

CERTIFICATIONS:
- Software Engineering — NPTEL
- Google AI Essentials — Google
- Introduction to Generative AI — Google Cloud Skills Boost

EDUCATION:
- B.Tech CSE (AI), Vignan's Institute of Engineering for Women (CGPA: 7.6 / 10, 2023-2027)
- Intermediate, Sri Chaitanya Junior College (86%, 2021-2023)
- SSC, Bhashyam Public School (100%, 2021)
`;
    navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/60 bg-slate-50 dark:bg-[#07090e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-md dark:shadow-2xl"
        >
          {/* Subtle animated glow backdrop */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-20 -top-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Recruiter value summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Recruiter Portal
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
                Everything you need to evaluate my candidacy in one place.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Review my verified academic history, two technical internships, and three working
                engineering applications. You can inspect the full formatted document in-browser,
                print to PDF, or copy clean text.
              </p>

              {/* Quick Qualification matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Education:</span>
                  <strong className="text-slate-900 dark:text-white">B.Tech CSE (AI) · CGPA 7.6</strong>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px]">Vignan's Institute of Engineering for Women</div>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Internship Experience:</span>
                  <strong className="text-slate-900 dark:text-white">2 Industry Internships</strong>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px]">JJH Global &amp; Data Valley India</div>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Key Projects:</span>
                  <strong className="text-slate-900 dark:text-white">RAG Assistant, Dopply, STYLE</strong>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px]">Python, Generative AI, Web Tech</div>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Certifications:</span>
                  <strong className="text-slate-900 dark:text-white">NPTEL Software Engineering</strong>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px]">Google AI Essentials &amp; GenAI</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenResumeModal}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold text-white dark:text-slate-950 bg-sky-600 dark:bg-sky-400 hover:bg-sky-500 dark:hover:bg-sky-300 transition-colors rounded-lg flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>Open Full Document Viewer</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.print()}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Printer className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>Print / Save PDF</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopyText}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </motion.button>
              </div>
            </div>

            {/* Right Column: Visual document preview card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                onClick={onOpenResumeModal}
                className="w-full max-w-sm p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-all cursor-pointer group shadow-lg"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Resume Overview
                    </span>
                  </div>
                  <span className="text-[11px] text-sky-600 dark:text-sky-400 group-hover:underline flex items-center gap-1">
                    Expand View <ExternalLink className="w-3 h-3" />
                  </span>
                </div>

                <div className="space-y-3 font-mono text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed select-none">
                  <div className="text-slate-900 dark:text-white font-semibold text-xs font-sans">
                    {PORTFOLIO_DATA.personal.name}
                  </div>
                  <div className="text-sky-600 dark:text-sky-400 text-[10px]">
                    B.Tech CSE (AI) · Class of 2027
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-900 pt-2 space-y-1">
                    <div className="text-slate-800 dark:text-slate-300 font-sans font-medium">Core Skills:</div>
                    <div>Python · Java · JavaScript · SQL · RAG · GenAI</div>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-900 pt-2 space-y-1">
                    <div className="text-slate-800 dark:text-slate-300 font-sans font-medium">Internships:</div>
                    <div>JJH Global Solutions (2026)</div>
                    <div>Data Valley India (2025)</div>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-900 pt-2 space-y-1">
                    <div className="text-slate-800 dark:text-slate-300 font-sans font-medium">Certifications:</div>
                    <div>NPTEL Software Engineering · Google AI</div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-center text-xs text-sky-600 dark:text-sky-400 font-sans font-medium">
                  Click to inspect full formatted resume →
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
