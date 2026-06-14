/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, User, Clock, ArrowLeft, ArrowRight, Paintbrush, ShieldAlert, Glasses } from 'lucide-react';
import { AnalysisItem } from '../types';

interface AnalysisViewProps {
  analyses: AnalysisItem[];
  setTab: (tab: string) => void;
}

export default function AnalysisView({ analyses, setTab }: AnalysisViewProps) {
  // State to manage actively viewed essay
  const [activeAnalysisId, setActiveAnalysisId] = useState<string>('orwell-architecture');

  const activeEssay = analyses.find(a => a.id === activeAnalysisId) || analyses[0];

  // Static list of secondary mini-essay digests mentioned in the original html
  const essayReviewsList = [
    {
      id: 'orwell-architecture',
      title: "The Architecture of Control: Surveillance in Orwell's 1984",
      date: 'June 10, 2026',
      author: 'Dr. Sarah Thompson',
      readTime: '15 min read',
      tag: 'Orwell Studies'
    },
    {
      id: 'mccarthy-wasteland',
      title: "The Wasteland Within: Symbolism in Blood Meridian",
      date: 'May 18, 2026',
      author: 'Prof. Marcus Vance',
      readTime: '12 min read',
      tag: 'McCarthy studies'
    },
    {
      id: 'newspeak-prison',
      title: "Language as Prison: Newspeak in 1984",
      date: 'March 24, 2026',
      author: 'Dr. Evelyn Carter',
      readTime: '8 min read',
      tag: 'Dystopian Linguistics'
    },
    {
      id: 'father-son-road',
      title: "The Road to Nowhere: Father-Son Dynamics",
      date: 'Feb 12, 2026',
      author: 'James Vance, MA',
      readTime: '10 min read',
      tag: 'Post-Apocalypse'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* ─── Header Intro ────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-label">Academic Portals</span>
        <h1 className="text-3xl sm:text-5xl font-black mb-4">Literary Analysis</h1>
        <div className="section-rule mx-auto" />
        <p className="font-serif text-lg text-[var(--muted-text,#8a8680)] leading-relaxed italic">
          Deep, uncompromised explorations into the core mechanics, symbols, and societal diagnostics that elevate dark spec fiction into predictive warning systems.
        </p>
      </section>

      {/* ─── Interactive Reader Dashboard ─────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Side Active Essay Reading Board (Takes up 8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEssay.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--surface,#18181c)] border border-neutral-800/35 rounded-lg p-6 sm:p-8 lg:p-10 shadow-2xl relative"
            >
              {/* Cover Headers Metadata indicators */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-sans text-neutral-500 uppercase tracking-widest border-b border-neutral-900/60 pb-4 mb-6">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[var(--blood-bright)]" /> {activeEssay.date}</span>
                <span className="hidden sm:inline text-neutral-700">|</span>
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[var(--blood-bright)]" /> {activeEssay.author}</span>
                <span className="hidden sm:inline text-neutral-700">|</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[var(--blood-bright)]" /> {activeEssay.readTime}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                {activeEssay.title}
              </h2>
              <p className="font-serif text-base text-[var(--blood-bright,#c41e1e)] italic mb-8">
                {activeEssay.subtitle}
              </p>

              {/* Body Content with formatted paragraphs and custom styling */}
              <div className="font-serif text-neutral-300 text-base leading-relaxed space-y-6 max-w-none hover:prose-invert">
                {activeEssay.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h4 key={index} className="font-display text-sm uppercase font-bold text-white tracking-widest pt-4 border-b border-neutral-900/40 pb-1.5">
                        {paragraph.replace('### ', '')}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('* ')) {
                    return (
                      <ul key={index} className="list-disc pl-5 text-neutral-400 space-y-1 my-4">
                        {paragraph.split('\n').map((li, lidx) => (
                          <li key={lidx}>{li.replace('* ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  // Standard paragraph with bold parsing helpers
                  const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
                  return (
                    <p 
                      key={index} 
                      className="text-neutral-300"
                      dangerouslySetInnerHTML={{ __html: formattedText }}
                    />
                  );
                })}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side Essay Selection Sidebar Index (Takes up 4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-[var(--surface,#18181c)] border border-neutral-805 p-6 rounded-md shadow-lg">
            <h3 className="font-display text-[10px] tracking-widest text-[#fff] uppercase font-bold border-b border-neutral-900/60 pb-3 mb-4">
              Select Analysis Dossier
            </h3>

            <div className="space-y-3">
              {essayReviewsList.map((item) => {
                const isSelected = activeAnalysisId === item.id;
                
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'orwell-architecture' || item.id === 'mccarthy-wasteland') {
                        setActiveAnalysisId(item.id);
                      } else {
                        // Dummy trigger or message
                        alert(`Dossier "${item.title}" is currently classified under archive restriction. Viewing indices requires clearance.`);
                      }
                    }}
                    className={`p-4 rounded border transition-all duration-200 cursor-pointer text-left group ${
                      isSelected
                        ? 'bg-neutral-950/25 border-[var(--blood-bright,#c41e1e)]'
                        : 'bg-neutral-900/40 border-neutral-800/40 hover:border-neutral-700/60 hover:bg-neutral-900/80'
                    }`}
                  >
                    <span className="font-sans text-[8px] tracking-wider text-[var(--blood-bright)] uppercase font-semibold block mb-1">
                      {item.tag}
                    </span>
                    <h4 className="font-display text-[11px] font-bold text-white tracking-wide leading-tight group-hover:text-[var(--blood-bright)] transition-colors mb-2">
                      {item.title}
                    </h4>
                    <div className="flex justify-between items-center text-[9px] font-sans text-neutral-500">
                      <span>{item.author}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick analysis tools bar from the markup */}
          <div className="bg-[var(--surface,#18181c)] border border-neutral-850 p-6 rounded-md">
            <h4 className="font-display text-[10px] tracking-widest uppercase text-white font-bold border-b border-neutral-900/60 pb-2 mb-4">Analysis Methods</h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-sans text-neutral-400 mb-1">
                  <span>Thematic Decomposition</span>
                  <span>85% Utilized</span>
                </div>
                <div className="w-full bg-neutral-950 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--blood-bright)]" style={{ width: '85%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-sans text-neutral-400 mb-1">
                  <span>Psychological Profiling</span>
                  <span>70% Utilized</span>
                </div>
                <div className="w-full bg-neutral-950 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--blood-bright)]" style={{ width: '70%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-sans text-neutral-400 mb-1">
                  <span>Linguistic Analysis</span>
                  <span>55% Utilized</span>
                </div>
                <div className="w-full bg-neutral-950 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--blood-bright)]" style={{ width: '55%' }} />
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ─── Detailed Writing Techniques Block ─────────────────── */}
      <section className="border-t border-neutral-900/60 pt-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-label">Constructive Studies</span>
          <h2 className="text-2xl font-black">Understanding Dark Techniques</h2>
          <div className="section-rule mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[var(--surface,#18181c)] border border-neutral-800/40 p-6 rounded-md hover:border-neutral-700/60 transition-all space-y-4">
            <div className="flex items-center gap-3 border-b border-neutral-900 pb-3">
              <div className="p-2 bg-neutral-900 border border-neutral-800 text-[var(--blood-bright)] rounded">
                <Paintbrush className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xs uppercase font-extrabold text-white tracking-widest">Atmospheric Mood Crafting</h3>
            </div>
            <p className="font-serif text-sm text-neutral-500 leading-relaxed">
              Dark authors leverage dry environmental elements (cement walls, alkaline dust, rotting foliage) as active narrative pressures. Setting is transformed into a character of indifferent, oppressive authority.
            </p>
            <ul className="space-y-1.5 font-sans text-[10px] text-neutral-600 uppercase tracking-widest pl-1">
              <li>• Dry chromatic palettes (Ash-grey, soot, charcoal)</li>
              <li>• Detailed tactile sensations (Extreme cold, thirst)</li>
              <li>• Repetitive symbols (Dead birds, salt beds, wire)</li>
            </ul>
          </div>

          <div className="bg-[var(--surface,#18181c)] border border-neutral-800/40 p-6 rounded-md hover:border-neutral-700/60 transition-all space-y-4">
            <div className="flex items-center gap-3 border-b border-neutral-900 pb-3">
              <div className="p-2 bg-neutral-900 border border-neutral-800 text-[var(--blood-bright)] rounded">
                <Glasses className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xs uppercase font-extrabold text-white tracking-widest">Character Deconstruction</h3>
            </div>
            <p className="font-serif text-sm text-neutral-500 leading-relaxed">
              We focus on the disintegration of personality. In place of active progression, characters face high-stress moral grey-zones where classic nobility is treated as a fatal operational error.
            </p>
            <ul className="space-y-1.5 font-sans text-[10px] text-neutral-600 uppercase tracking-widest pl-1">
              <li>• Highly unreliable internal monologues</li>
              <li>• Pathological obsessions and sensory distortion</li>
              <li>• Moral equations where survival overrides credit</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
