'use client';

import React from 'react';
import { assetManagementPillars } from '@/src/data/profile';
import { DynamicIcon } from './icons';
import { Check, ShieldCheck, Cpu } from 'lucide-react';

export const AssetManagement: React.FC = () => {
  return (
    <section
      id="asset-management"
      className="py-16 md:py-24 bg-white/70 dark:bg-[#010309] border-b border-blue-100/80 dark:border-[#0d224e] backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 font-mono">
            05. Core Domain Specialization
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            IT Asset Management &amp; Operational Governance
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-200">
            Enterprise apparel manufacturing requires tight physical asset control, accurate depreciation tracking,
            and flawless compliance. Here are the eleven core disciplines I administer across multi-site site operations.
          </p>
        </div>

        {/* 11 Pillars Bento / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assetManagementPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-blue-50/40 dark:bg-[#040916] border border-blue-100/90 dark:border-[#0d224e] hover:border-blue-300 dark:hover:border-blue-500 transition-all hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-[#010309] text-blue-600 dark:text-blue-400 border border-transparent dark:border-[#0d224e] flex items-center justify-center shrink-0">
                    <DynamicIcon name={pillar.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-200 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              {/* Key Activities tags */}
              <div className="pt-3 border-t border-blue-100/80 dark:border-[#0d224e]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
                  Key Operational Tasks:
                </div>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {pillar.keyActivities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Philosophy Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#040916] via-[#071226] to-[#010309] text-white shadow-lg border border-[#0d224e]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Audit Readiness Guarantee</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                Zero-Variance Asset Accounting in High-Volume Operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                By combining routine physical barcode scanning with automated Intune/AD inactive sweeps,
                discrepancies are flagged within 72 hours rather than during annual audit panics.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-colors shadow"
              >
                Discuss ITAM Strategy
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
