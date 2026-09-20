'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileDown,
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  CheckCircle2,
  ExternalLink,
  Loader2,
  Camera,
  Upload
} from 'lucide-react';
import {
  personalInfo,
  experienceList,
  educationList,
  refereesList,
  personalDetails
} from '@/src/data/profile';
import { downloadCvFile } from '@/lib/download-cv';
import { useProfileImage } from '@/lib/use-profile-image';

export default function CvPage() {
  const [downloading, setDownloading] = useState(false);
  const { profileImage, setCustomImage } = useProfileImage();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [declarationDate, setDeclarationDate] = useState<string>(personalDetails.declarationDate);

  React.useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const getOrdinal = (n: number) => {
      const s = ['th', 'st', 'nd', 'rd'];
      const v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    };
    const dayStr = String(day).padStart(2, '0');
    const month = today.toLocaleString('en-US', { month: 'long' });
    const year = today.getFullYear();
    setDeclarationDate(`${dayStr}${getOrdinal(day)} of ${month} ${year}`);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          setCustomImage(dataUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          setCustomImage(dataUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadCvFile();
    } finally {
      setTimeout(() => setDownloading(false), 1200);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-blue-50/50 dark:bg-[#020612] text-slate-900 dark:text-slate-100 py-8 px-4 sm:px-6">
      
      {/* Top Floating Control Bar (Hidden when printing) */}
      <div className="print:hidden max-w-5xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-[#060e22] border border-blue-200/80 dark:border-[#0f234e] p-4 rounded-2xl shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-blue-200 dark:border-[#0f234e] hover:bg-blue-50 dark:hover:bg-[#0a1738] text-slate-700 dark:text-slate-200 transition-all"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-sm"
          >
            {downloading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <FileDown className="w-4 h-4" />
                <span>Download Official PDF</span>
              </>
            )}
          </button>

          <a
            href="/assets/Chaminda-Sampath-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400"
            title="Open raw PDF in new window"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* CV Paper Document Container */}
      <div
        id="cv-printable-document"
        className="max-w-4xl mx-auto bg-white dark:bg-[#060e22] text-slate-900 dark:text-slate-100 shadow-xl print:shadow-none print:max-w-none print:w-full border border-slate-200 dark:border-[#0f234e] print:border-none rounded-2xl print:rounded-none overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12">
          
          {/* ========================================================= */}
          {/* LEFT SIDEBAR (4 cols) */}
          {/* ========================================================= */}
          <aside className="md:col-span-4 print:col-span-4 bg-slate-50 dark:bg-[#020612] p-6 sm:p-8 border-r border-slate-200 dark:border-[#0f234e] flex flex-col gap-6">
            
            {/* Profile Photo */}
            <div className="flex flex-col items-center text-center">
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="relative w-32 h-32 rounded-xl overflow-hidden border-2 border-blue-600 shadow-md mb-4 bg-slate-200 dark:bg-[#060e22] group cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
                title="Click or drag image to update photo"
              >
                <Image
                  src={profileImage}
                  alt={personalInfo.name}
                  fill
                  unoptimized={profileImage.startsWith('data:')}
                  className="object-cover object-top"
                  priority
                  referrerPolicy="no-referrer"
                  suppressHydrationWarning
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="print:hidden absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[10px] font-medium">
                  <Camera className="w-5 h-5 text-blue-300 mb-1" />
                  <span>Update Photo</span>
                </div>
              </div>
            </div>

            {/* Profile Statement */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-[#0f234e] pb-1">
                Profile
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                A person with a passion for exciting opportunities and a thirst to learn. Seeking an opportunity where I could utilize my ICT, Management skills, and experiences gained through education and projects to the ongoing success of your company.
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify mt-2">
                Whilst I am excited to broaden my learnings under a working professional to gain knowledge and improve my technical and soft skills by giving my best effort to your valued company.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-[#0f234e] pb-1">
                Contact
              </h3>
              
              <div className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Address:</span>
                  <p className="text-slate-600 dark:text-slate-400">{personalDetails.address}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Phone / WhatsApp:</span>
                  {personalDetails.phones.map((p, i) => (
                    <p key={i} className="text-slate-600 dark:text-slate-400">{p}</p>
                  ))}
                </div>

                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Email:</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-600 dark:text-blue-400 break-all">
                    {personalInfo.email}
                  </a>
                </div>

                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">LinkedIn:</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 break-all text-[11px]"
                  >
                    linkedin.com/in/chaminda-sampath
                  </a>
                </div>
              </div>
            </div>

            {/* Core Skills with Ratings */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-[#0f234e] pb-1">
                Skills &amp; Competencies
              </h3>
              <div className="space-y-2">
                {[
                  { name: 'Active Directory', level: '100%' },
                  { name: 'VMware Workstation', level: '100%' },
                  { name: 'Microsoft Server 2016', level: '90%' },
                  { name: 'Adobe Photoshop', level: '90%' },
                  { name: 'React.js / Node.js', level: '85%' },
                  { name: 'PHP & MySQL', level: '80%' },
                  { name: 'SQL Server 2016', level: '80%' },
                  { name: 'Power Apps', level: '75%' },
                  { name: 'SCCM / Microsoft Intune', level: '85%' },
                ].map((s, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex justify-between text-slate-700 dark:text-slate-300 font-medium mb-1">
                      <span>{s.name}</span>
                      <span className="text-[10px] text-slate-500">{s.level}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-[#020612] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full"
                        style={{ width: s.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-2 text-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-[#0f234e] pb-1">
                Personal Details
              </h3>
              <div className="space-y-1.5 text-slate-700 dark:text-slate-300">
                <p><span className="font-semibold text-slate-900 dark:text-white">Gender:</span> {personalDetails.gender}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">Date of Birth:</span> {personalDetails.dob}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">Nationality:</span> {personalDetails.nationality}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">N.I.C:</span> {personalDetails.nic}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">Status:</span> {personalDetails.maritalStatus}</p>
              </div>
            </div>

            {/* Hobbies */}
            <div className="space-y-2 text-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-[#0f234e] pb-1">
                Hobbies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {personalDetails.hobbies.map((h, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white dark:bg-[#060e22] border border-slate-200 dark:border-[#0f234e] text-[11px] text-slate-600 dark:text-slate-300"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Non-Related Referees */}
            <div className="space-y-3 text-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-[#0f234e] pb-1">
                Referees
              </h3>
              {refereesList.map((ref, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white dark:bg-[#060e22] border border-slate-200 dark:border-[#0f234e]">
                  <p className="font-bold text-slate-900 dark:text-white">{ref.name}</p>
                  <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">{ref.role}</p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">{ref.company}</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-500 mt-1">{ref.address}</p>
                  <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    Tel: {ref.phone}
                  </p>
                </div>
              ))}
            </div>

          </aside>

          {/* ========================================================= */}
          {/* MAIN CONTENT AREA (8 cols) */}
          {/* ========================================================= */}
          <main className="md:col-span-8 print:col-span-8 p-6 sm:p-10 space-y-8">
            
            {/* Header / Name / Title */}
            <div className="border-b-2 border-slate-200 dark:border-[#0f234e] pb-5">
              <div className="flex items-baseline gap-2">
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
                  CHAMINDA SAMPATH
                </h1>
                <span className="text-base font-semibold text-slate-500 dark:text-slate-400">
                  (B.BM)
                </span>
              </div>
              <p className="text-base font-bold text-blue-600 dark:text-blue-400 tracking-wide mt-1 uppercase">
                ICT Administrator
              </p>
            </div>

            {/* Work Experience Section */}
            <section className="space-y-6">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#0f234e] pb-2">
                Work Experience
              </h2>

              {/* 1. MAS Capital (Pvt) Ltd - Current Role */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    MAS Capital (Pvt) Ltd - IT Support Specialist (L1)
                  </h3>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                    1 July 2026 - Present (Current Role)
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  MAS Capital (Pvt) Ltd is the strategic corporate management and shared services division of MAS Holdings, managing technology governance, digital workplace solutions, and enterprise infrastructure.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Information Technology Asset Management (ITAM):</strong> Manage enterprise hardware and software asset lifecycles, inventory governance, procurement auditing, and license optimization across organizational units.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Asset Lifecycle Analysis:</strong> Perform comprehensive IT asset lifecycle analysis, evaluating equipment utilization rates, hardware aging trends, and warranty lifespans to optimize enterprise hardware refresh planning.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Azure Virtual Desktop (AVD) Project:</strong> Spearhead operational rollout and support for the Azure Virtual Desktop (AVD) initiative, migrating high-demand workflows from physical endpoints to cloud virtual machines.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Reducing Physical Asset Purchasing:</strong> Actively reduce physical asset purchasing requirements by standardizing thin-client workstations and virtualized desktop infrastructure, delivering tangible Capex hardware savings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Endpoint Compliance &amp; Governance:</strong> Enforce endpoint security standards, Intune compliance profiles, and configuration baselines across corporate devices.</span>
                  </li>
                </ul>
              </div>

              {/* 2. MAS Kreeda */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-[#0f234e]/60">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    MAS Kreeda – Balangoda (Outsourced) - IT Site Support Administrator (L1)
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                    January 2023 - June 2026
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  MAS Holdings is a leading global apparel manufacturing company based in Sri Lanka, employing over 100,000 across multiple international facilities.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Led and managed ICT infrastructure operations within the Kreeda Business Unit manufacturing environment as team lead, supervising and guiding a team of six IT support technicians to maintain smooth daily IT operations and effective service delivery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Provided Level 1 and Level 2 IT support, including workstation configuration, troubleshooting, system maintenance, and end-user technical assistance across plant operations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Monitored and maintained network infrastructure, managing LAN/WAN connectivity, core switches, and industrial barcode/label printer terminals, coordinating escalations with network engineering teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Maintained IT process documentation, performed data backups and archiving, and ensured compliance with IT operational standards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Managed ICT asset inventory, including physical asset tracking, offline auditing, and lifecycle management of IT equipment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Developed and maintained internal web-based systems and automation using React.js, Node.js, and Python to support operational requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Coordinated with vendors and finance teams for IT-related procurement, warranty repairs, and timely supplier follow-ups.</span>
                  </li>
                </ul>
              </div>

              {/* 2. Brandix Apparel Solutions Ltd - Essentials */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-[#0f234e]/60">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Brandix Apparel Solutions Ltd - Essentials | ICT Administrator
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                    March 2022 – 2023
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  Brandix Group is the largest exporter of apparel in Sri Lanka, employing over 47,000 associates across 42 manufacturing locations.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Lead the ICT infrastructure of the business unit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Monitoring, configuring, and maintaining share point cloud services, data classification of the data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Monitoring and maintaining networks and servers. (File, AD, Backup, NAS, Application services).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Upgrading, installing, and configuring new hardware and software through the SCCM and manual.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Implementing security protocols and procedures to prevent potential threats (Crowd Strike).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Creating user accounts and performing access control.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Performing diagnostic tests and debugging procedures to optimize computer systems.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Documenting processes, as well as backing up and archiving data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Responsible for ICT Asset inventory and maintains.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Supervising and mentoring IT department employees, as well as providing IT support.</span>
                  </li>
                </ul>
              </div>

              {/* 3. Dream Curious International PVT Ltd - Dubai */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-[#0f234e]/60">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Dream Curious International PVT Ltd - Dubai | ICT Executive
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                    December 2021 – March 2022
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  Leading marketing services agency in Dubai, UAE.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Monitoring, configuring, and maintaining the main Windows platform servers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Provided high-level help desk support for the users by upgrading, installing, and configuring new hardware and software.</span>
                  </li>
                </ul>
              </div>

              {/* 4. Brandix Casualwear */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-[#0f234e]/60">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Brandix Apparel Solutions Ltd - Casualwear | ICT Administrator
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                    December 2012 – November 2021
                  </span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Led the ICT infrastructure of the casualwear washing plant in both Awissawella and Ratmalana locations. Responsible for Servers, Network, Support Desk, Security, Inventory, and ICT Governance across both washing plants and the Nivithigala sewing plant.
                </p>
              </div>
            </section>

            {/* Professional Qualification */}
            <section className="space-y-3">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#0f234e] pb-2">
                Professional Qualification
              </h2>
              <div className="space-y-2 text-xs">
                {[
                  { title: 'Bachelor of Business Management', meta: '2015 - 2019 - University of Kelaniya' },
                  { title: 'CCNA Certification Administrator', meta: '2022 - Vibernets Academy Campus - Malabe' },
                  { title: 'Diploma in Windows Network Administrator', meta: '2013 - Turnkey IT Campus – Colombo 03' },
                  { title: 'National Trade Certificate of Computer Applications', meta: '2009 - NAITA' },
                  { title: 'Higher Diploma in Computer Studies', meta: '2008 - NAC Computer System – Balangoda' },
                  { title: 'Diploma in Graphic Design / Computer Studies', meta: '2007 - 2008 - NAC Computer System - Balangoda' },
                ].map((q, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-200">• {q.title}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-right whitespace-nowrap">{q.meta}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Trainings & Certifications */}
            <section className="space-y-3">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#0f234e] pb-2">
                Trainings &amp; Certifications
              </h2>
              <div className="space-y-2 text-xs">
                {[
                  { title: 'ITIL V3 2011 Foundation', meta: '2019 - ANC Education – Colombo 03' },
                  { title: 'UNIX / Linux Fundamentals, Network & Systems Administration', meta: '2013 - University of Colombo' },
                  { title: 'Certified Leadership Development Program', meta: '2008 - University of Sabaragamuwa' },
                ].map((tr, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-200">• {tr.title}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-right whitespace-nowrap">{tr.meta}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Primary & Secondary Education */}
            <section className="space-y-2">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#0f234e] pb-2">
                Primary Education
              </h2>
              <div className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <p className="font-bold text-slate-900 dark:text-white">School: Sri Dharmananda Vidyayathana Pirivena</p>
                <p>G.C.E Advanced Level Examination – 2009: Accounting (A), Economics (B), Business Studies (S)</p>
                <p>G.C.E Ordinary Level Examination – 2006: Passed</p>
              </div>
            </section>

            {/* Declaration & Signature */}
            <div className="pt-6 border-t-2 border-slate-200 dark:border-[#0f234e] text-xs text-slate-600 dark:text-slate-400">
              <p className="italic">
                I do hereby certify that the above particulars given by me are true &amp; correct, to the best of my knowledge.
              </p>
              <div className="mt-4 flex justify-between items-end">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Chaminda Sampath</p>
                  <p className="text-[11px] text-slate-500">{declarationDate}</p>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Curriculum Vitae
                </div>
              </div>
            </div>

          </main>

        </div>
      </div>

    </div>
  );
}
