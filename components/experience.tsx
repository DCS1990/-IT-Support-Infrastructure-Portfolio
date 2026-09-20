'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Building2,
  Cpu,
  Layers
} from 'lucide-react';
import { experienceList } from '@/src/data/profile';

export const Experience: React.FC = () => {
  // Default open first 2 positions
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'mas-capital': true,
    'mas-kreeda': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    experienceList.forEach(exp => {
      allOpen[exp.id] = true;
    });
    setExpandedIds(allOpen);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  const areAllExpanded = experienceList.every(exp => expandedIds[exp.id]);

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-blue-50/30 dark:bg-[#010309] border-b border-blue-100/80 dark:border-[#0d224e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 font-mono">
              02. Career Timeline
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Professional Experience
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
              13+ years of continuous service managing mission-critical enterprise apparel manufacturing ICT.
            </p>
          </div>

          <button
            type="button"
            onClick={areAllExpanded ? collapseAll : expandAll}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium border border-blue-200 dark:border-[#152e68] bg-white dark:bg-[#091533] text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-colors"
          >
            {areAllExpanded ? 'Collapse All Roles' : 'Expand All Roles'}
          </button>
        </div>

        {/* Timeline items */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 dark:border-[#152e68] space-y-10">
          {experienceList.map((exp, index) => {
            const isExpanded = !!expandedIds[exp.id];

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-4 transition-colors ${
                    exp.isCurrent
                      ? 'bg-blue-600 border-white dark:border-[#010309] shadow-md ring-4 ring-blue-500/20'
                      : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-[#010309] group-hover:bg-blue-500'
                  }`}
                  aria-hidden="true"
                />

                {/* Experience Card */}
                <div className="rounded-2xl bg-white dark:bg-[#040916] border border-blue-100/90 dark:border-[#0d224e] shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all overflow-hidden">
                  
                  {/* Card Header (clickable to expand/collapse) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-5 sm:p-6 cursor-pointer select-none bg-white dark:bg-[#040916] hover:bg-blue-50/40 dark:hover:bg-[#071226]/60 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/70 px-2.5 py-0.5 rounded-full">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          {exp.isCurrent && (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                              Current Role
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                          {exp.role}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300 mt-1">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-blue-500" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <span className="hidden sm:inline-block">
                          {isExpanded ? 'Hide details' : 'Show details'}
                        </span>
                        <div className="p-1.5 rounded-full bg-blue-50 dark:bg-[#0a1738] text-slate-600 dark:text-blue-300">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Body */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-blue-100 dark:border-[#0d224e] space-y-5">
                      
                      {/* Company Context */}
                      {exp.companyDescription && (
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic bg-blue-50/50 dark:bg-[#010309] p-3 rounded-lg border-l-3 border-blue-500">
                          {exp.companyDescription}
                        </p>
                      )}

                      {/* Responsibilities List */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                          <span>Key Responsibilities &amp; Operations</span>
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-200">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Notable Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-[#071226] border border-blue-200/80 dark:border-[#0d224e]">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-2">
                            Key Accomplishments
                          </h4>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                            {exp.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technology Badges */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
                          Tools &amp; Systems Used:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-50 dark:bg-[#010309] text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-[#0d224e]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
