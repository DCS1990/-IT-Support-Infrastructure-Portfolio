'use client';

import React from 'react';
import {
  Terminal,
  Zap,
  ArrowRight,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { automationSolutions } from '@/src/data/profile';
import { DynamicIcon } from './icons';

export const Automation: React.FC = () => {
  return (
    <section
      id="automation"
      className="py-16 md:py-24 bg-blue-50/30 dark:bg-[#010309] border-b border-blue-100/80 dark:border-[#0d224e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 font-mono">
            06. Automation &amp; Process Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Software Solutions for Practical IT Challenges
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-200">
            I don&apos;t write code in isolation; I write automation scripts, full-stack portals, and reporting
            dashboards designed directly to eliminate factory downtime, replace manual paperwork, and optimize IT staff hours.
          </p>
        </div>

        {/* Real Problem-Solution Impact Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {automationSolutions.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#040916] border border-blue-100/90 dark:border-[#0d224e] shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-[#010309] text-blue-600 dark:text-blue-400 border border-transparent dark:border-[#0d224e] flex items-center justify-center">
                      <DynamicIcon name={item.iconName} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                        {item.title}
                      </h3>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="p-3 rounded-lg bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/60">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 mb-0.5">
                    Problem Identified:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    {item.problem}
                  </p>
                </div>

                {/* Practical Solution */}
                <div className="p-3 rounded-lg bg-blue-50/60 dark:bg-[#010309] border border-blue-100 dark:border-[#0d224e]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-0.5">
                    Practical Solution Built:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    {item.solution}
                  </p>
                </div>

                {/* Business Impact */}
                <div className="flex items-start gap-2 pt-1">
                  <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    <strong className="text-emerald-600 dark:text-emerald-400">Measured Impact: </strong>
                    {item.impact}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-4 border-t border-blue-100 dark:border-[#0d224e] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-blue-50/70 dark:bg-[#010309] text-blue-900 dark:text-blue-200 border border-blue-100 dark:border-[#0d224e]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-xs text-slate-400 dark:text-slate-400 font-mono">
                  Production Tested
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Development Philosophy banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#040916] border border-blue-100/90 dark:border-[#0d224e] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Looking to automate repetitive IT operations or asset reporting?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                I design lightweight, maintainable tools using modern web stacks and native Windows/Linux shell scripting.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shrink-0"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
