import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // State for interactive playground demo inside the modal
  const [ragQuery, setRagQuery] = useState('What are the key requirements for RAG document chunking?');
  const [ragSearching, setRagSearching] = useState(false);
  const [ragResult, setRagResult] = useState<string | null>(null);

  // State for Dopply TryOn demo
  const [selectedGarment, setSelectedGarment] = useState<'blazer' | 'dress' | 'jacket'>('blazer');
  const [isProcessingFit, setIsProcessingFit] = useState(false);

  // State for STYLE E-commerce demo
  const [cartItemsCount, setCartItemsCount] = useState(2);
  const [userAuthStatus, setUserAuthStatus] = useState<'Authenticated' | 'Guest'>('Authenticated');

  const handleSimulateRag = () => {
    setRagSearching(true);
    setRagResult(null);
    setTimeout(() => {
      setRagSearching(false);
      setRagResult(
        'Retrieved Context [Source 1, Chunk 4]: "Effective chunking requires 256–512 token spans with a 10–20% sliding window overlap to maintain syntactic continuity across boundaries. Cosine similarity scoring ensures only chunks exceeding 0.82 relevance threshold are injected into the context window."'
      );
    }, 700);
  };

  const handleSelectGarment = (g: 'blazer' | 'dress' | 'jacket') => {
    setIsProcessingFit(true);
    setSelectedGarment(g);
    setTimeout(() => setIsProcessingFit(false), 500);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' as const }}
            className="relative w-full max-w-4xl bg-white dark:bg-[#0b0f17] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-800 dark:text-slate-300"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-[#0d121c]">
              <div>
                <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  {project.category}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* Main Visual Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto max-h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quick Meta Strip */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800/80 pb-5">
                <span className="font-semibold text-slate-900 dark:text-white">Technologies:</span>
                {project.technologies.map((t, idx) => (
                  <span key={t}>
                    <span className="text-slate-700 dark:text-slate-300">{t}</span>
                    {idx < project.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-600 ml-3">·</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Section: Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 space-y-2">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                    The Problem
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 space-y-2">
                  <h3 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                    My Direct Contribution
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.myContribution}
                  </p>
                </div>
              </div>

              {/* Section: Architecture Flow */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>System Architecture &amp; Data Pipeline</span>
                </h3>
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm text-sky-700 dark:text-sky-300/90 leading-relaxed overflow-x-auto">
                  {project.architectureOverview}
                </div>
              </div>

              {/* Section: Key Features */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Implemented Engineering Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-lg border border-slate-200 dark:border-slate-800/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Challenges and Engineering Learnings */}
              <div className="p-5 rounded-xl bg-amber-50/50 dark:bg-slate-900/40 border border-amber-200 dark:border-slate-800/80 space-y-2">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Technical Challenge &amp; Resolution</span>
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.challengesAndLearnings}
                </p>
              </div>

              {/* Interactive Live Simulation / Functional Demo Sandbox */}
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-sky-400/40 dark:border-sky-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>Interactive Technical Sandbox</span>
                  </div>
                  <span className="text-[11px] text-sky-600 dark:text-sky-400 font-medium">Live Client-Side Simulation</span>
                </div>

                {/* RAG Demo Sandbox */}
                {project.demoType === 'rag' && (
                  <div className="space-y-3 text-xs sm:text-sm">
                    <p className="text-slate-600 dark:text-slate-400">
                      Simulate document retrieval and verifiable citation extraction against the knowledge base:
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={ragQuery}
                        onChange={(e) => setRagQuery(e.target.value)}
                        className="flex-1 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                        placeholder="Enter query to test retrieval..."
                      />
                      <button
                        onClick={handleSimulateRag}
                        disabled={ragSearching}
                        className="px-4 py-2 bg-sky-600 dark:bg-sky-500 hover:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-semibold rounded-lg transition-colors cursor-pointer shrink-0 disabled:opacity-50"
                      >
                        {ragSearching ? 'Retrieving...' : 'Run Query'}
                      </button>
                    </div>

                    {ragResult && (
                      <div className="mt-3 p-3.5 bg-emerald-50 dark:bg-slate-950 border border-emerald-300 dark:border-emerald-500/30 rounded-lg text-emerald-800 dark:text-emerald-300 font-mono text-xs leading-relaxed">
                        {ragResult}
                      </div>
                    )}
                  </div>
                )}

                {/* Dopply TryOn Demo Sandbox */}
                {project.demoType === 'tryon' && (
                  <div className="space-y-3 text-xs sm:text-sm">
                    <p className="text-slate-600 dark:text-slate-400">
                      Select a digital garment to preview neural garment alignment onto the silhouette:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(['blazer', 'dress', 'jacket'] as const).map((garment) => (
                        <button
                          key={garment}
                          onClick={() => handleSelectGarment(garment)}
                          className={`px-3.5 py-1.5 rounded-lg border text-xs font-medium capitalize transition-colors cursor-pointer ${
                            selectedGarment === garment
                              ? 'bg-sky-600 dark:bg-sky-500 text-white dark:text-slate-950 border-sky-500 font-semibold'
                              : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-400'
                          }`}
                        >
                          {garment === 'blazer' && 'Navy Tailored Blazer'}
                          {garment === 'dress' && 'Blossom Midi Dress'}
                          {garment === 'jacket' && 'Leather Moto Jacket'}
                        </button>
                      ))}
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white capitalize">
                          Active Silhouette Fit: {selectedGarment}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {isProcessingFit
                            ? 'Aligning keypoints & warping textures...'
                            : 'Neural warp complete · Resolution 1080p · 0.4s compute'}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Fit Confidence: 98.4%</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STYLE E-commerce Sandbox */}
                {project.demoType === 'ecommerce' && (
                  <div className="space-y-3 text-xs sm:text-sm">
                    <p className="text-slate-600 dark:text-slate-400">
                      Verify responsive checkout pipeline and state management:
                    </p>
                    <div className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="text-slate-900 dark:text-white font-semibold">Shopping Bag State</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          User Status: <span className="text-sky-600 dark:text-sky-400 font-medium">{userAuthStatus}</span> · Items in Bag: <span className="text-slate-900 dark:text-white font-bold">{cartItemsCount}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setCartItemsCount((prev) => prev + 1)}
                          className="px-3 py-1 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded text-xs cursor-pointer"
                        >
                          + Add Item
                        </button>
                        <button
                          onClick={() => setCartItemsCount((prev) => Math.max(0, prev - 1))}
                          className="px-3 py-1 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded text-xs cursor-pointer"
                        >
                          - Remove Item
                        </button>
                        <button
                          onClick={() =>
                            setUserAuthStatus((prev) =>
                              prev === 'Authenticated' ? 'Guest' : 'Authenticated'
                            )
                          }
                          className="px-3 py-1 bg-sky-600 dark:bg-sky-500 hover:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 rounded text-xs font-semibold cursor-pointer"
                        >
                          Toggle Auth
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d121c] flex flex-wrap items-center justify-between gap-4 shrink-0">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Source code repository:{' '}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1 font-mono"
                >
                  github.com/ammu58
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-white bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white dark:text-slate-950 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
