/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DarknessScores {
  psych: number;    // Psychological Horror
  nihil: number;    // Nihilism
  violence: number; // Violence
  moral: number;   // Moral Ambiguity
}

export interface CoverStyle {
  bgGradient: string;
  textColor: string;
  borderColor: string;
  accentColor: string;
  patternType?: 'stripes' | 'circle' | 'minimal' | 'gothic' | 'paranoia' | 'cyber' | 'waves';
}

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  genres: string[];
  rating: number;
  darkness: DarknessScores;
  description: string;
  quote: string;
  goodreads: string;
  coverStyle: CoverStyle;
}

export interface Author {
  id: string;
  name: string;
  years: string;
  role: string;
  bio: string;
  style: string[];
  themes: string[];
  essentialWorks: string[];
  quote: string;
  quoteSource: string;
  wikipediaUrl: string;
  coverStyle: CoverStyle;
}

export interface TimelineItem {
  id: string;
  years: string;
  title: string;
  description: string;
  genres: string[];
  books: string[]; // Book IDs associated
}

export interface AnalysisItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
  tags: string[];
}
