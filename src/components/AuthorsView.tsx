/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Feather, BookOpen, Quote, ShieldAlert, Scroll, HelpCircle, ArrowRight, BarChart } from 'lucide-react';
import { Author } from '../types';

interface AuthorsViewProps {
  authors: Author[];
  onOpenBookId: (id: string) => void;
  setTab: (tab: string) => void;
}

export default function AuthorsView({ authors, onOpenBookId, setTab }: AuthorsViewProps) {
  // Local state to manage which author is actively selected/profileed
  const [selectedAuthorId, setSelectedAuthorId] = useState('mccarthy');

  const selectedAuthor = authors.find(a => a.id === selectedAuthorId) || authors[0];

  const eras = [
    {
      title: 'Classic Masters',
      desc: 'Foundational 19th-century voices analyzing guilt, spiritual decay, and psychological gothic terror.',
      authors: ['dostoevsky', 'poe'],
      icon: <Scroll className="w-5 h-5 text-red-500" />
    },
    {
      title: 'Modern Visionaries',
      desc: 'Mid-20th-century minds reflecting the trauma of world wars, surveillance, and bureaucratic cages.',
      authors: ['orwell', 'kafka'],
      icon: <ShieldAlert className="w-5 h-5 text-indigo-500" />
    },
    {
      title: 'Contemporary Voices',
      desc: 'Post-modern writers depicting survival, moral ambiguity, and structural collapse.',
      authors: ['mccarthy'],
      icon: <Feather className="w-5 h-5 text-amber-500" />
    }
  ];

  // Helper code to map essential work titles to book IDs for catalog modal click-links
  const mapWorkToId = (workTitle: string): string | null => {
    const titleLower = workTitle.toLowerCase();
    if (titleLower.includes('blood meridian')) return 'bloodmeridian';
    if (titleLower.includes('the road')) return 'theroad';
    if (titleLower.includes('no country')) return 'nocountry';
    if (titleLower.includes('1984')) return 'orwell1984';
    if (titleLower.includes('metamorphosis')) return 'metamorphosis';
    if (titleLower.includes('crime and punishment')) return 'crime';
    if (titleLower.includes('silence of the lambs')) return 'silencelambs';
    return null;
  };

  const handleWorkClick = (work: string) => {
    const bookId = mapWorkToId(work);
    if (bookId) {
      onOpenBookId(bookId);
    } else {
      // Transition to books catalog screen instead
      setTab('books');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* ─── Header Intro ────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-label">Masters of the Craft</span>
        <h1 className="text-3xl sm:text-5xl font-black mb-4">Author Spotlight</h1>
        <div className="section-rule mx-auto" />
        <p className="font-serif text-lg text-[var(--muted-text,#8a8680)] leading-relaxed italic">
          Meet the compromising, clear-eyed authors who dared to venture deep into the darkest corners of human nature and society's control structures.
        </p>
      </section>

      {/* ─── Active Profile Spotlight Stage ────────────────────── */}
      <section className="mb-20">
        <div className="bg-[var(--surface,#18181c)] border border-neutral-800/35 rounded-lg overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 relative">
          
          {/* Subtle background glow of active cover */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] transition-all" style={{ background: selectedAuthor.coverStyle.bgGradient }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Cover Simulation Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div 
                className="w-full h-80 rounded-[4px] border overflow-hidden p-6 relative flex flex-col justify-end shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                style={{ 
                  background: selectedAuthor.coverStyle.bgGradient,
                  borderColor: selectedAuthor.coverStyle.borderColor
                }}
              >
                {/* Book lighting Spine spine */}
                <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-white/10 to-transparent z-10" />
                <div className="absolute top-4 right-4 text-[9px] font-sans text-neutral-500 tracking-widest uppercase">Profile Log</div>
                
                <div className="relative z-10">
                  <div className="h-[2px] w-8 mb-4" style={{ backgroundColor: selectedAuthor.coverStyle.accentColor }} />
                  <h3 className="font-display text-2xl font-black mb-1 select-none" style={{ color: selectedAuthor.coverStyle.textColor }}>
                    {selectedAuthor.name}
                  </h3>
                  <p className="font-sans text-[10px] tracking-widest uppercase opacity-85" style={{ color: selectedAuthor.coverStyle.textColor }}>
                    {selectedAuthor.years}
                  </p>
                </div>
              </div>

              {/* Wikipedia Link out */}
              <a 
                href={selectedAuthor.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text--xs font-sans text-[10px] uppercase font-bold tracking-widest text-neutral-500 hover:text-[var(--blood-bright)] flex items-center gap-1 transition-colors"
              >
                Full Wiki Profile ↗
              </a>
            </div>

            {/* Right Information Section */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="font-sans text-[10px] tracking-widest text-[var(--blood-bright,#c41e1e)] font-bold uppercase mb-1">
                  Active Spotlight Node
                </span>
                <h2 className="font-display text-3xl font-black text-white">{selectedAuthor.name}</h2>
                <p className="font-serif italic text-neutral-400 mt-1">"{selectedAuthor.role}"</p>
              </div>

              <p className="font-serif text-base text-[var(--muted-text,#8a8680)] leading-relaxed">
                {selectedAuthor.bio}
              </p>

              {/* Lists of Style and Themes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-900/60">
                
                {/* Method / Style */}
                <div className="space-y-3">
                  <h4 className="font-sans text-[10px] tracking-widest uppercase text-neutral-400 font-semibold border-b border-neutral-900/60 pb-1 flex items-center gap-1.5">
                    <Feather className="w-3.5 h-3.5 text-[var(--blood-bright)]" />
                    Prose Style & Method
                  </h4>
                  <ul className="space-y-1.5 font-serif text-sm text-neutral-500">
                    {selectedAuthor.style.map(s => (
                      <li key={s} className="flex items-start gap-1.5">
                        <span className="text-[var(--blood-bright)] mt-0.5">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Themes */}
                <div className="space-y-3">
                  <h4 className="font-sans text-[10px] tracking-widest uppercase text-neutral-400 font-semibold border-b border-neutral-900/60 pb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[var(--blood-bright)]" />
                    Major Conceptual Themes
                  </h4>
                  <ul className="space-y-1.5 font-serif text-sm text-neutral-500">
                    {selectedAuthor.themes.map(t => (
                      <li key={t} className="flex items-start gap-1.5">
                        <span className="text-[var(--blood-bright)] mt-0.5">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Essential linked catalog works */}
              <div className="pt-6 border-t border-neutral-900/60 space-y-3">
                <span className="font-sans text-[10px] tracking-widest uppercase text-neutral-400 font-semibold block">Essential Indexed Works (Click to open summary)</span>
                <div className="flex flex-wrap gap-2">
                  {selectedAuthor.essentialWorks.map(w => (
                    <button
                      key={w}
                      onClick={() => handleWorkClick(w)}
                      className="px-3 py-2 bg-neutral-900 border border-neutral-805 text-neutral-300 hover:text-white hover:border-[var(--blood-bright)] rounded-sm font-sans text-[10px] tracking-wider uppercase font-semibold transition-all duration-200 cursor-pointer"
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quotation block */}
              <div className="bg-neutral-950/30 rounded border border-neutral-900/40 p-5 mt-6 flex gap-4">
                <Quote className="w-8 h-8 text-[var(--blood-bright)] flex-shrink-0" />
                <div>
                  <p className="font-serif italic text-sm text-neutral-300 leading-relaxed">
                    "{selectedAuthor.quote}"
                  </p>
                  <span className="font-sans text-[9px] tracking-widest uppercase text-neutral-600 font-semibold block mt-1.5">
                    — {selectedAuthor.name}, {selectedAuthor.quoteSource}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─── Profile Selection Catalog ─────────────────────────── */}
      <section className="mb-20">
        <h2 className="font-display text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-1.5">
          <BookOpen className="w-5 h-5 text-[var(--blood-bright)]" />
          Browse Profiles by Period
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {eras.map((era, eidx) => (
            <div key={era.title} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-neutral-900/60 pb-2">
                {era.icon}
                <h3 className="font-display text-xs uppercase font-bold text-white tracking-widest">{era.title}</h3>
              </div>
              <p className="font-serif text-sm text-neutral-600 leading-relaxed mb-4">{era.desc}</p>
              
              <div className="space-y-3">
                {era.authors.map(authorId => {
                  const authorObj = authors.find(a => a.id === authorId);
                  if (!authorObj) return null;
                  
                  return (
                    <div
                      key={authorId}
                      onClick={() => setSelectedAuthorId(authorId)}
                      className={`p-4 rounded border transition-all duration-200 cursor-pointer flex justify-between items-center group ${
                        selectedAuthorId === authorId
                          ? 'bg-[var(--surface-hover,#1f1f25)] border-[var(--blood-bright,#c41e1e)] shadow-[0_4px_15px_rgba(139,0,0,0.1)]'
                          : 'bg-[var(--surface,#18181c)] border-neutral-800/40 hover:border-neutral-700/60 hover:bg-[var(--surface-hover)]'
                      }`}
                    >
                      <div>
                        <h4 className="font-display text-xs uppercase font-bold text-white tracking-wider group-hover:text-[var(--blood-bright)] transition-colors">{authorObj.name}</h4>
                        <span className="font-sans text-[10px] text-neutral-500">{authorObj.years} · {authorObj.role.split(' ')[2] || 'Author'}</span>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-0.5 group-hover:text-[var(--blood-bright)] transition-all duration-200 ${
                        selectedAuthorId === authorId ? 'translate-x-0 text-[var(--blood-bright)]' : ''
                      }`} />
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ─── Procedural Stat Displays ─────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-900/60 pt-16">
        
        {/* Progress statistics panel */}
        <div className="lg:col-span-8 bg-[var(--surface,#18181c)] border border-neutral-800 p-6 rounded-md">
          <div className="flex items-center gap-1.5 mb-6">
            <BarChart className="w-5 h-5 text-[var(--blood-bright)]" />
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-white">Theme Intensity & Distribution Ratio</h3>
          </div>

          <div className="space-y-5">
            {/* bar 1 */}
            <div>
              <div className="flex justify-between items-center text-[10px] font-sans text-neutral-400 uppercase tracking-widest mb-1.5">
                <span>The Void of Existential Despair</span>
                <span className="font-bold">85% score</span>
              </div>
              <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-950 to-[var(--blood-bright)]" style={{ width: '85%' }} />
              </div>
            </div>

            {/* bar 2 */}
            <div>
              <div className="flex justify-between items-center text-[10px] font-sans text-neutral-400 uppercase tracking-widest mb-1.5">
                <span>Totalitarian & Surveillance Paranoia</span>
                <span className="font-bold">70% score</span>
              </div>
              <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-950 to-[var(--blood-bright)]" style={{ width: '70%' }} />
              </div>
            </div>

            {/* bar 3 */}
            <div>
              <div className="flex justify-between items-center text-[10px] font-sans text-neutral-400 uppercase tracking-widest mb-1.5">
                <span>Moral Ambiguity & Ethical Grey Scales</span>
                <span className="font-bold">65% score</span>
              </div>
              <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-950 to-[var(--blood-bright)]" style={{ width: '65%' }} />
              </div>
            </div>

            {/* bar 4 */}
            <div>
              <div className="flex justify-between items-center text-[10px] font-sans text-neutral-400 uppercase tracking-widest mb-1.5">
                <span>Soot & Death Symbolisms</span>
                <span className="font-bold">60% score</span>
              </div>
              <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-950 to-[var(--blood-bright)]" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick sidebar themes list */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-5 bg-neutral-950/20 border border-neutral-900/60 rounded-md">
            <h4 className="font-display text-[10px] tracking-widest text-[#fff] uppercase font-bold border-b border-neutral-900/60 pb-2 mb-4">Core Focus Periods</h4>
            <div className="space-y-2 font-serif text-sm">
              <div className="p-3 bg-neutral-950/40 rounded border border-neutral-900">
                <span className="font-sans text-[9px] text-[var(--blood-bright)] block mb-1">Post-World War II</span>
                <p className="text-neutral-500 leading-snug">The defining pivot when global societies recognized the void of high-grade industrial destruction.</p>
              </div>
              <div className="p-3 bg-neutral-950/40 rounded border border-neutral-900">
                <span className="font-sans text-[9px] text-[var(--blood-bright)] block mb-1">Late Transgressive</span>
                <p className="text-neutral-500 leading-snug">Searing satires of Western consumerist vanity, stripping down yuppie status into blood calculations.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
