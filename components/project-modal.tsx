'use client';

import React from 'react';
import { X, Github, ExternalLink, CheckCircle, Tag, Layers, Check } from 'lucide-react';
import { ProjectItem } from '@/src/data/profile';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#040916] border border-blue-200 dark:border-[#0d224e] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white bg-blue-50 dark:bg-[#010309] border border-blue-100 dark:border-[#0d224e] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
              {project.category}
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              {project.status}
            </span>
          </div>

          <h3 id="modal-title" className="text-2xl font-bold text-slate-900 dark:text-white font-display">
            {project.title}
          </h3>
        </div>

        {/* Overview */}
        <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
          <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-[#010309] border border-blue-100 dark:border-[#0d224e]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-1 font-mono">
              Problem &amp; Motivation
            </h4>
            <p className="text-slate-700 dark:text-slate-200">{project.problemSolved}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 font-mono">
              Project Description
            </h4>
            <p>{project.description}</p>
          </div>

          {/* Key highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-mono">
              Key Features &amp; Implementation Details
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-mono">
              Technologies &amp; Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-blue-50 dark:bg-[#010309] text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-[#0d224e]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-5 border-t border-blue-100 dark:border-[#0d224e] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-slate-900 dark:bg-[#0a1738] hover:bg-slate-800 dark:hover:bg-[#0f234e] text-white border border-transparent dark:border-[#0f234e] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-[#0a1738] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
