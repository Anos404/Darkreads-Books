/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Skull, Rocket, Sword, Heart, Feather, ShieldAlert, Sparkles, Compass, ChevronRight } from 'lucide-react';

interface GenresViewProps {
  setTab: (tab: string) => void;
  onSelectGenre: (genre: string) => void;
}

export default function GenresView({ setTab, onSelectGenre }: GenresViewProps) {
  const genresList = [
    {
      id: 'science-fiction',
      name: 'Science Fiction',
      genreQuery: 'Science Fiction',
      icon: <Rocket className="w-6 h-6 text-cyan-500" />,
      subgenres: ['Dystopian', 'Cyberpunk', 'Post-Human', 'Hard SF'],
      description: "Science fiction pushes technological limits to examine the potential hazards of advanced research and total state oversight. In dark sci-fi, we deal with clinical dictatorships, identity erasure, and cold machines that mock human emotion.",
      representativeBooks: ['1984', 'Neuromancer', 'Brave New World', 'Fahrenheit 451'],
      accentColor: 'border-cyan-900/30 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]'
    },
    {
      id: 'fantasy',
      name: 'Fantasy & Grimdark',
      genreQuery: 'Fantasy',
      icon: <Sword className="w-6 h-6 text-amber-500" />,
      subgenres: ['Grimdark', 'Dark Fantasy', 'Mythic Ritual', 'Anti-Heroic'],
      description: "Traditional epic quests are replaced with cynical, rain-soaked realities of steel and manipulation. Grimdark fantasy examines kingdoms where heroes are deeply flawed, magic demands terrible psychological pricing, and moral codes are liabilities.",
      representativeBooks: ['A Game of Thrones', 'The Blade Itself', 'Prince of Thorns'],
      accentColor: 'border-amber-900/30 hover:border-amber-500/40 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)]'
    },
    {
      id: 'horror',
      name: 'Existential Horror',
      genreQuery: 'Horror',
      icon: <Skull className="w-6 h-6 text-red-500" />,
      subgenres: ['Cosmic Horror', 'Psychological Dread', 'Weird Fiction', 'Gothic Decadence'],
      description: "Existential horror bypasses cheap shock effects to interrogate cosmic indifference, unutterable forces, and the fragility of human mental balance. It forces readers to ask: what if comfort and purpose are completely accidental?",
      representativeBooks: ['Annihilation', 'The Silence of the Lambs', 'The Call of Cthulhu', 'The Haunting of Hill House'],
      accentColor: 'border-red-900/30 hover:border-red-500/40 hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)]'
    },
    {
      id: 'thriller',
      name: 'Suspense & Noir Thriller',
      genreQuery: 'Thriller',
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      subgenres: ['Psychological Noir', 'Systemic Crime', 'Domestic Warfare', 'Hard-boiled'],
      description: "Suspenful accounts that expose institutional rot, family dysfunction, and the dark calculations people make to hide secrets. The tension builds from unstable loyalties and the sudden collapse of civilized decorum.",
      representativeBooks: ['Gone Girl', 'Sharp Objects', 'No Country for Old Men', 'American Psycho'],
      accentColor: 'border-rose-900/30 hover:border-rose-500/40 hover:shadow-[0_10px_30px_rgba(244,63,94,0.15)]'
    },
    {
      id: 'literary-fiction',
      name: 'Dark Literary Fiction',
      genreQuery: 'Literary Fiction',
      icon: <Feather className="w-6 h-6 text-indigo-500" />,
      subgenres: ['Existential Monologue', 'Philosophical Realism', 'Satirical Transgression'],
      description: "Literary fiction focuses heavily on sophisticated, polished linguistics to inspect complex moral compromises and societal stagnation. These books explore alienation, decay, and the long struggle against intellectual boredom.",
      representativeBooks: ['The Stranger', 'Crime and Punishment', 'The Road', 'The Bell Jar'],
      accentColor: 'border-indigo-900/30 hover:border-indigo-500/40 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)]'
    }
  ];

  const handleExploreGenre = (genreQuery: string) => {
    onSelectGenre(genreQuery);
    setTab('books');
  };

  const handleExploreThemeUrl = () => {
    onSelectGenre('');
    setTab('books');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* ─── Hero Intro ────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-label">Aesthetic Directory</span>
        <h1 className="text-3xl sm:text-5xl font-black mb-4">Literary Categories</h1>
        <div className="section-rule mx-auto" />
        <p className="font-serif text-lg text-[var(--muted-text,#8a8680)] leading-relaxed italic">
          Explore the exact divisions of dark specular fiction, mapping from technocratic steel to ancient gothic shadows. Click any category to search our dynamic indices.
        </p>
      </section>

      {/* ─── Genre Cards Rows ──────────────────────────────────── */}
      <section className="space-y-8 mb-16">
        {genresList.map((g, idx) => (
          <motion.div
            key={g.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className={`bg-[var(--surface,#18181c)] border rounded-md p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-start lg:items-center transition-all duration-300 ${g.accentColor}`}
          >
            {/* Visual Icon Box */}
            <div className="flex-shrink-0 p-5 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center">
              {g.icon}
            </div>

            {/* Core Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="font-display text-lg font-bold text-white mb-2">{g.name}</h2>
                <div className="flex flex-wrap gap-1.5">
                  {g.subgenres.map(s => (
                    <span key={s} className="genre-badge text-[9px] border-neutral-800/60 bg-neutral-900/50 text-neutral-400">{s}</span>
                  ))}
                </div>
              </div>

              <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed max-w-4xl">
                {g.description}
              </p>

              {/* Representative items list representation */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1 text-[11px] font-sans text-neutral-500">
                <span className="font-semibold uppercase tracking-wider text-neutral-600">Landmark Records:</span>
                {g.representativeBooks.map((item, bidx) => (
                  <span key={item} className="text-neutral-400 font-medium">
                    {item}{bidx < g.representativeBooks.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* Callback Trigger */}
            <div className="flex-shrink-0 w-full lg:w-auto pt-2 lg:pt-0">
              <button
                onClick={() => handleExploreGenre(g.genreQuery)}
                className="w-full lg:w-auto px-5 py-2.5 bg-neutral-950/40 hover:bg-[var(--blood,#8b0000)] text-neutral-300 hover:text-white border border-neutral-800 hover:border-transparent rounded-sm font-sans text-[10px] tracking-widest uppercase font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
              >
                Inspect Catalog <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        ))}
      </section>

      {/* ─── Secondary Theme Grid ───────────────────────────────── */}
      <section className="border-t border-neutral-900/55 pt-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-label">Speculative Nodes</span>
          <h2 className="text-2xl font-black">Explore Specific Themes</h2>
          <div className="section-rule mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-[var(--surface,#18181c)] border border-neutral-800/30 p-6 rounded-md hover:border-neutral-700/60 transition-all flex flex-col justify-between">
            <div>
              <Skull className="w-8 h-8 text-[var(--blood-bright)] mb-4 opacity-75" />
              <h3 className="font-display text-xs uppercase font-bold text-white tracking-widest mb-2">Existential Horror</h3>
              <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed mb-4">
                Refuses comfort or purpose, confronting the utter meaninglessness of existence in an indifferent, silent cosmos.
              </p>
            </div>
            <button onClick={handleExploreThemeUrl} className="font-sans text-[10px] tracking-wider uppercase text-[var(--blood-bright,#c41e1e)] hover:text-white font-semibold transition-colors text-left flex items-center gap-1 cursor-pointer">
              Explore Theme <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[var(--surface,#18181c)] border border-neutral-800/30 p-6 rounded-md hover:border-neutral-700/60 transition-all flex flex-col justify-between">
            <div>
              <ShieldAlert className="w-8 h-8 text-orange-500 mb-4 opacity-75" />
              <h3 className="font-display text-xs uppercase font-bold text-white tracking-widest mb-2">Dystopian Surveillance</h3>
              <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed mb-4">
                Imagines massive, clinical technocratic regimes that deploy doublethink and active cameras to delete the self-entity.
              </p>
            </div>
            <button onClick={handleExploreThemeUrl} className="font-sans text-[10px] tracking-wider uppercase text-[var(--blood-bright,#c41e1e)] hover:text-white font-semibold transition-colors text-left flex items-center gap-1 cursor-pointer">
              Explore Theme <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[var(--surface,#18181c)] border border-neutral-800/30 p-6 rounded-md hover:border-neutral-700/60 transition-all flex flex-col justify-between">
            <div>
              <Compass className="w-8 h-8 text-indigo-500 mb-4 opacity-75" />
              <h3 className="font-display text-xs uppercase font-bold text-white tracking-widest mb-2">Post-Apocalyptic Survival</h3>
              <p className="font-serif text-sm text-[var(--muted-text,#8a8680)] leading-relaxed mb-4">
                Depicts human relations stripped down under severe environmental collapse, where survivors struggle to keep the fire lit.
              </p>
            </div>
            <button onClick={handleExploreThemeUrl} className="font-sans text-[10px] tracking-wider uppercase text-[var(--blood-bright,#c41e1e)] hover:text-white font-semibold transition-colors text-left flex items-center gap-1 cursor-pointer">
              Explore Theme <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
