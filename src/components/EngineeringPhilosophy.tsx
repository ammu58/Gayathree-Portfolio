import { motion } from 'motion/react';
import { BookOpen, Terminal, Sparkles, CheckCircle2, MessageSquareCode, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function EngineeringPhilosophy() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const principles = [
    {
      number: '01',
      title: 'Prompting is Not Architecture',
      content:
        'Large language models are inherently probabilistic. In my RAG and GenAI work, I focus on the deterministic guardrails: semantic chunk overlap, cosine similarity thresholds, and source citation enforcement so outputs are factual and verifiable.',
    },
    {
      number: '02',
      title: 'Testing Over Guesswork',
      content:
        'During my internships at JJH Global and Data Valley India, I learned that early validation scripts save days of downstream debugging. Whether preprocessing tabular data or testing API response schemas, reproducible checks come first.',
    },
    {
      number: '03',
      title: 'Respect the User\'s Time & Viewport',
      content:
        'A good application has zero dead buttons, snappy load times, and intuitive responsive geometry. I design interfaces where state transitions are obvious, layouts never break on mobile, and accessibility is respected by default.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/60 bg-white dark:bg-[#07090e] transition-colors duration-300">
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
            Developer Perspective
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            How I think about code, systems, and engineering craft.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A candid look at my engineering principles, current technical reading, and how I approach
            collaborating inside software teams.
          </p>
        </motion.div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {principles.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm dark:shadow-md"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400">
                  Principle {item.number}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Candid Note for Hiring Managers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-sm dark:shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                <MessageSquareCode className="w-4 h-4" />
                <span>A Personal Note to Recruiters &amp; Mentors</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                "I care about doing the fundamentals right."
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                As a graduating student (Class of 2027), I understand the difference between writing
                experimental hobby scripts and shipping maintainable software. I don't pretend to have
                ten years of industry experience—what I do bring is a strong work ethic, rapid learning
                speed, zero ego when receiving code review feedback, and a genuine eagerness to contribute
                to client-facing deliverables on teams like Accenture Technology &amp; Consulting.
              </p>
            </div>

            {/* Quick Human Details Column */}
            <div className="lg:col-span-4 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-8 pt-6 lg:pt-0 text-xs">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>My Local Time (Visakhapatnam, IST):</span>
                </div>
                <div className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                  {timeStr || '10:30 AM (UTC+5:30)'}
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>Currently Studying &amp; Refining:</span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 space-y-1 font-medium">
                  <div>· Distributed System Fundamentals</div>
                  <div>· Vector Index Tuning (HNSW &amp; IVF-PQ)</div>
                  <div>· Production TypeScript &amp; State Machines</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
