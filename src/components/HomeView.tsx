/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Skull, Brain, Infinity as InfinityIcon, Zap, Scale, Feather, ChevronRight } from 'lucide-react';
import { Book } from '../types';
import BookCover from './BookCover';

interface HomeViewProps {
  featuredBooks: Book[];
  onOpenBook: (id: string) => void;
  setTab: (tab: string) => void;
}

export default function HomeView({ featuredBooks, onOpenBook, setTab }: HomeViewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pb-16"
    >
      {/* ─── Hero Section ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 text-center px-4">
        {/* Parallax background effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-950/40 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15vw] font-black text-neutral-500/5 tracking-wider select-none leading-none">
            DARK
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.span 
            variants={itemVariants} 
            className="inline-block font-sans text-[10px] tracking-[0.3em] font-semibold text-[var(--blood-bright,#c41e1e)] uppercase mb-4"
          >
            Curated Dark Literature Catalog
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="font-display font-black text-4xl sm:text-6xl tracking-tight leading-none text-white mix-blend-difference mb-6"
          >
            Explore the Darkness <br className="hidden sm:inline" /> Within
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="font-serif text-lg sm:text-xl italic text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Books that reveal the harsh truths and complex nature of humanity — from existential dread to systemic societal collapse.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => setTab('books')}
              className="px-6 py-3 bg-[var(--blood,#8b0000)] hover:bg-[var(--blood-bright,#c41e1e)] text-white font-display text-xs tracking-widest uppercase font-bold rounded-sm transition-all shadow-[0_4px_20px_rgba(139,0,0,0.3)] hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              Browse Collection <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => {
                setTab('books');
                // Scroll down to sliders
                setTimeout(() => {
                  document.getElementById('darkness-filter')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-6 py-3 border border-neutral-700 hover:border-[var(--blood-bright,#c41e1e)] text-neutral-300 hover:text-white font-display text-xs tracking-widest uppercase font-bold rounded-sm transition-all hover:bg-neutral-800/10 cursor-pointer flex items-center gap-2"
            >
              Try Darkness Meter <Skull className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>

        {/* Counter Indicators */}
        <motion.div 
          variants={itemVariants}
          className="max-w-4xl mx-auto mt-16 pt-8 border-t border-neutral-800/40 flex justify-around flex-wrap gap-y-6"
        >
          <div className="px-4">
            <span className="font-display text-3xl font-black text-white block">80+</span>
            <span className="font-sans text-[9px] tracking-widest uppercase text-neutral-500">Books Curated</span>
          </div>
          <div className="w-[1px] bg-neutral-800/60 hidden sm:block h-10 align-self-center" />
          <div className="px-4">
            <span className="font-display text-3xl font-black text-white block">5</span>
            <span className="font-sans text-[9px] tracking-widest uppercase text-neutral-500">Major Genres</span>
          </div>
          <div className="w-[1px] bg-neutral-800/60 hidden sm:block h-10 align-self-center" />
          <div className="px-4">
            <span className="font-display text-3xl font-black text-white block">12</span>
            <span className="font-sans text-[9px] tracking-widest uppercase text-neutral-500">Authors Tracked</span>
          </div>
          <div className="w-[1px] bg-neutral-800/60 hidden sm:block h-10 align-self-center" />
          <div className="px-4">
            <span className="font-display text-3xl font-black text-white block">4</span>
            <span className="font-sans text-[9px] tracking-widest uppercase text-neutral-500">Dark Metrics</span>
          </div>
        </motion.div>
      </section>

      {/* ─── Featured Books Row ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div variants={itemVariants} className="mb-12">
          <span className="section-label">Hand-Picked Classics</span>
          <h2 className="text-3xl font-black">Featured Titles</h2>
          <div className="section-rule" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBooks.map((book, index) => {
            const avgDarkness = ((book.darkness.psych + book.darkness.nihil + book.darkness.violence + book.darkness.moral) / 4).toFixed(1);
            
            return (
              <motion.div 
                key={book.id}
                variants={itemVariants}
                className="bg-[var(--surface,#18181c)] rounded-[4px] border border-neutral-800/30 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-neutral-700/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Visual Header */}
                <div className="relative p-6 flex justify-center bg-neutral-950/30 border-b border-neutral-900/60 h-[260px] items-center">
                  <div className="transform group-hover:scale-[1.03] transition-transform duration-300">
                    <BookCover title={book.title} author={book.author} coverStyle={book.coverStyle} size="md" />
                  </div>
                  <div className="absolute top-4 right-4 bg-[var(--blood,#8b0000)] text-white text-[8px] font-sans tracking-widest uppercase px-2.5 py-1 rounded-sm">
                    {index === 0 ? 'Dystopian' : index === 1 ? 'Macabre' : 'Pulitzer'}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-0.5">{book.title}</h3>
                    <p className="font-sans text-[10px] tracking-widest text-[var(--blood-bright,#c41e1e)] uppercase mb-4">{book.author}</p>
                    <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed mb-6">{book.description.substring(0, 140)}...</p>
                  </div>

                  <div>
                    {/* Mini progress bar breakdown */}
                    <div className="bg-neutral-900/50 border border-neutral-800/40 rounded-[3px] p-3 mb-6">
                      <div className="flex justify-between items-center text-[10px] font-sans text-neutral-500 uppercase tracking-widest mb-1.5">
                        <span>Total Darkness Ratio</span>
                        <span className="text-[var(--blood-bright,#c41e1e)] font-bold">{avgDarkness} / 10 ☠</span>
                      </div>
                      <div className="w-full bg-neutral-900 h-1 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-950 to-[var(--blood-bright)]" style={{ width: `${Number(avgDarkness) * 10}%` }} />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => onOpenBook(book.id)}
                        className="flex-1 py-2 bg-neutral-800 hover:bg-neutral-750 text-white font-sans text-[10px] tracking-widest uppercase font-bold rounded-sm border border-neutral-700/50 hover:border-neutral-600 transition-all cursor-pointer flex justify-center items-center gap-1.5"
                      >
                        Read Analysis
                      </button>
                      <a 
                        href={book.goodreads}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-sm text-neutral-400 hover:text-white transition-all text-xs flex items-center justify-center"
                        title="View on Goodreads"
                      >
                        g
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── Philosophy & Genres ────────────────────────────────── */}
      <section className="bg-[var(--paper,#111114)] border-y border-neutral-900/40 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <span className="section-label">Our Philosophy</span>
            <h2 className="text-3xl font-black mb-6">Why Dark Literature?</h2>
            <div className="section-rule" />
            <p className="font-serif text-base text-[var(--muted-text,#8a8680)] leading-relaxed mb-6">
              Dark literature is not about glorifying despair; it is about confronting humanity's most uncomfortable truths with courage. These written artifacts dismantle our shallow, comfortable structures to examine what keeps us human when warmth and society are fully stripped away.
            </p>
            <p className="font-serif text-base text-[var(--muted-text,#8a8680)] leading-relaxed mb-8">
              By exploring existential risk, surveillance, climate collapse, and chemical state authority, we build a deeper, more resilient framework for empathy and self-knowledge.
            </p>
            <div className="border-l-3 border-[var(--blood,#8b0000)] pl-5 italic text-neutral-400 font-serif leading-relaxed">
              "The only way out of the labyrinth of suffering is to carry the fire through the cold."
              <span className="block font-sans text-[9px] tracking-widest uppercase text-[var(--blood-bright,#c41e1e)] font-semibold mt-2.5">— Editorial Core, DarkReads</span>
            </div>
          </motion.div>

          {/* Quick genre portals */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <span className="section-label">Interactive Portals</span>
            <h2 className="text-xl font-bold text-white mb-6">Browse by Subgenre</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div 
                onClick={() => setTab('genres')}
                className="p-5 bg-[var(--surface,#18181c)] hover:bg-[#1d1d22] border border-neutral-800/40 hover:border-neutral-700/60 rounded-md cursor-pointer transition-all duration-200 group flex items-start gap-4"
              >
                <div className="p-2.5 rounded bg-red-950/20 text-red-500 border border-red-900/30 group-hover:border-red-500/50 transition-colors">
                  <Skull className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold uppercase text-white tracking-widest group-hover:text-[var(--blood-bright)] mb-1 flex items-center gap-1">
                    Horror <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="font-serif text-[13px] text-neutral-500">Existential nightmares and unraveling sanity.</p>
                </div>
              </div>

              <div 
                onClick={() => setTab('genres')}
                className="p-5 bg-[var(--surface,#18181c)] hover:bg-[#1d1d22] border border-neutral-800/40 hover:border-neutral-700/60 rounded-md cursor-pointer transition-all duration-200 group flex items-start gap-4"
              >
                <div className="p-2.5 rounded bg-indigo-950/20 text-indigo-500 border border-indigo-900/30 group-hover:border-indigo-500/50 transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold uppercase text-white tracking-widest group-hover:text-[var(--blood-bright)] mb-1 flex items-center gap-1">
                    Sci-Fi & Cyberpunk <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="font-serif text-[13px] text-neutral-500">Corporate grids, cloning, and surveillance states.</p>
                </div>
              </div>

              <div 
                onClick={() => setTab('genres')}
                className="p-5 bg-[var(--surface,#18181c)] hover:bg-[#1d1d22] border border-neutral-800/40 hover:border-neutral-700/60 rounded-md cursor-pointer transition-all duration-200 group flex items-start gap-4"
              >
                <div className="p-2.5 rounded bg-amber-950/20 text-amber-500 border border-amber-900/30 group-hover:border-amber-500/50 transition-colors">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold uppercase text-white tracking-widest group-hover:text-[var(--blood-bright)] mb-1 flex items-center gap-1">
                    Literary Fiction <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="font-serif text-[13px] text-neutral-500">Philosophical treatises and moral ambiguity.</p>
                </div>
              </div>

              <div 
                onClick={() => setTab('genres')}
                className="p-5 bg-[var(--surface,#18181c)] hover:bg-[#1d1d22] border border-neutral-800/40 hover:border-neutral-700/60 rounded-md cursor-pointer transition-all duration-200 group flex items-start gap-4"
              >
                <div className="p-2.5 rounded bg-amber-900/10 text-rose-500 border border-rose-950/30 group-hover:border-rose-500/50 transition-colors">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold uppercase text-white tracking-widest group-hover:text-[var(--blood-bright)] mb-1 flex items-center gap-1">
                    Classic Gothic <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="font-serif text-[13px] text-neutral-500">Solitary houses and obsessive first-person counts.</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── Darkness Metric Explainer ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span variants={itemVariants} className="section-label">Dimensional Audit</motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl font-black">The Darkness Meter™</motion.h2>
          <div className="section-rule mx-auto" />
          <motion.p variants={itemVariants} className="font-serif text-neutral-400">
            We quantify darkness across four separate literary axes. Leverage our specialized index on the Books tab to filter exact thresholds of tolerance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <motion.div variants={itemVariants} className="bg-[var(--surface,#18181c)] border border-neutral-800/30 p-6 rounded-md hover:border-neutral-700/50 transition-all text-center">
            <div className="mx-auto w-12 h-12 bg-red-950/20 text-red-500 border border-red-900/30 flex items-center justify-center rounded-md mb-4">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xs uppercase font-bold text-white tracking-wider mb-2">Psychological Horror</h3>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed">
              Mental instability, unreliable narrators, panic, and the slow, internal disintegration of the self.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[var(--surface,#18181c)] border border-neutral-800/30 p-6 rounded-md hover:border-neutral-700/50 transition-all text-center">
            <div className="mx-auto w-12 h-12 bg-red-950/20 text-red-500 border border-red-900/30 flex items-center justify-center rounded-md mb-4">
              <InfinityIcon className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xs uppercase font-bold text-white tracking-wider mb-2">Nihilism</h3>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed">
              Complete existential meaninglessness, spiritual vacuum, cosmic indifference, and the total absence of hope.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[var(--surface,#18181c)] border border-neutral-800/30 p-6 rounded-md hover:border-neutral-700/50 transition-all text-center">
            <div className="mx-auto w-12 h-12 bg-red-950/20 text-red-500 border border-red-900/30 flex items-center justify-center rounded-md mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xs uppercase font-bold text-white tracking-wider mb-2">Violence</h3>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed">
              Physical brutality, the horrors of war, visceral depictions of slaughter, and raw, unrestrained aggression.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[var(--surface,#18181c)] border border-neutral-800/30 p-6 rounded-md hover:border-neutral-700/50 transition-all text-center">
            <div className="mx-auto w-12 h-12 bg-red-950/20 text-red-500 border border-red-900/30 flex items-center justify-center rounded-md mb-4">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xs uppercase font-bold text-white tracking-wider mb-2">Moral Ambiguity</h3>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed">
              Grey compromises, complex motivations, absolute lack of traditional heroes, and heavy cost-benefit choices.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ─── Literary Analysis Teaser ──────────────────────────── */}
      <section className="bg-[var(--paper,#111114)] border-t border-neutral-900/40 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[var(--surface,#18181c)] border border-neutral-800/40 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 p-8 bg-neutral-950/35 flex items-center justify-center border-b md:border-b-0 md:border-r border-neutral-900">
            <div className="text-center group cursor-pointer" onClick={() => setTab('analysis')}>
              <div className="transform group-hover:rotate-6 transition-transform duration-300">
                <BookCover title="1984" author="George Orwell" coverStyle={{
                  bgGradient: 'linear-gradient(135deg, #111116 0%, #1a1a24 100%)',
                  textColor: '#ffffff',
                  borderColor: '#c41e1e',
                  accentColor: '#ff4444',
                  patternType: 'stripes'
                }} size="md" />
              </div>
            </div>
          </div>
          <div className="md:col-span-8 p-8 flex flex-col justify-center">
            <span className="font-sans text-[9px] tracking-widest text-[var(--blood-bright,#c41e1e)] font-bold uppercase mb-1">Featured Analysis Dossier</span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white mb-2">The Architecture of Control</h3>
            <p className="font-sans text-[10px] tracking-wider text-neutral-500 uppercase mb-4">Deep analysis of George Orwell's 1984</p>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed mb-6">
              How state surveillance, newspeak, and absolute isolation are manufactured into a physical and psychological cage. Discover how Orwell engineered Oceania as a diagnostic model of power.
            </p>
            <div>
              <button 
                onClick={() => setTab('analysis')}
                className="px-5 py-2.5 bg-[var(--blood,#8b0000)] hover:bg-[var(--blood-bright,#c41e1e)] text-white text-[10px] font-display uppercase tracking-widest font-bold rounded-sm transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                Read Deep Dive <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
