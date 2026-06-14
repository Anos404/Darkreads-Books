/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CoverStyle } from '../types';

interface BookCoverProps {
  title: string;
  author: string;
  coverStyle: CoverStyle;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function BookCover({ title, author, coverStyle, size = 'md' }: BookCoverProps) {
  const { bgGradient, textColor, borderColor, accentColor, patternType = 'minimal' } = coverStyle;

  // Determine size classes
  let sizeClasses = 'w-[140px] h-[210px] text-xs';
  if (size === 'sm') {
    sizeClasses = 'w-[80px] h-[120px] text-[9px]';
  } else if (size === 'lg') {
    sizeClasses = 'w-[180px] h-[270px] text-sm';
  } else if (size === 'xl') {
    sizeClasses = 'w-[240px] h-[360px] text-base';
  }

  // Generate pattern overlay based on patternType
  const renderPattern = () => {
    switch (patternType) {
      case 'stripes':
        return (
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, ${accentColor} 10px, ${accentColor} 11px)`
          }} />
        );
      case 'circle':
        return (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-15 pointer-events-none">
            <div className="rounded-full border-4 animate-[pulse_6s_infinite]" style={{
              width: size === 'xl' ? '120px' : size === 'lg' ? '90px' : '70px',
              height: size === 'xl' ? '120px' : size === 'lg' ? '90px' : '70px',
              borderColor: accentColor,
              boxShadow: `0 0 30px ${accentColor}`
            }} />
          </div>
        );
      case 'waves':
        return (
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `radial-gradient(ellipse at 50% 50%, transparent 40%, ${accentColor} 41%, ${accentColor} 45%, transparent 46%)`,
            backgroundSize: '15px 15px'
          }} />
        );
      case 'gothic':
        return (
          <div className="absolute inset-2 border pointer-events-none opacity-20 flex flex-col justify-between" style={{ borderColor: accentColor }}>
            <div className="flex justify-between p-1">
              <span className="text-[10px]" style={{ color: accentColor }}>✦</span>
              <span className="text-[10px]" style={{ color: accentColor }}>✦</span>
            </div>
            <div className="flex justify-between p-1">
              <span className="text-[10px]" style={{ color: accentColor }}>✦</span>
              <span className="text-[10px]" style={{ color: accentColor }}>✦</span>
            </div>
          </div>
        );
      case 'cyber':
        return (
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
            backgroundImage: `
              linear-gradient(to right, ${accentColor} 1px, transparent 1px),
              linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)
            `,
            backgroundSize: size === 'xl' ? '24px 24px' : '16px 16px'
          }} />
        );
      case 'paranoia':
        return (
          <div className="absolute inset-0 opacity-15 pointer-events-none flex flex-wrap gap-1 p-2 overflow-hidden justify-around">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-full w-[1px] rotate-[15deg] transform origin-top" style={{ backgroundColor: accentColor }} />
            ))}
          </div>
        );
      case 'minimal':
      default:
        return (
          <div className="absolute inset-3 border border-dashed opacity-10 pointer-events-none" style={{ borderColor }} />
        );
    }
  };

  // Trim title if too long for small sizes
  const displayTitle = size === 'sm' && title.length > 15 ? title.substring(0, 14) + '..' : title;
  const displayAuthor = size === 'sm' && author.length > 12 ? author.substring(0, 11) + '..' : author;

  return (
    <div
      className={`relative select-none rounded-[3px] flex flex-col justify-between p-4 overflow-hidden border shadow-lg transition-transform ${sizeClasses}`}
      style={{
        background: bgGradient,
        borderColor: borderColor,
        boxShadow: 'inset -8px 0 20px rgba(0,0,0,0.3), 0 10px 25px rgba(0,0,0,0.5)',
      }}
    >
      {/* Texture noise */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} 
      />

      {/* Lighting highlight / spine gleam */}
      <div className="absolute top-0 bottom-0 left-0 w-[8px] bg-gradient-to-r from-[rgba(255,255,255,0.15)] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 left-[8px] w-[4px] bg-black/25 pointer-events-none z-10" />

      {/* Pattern asset */}
      {renderPattern()}

      {/* Cover Header */}
      <div className="relative z-10 flex flex-col items-center text-center mt-2">
        <span 
          className="font-mono uppercase tracking-[0.25em] text-[8px] sm:text-[9px] opacity-60 mb-2" 
          style={{ color: textColor }}
        >
          Curated Literature
        </span>
        <div className="h-[2px] w-6" style={{ backgroundColor: accentColor }} />
      </div>

      {/* Cover Title */}
      <div className="relative z-10 my-auto text-center px-1 py-3 flex flex-col justify-center items-center">
        <h2
          className="font-serif font-black tracking-wide leading-tight select-none"
          style={{
            color: textColor,
            fontSize: size === 'xl' ? '1.4rem' : size === 'lg' ? '1.15rem' : size === 'sm' ? '0.75rem' : '0.95rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
            fontFamily: '"Cinzel", serif'
          }}
        >
          {displayTitle}
        </h2>
        {size !== 'sm' && (
          <span 
            className="font-mono text-[7px] tracking-[0.3em] font-semibold mt-1 opacity-50 block uppercase"
            style={{ color: textColor }}
          >
            Edition
          </span>
        )}
      </div>

      {/* Cover Footer / Author details */}
      <div className="relative z-10 flex flex-col items-center text-center pb-2">
        <div className="h-[1px] w-8 opacity-30 mb-2" style={{ backgroundColor: textColor }} />
        <p
          className="font-mono uppercase font-semibold tracking-wider"
          style={{
            color: textColor,
            fontSize: size === 'xl' ? '0.75rem' : size === 'lg' ? '0.65rem' : size === 'sm' ? '0.55rem' : '0.6rem',
            opacity: 0.8
          }}
        >
          {displayAuthor}
        </p>
      </div>

      {/* Tactile border outline */}
      <div 
        className="absolute inset-[4px] border pointer-events-none rounded-[2px]" 
        style={{ borderColor: `${borderColor}33` }} 
      />
    </div>
  );
}
