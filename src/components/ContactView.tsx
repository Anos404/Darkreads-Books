/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle, PenTool, Sparkles, Send, Skull } from 'lucide-react';

export default function ContactView() {
  // Form submission state tracking
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const subjects = [
    'Book Recommendation',
    'Author Spotlight Request',
    'Collaboration / Partnership',
    'Error or Correction',
    'General Enquiry'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    // Map id e.g. "contactName" which corresponds to key
    const fieldMap: { [key: string]: string } = {
      contactName: 'name',
      contactEmail: 'email',
      contactSubject: 'subject',
      contactMessage: 'message'
    };
    setFormData(prev => ({ ...prev, [fieldMap[id]]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please supply your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please supply a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please supply a message.');
      return;
    }

    // Success transition
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* ─── Header Intro ────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-label">Connect Nodes</span>
        <h1 className="text-3xl sm:text-5xl font-black mb-4">Contact Us</h1>
        <div className="section-rule mx-auto" />
        <p className="font-serif text-lg text-[var(--muted-text,#8a8680)] leading-relaxed italic">
          Recommendations, factual corrections, academic pitches, and collaboration proposals — we read and archive every incoming file.
        </p>
      </section>

      {/* ─── Columns Grid of Form and Details ──────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Contact Form (Takes up 7 cols) */}
        <div className="lg:col-span-7 bg-[var(--surface,#18181c)] border border-neutral-850 p-6 sm:p-8 rounded-lg shadow-xl relative">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-6">
                  <span className="section-label">Dispatches</span>
                  <h2 className="text-xl font-bold uppercase tracking-wider text-white">Write to DarkReads</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-950/30 border border-red-900 text-red-400 text-xs font-sans uppercase tracking-widest rounded">
                      ⚠ Error: {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label" htmlFor="contactName">Name</label>
                      <input 
                        id="contactName" 
                        type="text" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full form-control"
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="contactEmail">Email</label>
                      <input 
                        id="contactEmail" 
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full form-control"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="contactSubject">Subject</label>
                    <select 
                      id="contactSubject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full form-control p-3 bg-neutral-900 text-neutral-300 focus:outline-none"
                    >
                      <option value="">Select a topic...</option>
                      {subjects.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="contactMessage">Message</label>
                    <textarea 
                      id="contactMessage" 
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us what's on your mind... (essay pitches, catalog revisions)"
                      className="w-full form-control"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-[var(--blood,#8b0000)] hover:bg-[var(--blood-bright,#c41e1e)] text-white text-[11px] font-sans font-bold tracking-widest uppercase rounded-sm cursor-pointer shadow-[0_4px_15px_rgba(139,0,0,0.3)] transition-all flex justify-center items-center gap-2"
                    >
                      Send Message <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-10 bg-neutral-950/20 border border-neutral-900 rounded-[4px] p-6 flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full border border-red-900 bg-red-950/25 flex items-center justify-center text-[var(--blood-bright)] mb-4 animate-bounce">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2">Message Sent</h3>
                <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] max-w-sm leading-relaxed mb-6">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your dispatch has been classified and cataloged. We review incoming transcripts within 48 operational hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white rounded-sm font-sans text-[10px] tracking-wider uppercase font-semibold transition-all cursor-pointer"
                >
                  Write Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Info Cards (Takes up 5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="mb-2">
            <span className="section-label font-bold">Directories</span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-white">Find Our Channels</h2>
          </div>

          <div className="space-y-4">
            {/* card 1 */}
            <div className="p-5 bg-[var(--surface,#18181c)] border border-neutral-850 rounded-md hover:border-neutral-700/60 transition-all flex items-start gap-4">
              <div className="p-2.5 bg-neutral-900 border border-neutral-800 text-[var(--blood-bright)] rounded flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xs font-bold uppercase text-white tracking-widest mb-1">Direct Correspondence</h3>
                <p className="font-serif text-sm text-neutral-500 leading-snug">hello@darkreads.co</p>
              </div>
            </div>

            {/* card 2 */}
            <div className="p-5 bg-[var(--surface,#18181c)] border border-neutral-850 rounded-md hover:border-neutral-700/60 transition-all flex items-start gap-4">
              <div className="p-2.5 bg-neutral-900 border border-neutral-800 text-[var(--blood-bright)] rounded flex-shrink-0">
                <PenTool className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xs font-bold uppercase text-white tracking-widest mb-1">Guest Contributions</h3>
                <p className="font-serif text-sm text-neutral-500 leading-snug">
                  We accept analyses on dystopian mechanics or existential dread. Reach out with an abstract and outline.
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="p-5 bg-[var(--surface,#18181c)] border border-neutral-850 rounded-md hover:border-neutral-700/60 transition-all flex items-start gap-4">
              <div className="p-2.5 bg-neutral-900 border border-neutral-800 text-[var(--blood-bright)] rounded flex-shrink-0">
                <Skull className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xs font-bold uppercase text-white tracking-widest mb-1">Archived Records</h3>
                <p className="font-serif text-sm text-neutral-500 leading-snug">
                  Corrections on bibliographic metrics, publication dates, and author spotlight data have priority.
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
