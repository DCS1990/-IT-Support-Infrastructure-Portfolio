'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FileDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Server,
  ShieldCheck,
  Laptop,
  Loader2,
  Camera,
  RotateCcw,
  Upload
} from 'lucide-react';
import { personalInfo } from '@/src/data/profile';
import { downloadCvFile } from '@/lib/download-cv';
import { useProfileImage } from '@/lib/use-profile-image';

export const Hero: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [justUpdated, setJustUpdated] = useState(false);
  const { profileImage, isCustom, setCustomImage, resetImage } = useProfileImage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = React.useCallback((file: File) => {
    if (file.size > 15 * 1024 * 1024) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setCustomImage(dataUrl);
        setJustUpdated(true);
        setTimeout(() => setJustUpdated(false), 4000);
      }
    };
    reader.readAsDataURL(file);
  }, [setCustomImage]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            processFile(file);
            break;
          }
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [processFile]);

  const handleResetImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    resetImage();
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadCvFile();
    } finally {
      setTimeout(() => setDownloading(false), 1200);
    }
  };
  return (
    <section
      id="top"
      className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-blue-100/50 via-blue-50/20 to-transparent dark:from-[#060e24] dark:via-[#010309] dark:to-[#010309] border-b border-blue-100/80 dark:border-[#0d224e]"
    >
      {/* Subtle background tech grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Headline: Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display leading-[1.1]">
                {personalInfo.name}
              </h1>
              {/* Role Title exactly as requested */}
              <p className="mt-3 text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 leading-snug">
                {personalInfo.roleTitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
                {personalInfo.subTitle}
              </p>
            </div>

            {/* Short Introduction strictly as provided */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.shortIntro}
            </p>

            {/* Quick highlight points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>13+ Years Enterprise IT Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>End-to-End IT Asset Management (ITAM)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Microsoft Intune &amp; Device Governance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automation with Python, React &amp; PowerShell</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm sm:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                id="hero-download-cv-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm sm:text-base font-semibold border-2 border-blue-200 dark:border-[#0d224e] hover:border-blue-300 dark:hover:border-blue-500 text-slate-800 dark:text-slate-100 bg-white dark:bg-[#040916] shadow-sm transition-all hover:bg-blue-50 dark:hover:bg-[#071226] disabled:opacity-75 cursor-pointer"
              >
                {downloading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Download CV</span>
                  </>
                )}
              </button>

              <Link
                href="/cv"
                id="hero-print-cv-link"
                className="text-xs font-semibold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4 py-2"
              >
                View / Print CV
              </Link>
            </div>

            {/* Social Links & Direct Contacts */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 text-sm border-t border-blue-100 dark:border-[#0f234e]">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect Directly:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Chaminda Sampath GitHub"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs font-medium">GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Chaminda Sampath LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs font-medium">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email Chaminda Sampath"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs font-medium">{personalInfo.email}</span>
              </a>

              <div className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Portrait & Key Operational Stats Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              
              {/* Profile Card Frame */}
              <div className="relative rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#040916] border border-blue-200/80 dark:border-[#0d224e] shadow-xl shadow-black/60">
                
                {/* Photo container */}
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-blue-50 dark:bg-[#010309] border transition-all ${
                    isDragging
                      ? 'border-2 border-dashed border-blue-500 ring-4 ring-blue-500/20 scale-[1.02]'
                      : 'border-blue-100 dark:border-[#0d224e]'
                  } group`}
                >
                  <Image
                    src={profileImage}
                    alt="Chaminda Sampath, IT Support Specialist and ICT Administrator"
                    fill
                    unoptimized={profileImage.startsWith('data:')}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                    priority
                    referrerPolicy="no-referrer"
                    suppressHydrationWarning
                  />

                  {/* Drag and Drop Active Overlay */}
                  {isDragging && (
                    <div className="absolute inset-0 z-30 bg-blue-900/80 backdrop-blur-sm flex flex-col items-center justify-center text-white p-4 text-center">
                      <Upload className="w-10 h-10 text-blue-300 animate-bounce mb-2" />
                      <p className="font-bold text-sm">Drop your photo here</p>
                      <p className="text-xs text-blue-200 mt-1">Replaces profile picture instantly</p>
                    </div>
                  )}

                  {/* Just Updated Toast Badge */}
                  {justUpdated && (
                    <div className="absolute top-3 left-3 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold shadow-lg animate-in fade-in duration-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                      <span>Profile Picture Updated!</span>
                    </div>
                  )}

                  {/* Hidden file input for custom photo upload */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="hero-photo-input"
                  />

                  {/* Floating Action to change/customize photo */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    {isCustom && (
                      <button
                        type="button"
                        onClick={handleResetImage}
                        title="Reset to default photo"
                        className="p-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md text-white border border-slate-700 hover:bg-slate-800 text-xs shadow-md transition-colors cursor-pointer"
                        aria-label="Reset photo"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      title="Upload your own photo"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/85 backdrop-blur-md text-white border border-slate-700 hover:bg-slate-800 text-xs shadow-md transition-colors cursor-pointer font-medium"
                      id="hero-change-photo-btn"
                    >
                      <Camera className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-[11px]">Change Photo</span>
                    </button>
                  </div>
                  
                  {/* Subtle verified specialist overlay tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/85 backdrop-blur-md text-white border border-slate-700/60 shadow-lg">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-white">MAS Capital (Pvt) Ltd</div>
                        <div className="text-slate-300 text-[11px]">IT Support Specialist (L1)</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono uppercase">
                        Current Role
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Meta Stats below portrait */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-blue-50/60 dark:bg-[#010309] border border-blue-100 dark:border-[#0d224e]">
                    <div className="text-xs text-slate-500 dark:text-slate-300">Education</div>
                    <div className="text-sm font-bold text-slate-800 dark:text-white">B.BM (Kelaniya)</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-50/60 dark:bg-[#010309] border border-blue-100 dark:border-[#0d224e]">
                    <div className="text-xs text-slate-500 dark:text-slate-300">Certifications</div>
                    <div className="text-sm font-bold text-slate-800 dark:text-white">CCNA &amp; ITIL V3</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Facts Banner */}
        <div className="mt-12 pt-8 border-t border-blue-100/80 dark:border-[#0d224e]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/80 dark:bg-[#040916]/95 border border-blue-100/90 dark:border-[#0d224e] shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-display">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
