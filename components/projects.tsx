'use client';

import React, { useState } from 'react';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Tag,
  ArrowUpRight,
  Terminal,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { projectsList, ProjectItem } from '@/src/data/profile';
import { ProjectModal } from './project-modal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Asset Management', 'Automation & Tools', 'Web Applications'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsList
      : projectsList.filter(p => p.category === selectedFilter);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-blue-50/30 dark:bg-[#010309] border-b border-blue-100/80 dark:border-[#0d224e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 font-mono">
              04. Featured Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Applied Solutions &amp; Development
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-200">
              Practical applications, data dashboards, and automated tools developed to solve real-world
              IT operations, asset tracking, and business process challenges.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-blue-100/80 dark:bg-[#040916] border border-blue-200 dark:border-[#0d224e] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-blue-200 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-[#040916] border border-blue-100/90 dark:border-[#0d224e] shadow-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Tech Visual Header / Thumbnail */}
                <div className="relative h-44 w-full bg-gradient-to-br from-[#040916] via-[#071226] to-[#010309] p-5 flex flex-col justify-between text-white overflow-hidden border-b border-blue-100 dark:border-[#0d224e]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {project.status}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="text-xs text-blue-300/80 font-mono">Chaminda Sampath // Toolset</div>
                    <div className="text-lg font-bold text-white font-display tracking-tight line-clamp-1">
                      {project.title}
                    </div>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-200 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="text-xs text-slate-500 dark:text-slate-300 bg-blue-50/60 dark:bg-[#010309] p-3 rounded-lg border border-blue-100 dark:border-[#0d224e]">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Operational Value: </span>
                    <span>{project.problemSolved}</span>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
                      Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-blue-50/80 dark:bg-[#010309] text-blue-900 dark:text-blue-200 border border-blue-100 dark:border-[#0d224e]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-blue-100 dark:border-[#0d224e] flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center gap-1 group/btn"
                >
                  <span>Details &amp; Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-blue-50 dark:bg-[#020612] hover:bg-blue-100 dark:hover:bg-[#0a1738] border border-blue-100 dark:border-[#0f234e] transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-blue-50 dark:bg-[#020612] hover:bg-blue-100 dark:hover:bg-[#0a1738] border border-blue-100 dark:border-[#0f234e] transition-colors"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/70 dark:bg-[#060e22]/80 border border-blue-200 dark:border-[#0f234e] flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-white">Note for reviewers:</strong> All project entries are data-driven and easily configurable via <code className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900 font-mono text-xs">src/data/profile.ts</code>. New projects, GitHub links, and live production endpoints can be added without altering UI code.
          </div>
        </div>

      </div>

      {/* Project details modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
