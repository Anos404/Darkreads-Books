/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { TimelineItem, Book } from '../types';
import BookCover from './BookCover';
import { Calendar, Compass, ArrowRight } from 'lucide-react';

interface HistoricalViewProps {
  timeline: TimelineItem[];
  books: Book[];
  onOpenBookId: (id: string) => void;
}

export default function HistoricalView({ timeline, books, onOpenBookId }: HistoricalViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* ─── Header Intro ────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-label">Temporal Context</span>
        <h1 className="text-3xl sm:text-5xl font-black mb-4">Historical Context</h1>
        <div className="section-rule mx-auto" />
        <p className="font-serif text-lg text-[var(--muted-text,#8a8680)] leading-relaxed italic">
          Explore how the seismic shocks of the 20th and 21st centuries permanently dissolved our standard moral framework, acting as direct catalysts for dark literature.
        </p>
      </section>

      {/* ─── Vertical Timeline Grid ────────────────────────────── */}
      <section className="relative border-l border-neutral-800/80 ml-4 md:ml-10 pl-6 md:pl-10 space-y-16 pb-16">
        {timeline.map((era, idx) => {
          // Resolve actual book items associated with this timeline node
          const eraBooks = era.books.map(id => books.find(b => b.id === id)).filter(Boolean) as Book[];

          return (
            <motion.div
              key={era.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="relative"
            >
              {/* Central connecting circle node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full border border-[var(--blood-bright)] bg-[var(--ink)] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--blood-bright)]" />
              </div>

              {/* Header Box */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-[11px] font-bold text-[var(--blood-bright,#c41e1e)] bg-red-950/20 border border-red-900/40 rounded px-2.5 py-0.5 uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {era.years}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {era.genres.map(g => (
                      <span key={g} className="text-[9px] font-sans text-neutral-500 uppercase tracking-widest border border-neutral-850 px-2 py-0.5 rounded">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="font-display text-lg sm:text-xl font-black text-white uppercase tracking-wider">{era.title}</h2>
              </div>

              {/* Description body */}
              <p className="font-serif text-base text-[var(--muted-text,#8a8680)] leading-relaxed max-w-4xl mb-6">
                {era.description}
              </p>

              {/* Associated Cards Node list */}
              {eraBooks.length > 0 && (
                <div className="pt-2">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-neutral-600 font-semibold block mb-4">Books catalyzed by this era:</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eraBooks.map(book => {
                      const avgScore = ((book.darkness.psych + book.darkness.nihil + book.darkness.violence + book.darkness.moral) / 4).toFixed(1);
                      
                      return (
                        <div
                          key={book.id}
                          onClick={() => onOpenBookId(book.id)}
                          className="p-4 bg-[var(--surface,#18181c)] hover:bg-[#1f1f25] border border-neutral-800/40 hover:border-neutral-700/60 rounded-md cursor-pointer transition-all duration-200 flex gap-4 group"
                        >
                          {/* Mini tiny Cover index */}
                          <div className="flex-shrink-0">
                            <BookCover title={book.title} author={book.author} coverStyle={book.coverStyle} size="sm" />
                          </div>

                          {/* Data sidebar info */}
                          <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                              <h4 className="font-display text-xs font-bold text-white group-hover:text-[var(--blood-bright)] leading-snug transition-colors">
                                {book.title}
                              </h4>
                              <span className="font-sans text-[9px] text-[#8a8680] uppercase tracking-wider">{book.author}</span>
                            </div>

                            <div className="flex justify-between items-end">
                              <div className="text-[9px] font-sans text-neutral-600 uppercase">
                                Ratio: <span className="font-bold text-[var(--blood-bright)]">{avgScore} ☠</span>
                              </div>
                              <span className="text-[10px] font-sans tracking-wide uppercase text-neutral-500 hover:text-white flex items-center gap-0.5">
                                Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                              </span>
                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </div>

                </div>
              )}

            </motion.div>
          );
        })}
      </section>

      {/* ─── Timeline Footer Summary ───────────────────────────── */}
      <section className="bg-[var(--surface,#18181c)] border border-neutral-850 p-6 sm:p-8 rounded-lg max-w-4xl mx-auto text-center mt-12">
        <Compass className="w-8 h-8 text-[var(--blood-bright)] mx-auto mb-3" />
        <h3 className="font-display text-xs font-black uppercase text-white tracking-widest mb-1.5">How History Shapes Dark Literature</h3>
        <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] max-w-2xl mx-auto leading-relaxed">
          Trauma is the supreme chemical catalyst. Literature processed these world-altering moments not to escape them, but to detail the exact behavioral rules that emerge when the comforts of progressive history completely fail.
        </p>
      </section>

    </div>
  );
}
