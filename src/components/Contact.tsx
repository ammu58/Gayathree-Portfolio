import { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }
    setErrorMsg('');

    // Pre-compose direct mailto so recruiter's native email client opens with the exact message
    const subject = encodeURIComponent(
      formData.subject || `Opportunity Discussion / Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Gayathree,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/60 bg-slate-100/50 dark:bg-[#080b11] transition-colors duration-300">
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
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Open to technology internships and engineering conversations.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Whether you represent a recruiting team at Accenture, an emerging AI startup, or an
            established enterprise, feel free to reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Contact Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-start justify-between gap-4 shadow-sm"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  <Mail className="w-4 h-4" />
                  <span>Direct Email</span>
                </div>
                <div className="text-base font-semibold text-slate-900 dark:text-white break-all">
                  {PORTFOLIO_DATA.personal.email}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Preferred for recruiter inquiries and interview scheduling
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer shrink-0"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-start justify-between gap-4 shadow-sm"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  <span>Phone Number</span>
                </div>
                <div className="text-base font-semibold text-slate-900 dark:text-white">
                  {PORTFOLIO_DATA.personal.phone}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Available for phone calls &amp; WhatsApp communication
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer shrink-0"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Location & Social Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Base Location</span>
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-300">
                {PORTFOLIO_DATA.personal.location}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-6 text-sm">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Github className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Recruiter Message Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span>Send a Message to Gayathree</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the quick form below. It prepares an addressed message and prompts your email
                client directly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Thank You for Connecting!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your message was prepared. You can also write directly to{' '}
                    <strong className="text-slate-900 dark:text-white">{PORTFOLIO_DATA.personal.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors"
                        placeholder="e.g. Recruiters / Team Lead"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Subject / Role Opportunity</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors"
                      placeholder="e.g. Accenture Technology & Consulting Internship Inquiry"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors resize-none"
                      placeholder="Tell me about the opportunity, team, or project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-3 text-xs sm:text-sm font-semibold text-white dark:text-slate-950 bg-sky-600 dark:bg-sky-400 hover:bg-sky-500 dark:hover:bg-sky-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message Directly</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
