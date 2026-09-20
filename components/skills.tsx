'use client';

import React, { useState } from 'react';
import {
  Server,
  ClipboardCheck,
  ShieldCheck,
  Code2,
  Wrench,
  Check,
  Layers,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '@/src/data/profile';
import { DynamicIcon } from './icons';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCategories =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter(cat => cat.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-white/70 dark:bg-[#010309] border-b border-blue-100/80 dark:border-[#0d224e] backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-10">
          <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 font-mono">
            03. Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-200">
            Organized across core infrastructure, enterprise systems management, IT asset governance,
            and software development. Presented objectively with neutral skill cards without artificial percentage ratings.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeCategory === 'All'
                ? 'bg-blue-600 text-white shadow-xs font-semibold'
                : 'bg-blue-50 dark:bg-[#040916] text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-[#071226] border border-blue-200 dark:border-[#0d224e]'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.category
                  ? 'bg-blue-600 text-white shadow-xs font-semibold'
                  : 'bg-blue-50 dark:bg-[#040916] text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-[#071226] border border-blue-200 dark:border-[#0d224e]'
              }`}
            >
              {cat.category} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-white dark:bg-[#040916] border border-blue-100/90 dark:border-[#0d224e] shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-[#010309] text-blue-600 dark:text-blue-400 border border-transparent dark:border-[#0d224e] flex items-center justify-center shrink-0">
                    <DynamicIcon name={cat.iconName} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-300">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Chips / Neutral Cards */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-blue-50/50 dark:bg-[#010309] text-slate-800 dark:text-slate-100 border border-blue-100 dark:border-[#0d224e] shadow-xs hover:border-blue-400 dark:hover:border-blue-400 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-100/80 dark:border-[#0d224e] text-right">
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                  {cat.skills.length} Competencies
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
