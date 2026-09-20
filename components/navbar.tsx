'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './theme-provider';
import {
  Sun,
  Moon,
  Menu,
  X,
  FileDown,
  FileText,
  Terminal,
  Server,
  Briefcase,
  Wrench,
  FolderGit2,
  Boxes,
  GraduationCap,
  Mail,
  User
} from 'lucide-react';
import { personalInfo } from '@/src/data/profile';

const navLinks = [
  { href: '#top', label: 'Home', icon: Terminal },
  { href: '#about', label: 'About', icon: User },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Wrench },
  { href: '#projects', label: 'Projects', icon: FolderGit2 },
  { href: '#asset-management', label: 'Asset Management', icon: Boxes },
  { href: '#automation', label: 'Automation', icon: Server },
  { href: '#education', label: 'Education', icon: GraduationCap },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        if (section === 'top') {
          if (window.scrollY < 300) {
            setActiveSection('top');
            break;
          }
          continue;
        }
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#010309]/96 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#0d224e] text-white'
          : 'bg-white/90 dark:bg-[#010309]/92 backdrop-blur-md border-b border-blue-200/80 dark:border-[#0d224e] text-slate-900 dark:text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Name */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#top');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Chaminda Sampath Portfolio"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              CS
            </div>
            <div>
              <span className="font-bold text-base md:text-lg tracking-tight block leading-tight font-display">
                Chaminda Sampath
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline-block">
                IT Support &amp; Asset Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/80 font-semibold'
                      : isScrolled
                      ? 'text-slate-200 hover:text-white hover:bg-[#0e1f48]'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-[#0e1f48]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              aria-label={
                mounted
                  ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`
                  : 'Switch to light mode'
              }
              className={`p-2 rounded-lg transition-colors border ${
                isScrolled
                  ? 'border-[#0f234e] bg-[#060e22] text-blue-200 hover:bg-[#0a1738]'
                  : 'border-blue-200 dark:border-[#0f234e] bg-blue-50/80 dark:bg-[#060e22] text-blue-900 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-[#0a1738]'
              }`}
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600" />
                )
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>

            {/* Quick CV view & download button */}
            <Link
              href="/cv"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all hover:shadow"
              id="navbar-cv-btn"
            >
              <FileText className="w-4 h-4" />
              <span>CV / Resume</span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-[#0a1738] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="xl:hidden bg-white/95 dark:bg-[#010309]/98 backdrop-blur-md border-b border-blue-200 dark:border-[#0d224e] shadow-xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-[#040916] text-blue-600 dark:text-blue-400 font-semibold border border-transparent dark:border-[#0d224e]'
                      : 'text-slate-700 dark:text-slate-100 hover:bg-blue-50 dark:hover:bg-[#071226]'
                  }`}
                >
                  <Icon className="w-4 h-4 text-slate-400 dark:text-blue-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-blue-100 dark:border-[#0d224e] flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {personalInfo.location}
            </span>
            <Link
              href="/cv"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Download CV</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
