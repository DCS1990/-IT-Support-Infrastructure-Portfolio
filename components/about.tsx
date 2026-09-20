'use client';

import React from 'react';
import {
  Server,
  Users,
  Network,
  Wrench,
  Boxes,
  Laptop,
  Activity,
  Truck,
  FileCheck,
  Zap,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '@/src/data/profile';

const focusAreas = [
  {
    icon: Server,
    title: 'IT Infrastructure Support',
    description:
      'Windows Server 2016, Active Directory, DNS/DHCP, VMware virtualization, NAS storage, and automated scheduled backups for 99.9% site uptime.'
  },
  {
    icon: Users,
    title: 'End-User & Help Desk Support',
    description:
      'Level 1 and Level 2 diagnostic resolution, workstation imaging, onboarding, peripheral setup, and leading a 6-technician site support team.'
  },
  {
    icon: Network,
    title: 'Network & Connectivity',
    description:
      'LAN/WAN diagnostics, switch/router troubleshooting, VLAN tagging, WiFi access point deployments, and coordinating with enterprise network engineering.'
  },
  {
    icon: Wrench,
    title: 'Hardware & Software Support',
    description:
      'Comprehensive maintenance of PCs, thermal barcode printers, industrial factory terminals, OS upgrades, and patch deployment through SCCM.'
  },
  {
    icon: Boxes,
    title: 'IT Asset Management (ITAM)',
    description:
      'Tracking hardware lifecycles from procurement tagging and custodian assignment to depreciation analysis, warranty tracking, and secure disposal.'
  },
  {
    icon: Laptop,
    title: 'Microsoft Intune & MDM',
    description:
      'Enforcing endpoint security policies, Windows Autopilot provisioning, compliance baselines, remote wiping, and Entra ID (Azure AD) sync.'
  },
  {
    icon: Activity,
    title: 'IT Operations & Reliability',
    description:
      'Running proactive site health monitoring, disaster recovery protocols, standard operating procedure documentation, and shift handovers.'
  },
  {
    icon: Truck,
    title: 'Vendor & Repair Coordination',
    description:
      'Managing external warranty claims, repair quotation assessments, loaner hardware rotation, procurement verification, and supplier SLAs.'
  },
  {
    icon: FileCheck,
    title: 'IT Audits & Asset Reconciliation',
    description:
      'Performing physical floor serial audits, investigating inactive/offline devices, aligning physical counts with digital records, and passing compliance audits.'
  },
  {
    icon: Zap,
    title: 'Process Improvement',
    description:
      'Eliminating procedural redundancies, digitizing paper approvals, and standardizing site ICT request flows to accelerate ticket resolution.'
  },
  {
    icon: Code2,
    title: 'Automation & App Development',
    description:
      'Engineering practical tools using Python, React, Next.js, PowerShell, and Google Apps Script to automate asset reporting and site operations.'
  }
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white/70 dark:bg-[#010309]/80 border-b border-blue-100/80 dark:border-[#0d224e] backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 font-mono">
            01. Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            About Chaminda Sampath
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Bridging hands-on industrial IT infrastructure reliability with modern asset governance,
            team leadership, and targeted automation engineering.
          </p>
        </div>

        {/* Narrative Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-8 space-y-4 text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            {personalInfo.extendedAbout.map((para, idx) => (
              <p key={idx} className="p-4 rounded-xl bg-blue-50/50 dark:bg-[#040916] border border-blue-100/80 dark:border-[#0d224e] dark:text-slate-200">
                {para}
              </p>
            ))}
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#040916] via-[#071226] to-[#010309] text-white shadow-md border border-[#0d224e] space-y-4">
              <h3 className="text-lg font-bold text-white border-b border-[#0d224e] pb-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-400" />
                <span>Executive Summary</span>
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Current Role:</strong> IT Support Specialist (L1) – MAS Capital (Pvt) Ltd
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Experience:</strong> Over 13 years in factory &amp; enterprise ICT (since 2012)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Education:</strong> Bachelor of Business Management (B.BM), Univ. of Kelaniya
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Core Specialization:</strong> ITAM, Infrastructure Support, Network Diagnostics &amp; Automation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Base:</strong> Balangoda, Sri Lanka (Worked in Sri Lanka &amp; Dubai)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 11 Core Competencies Grid */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Core Operational Focus Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white dark:bg-[#040916] border border-blue-100/80 dark:border-[#0d224e] hover:border-blue-300 dark:hover:border-blue-400 transition-all hover:shadow-xs group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-[#010309] text-blue-600 dark:text-blue-400 border border-transparent dark:border-[#0d224e] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-200 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
