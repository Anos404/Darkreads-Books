/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, RotateCcw, Grid, List, Skull, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { Book } from '../types';
import BookCover from './BookCover';

interface BooksViewProps {
  books: Book[];
  onOpenBook: (id: string) => void;
  // Trigger a full-screen procedural presentation or detailed inspection of the cover
  onOpenCover: (title: string, author: string, coverStyle: any) => void;
}

export default function BooksView({ books, onOpenBook, onOpenCover }: BooksViewProps) {
  // Grid/List View Toggles
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'darkness' | 'rating' | 'year'>('darkness');

  // Sliders for 4 dimensions of darkness (defaulting to max 10, meaning show everything)
  const [sliders, setSliders] = useState({
    psych: 10,
    nihil: 10,
    violence: 10,
    moral: 10
  });

  // Extract unique genres across all books for dropdown
  const uniqueGenres = useMemo(() => {
    const list = new Set<string>();
    books.forEach(b => b.genres.forEach(g => list.add(g)));
    return Array.from(list).sort();
  }, [books]);

  // Handle slider adjustment
  const handleSliderChange = (dim: 'psych' | 'nihil' | 'violence' | 'moral', val: number) => {
    setSliders(prev => ({ ...prev, [dim]: val }));
  };

  // Reset ALL filters
  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedGenre('');
    setSortBy('darkness');
    setSliders({
      psych: 10,
      nihil: 10,
      violence: 10,
      moral: 10
    });
  };

  // Main Filtering and Sorting Engine
  const filteredBooks = useMemo(() => {
    let result = books.filter(book => {
      // 1. Text Search matching
      const targetStr = `${book.title} ${book.author} ${book.genres.join(' ')}`.toLowerCase();
      if (searchTerm && !targetStr.includes(searchTerm.toLowerCase())) {
        return false;
      }

      // 2. Selected Genre matching
      if (selectedGenre && !book.genres.includes(selectedGenre)) {
        return false;
      }

      // 3. Darkness thresholds matching (the sliders acts as ceilings)
      if (book.darkness.psych > sliders.psych) return false;
      if (book.darkness.nihil > sliders.nihil) return false;
      if (book.darkness.violence > sliders.violence) return false;
      if (book.darkness.moral > sliders.moral) return false;

      return true;
    });

    // 4. Sort execution
    result.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'darkness') {
        const scoreA = (a.darkness.psych + a.darkness.nihil + a.darkness.violence + a.darkness.moral) / 4;
        const scoreB = (b.darkness.psych + b.darkness.nihil + b.darkness.violence + b.darkness.moral) / 4;
        return scoreB - scoreA; // highest total darkness first
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating; // highest rated first
      }
      if (sortBy === 'year') {
        return b.year - a.year; // newest published first
      }
      return 0;
    });

    return result;
  }, [books, searchTerm, selectedGenre, sortBy, sliders]);

  const renderStars = (n: number) => {
    return (
      <div className="flex text-amber-500 gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-3 h-3 ${i < n ? 'fill-amber-500' : 'text-neutral-700'}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* ─── Darkness Meter Filter Grid ────────────────────────── */}
      <section id="darkness-filter" className="bg-[var(--surface,#18181c)] border border-neutral-800/35 rounded-md p-6 lg:p-8 mb-10 shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-neutral-900/60">
          <div>
            <h2 className="font-display text-sm font-bold text-white tracking-widest uppercase flex items-center gap-1.5">
              <Skull className="w-4 h-4 text-[var(--blood-bright,#c41e1e)]" />
              Darkness Meter Index — Calibrate your thresholds
            </h2>
            <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] mt-1">
              Drag selectors to set your maximum comfortable limits. Books exceeding any dimension will filter out dynamically.
            </p>
          </div>
          <button
            onClick={resetAllFilters}
            className="px-3.5 py-1.5 border border-neutral-700 hover:border-[var(--blood-bright,#c41e1e)] text-neutral-400 hover:text-white rounded-sm font-mono text-[9px] tracking-widest uppercase flex items-center gap-1 transition-all cursor-pointer"
          >
            <RotateCcw className="w-2.5 h-2.5" /> Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Dimension Box 1 */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans text-xs tracking-wider uppercase text-neutral-300 font-medium">Psychological Horror</span>
              <span className="font-sans text-xs text-[var(--blood-bright,#c41e1e)] font-bold">{sliders.psych} / 10</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="10" 
              value={sliders.psych}
              onChange={(e) => handleSliderChange('psych', Number(e.target.value))}
              className="w-full accent-[var(--blood-bright,#c41e1e)] h-[3px] bg-neutral-900 rounded-lg cursor-pointer"
            />
            <span className="font-serif text-[11px] text-neutral-500 italic mt-1.5">Anxiety, unraveling sanity, trauma exposure.</span>
          </div>

          {/* Dimension Box 2 */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans text-xs tracking-wider uppercase text-neutral-300 font-medium">Nihilism & Despair</span>
              <span className="font-sans text-xs text-[var(--blood-bright,#c41e1e)] font-bold">{sliders.nihil} / 10</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="10" 
              value={sliders.nihil}
              onChange={(e) => handleSliderChange('nihil', Number(e.target.value))}
              className="w-full accent-[var(--blood-bright,#c41e1e)] h-[3px] bg-neutral-900 rounded-lg cursor-pointer"
            />
            <span className="font-serif text-[11px] text-neutral-500 italic mt-1.5">Existential meaninglessness, vacuum of hope.</span>
          </div>

          {/* Dimension Box 3 */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans text-xs tracking-wider uppercase text-neutral-300 font-medium">Physical Violence</span>
              <span className="font-sans text-xs text-[var(--blood-bright,#c41e1e)] font-bold">{sliders.violence} / 10</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="10" 
              value={sliders.violence}
              onChange={(e) => handleSliderChange('violence', Number(e.target.value))}
              className="w-full accent-[var(--blood-bright,#c41e1e)] h-[3px] bg-neutral-900 rounded-lg cursor-pointer"
            />
            <span className="font-serif text-[11px] text-neutral-500 italic mt-1.5">Physical brutality, warfare, slaughter depictions.</span>
          </div>

          {/* Dimension Box 4 */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans text-xs tracking-wider uppercase text-neutral-300 font-medium">Moral Ambiguity</span>
              <span className="font-sans text-xs text-[var(--blood-bright,#c41e1e)] font-bold">{sliders.moral} / 10</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="10" 
              value={sliders.moral}
              onChange={(e) => handleSliderChange('moral', Number(e.target.value))}
              className="w-full accent-[var(--blood-bright,#c41e1e)] h-[3px] bg-neutral-900 rounded-lg cursor-pointer"
            />
            <span className="font-serif text-[11px] text-neutral-500 italic mt-1.5">Grey compromise, heavy cost choices, complex ethics.</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-900/60 text-center sm:text-left text-[11px] font-sans text-neutral-500">
          Showing <span className="text-[var(--blood-bright,#c41e1e)] font-bold">{filteredBooks.length}</span> of <span className="text-neutral-300 font-semibold">{books.length}</span> indexed titles.
        </div>
      </section>

      {/* ─── Search, Sort & Layout Control ───────────────────────── */}
      <section className="bg-[var(--surface,#18181c)] border border-neutral-800/35 rounded-md p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full md:w-80 flex items-center bg-neutral-950/20 border border-neutral-800 rounded-sm px-3 py-2">
          <Search className="w-4 h-4 text-neutral-500 mr-2 flex-shrink-0" />
          <input 
            type="text" 
            placeholder="Search titles, authors, genres..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm border-none outline-none text-white font-sans placeholder-neutral-600"
          />
        </div>

        {/* Filters and Sorting selectors grouped */}
        <div className="flex flex-wrap w-full md:w-auto items-center gap-3">
          
          {/* Genre select */}
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="px-3.5 py-2.5 bg-neutral-950/20 border border-neutral-800 rounded-sm font-sans text-[11px] uppercase tracking-wider text-neutral-300 focus:outline-none focus:border-[var(--blood-bright)] cursor-pointer"
          >
            <option value="">All Genres</option>
            {uniqueGenres.map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>

          {/* Sort order select */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3.5 py-2.5 bg-neutral-950/20 border border-neutral-800 rounded-sm font-sans text-[11px] uppercase tracking-wider text-neutral-300 focus:outline-none focus:border-[var(--blood-bright)] cursor-pointer"
          >
            <option value="darkness">Sort: Darkest First</option>
            <option value="title">Sort: Title A-Z</option>
            <option value="rating">Sort: Highest Rated</option>
            <option value="year">Sort: Year Published</option>
          </select>

          {/* View Toggles */}
          <div className="flex md:ml-2 border border-neutral-850 rounded-sm overflow-hidden divide-x divide-neutral-850">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors cursor-pointer ${
                viewMode === 'grid' 
                  ? 'bg-neutral-800 text-[var(--blood-bright,#c41e1e)]' 
                  : 'bg-neutral-950/10 text-neutral-500 hover:text-neutral-300'
              }`}
              title="Grid Layout"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors cursor-pointer ${
                viewMode === 'list' 
                  ? 'bg-neutral-800 text-[var(--blood-bright,#c41e1e)]' 
                  : 'bg-neutral-950/10 text-neutral-500 hover:text-neutral-300'
              }`}
              title="Table Layout"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

        </div>

      </section>

      {/* ─── Book Catalog Render Stage ─────────────────────────── */}
      {filteredBooks.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-neutral-800 rounded-lg max-w-xl mx-auto">
          <Skull className="w-12 h-12 text-neutral-700 mx-auto mb-4 animate-bounce" />
          <h3 className="font-display text-sm uppercase tracking-widest font-bold text-neutral-400 mb-2">No Titles Match Selection</h3>
          <p className="font-serif text-sm text-neutral-600 max-w-sm mx-auto mb-6">
            The values configured on the Darkness Meter sliding filters are too restrictive to pass any indexed titles.
          </p>
          <button 
            onClick={resetAllFilters}
            className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-750 text-white font-sans text-[10px] tracking-wider uppercase font-bold rounded-sm border border-neutral-700/60 transition-all cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        /* GRID VIEW RENDERING */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => {
            const avgDarkness = ((book.darkness.psych + book.darkness.nihil + book.darkness.violence + book.darkness.moral) / 4).toFixed(1);
            
            return (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--surface,#18181c)] rounded-[4px] border border-neutral-800/30 overflow-hidden flex flex-col justify-between group hover:border-neutral-700/50 hover:shadow-[0_12px_35px_rgba(0,0,0,0.55)] transition-all duration-300"
              >
                {/* Book Cover Cover display */}
                <div className="p-6 flex justify-center bg-neutral-950/20 border-b border-neutral-900/60 h-[255px] items-center relative">
                  <div 
                    onClick={() => onOpenCover(book.title, book.author, book.coverStyle)}
                    className="transform group-hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
                    title="Inspect Cover Style"
                  >
                    <BookCover title={book.title} author={book.author} coverStyle={book.coverStyle} size="md" />
                  </div>
                  <div className="absolute top-4 right-4 bg-neutral-900 border border-neutral-800 text-neutral-500 text-[9px] font-sans px-2 py-0.5 rounded-[2px]">
                    {book.year}
                  </div>
                </div>

                {/* Details Column */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-white mb-0.5 leading-tight">{book.title}</h3>
                    <p className="font-sans text-[10px] tracking-widest text-[var(--blood-bright,#c41e1e)] uppercase mb-3">{book.author}</p>
                    
                    <div className="mb-4">
                      {renderStars(book.rating)}
                    </div>

                    <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed mb-4">
                      {book.description.length > 155 ? `${book.description.substring(0, 150)}...` : book.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-6">
                      {book.genres.map(g => (
                        <span key={g} className="genre-badge">{g}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Dimension Progress meters */}
                    <div className="space-y-1.5 border-t border-neutral-900/60 pt-4 mb-4">
                      {/* Psych */}
                      <div className="flex items-center text-[10px] font-sans text-neutral-600 gap-2">
                        <span className="w-16 text-right">PSYCH</span>
                        <div className="flex-1 bg-neutral-900 h-1 rounded-sm overflow-hidden">
                          <div className="h-full bg-[var(--blood-bright)]" style={{ width: `${book.darkness.psych * 10}%` }} />
                        </div>
                        <span className="w-4 text-right text-neutral-400 font-semibold">{book.darkness.psych}</span>
                      </div>
                      {/* Nihil */}
                      <div className="flex items-center text-[10px] font-sans text-neutral-600 gap-2">
                        <span className="w-16 text-right">NIHILISM</span>
                        <div className="flex-1 bg-neutral-900 h-1 rounded-sm overflow-hidden">
                          <div className="h-full bg-[var(--blood-bright)]" style={{ width: `${book.darkness.nihil * 10}%` }} />
                        </div>
                        <span className="w-4 text-right text-neutral-400 font-semibold">{book.darkness.nihil}</span>
                      </div>
                      {/* Violence */}
                      <div className="flex items-center text-[10px] font-sans text-neutral-600 gap-2">
                        <span className="w-16 text-right">VIOLENCE</span>
                        <div className="flex-1 bg-neutral-900 h-1 rounded-sm overflow-hidden">
                          <div className="h-full bg-[var(--blood-bright)]" style={{ width: `${book.darkness.violence * 10}%` }} />
                        </div>
                        <span className="w-4 text-right text-neutral-400 font-semibold">{book.darkness.violence}</span>
                      </div>
                      {/* Moral */}
                      <div className="flex items-center text-[10px] font-sans text-neutral-600 gap-2">
                        <span className="w-16 text-right">AMBIGUITY</span>
                        <div className="flex-1 bg-neutral-900 h-1 rounded-sm overflow-hidden">
                          <div className="h-full bg-[var(--blood-bright)]" style={{ width: `${book.darkness.moral * 10}%` }} />
                        </div>
                        <span className="w-4 text-right text-neutral-400 font-semibold">{book.darkness.moral}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-neutral-905/45 pt-4">
                      <div className="flex flex-col">
                        <span className="font-sans text-[8px] text-neutral-600 uppercase tracking-wider">Indexed Index</span>
                        <span className="font-display text-sm text-[var(--blood-bright,#c41e1e)] font-bold">{avgDarkness} ☠</span>
                      </div>
                      <button
                        onClick={() => onOpenBook(book.id)}
                        className="px-4 py-2 bg-neutral-950/40 hover:bg-[var(--blood,#8b0000)] text-neutral-300 hover:text-white border border-neutral-800 hover:border-transparent rounded-sm font-sans text-[10px] tracking-wider uppercase font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1"
                      >
                        Details <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* TABLE/LIST VIEW RENDERING */
        <div className="bg-[var(--surface,#18181c)] border border-neutral-800/35 rounded-md overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-950/25 border-b border-neutral-900/60 font-sans text-[10px] tracking-widest text-neutral-500 uppercase">
                  <th className="py-4 px-6 font-medium">Cover</th>
                  <th className="py-4 px-6 font-medium">Title & Author</th>
                  <th className="py-4 px-6 font-medium hidden sm:table-cell">Genres</th>
                  <th className="py-4 px-6 font-medium hidden md:table-cell">Rating</th>
                  <th className="py-4 px-6 font-medium text-right">Darkness</th>
                  <th className="py-4 px-6 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900/40">
                {filteredBooks.map((book) => {
                  const avgDarkness = ((book.darkness.psych + book.darkness.nihil + book.darkness.violence + book.darkness.moral) / 4).toFixed(1);
                  
                  return (
                    <tr key={book.id} className="hover:bg-neutral-900/10 transition-colors text-sm">
                      {/* Cover thumb */}
                      <td className="py-3 px-6">
                        <div 
                          onClick={() => onOpenCover(book.title, book.author, book.coverStyle)}
                          className="cursor-pointer transform hover:scale-105 transition-transform"
                          title="View Cover"
                        >
                          <BookCover title={book.title} author={book.author} coverStyle={book.coverStyle} size="sm" />
                        </div>
                      </td>

                      {/* Title & Author */}
                      <td className="py-3 px-6">
                        <span 
                          onClick={() => onOpenBook(book.id)}
                          className="font-display font-medium text-white hover:text-[var(--blood-bright,#c41e1e)] cursor-pointer text-sm font-semibold transition-colors block mb-0.5"
                        >
                          {book.title}
                        </span>
                        <span className="font-sans text-[10px] tracking-wider text-neutral-500 uppercase">{book.author} · {book.year}</span>
                      </td>

                      {/* Genres */}
                      <td className="py-3 px-6 hidden sm:table-cell">
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {book.genres.map(g => (
                            <span key={g} className="genre-badge text-[9px] px-1.5 py-0">{g}</span>
                          ))}
                        </div>
                      </td>

                      {/* Rating */}
                      <td className="py-3 px-6 hidden md:table-cell">
                        {renderStars(book.rating)}
                      </td>

                      {/* Score */}
                      <td className="py-3 px-6 text-right font-display text-xs text-[var(--blood-bright,#c41e1e)] font-bold">
                        {avgDarkness} ☠
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-6 text-right">
                        <button
                          onClick={() => onOpenBook(book.id)}
                          className="px-3 py-1.5 bg-neutral-950/20 hover:bg-[var(--blood,#8b0000)] text-neutral-300 hover:text-white border border-neutral-800 hover:border-transparent rounded-sm font-sans text-[9px] tracking-widest uppercase font-semibold transition-all cursor-pointer"
                        >
                          Details
                        </button>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
