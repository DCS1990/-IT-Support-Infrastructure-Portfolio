'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Building,
  School,
  CheckCircle2
} from 'lucide-react';
import { educationList } from '@/src/data/profile';

export const Education: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');

  const filterOptions = ['All', 'Degree', 'Certification', 'Diploma', 'School'];

  const filteredItems =
    filterType === 'All'
      ? educationList
      : educationList.filter(item => item.type === filterType);

  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-white/70 dark:bg-[#010309] border-b border-blue-100/80 dark:border-[#0d224e] backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 font-mono">
              07. Academic &amp; Professional Growth
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Education &amp; Certifications
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-200">
              A solid foundation pairing a university business management degree with rigorous network engineering,
              systems administration, and IT service management credentials.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-blue-50 dark:bg-[#040916] border border-blue-200 dark:border-[#0d224e] self-start md:self-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setFilterType(opt)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterType === opt
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-blue-200 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => {
            const isDegree = item.type === 'Degree';
            const isCert = item.type === 'Certification';

            return (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  isDegree
                    ? 'bg-blue-50/60 dark:bg-[#040916] border-blue-300/80 dark:border-blue-500/80 shadow-xs'
                    : 'bg-white dark:bg-[#040916] border-blue-100/90 dark:border-[#0d224e]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-white dark:bg-[#010309] px-2.5 py-0.5 rounded-md border border-blue-100 dark:border-[#0d224e]">
                      <Calendar className="w-3 h-3" />
                      {item.year}
                    </span>

                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isDegree
                          ? 'bg-blue-600 text-white'
                          : isCert
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display mb-1.5">
                    {item.title}
                  </h3>

                  <div className="flex items-start gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 mb-3">
                    <Building className="w-3.5 h-3.5 mt-0.5 text-slate-400 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  {item.details && (
                    <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed border-t border-blue-100/80 dark:border-[#0d224e] pt-3">
                      {item.details}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-2 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-400">
                  <span>Verified Credential</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
