/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Skull, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Header({ currentTab, setTab, theme, toggleTheme }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isGenresDropdownOpen, setIsGenresDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'books', label: 'Books' },
    { id: 'genres', label: 'Genres' },
    { id: 'bestsellers', label: 'Best Sellers' },
    { id: 'authors', label: 'Authors' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'historical', label: 'Historical' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tabId: string) => {
    setTab(tabId);
    setIsMobileOpen(false);
    setIsGenresDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--nav-bg,rgba(13,13,15,0.95))] backdrop-blur-md border-b border-[var(--border,rgba(255,255,255,0.06))] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleTabClick('home')}>
            <span className="font-display text-lg tracking-[0.15em] font-black text-white mix-blend-difference flex items-center gap-1">
              <span className="text-[var(--blood-bright,#c41e1e)] font-extrabold">DARK</span>READS
              <Skull className="w-4 h-4 text-[var(--blood-bright,#c41e1e)] -mt-1 ml-0.5 animate-pulse" />
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`font-display text-[10px] lg:text-[11px] font-medium tracking-[0.15em] uppercase px-3 py-2 rounded-sm transition-all duration-200 relative ${
                  currentTab === item.id 
                    ? 'text-white font-semibold' 
                    : 'text-[var(--muted,#8a8680)] hover:text-white'
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <span className="absolute bottom-[2px] left-3 right-3 h-[2px] bg-[var(--blood-bright)] rounded-full" />
                )}
              </button>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-full border border-[var(--border2,rgba(255,255,255,0.12))] text-[var(--muted,#8a8680)] hover:text-[var(--blood-bright,#c41e1e)] hover:border-[var(--blood-bright,#c41e1e)] transition-all duration-250 cursor-pointer"
              aria-label="Toggle light/dark theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-900" />}
            </button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-[var(--border2,rgba(255,255,255,0.12))] text-[var(--muted,#8a8680)] transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-1.5 rounded-md text-[var(--muted,#8a8680)] hover:text-white transition-colors"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[var(--surface,#18181c)] border-b border-[var(--border2,rgba(255,255,255,0.12))] px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`block w-full text-left font-display text-[11px] font-medium tracking-[0.15em] uppercase px-3 py-3 rounded-md transition-colors ${
                currentTab === item.id
                  ? 'bg-[var(--blood,#8b0000)] text-white font-bold'
                  : 'text-[var(--muted,#8a8680)] hover:bg-neutral-800/40 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
