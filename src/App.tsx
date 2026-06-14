/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import BooksView from './components/BooksView';
import GenresView from './components/GenresView';
import BestsellersView from './components/BestsellersView';
import AuthorsView from './components/AuthorsView';
import AnalysisView from './components/AnalysisView';
import HistoricalView from './components/HistoricalView';
import ContactView from './components/ContactView';
import BookCover from './components/BookCover';

// Shared data & types
import { BOOKS, AUTHORS, TIMELINE, ANALYSES } from './data';
import { Book } from './types';
import { Skull, Star, X, ExternalLink, HelpCircle } from 'lucide-react';

export default function App() {
  // ─── Active Route/Tab state ───
  const [tab, setTab] = useState<string>(() => {
    return localStorage.getItem('darkreads-selected-tab') || 'home';
  });

  // Track tab changes in local storage
  const handleSetTab = (newTab: string) => {
    setTab(newTab);
    localStorage.setItem('darkreads-selected-tab', newTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State to support deep-linking from Genres page to pre-set a filter in Books page
  const [activeGenreFilter, setActiveGenreFilter] = useState<string>('');

  // Handle setting a genre filter from outside the books catalog page
  const handleSelectGenreFilter = (genre: string) => {
    setActiveGenreFilter(genre);
  };

  // ─── Light/Dark Theme Controller ───
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('darkreads-theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('darkreads-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // ─── Universal Analytical Dossier Modal ───
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  
  // Resolve fully detailed book record
  const selectedBook = BOOKS.find(b => b.id === selectedBookId);

  // ─── Universal HD Cover Zoom Modal ───
  const [coverZoom, setCoverZoom] = useState<{
    title: string;
    author: string;
    coverStyle: any;
  } | null>(null);

  const renderStars = (n: number) => {
    return (
      <div className="flex text-amber-500 gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < n ? 'fill-amber-500' : 'text-neutral-700'}`} />
        ))}
      </div>
    );
  };

  // Active Screen Selector Switch
  const renderActiveScreen = () => {
    switch (tab) {
      case 'books':
        return (
          <BooksView 
            books={BOOKS} 
            onOpenBook={setSelectedBookId} 
            onOpenCover={(title, author, coverStyle) => setCoverZoom({ title, author, coverStyle })}
          />
        );
      case 'genres':
        return (
          <GenresView 
            setTab={handleSetTab} 
            onSelectGenre={handleSelectGenreFilter} 
          />
        );
      case 'bestsellers':
        return (
          <BestsellersView 
            books={BOOKS} 
            onOpenBook={setSelectedBookId} 
            setTab={handleSetTab} 
          />
        );
      case 'authors':
        return (
          <AuthorsView 
            authors={AUTHORS} 
            onOpenBookId={setSelectedBookId} 
            setTab={handleSetTab} 
          />
        );
      case 'analysis':
        return (
          <AnalysisView 
            analyses={ANALYSES} 
            setTab={handleSetTab} 
          />
        );
      case 'historical':
        return (
          <HistoricalView 
            timeline={TIMELINE} 
            books={BOOKS} 
            onOpenBookId={setSelectedBookId} 
          />
        );
      case 'contact':
        return <ContactView />;
      case 'home':
      default:
        return (
          <HomeView 
            featuredBooks={BOOKS.slice(2, 5)} 
            onOpenBook={setSelectedBookId} 
            setTab={handleSetTab} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[var(--ink,#0d0d0f)] text-[#e8e4dd] flex flex-col justify-between transition-colors duration-300">
      
      {/* Header navbar Navigation */}
      <Header currentTab={tab} setTab={handleSetTab} theme={theme} toggleTheme={toggleTheme} />

      {/* Primary Stage */}
      <main className="flex-1 w-full bg-[var(--ink,#0d0d0f)] transition-colors duration-300">
        {renderActiveScreen()}
      </main>

      {/* Footer System */}
      <footer className="bg-[var(--ink,#0d0d0f)] border-t border-[var(--border,rgba(255,255,255,0.06))] py-12 px-4 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-display font-black text-base text-white uppercase tracking-widest mb-3">
              <span className="text-[var(--blood-bright,#c41e1e)]">DARK</span>READS
            </div>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed max-w-xs">
              Illuminating the shadows of human existence through literature that confronts reality in all its complexity.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-white font-bold mb-4">Catalog Section</h4>
            <ul className="space-y-2 font-serif text-sm text-[var(--muted-text)]">
              <li><button onClick={() => handleSetTab('books')} className="hover:text-[var(--blood-bright)] transition-colors cursor-pointer">All Books</button></li>
              <li><button onClick={() => handleSetTab('genres')} className="hover:text-[var(--blood-bright)] transition-colors cursor-pointer">Subgenres</button></li>
              <li><button onClick={() => handleSetTab('bestsellers')} className="hover:text-[var(--blood-bright)] transition-colors cursor-pointer">Bestsellers List</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-white font-bold mb-4">Explore Guild</h4>
            <ul className="space-y-2 font-serif text-sm text-[var(--muted-text)]">
              <li><button onClick={() => handleSetTab('authors')} className="hover:text-[var(--blood-bright)] transition-colors cursor-pointer">Authors Library</button></li>
              <li><button onClick={() => handleSetTab('analysis')} className="hover:text-[var(--blood-bright)] transition-colors cursor-pointer">Deep Analysis</button></li>
              <li><button onClick={() => handleSetTab('historical')} className="hover:text-[var(--blood-bright)] transition-colors cursor-pointer">Historical Timelines</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-white font-bold mb-4">Communication</h4>
            <ul className="space-y-2 font-serif text-sm text-[var(--muted-text)]">
              <li><button onClick={() => handleSetTab('contact')} className="hover:text-[var(--blood-bright)] transition-colors cursor-pointer">Direct Contact</button></li>
              <li><span className="text-neutral-600 italic">Clearance Level: G-2</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-neutral-900/60 flex flex-col sm:flex-row justify-between items-center text-[10px] font-sans text-neutral-600 gap-y-4">
          <span>&copy; {new Date().getFullYear()} DarkReads. All rights reserved.</span>
          <span className="tracking-widest uppercase font-semibold">Built with intention &amp; darkness.</span>
        </div>
      </footer>

      {/* ─── Dossier Detailed Summary Modal ─── */}
      {selectedBookId && selectedBook && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
          onClick={() => setSelectedBookId(null)}
        >
          <div 
            className="bg-[var(--surface,#18181c)] border border-neutral-800/80 rounded-md max-w-3xl w-full shadow-2xl relative overflow-hidden animate-[scaleUp_0.31s_cubic-bezier(.2,.8,.2,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close trigger */}
            <button 
              onClick={() => setSelectedBookId(null)}
              className="absolute top-4 right-4 p-2 bg-neutral-900 border border-neutral-800 hover:border-red-500 rounded-full text-neutral-500 hover:text-red-500 transition-all cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header / Meta Block */}
            <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-neutral-950/25 border-b border-neutral-900">
              <div 
                className="flex justify-center flex-shrink-0 cursor-pointer"
                onClick={() => {
                  setCoverZoom({
                    title: selectedBook.title,
                    author: selectedBook.author,
                    coverStyle: selectedBook.coverStyle
                  });
                  setSelectedBookId(null);
                }}
              >
                <BookCover title={selectedBook.title} author={selectedBook.author} coverStyle={selectedBook.coverStyle} size="md" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="font-sans text-[9px] tracking-widest text-[var(--blood-bright,#c41e1e)] font-semibold uppercase mb-1">Dossier summary</span>
                <h3 className="font-display text-2xl font-black text-white">{selectedBook.title}</h3>
                <p className="font-sans text-[11px] tracking-widest uppercase text-neutral-500 mt-0.5 mb-3">{selectedBook.author} · {selectedBook.year}</p>
                <div className="mb-4">
                  {renderStars(selectedBook.rating)}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedBook.genres.map(g => (
                    <span key={g} className="genre-badge text-[9px] border-neutral-800 bg-neutral-900/60">{g}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Analysis details inside body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="space-y-4">
                <h4 className="font-sans text-[10px] tracking-widest uppercase text-neutral-400 font-semibold border-b border-neutral-900/60 pb-1 flex items-center gap-1.5">
                  Analytical Abstract
                </h4>
                <p className="font-serif text-base text-[var(--muted-text,#8a8680)] leading-relaxed">
                  {selectedBook.description}
                </p>
              </div>

              {/* Quotes */}
              <div className="p-4 bg-neutral-950/40 rounded border border-neutral-900/50 flex gap-3">
                <Skull className="w-6 h-6 text-[var(--blood-bright)] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-serif italic text-[15px] text-neutral-300">
                    {selectedBook.quote}
                  </p>
                  <span className="font-sans text-[8px] tracking-widest uppercase text-neutral-600 block mt-1.5">— Core Quotation</span>
                </div>
              </div>

              {/* Progress bars of 4 metrics */}
              <div className="space-y-4 pt-4 border-t border-neutral-900/60">
                <h4 className="font-sans text-[10px] tracking-widest uppercase text-neutral-400 font-semibold flex items-center gap-1.5">
                  Darkness Index Calibration
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Metric 1 */}
                  <div>
                    <div className="flex justify-between text-[11px] font-sans text-neutral-500 mb-1">
                      <span>Psychological Terror</span>
                      <span className="font-semibold text-neutral-300">{selectedBook.darkness.psych} / 10</span>
                    </div>
                    <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--blood-bright)]" style={{ width: `${selectedBook.darkness.psych * 10}%` }} />
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div>
                    <div className="flex justify-between text-[11px] font-sans text-neutral-500 mb-1">
                      <span>Nihilism & Despair</span>
                      <span className="font-semibold text-neutral-300">{selectedBook.darkness.nihil} / 10</span>
                    </div>
                    <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--blood-bright)]" style={{ width: `${selectedBook.darkness.nihil * 10}%` }} />
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div>
                    <div className="flex justify-between text-[11px] font-sans text-neutral-500 mb-1">
                      <span>Physical Violence</span>
                      <span className="font-semibold text-neutral-300">{selectedBook.darkness.violence} / 10</span>
                    </div>
                    <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--blood-bright)]" style={{ width: `${selectedBook.darkness.violence * 10}%` }} />
                    </div>
                  </div>

                  {/* Metric 4 */}
                  <div>
                    <div className="flex justify-between text-[11px] font-sans text-neutral-500 mb-1">
                      <span>Moral Ambiguity</span>
                      <span className="font-semibold text-neutral-300">{selectedBook.darkness.moral} / 10</span>
                    </div>
                    <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--blood-bright)]" style={{ width: `${selectedBook.darkness.moral * 10}%` }} />
                    </div>
                  </div>

                </div>
              </div>

              {/* Action row links out */}
              <div className="pt-4 border-t border-neutral-900/60 flex justify-end">
                <a
                  href={selectedBook.goodreads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[var(--blood,#8b0000)] hover:bg-[var(--blood-bright,#c41e1e)] text-white text-[11px] font-sans font-bold tracking-widest uppercase rounded-sm cursor-pointer inline-flex items-center gap-1.5"
                >
                  View on Goodreads <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ─── HD Cover Zoom Inspect Modal ─── */}
      {coverZoom && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 cursor-pointer"
          onClick={() => setCoverZoom(null)}
        >
          <button 
            onClick={() => setCoverZoom(null)}
            className="absolute top-4 right-4 p-2 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white transition-all cursor-pointer z-20"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="p-4 transform hover:scale-[1.01] transition-transform animate-[scaleUp_0.32s_cubic-bezier(.2,.8,.2,1)]" onClick={(e) => e.stopPropagation()}>
            <BookCover title={coverZoom.title} author={coverZoom.author} coverStyle={coverZoom.coverStyle} size="xl" />
          </div>

          <div className="mt-4 text-center">
            <h4 className="font-display text-sm font-bold text-neutral-400 uppercase tracking-widest">{coverZoom.title}</h4>
            <p className="font-serif italic text-xs text-neutral-600 mt-1">Inspection view. Click anywhere to collapse.</p>
          </div>
        </div>
      )}

    </div>
  );
}
