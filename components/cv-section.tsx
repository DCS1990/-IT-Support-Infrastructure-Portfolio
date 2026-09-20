'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileDown,
  Eye,
  CheckCircle2,
  FileText,
  Building,
  GraduationCap,
  Sparkles,
  Info,
  X,
  Printer,
  ExternalLink,
  Loader2,
  Check
} from 'lucide-react';
import { personalInfo, experienceList, educationList, refereesList, personalDetails } from '@/src/data/profile';
import { downloadCvFile } from '@/lib/download-cv';

export const CvSection: React.FC = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadSuccess(false);
    try {
      await downloadCvFile();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="cv-section"
      className="py-16 md:py-24 bg-blue-50/30 dark:bg-[#020612] border-b border-blue-100/80 dark:border-[#0f234e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Card */}
        <div className="rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-[#060e22] dark:via-[#091738] dark:to-[#020612] border border-blue-200/80 dark:border-[#0f234e] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#020612] border border-blue-200 dark:border-[#0f234e] text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
                Download Chaminda Sampath&apos;s CV
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Looking for a comprehensive resume outlining 13+ years of apparel site IT operations,
                ITAM audits, Intune device policies, and infrastructure leadership? Download the complete official PDF
                or view the print-ready document.
              </p>

              {/* Verified Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Comprehensive employment history (MAS &amp; Brandix)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>University degree (B.BM) &amp; CCNA / ITIL verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>IT Asset Management &amp; Intune specialization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Verified corporate referees &amp; full contact details</span>
                </div>
              </div>

              {/* Status Indicator */}
              {downloadSuccess && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>CV downloaded successfully! Check your downloads folder.</span>
                </div>
              )}

              {/* Instruction Note for Maintenance */}
              <div className="pt-2">
                <div className="inline-flex items-start gap-2 p-3 rounded-lg bg-blue-50/70 dark:bg-[#020612] border border-blue-100 dark:border-[#0f234e] text-xs text-slate-600 dark:text-slate-300">
                  <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Document:</strong> Authentic 2-page PDF formatted to standard resume specifications. If your browser blocks popups or downloads in iframe preview, you can also view or print the CV directly in a new tab.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column Action Cards */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {/* Primary Download Button */}
              <button
                type="button"
                onClick={handleDownload}
                disabled={isDownloading}
                id="main-download-cv-btn"
                className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Preparing PDF...</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Download Official CV (PDF)</span>
                  </>
                )}
              </button>

              {/* Secondary View & Print Page */}
              <Link
                href="/cv"
                id="view-printable-cv-btn"
                className="w-full py-3.5 px-6 rounded-xl border border-blue-200 dark:border-[#0f234e] bg-white dark:bg-[#020612] text-slate-800 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-[#0a1738] font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-blue-500" />
                <span>View &amp; Print Full CV</span>
              </Link>

              {/* Quick View Modal */}
              <button
                type="button"
                onClick={() => setShowPreviewModal(true)}
                className="w-full py-2.5 px-4 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Quick View Highlights Modal</span>
              </button>

              {/* Direct fallback link */}
              <div className="text-center">
                <a
                  href="/assets/Chaminda-Sampath-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2"
                >
                  <span>Open PDF in new tab</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* CV Quick View Modal */}
      {showPreviewModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
          onClick={() => setShowPreviewModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#060e22] border border-slate-200 dark:border-[#0f234e] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPreviewModal(false)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-[#020612] border border-transparent dark:border-[#0f234e]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal CV Header */}
            <div className="border-b border-slate-200 dark:border-[#0f234e] pb-5 mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                {personalInfo.name} (B.BM)
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-wide">
                ICT Administrator
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                <span>{personalInfo.email}</span>
                <span>•</span>
                <span>{personalInfo.phone}</span>
                <span>•</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Modal CV Body */}
            <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Profile Summary
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm">
                  A person with a passion for exciting opportunities and a thirst to learn. Seeking an opportunity where I could utilize my ICT, Management skills, and experiences gained through education and projects to the ongoing success of your company.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Career Experience History
                </h4>
                <div className="space-y-4">
                  {experienceList.map((exp) => (
                    <div key={exp.id} className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#020612] border border-slate-200/60 dark:border-[#0f234e]">
                      <div className="flex justify-between items-start text-xs sm:text-sm">
                        <span className="font-bold text-slate-900 dark:text-white">{exp.role}</span>
                        <span className="text-xs font-mono text-blue-600 dark:text-blue-400">{exp.period}</span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                        {exp.company} • {exp.location}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {exp.responsibilities[0]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Education &amp; Key Certifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {educationList.slice(0, 4).map((edu, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#020612] border border-slate-200/60 dark:border-[#0f234e]">
                      <div className="font-bold text-slate-800 dark:text-slate-200">{edu.title}</div>
                      <div className="text-slate-500 dark:text-slate-400">{edu.institution} ({edu.year})</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Referees */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Corporate Referees
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {refereesList.map((ref, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-[#020612] border border-slate-200 dark:border-[#0f234e]">
                      <p className="font-bold text-slate-900 dark:text-white">{ref.name}</p>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-[11px]">{ref.role}</p>
                      <p className="text-slate-500 text-[11px]">{ref.company}</p>
                      <p className="text-slate-600 dark:text-slate-300 mt-1 font-semibold">Tel: {ref.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Action footer */}
            <div className="mt-8 pt-5 border-t border-slate-200 dark:border-[#0f234e] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border border-slate-300 dark:border-[#0f234e] hover:bg-slate-100 dark:hover:bg-[#0a1738] text-slate-700 dark:text-slate-200"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print View</span>
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#0a1738]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

