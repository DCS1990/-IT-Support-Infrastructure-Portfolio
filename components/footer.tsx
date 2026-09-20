'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare, Terminal } from 'lucide-react';
import { personalInfo } from '@/src/data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020612] text-slate-400 py-12 border-t border-[#0f234e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline strictly as requested */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-7 h-7 rounded bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                CS
              </div>
              <span className="font-bold text-white tracking-tight">Chaminda Sampath</span>
            </div>
            <p className="text-xs text-slate-400">
              IT Infrastructure | IT Operations | Asset Management | Technology
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#060e22] hover:bg-[#091738] text-blue-200 hover:text-white transition-colors border border-[#0f234e]"
              aria-label="Chaminda Sampath GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#060e22] hover:bg-[#091738] text-blue-200 hover:text-white transition-colors border border-[#0f234e]"
              aria-label="Chaminda Sampath LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-[#060e22] hover:bg-[#091738] text-blue-200 hover:text-white transition-colors border border-[#0f234e]"
              aria-label="Email Chaminda Sampath"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/94776496163"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#060e22] hover:bg-[#091738] text-blue-200 hover:text-emerald-400 transition-colors border border-[#0f234e]"
              aria-label="WhatsApp Chaminda Sampath"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top & Copyright */}
          <div className="flex items-center gap-4 text-xs">
            <span>© 2026 Chaminda Sampath. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#060e22] hover:bg-[#091738] text-blue-200 hover:text-white transition-colors border border-[#0f234e] flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
