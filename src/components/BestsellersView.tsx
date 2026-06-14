/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Crown, Flame, Award, Star, Compass, BarChart, BookOpen, Brain, Globe, MessageSquare } from 'lucide-react';
import { Book } from '../types';
import BookCover from './BookCover';

interface BestsellersViewProps {
  books: Book[];
  onOpenBook: (id: string) => void;
  setTab: (tab: string) => void;
}

export default function BestsellersView({ books, onOpenBook, setTab }: BestsellersViewProps) {
  // Select a subset of classics to showcase as global bestsellers
  const bestsellersList = [
    {
      bookId: 'bravenew',
      badge: '★ #1 Bestseller',
      badgeClass: 'bg-emerald-950 text-emerald-400 border border-emerald-900',
      tagIcon: <Crown className="w-3.5 h-3.5 text-emerald-400" />
    },
    {
      bookId: 'heartdark',
      badge: '🔥 Trending Now',
      badgeClass: 'bg-amber-950 text-amber-400 border border-amber-900',
      tagIcon: <Flame className="w-3.5 h-3.5 text-amber-400" />
    },
    {
      bookId: 'crime',
      badge: '✦ Psychological Giant',
      badgeClass: 'bg-indigo-950 text-indigo-400 border border-indigo-900',
      tagIcon: <Award className="w-3.5 h-3.5 text-indigo-400" />
    },
    {
      bookId: 'metamorphosis',
      badge: '☠ Existential Classic',
      badgeClass: 'bg-red-950 text-red-400 border border-red-900',
      tagIcon: <BarChart className="w-3.5 h-3.5 text-red-400" />
    }
  ];

  // Resolve books data from the main list
  const resolvedBestsellers = bestsellersList.map(item => {
    const book = books.find(b => b.id === item.bookId);
    return book ? { ...book, ...item } : null;
  }).filter(Boolean) as (Book & typeof bestsellersList[0])[];

  const renderStars = (n: number) => {
    return (
      <div className="flex text-amber-500 gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < n ? 'fill-amber-500' : 'text-neutral-700'}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* ─── Header Intro ────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-label">High-Demand Collection</span>
        <h1 className="text-3xl sm:text-5xl font-black mb-4">Dark Reality Bestsellers</h1>
        <div className="section-rule mx-auto" />
        <p className="font-serif text-lg text-[var(--muted-text,#8a8680)] leading-relaxed italic">
          Discover the most persistent, widely read works of dark literature. These profound works continue to expand their print runs, forcing generations of readers to view reality anew.
        </p>
      </section>

      {/* ─── List Layout of Bestselling Classics ───────────────── */}
      <section className="space-y-8 mb-20">
        {resolvedBestsellers.map((book, idx) => {
          const avgDarkness = ((book.darkness.psych + book.darkness.nihil + book.darkness.violence + book.darkness.moral) / 4).toFixed(1);
          
          return (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-[var(--surface,#18181c)] border border-neutral-800/35 rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-12"
            >
              {/* Cover Column */}
              <div className="md:col-span-4 p-8 bg-neutral-950/25 border-b md:border-b-0 md:border-r border-neutral-900 flex items-center justify-center relative">
                <BookCover title={book.title} author={book.author} coverStyle={book.coverStyle} size="lg" />
              </div>

              {/* Data Info Column */}
              <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  
                  {/* Badge Row */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2.5 py-1 text-[9px] uppercase tracking-wider font-sans font-bold rounded-sm flex items-center gap-1.5 ${book.badgeClass}`}>
                      {book.tagIcon}
                      {book.badge}
                    </span>
                    <span className="text-[11px] font-sans text-neutral-500 font-medium">Published {book.year}</span>
                  </div>

                  <h2 className="font-display text-2xl font-black text-white hover:text-[var(--blood-bright,#c41e1e)] transition-colors mb-1">{book.title}</h2>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-[var(--blood-bright,#c41e1e)] font-bold mb-4">{book.author}</p>
                  
                  <div className="flex items-center gap-4 mb-5 pb-4 border-b border-neutral-900/40">
                    {renderStars(book.rating)}
                    <span className="font-sans text-[11px] text-neutral-500">{book.rating}.0 / 5.0 (Critical score)</span>
                  </div>

                  <p className="font-serif text-base text-[var(--muted-text,#8a8680)] leading-relaxed mb-6">
                    {book.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {book.genres.map(g => (
                      <span key={g} className="genre-badge border-neutral-850 hover:bg-neutral-900">{g}</span>
                    ))}
                  </div>

                </div>

                {/* Cover footer operations */}
                <div className="flex flex-wrap items-center justify-between border-t border-neutral-900/40 pt-5 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center bg-neutral-900 border border-neutral-850 p-2 rounded">
                      <span className="font-sans text-[8px] uppercase tracking-widest text-neutral-600 block leading-none mb-0.5">Dark Ratio</span>
                      <span className="font-display text-xs text-[var(--blood-bright,#c41e1e)] font-extrabold">{avgDarkness}/10</span>
                    </div>
                    <div className="hidden sm:block italic text-[11px] text-neutral-600 font-serif max-w-[280px]">
                      "{book.quote.substring(0, 70)}..."
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenBook(book.id)}
                      className="px-5 py-2.5 bg-[var(--blood,#8b0000)] hover:bg-[var(--blood-bright,#c41e1e)] text-white font-sans text-[10px] tracking-widest uppercase font-bold rounded-sm shadow-[0_4px_15px_rgba(139,0,0,0.2)] transition-all cursor-pointer"
                    >
                      Read Full Dossier
                    </button>
                    <a 
                      href={book.goodreads}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 border border-neutral-800 hover:border-neutral-700 text-neutral-500 hover:text-white rounded-sm font-sans text-xs transition-all flex items-center justify-center"
                      title="Goodreads"
                    >
                      Goodreads
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          );
        })}
      </section>

      {/* ─── Metric Explainer Statistics Grid ─────────────────── */}
      <section className="border-t border-neutral-900/55 pt-16 mb-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-label">Dimensional Audit</span>
          <h2 className="text-2xl font-black">Why These Books Sells</h2>
          <div className="section-rule mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[var(--surface,#18181c)] border border-neutral-800/35 p-6 rounded-md hover:border-neutral-700/60 transition-all text-center">
            <div className="mx-auto w-12 h-12 bg-red-950/20 text-red-500 border border-red-900/30 flex items-center justify-center rounded-md mb-4">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xs uppercase font-bold text-white tracking-widest mb-2">Psychological Depth</h3>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed">
              These books examine cognitive states under severe, absolute parameters of paranoia.
            </p>
          </div>

          <div className="bg-[var(--surface,#18181c)] border border-neutral-800/35 p-6 rounded-md hover:border-neutral-700/60 transition-all text-center">
            <div className="mx-auto w-12 h-12 bg-red-950/20 text-red-500 border border-red-900/30 flex items-center justify-center rounded-md mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xs uppercase font-bold text-white tracking-widest mb-2">Universal Themes</h3>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed">
              An timeless exploration of authority, decay, and meaning across language frameworks.
            </p>
          </div>

          <div className="bg-[var(--surface,#18181c)] border border-neutral-800/35 p-6 rounded-md hover:border-neutral-700/60 transition-all text-center">
            <div className="mx-auto w-12 h-12 bg-red-950/20 text-red-500 border border-red-900/30 flex items-center justify-center rounded-md mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xs uppercase font-bold text-white tracking-widest mb-2">Literary Craft</h3>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed">
              Propulsive pacing, meticulous descriptions, and complex symbol loops.
            </p>
          </div>

          <div className="bg-[var(--surface,#18181c)] border border-neutral-800/35 p-6 rounded-md hover:border-neutral-700/60 transition-all text-center">
            <div className="mx-auto w-12 h-12 bg-red-950/20 text-red-500 border border-red-900/30 flex items-center justify-center rounded-md mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xs uppercase font-bold text-white tracking-widest mb-2">Prophetic Vision</h3>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed">
              Highly prescient observations that detail exactly how societies fall into administrative slavery.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Call to Action community banner ───────────────────── */}
      <section className="max-w-4xl mx-auto text-center bg-[var(--surface,#18181c)] border border-neutral-850 p-8 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-radial-gradient from-[var(--blood-bright)] to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <MessageSquare className="w-8 h-8 text-[var(--blood-bright)] mb-4 animate-pulse" />
          <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-2">Join Our Reading Guild</h3>
          <p className="font-serif text-sm text-neutral-400 max-w-md mx-auto mb-6">
            Meet other readers who refuse to separate literature from reality. Connect weekly for thematic breakdowns.
          </p>
          <div className="flex gap-3">
            <button onClick={() => setTab('contact')} className="px-5 py-2.5 bg-[var(--blood,#8b0000)] hover:bg-[var(--blood-bright,#c41e1e)] text-white font-sans text-[10px] tracking-widest uppercase font-bold rounded-sm transition-all cursor-pointer">
              Register Interest
            </button>
            <button onClick={() => setTab('books')} className="px-5 py-2.5 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white rounded-sm font-sans text-[10px] tracking-widest uppercase font-bold transition-all cursor-pointer">
              Browse Collection
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
