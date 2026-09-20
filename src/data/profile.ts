/**
 * ============================================================================
 * CHAMINDASAMPATH - PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * Central data file storing all personal details, work history, skills,
 * projects, asset management pillars, and educational background.
 * 
 * To customize your portfolio:
 * - Update your contact details, social links, or bio in `personalInfo`
 * - Add or modify jobs in `experienceList`
 * - Add or modify projects in `projectsList`
 * - Add or adjust skills in `skillCategories`
 * - Replace your CV file at `/public/assets/Chaminda-Sampath-CV.pdf`
 * ============================================================================
 */

export interface PersonalInfo {
  name: string;
  roleTitle: string;
  subTitle: string;
  shortIntro: string;
  extendedAbout: string[];
  location: string;
  email: string;
  whatsapp: string;
  phone: string;
  linkedin: string;
  github: string;
  cvUrl: string;
  profileImage: string;
  availability: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  isCurrent?: boolean;
  companyDescription?: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Asset Management' | 'Automation & Tools' | 'Web Applications' | 'Infrastructure' | 'Internal Tool';
  description: string;
  problemSolved: string;
  technologies: string[];
  status: 'In Production' | 'Completed' | 'Internal Tool';
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  imagePlaceholderColor?: string;
}

export interface AssetManagementPillar {
  title: string;
  description: string;
  iconName: string;
  keyActivities: string[];
}

export interface AutomationSolution {
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  iconName: string;
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  type: 'Degree' | 'Certification' | 'Diploma' | 'School';
  details?: string;
}

export interface RefereeItem {
  name: string;
  role: string;
  company: string;
  address: string;
  phone: string;
  email?: string;
}

export interface PersonalDetails {
  gender: string;
  dob: string;
  nationality: string;
  nic: string;
  maritalStatus: string;
  address: string;
  phones: string[];
  email: string;
  hobbies: string[];
  declarationDate: string;
}

export const personalInfo: PersonalInfo = {
  name: "Chaminda Sampath",
  roleTitle: "IT Support Specialist | Infrastructure | IT Operations | Asset Management",
  subTitle: "ICT Administrator, B.BM | Over 13 Years Enterprise IT Experience",
  shortIntro:
    "I specialize in IT infrastructure support, site operations, asset management, network support, troubleshooting, and technology solutions. I also develop practical applications and automation tools to improve IT operations and business processes.",
  extendedAbout: [
    "With over 13 years of enterprise ICT administration and support experience across Sri Lanka and the UAE, I have managed high-availability IT infrastructures in demanding apparel manufacturing environments including Brandix Apparel Solutions and MAS Holdings.",
    "My hands-on expertise spans core infrastructure—from Windows Server 2016, Active Directory, and Cisco networks to VMware virtualization, backup strategies, and Microsoft Intune / Entra ID device governance.",
    "Beyond day-to-day L1/L2 support and managing a team of six IT technicians, I specialize in end-to-end IT Asset Management (ITAM): physical audits, offline asset reconciliation, aging analysis, vendor coordination, and compliant disposal.",
    "To solve recurring operational bottlenecks, I leverage software development and scripting (Python, TypeScript, React, Next.js, PowerShell, and Google Apps Script) to deliver custom asset dashboards, automated reconciliation systems, and internal workflow tools."
  ],
  location: "Balangoda, Sri Lanka",
  email: "chaminda.d.sampath@gmail.com",
  whatsapp: "+94 77 649 6163",
  phone: "+94 75 560 6269",
  linkedin: "https://www.linkedin.com/in/chaminda-sampath-7aab40104/",
  github: "https://github.com/DCS1990",
  cvUrl: "/assets/Chaminda-Sampath-CV.pdf",
  profileImage: "/assets/chaminda-profile.jpg",
  availability: "Open to senior IT Support, Infrastructure & Asset Management Opportunities",
  stats: [
    {
      value: "13+",
      label: "Years in Enterprise IT",
      description: "Administering production networks & servers since 2012"
    },
    {
      value: "2",
      label: "Apparel Conglomerates",
      description: "Proven track record at Brandix Group & MAS Holdings"
    },
    {
      value: "6",
      label: "Technicians Led",
      description: "Mentored site support teams delivering L1/L2 SLA resolution"
    },
    {
      value: "3",
      label: "Sites Managed",
      description: "Simultaneous multi-site ICT governance & inventory control"
    }
  ]
};

export const experienceList: ExperienceItem[] = [
  {
    id: "mas-capital",
    period: "1 July 2026 – Present",
    role: "IT Support Specialist (L1)",
    company: "MAS Capital (Pvt) Ltd",
    location: "Colombo / Sri Lanka",
    isCurrent: true,
    companyDescription:
      "MAS Capital (Pvt) Ltd is the strategic corporate management and shared services arm of MAS Holdings, driving enterprise technology governance, digital workplace solutions, and cloud infrastructure across the conglomerate.",
    responsibilities: [
      "Manage Information Technology Asset Management (ITAM), including enterprise hardware and software asset lifecycles, inventory governance, procurement auditing, and license optimization across organizational units.",
      "Conduct in-depth IT asset lifecycle analysis, evaluating equipment utilization rates, hardware aging metrics, and warranty coverage to optimize enterprise refresh planning.",
      "Spearhead the rollout and operational support for the Azure Virtual Desktop (AVD) initiative, migrating high-demand workflows from physical endpoints to cloud virtual machines.",
      "Actively reduce physical asset purchasing by standardizing thin-client workstations and virtualized desktop infrastructure, delivering measurable hardware cost savings.",
      "Enforce endpoint security standards, Intune compliance profiles, and configuration baselines across corporate devices.",
      "Collaborate with cross-functional IT operations, enterprise architecture, and finance teams to streamline IT procurement and licensing."
    ],
    technologies: [
      "Information Technology Asset Management (ITAM)",
      "Microsoft Entra ID (Azure AD)",
      "Azure Virtual Desktop (AVD)",
      "Asset Lifecycle Analysis",
      "Cost Reduction & Thin Clients",
      "Microsoft Intune (MDM/MAM)",
      "PowerShell Automation",
      "Windows 11 Enterprise"
    ],
    achievements: [
      "Pioneered the Azure Virtual Desktop (AVD) implementation, significantly reducing dependence on high-cost physical endpoint purchases.",
      "Formulated comprehensive asset lifecycle models that curtailed premature equipment replacement and streamlined corporate hardware budget allocations."
    ]
  },
  {
    id: "mas-kreeda",
    period: "January 2023 – June 2026",
    role: "IT Site Support Administrator (L1)",
    company: "MAS Kreeda – Balangoda (Outsourced)",
    location: "Balangoda, Sri Lanka",
    isCurrent: false,
    companyDescription:
      "MAS Holdings is a leading global apparel manufacturing company based in Sri Lanka, employing over 100,000 associates across multiple international facilities.",
    responsibilities: [
      "Led and managed ICT infrastructure operations within the Kreeda Business Unit manufacturing environment as team lead, supervising and guiding a team of six IT support technicians to maintain smooth daily IT operations, high plant availability, and SLA compliance.",
      "Delivered comprehensive Level 1 and Level 2 IT support, including workstation configuration, hardware diagnostics, system maintenance, and hands-on end-user technical assistance across production shifts.",
      "Monitored and maintained site network infrastructure, managing LAN/WAN connectivity, core switches, wireless APs, and industrial barcode/label printer terminals, coordinating escalations with network engineering teams.",
      "Maintained IT process documentation, scheduled disaster recovery data backups, and ensured strict compliance with MAS corporate IT operational standards.",
      "Governed the ICT asset inventory, executing physical asset audits, offline reconciliation routines, and end-to-end lifecycle tracking across factory plants.",
      "Engineered and maintained internal web-based systems and operational dashboards using React.js and Node.js to solve facility floor workflow challenges.",
      "Coordinated with equipment vendors and finance teams for IT-related procurement, warranty repairs, and timely supplier follow-ups."
    ],
    technologies: [
      "Team Leadership (6 Technicians)",
      "Manufacturing ICT Operations",
      "L1 & L2 Support",
      "LAN/WAN & Industrial Hardware",
      "ITAM Auditing & Reconciliation",
      "Microsoft Intune & Active Directory",
      "React.js & Node.js",
      "Vendor Coordination"
    ],
    achievements: [
      "Supervised a high-performing site support team of 6 technicians achieving consistently superior help desk SLA ratings.",
      "Standardized asset auditing and offline inventory reconciliation, eliminating untracked hardware discrepancies across the Kreeda plant."
    ]
  },
  {
    id: "brandix-essentials",
    period: "March 2022 – 2023",
    role: "ICT Administrator",
    company: "Brandix Apparel Solutions Ltd – Essentials",
    location: "Sri Lanka",
    companyDescription:
      "Brandix Group is Sri Lanka's largest apparel exporter with over 47,000 associates across 42 manufacturing facilities in Sri Lanka, India, and Bangladesh.",
    responsibilities: [
      "Led the ICT infrastructure across the business unit, ensuring 99.9% uptime for factory manufacturing lines.",
      "Monitored, configured, and maintained servers: Active Directory, DNS/DHCP, file servers, NAS storage, and scheduled backup repositories.",
      "Configured and maintained SharePoint cloud document libraries and enforced corporate data classification standards.",
      "Automated and executed hardware upgrades and software deployments using Microsoft SCCM alongside manual installations.",
      "Enforced endpoint security protocols and threat mitigation using CrowdStrike Falcon endpoint protection.",
      "Administered user accounts, role-based access control, security groups, and multi-factor authentication.",
      "Maintained comprehensive IT process documentation, disaster recovery runbooks, and asset inventory registries."
    ],
    technologies: [
      "Active Directory",
      "Microsoft SCCM",
      "CrowdStrike Falcon",
      "SharePoint Cloud",
      "NAS & Backup Systems",
      "Windows Server 2016",
      "DHCP & DNS"
    ]
  },
  {
    id: "dream-curious",
    period: "December 2021 – March 2022",
    role: "ICT Executive",
    company: "Dream Curious International Pvt Ltd",
    location: "Dubai, United Arab Emirates",
    companyDescription:
      "A prominent marketing, technology, and branding services agency operating in Dubai, UAE.",
    responsibilities: [
      "Monitored, configured, and maintained core Windows platform servers and branch network connectivity.",
      "Provided high-level help desk and technical troubleshooting to corporate end-users across executive offices.",
      "Installed, upgraded, and configured new laptops, workstations, network peripherals, and productivity software suites."
    ],
    technologies: [
      "Windows Server",
      "Help Desk Support",
      "Hardware Rollout",
      "Network Troubleshooting",
      "Office 365"
    ]
  },
  {
    id: "brandix-casualwear",
    period: "December 2012 – November 2021",
    role: "ICT Administrator",
    company: "Brandix Apparel Solutions Ltd – Casualwear",
    location: "Awissawella, Ratmalana & Nivithigala, Sri Lanka",
    companyDescription:
      "Longest tenure spanning nearly 9 years directing IT infrastructure, systems, and compliance across 3 major apparel washing and sewing plants.",
    responsibilities: [
      "Directed the complete ICT infrastructure for the industrial casualwear washing plants in Awissawella and Ratmalana.",
      "Concurrently administered the Nivithigala sewing facility, maintaining continuous ICT governance across three distinct geographic sites.",
      "Owned end-to-end server administration, network switches, cabling infrastructure, support desk, security, and hardware inventories.",
      "Conducted routine physical audits and asset reconciliation, ensuring 100% compliance with Brandix corporate audit standards.",
      "Supervised IT vendor contracts, equipment maintenance, and preventive care for mission-critical production machinery terminals."
    ],
    technologies: [
      "Multi-Site Management",
      "Windows Server Administration",
      "Cisco Networking",
      "Disaster Recovery & Backup",
      "IT Audit & Governance",
      "Asset Lifecycle Tracking"
    ],
    achievements: [
      "Maintained high infrastructure availability across multi-shift factory operations for nearly a decade.",
      "Simultaneously completed Bachelor of Business Management and professional diplomas during active employment."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "IT Infrastructure",
    description: "Core systems, networking, hardware, and physical site operational reliability",
    iconName: "Server",
    skills: [
      "IT Support (L1 & L2)",
      "Infrastructure Support",
      "Network Troubleshooting",
      "Hardware Diagnostics & Repair",
      "Printer & Peripheral Support",
      "Windows Support & Optimization",
      "End User Support & Training",
      "VMware Workstation",
      "Cisco Networking Fundamentals"
    ]
  },
  {
    category: "Asset Management",
    description: "End-to-end ITAM, auditing, compliance, aging analysis, and lifecycle tracking",
    iconName: "ClipboardCheck",
    skills: [
      "IT Asset Management (ITAM)",
      "Physical Asset Auditing",
      "Offline Asset Reconciliation",
      "Hardware Lifecycle Management",
      "Software Asset & License Tracking",
      "Vendor & Repair Management",
      "Asset Aging & Depreciation Analysis",
      "IT Disposal & E-Waste Process"
    ]
  },
  {
    category: "Microsoft / Enterprise",
    description: "Modern workplace management, directory services, and enterprise security",
    iconName: "ShieldCheck",
    skills: [
      "Microsoft Intune",
      "Windows Server 2016",
      "Microsoft 365 Administration",
      "Microsoft Entra ID (Azure AD)",
      "Device Management & MDM",
      "SCCM Deployment",
      "SharePoint Cloud & Classification",
      "Azure Virtual Desktop (AVD)",
      "CrowdStrike Falcon Endpoint Security"
    ]
  },
  {
    category: "Development & Software",
    description: "Building production web applications and internal tools to solve real IT problems",
    iconName: "Code2",
    skills: [
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "React.js",
      "Next.js",
      "Node.js",
      "REST APIs",
      "Firebase",
      "MongoDB",
      "MySQL & SQL Server",
      "PHP"
    ]
  },
  {
    category: "Tools & Automation",
    description: "Scripting, DevOps, version control, and operational automation pipelines",
    iconName: "Wrench",
    skills: [
      "Git & GitHub",
      "Docker Basics",
      "PowerShell Scripting",
      "Google Apps Script",
      "Batch & Automation Scripts",
      "Excel Data Analysis",
      "Power Apps",
      "ITIL V3 Foundation"
    ]
  }
];

export const projectsList: ProjectItem[] = [
  {
    id: "it-asset-management-system",
    title: "IT Asset Management System",
    category: "Asset Management",
    description:
      "An internal asset management solution designed to improve IT asset tracking, physical reconciliation, automated reporting, and complete lifecycle monitoring.",
    problemSolved:
      "Eliminated manual spreadsheet discrepancies across thousands of site devices by establishing a centralized relational database with audit logs and barcode verification.",
    technologies: ["Python", "JavaScript", "REST API", "MySQL", "React"],
    status: "In Production",
    githubUrl: "https://github.com/DCS1990",
    liveUrl: "#",
    highlights: [
      "Centralized hardware registry with automated warranty status calculations",
      "Audit trail tracking asset handovers, technician assignments, and return dates",
      "Role-based access control for department heads and IT support staff"
    ]
  },
  {
    id: "asset-audit-reconciliation-dashboard",
    title: "Asset Audit & Reconciliation Dashboard",
    category: "Asset Management",
    description:
      "An analytics dashboard for monitoring asset verification status, pinpointing offline devices, categorizing asset aging, and viewing live reconciliation metrics.",
    problemSolved:
      "Allowed IT leadership to instantly see discrepancies between Active Directory / Intune active records and physical floor audit counts.",
    technologies: ["Python", "Excel Data Analysis", "Interactive Dashboard", "REST API"],
    status: "Completed",
    githubUrl: "https://github.com/DCS1990",
    liveUrl: "#",
    highlights: [
      "Visual breakdown of active, idle, in-repair, and decommissioned assets",
      "Automated alerts for machines offline for >30 consecutive days",
      "Exportable executive summary reports for internal IT compliance audits"
    ]
  },
  {
    id: "it-repair-management-dashboard",
    title: "IT Repair Management Dashboard",
    category: "Asset Management",
    description:
      "An internal operational solution for logging repair requests, tracking vendor inspections, managing quotations, and observing real-time repair progress.",
    problemSolved:
      "Streamlined multi-vendor hardware repair workflows, preventing lost warranty units and minimizing printer/workstation downtime.",
    technologies: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    status: "In Production",
    githubUrl: "https://github.com/DCS1990",
    liveUrl: "#",
    highlights: [
      "Status tracking pipeline from 'Under Inspection' to 'Vendor Quotation' to 'Completed'",
      "Cost tracking per hardware category to inform future procurement decisions",
      "Automated email notifications to technicians when repaired units are ready for pickup"
    ]
  },
  {
    id: "attendance-management-system",
    title: "Attendance Management System",
    category: "Web Applications",
    description:
      "A responsive web-based attendance and leave management solution featuring user access control, multi-level approval workflows, and comprehensive reporting.",
    problemSolved:
      "Replaced manual paper roster forms with an intuitive web application providing instant supervisor approvals and shift verification.",
    technologies: ["Next.js", "TypeScript", "Firebase Auth", "MongoDB", "Tailwind CSS"],
    status: "Completed",
    githubUrl: "https://github.com/DCS1990",
    liveUrl: "#",
    highlights: [
      "Role-based dashboard for employees, team leads, and department heads",
      "Real-time attendance summary analytics with date-range export filters",
      "Secure authentication and mobile-optimized approval interface"
    ]
  },
  {
    id: "endpoint-connectivity-monitor",
    title: "Automated Endpoint & Switch Monitor",
    category: "Automation & Tools",
    description:
      "A lightweight automated monitoring script that continually polls network switches, factory floor thermal printers, and production terminals, dispatching alerts upon downtime.",
    problemSolved:
      "Proactively informed the IT support team of localized network drops before factory floor supervisors logged support tickets.",
    technologies: ["PowerShell", "Python", "Windows Task Scheduler", "SMTP API"],
    status: "In Production",
    githubUrl: "https://github.com/DCS1990",
    liveUrl: "#",
    highlights: [
      "Ping sweep with threshold-based failure triggers to reduce false positives",
      "Detailed event logging for root-cause analysis during post-incident reviews",
      "Runs seamlessly in background with negligible server overhead"
    ]
  },
  {
    id: "intune-sheet-sync-automation",
    title: "Intune & Inventory Sync Automation",
    category: "Automation & Tools",
    description:
      "A custom automation script bridging Microsoft Intune device exports with internal site asset databases and Google Sheets for daily operational cross-checks.",
    problemSolved:
      "Eliminated 4 hours of weekly manual data entry comparing Intune enrollment with physical inventory tagging numbers.",
    technologies: ["Google Apps Script", "PowerShell", "Microsoft Graph API", "JSON"],
    status: "Completed",
    githubUrl: "https://github.com/DCS1990",
    liveUrl: "#",
    highlights: [
      "Automated data parsing matching MAC addresses, serial numbers, and assigned users",
      "Highlights missing or non-compliant machines with automated color coding",
      "Scheduled bi-weekly unattended execution"
    ]
  }
];

export const assetManagementPillars: AssetManagementPillar[] = [
  {
    title: "Asset Lifecycle Management",
    description: "Complete oversight from initial procurement and provisioning to deployment, maintenance, and eventual retirement.",
    iconName: "RefreshCw",
    keyActivities: ["Procurement tagging", "Standardized imaging", "Maintenance schedules", "Decommissioning"]
  },
  {
    title: "Physical Asset Verification",
    description: "Hands-on site audits validating physical serial numbers against digital inventory records across all production lines.",
    iconName: "ScanLine",
    keyActivities: ["Barcode scanning", "Location verification", "Custodian assignment", "Floor tag checks"]
  },
  {
    title: "Offline Asset Reconciliation",
    description: "Systematic investigation of endpoints inactive on the network to prevent lost, stolen, or misplaced equipment.",
    iconName: "WifiOff",
    keyActivities: ["AD inactive query", "Department sweeps", "Intune sync analysis", "Status classification"]
  },
  {
    title: "Asset Aging Analysis",
    description: "Tracking device age, warranty milestones, and depreciation to plan timely refresh cycles and budget projections.",
    iconName: "Clock",
    keyActivities: ["Depreciation tracking", "Warranty expiration logs", "Refresh forecasting", "Cost-benefit analysis"]
  },
  {
    title: "IT Disposal Process",
    description: "Secure, environmentally compliant e-waste handling including certified storage media sanitization.",
    iconName: "Trash2",
    keyActivities: ["Secure data wiping", "Certification of destruction", "Hazardous e-waste compliance", "Scrap documentation"]
  },
  {
    title: "Hardware Repair Management",
    description: "Supervising internal diagnostics, external vendor RMA dispatches, warranty claims, and turnaround SLAs.",
    iconName: "Wrench",
    keyActivities: ["RMA tracking", "Vendor quotation checks", "Loaner device dispatch", "Quality inspection"]
  },
  {
    title: "Software License Tracking",
    description: "Ensuring license compliance, eliminating dormant subscriptions, and monitoring software installations via Intune.",
    iconName: "ShieldAlert",
    keyActivities: ["M365 seat audits", "Installed software reviews", "Compliance validation", "Cost optimization"]
  },
  {
    title: "Intune Device Management",
    description: "Centrally managing endpoint configurations, compliance policies, remote wipes, and software updates.",
    iconName: "Laptop",
    keyActivities: ["Autopilot enrollment", "Configuration profiles", "Conditional access sync", "Remote wipe protocols"]
  },
  {
    title: "IT Audit Support",
    description: "Preparing audit documentation, asset logs, and reconciliation proofs for internal and external corporate compliance auditors.",
    iconName: "FileCheck2",
    keyActivities: ["Evidence gathering", "Variance justification", "SOP compliance", "Audit walkthroughs"]
  },
  {
    title: "Vendor Coordination",
    description: "Liaising with hardware suppliers, service providers, and finance teams to ensure SLA adherence and fair quotation pricing.",
    iconName: "Users",
    keyActivities: ["Quotation negotiations", "Service level tracking", "Procurement approvals", "Supplier relationship"]
  },
  {
    title: "IT Reporting & Dashboards",
    description: "Transforming raw inventory and ticket data into actionable visual insights for site executives and IT leadership.",
    iconName: "BarChart3",
    keyActivities: ["Uptime KPIs", "Asset health dashboards", "Discrepancy summaries", "Monthly management packs"]
  }
];

export const automationSolutions: AutomationSolution[] = [
  {
    title: "Asset Reconciliation Engine",
    category: "IT Operations",
    problem: "Discrepancies between physical shop floor computers and Active Directory / Intune cloud registries.",
    solution: "Developed custom Python scripts to parse CSV exports from Intune and compare against physical inventory logs.",
    impact: "Cut weekly audit time from 6 hours to 15 minutes while achieving 99.4% record accuracy.",
    tech: ["Python", "Pandas", "Excel", "CSV"],
    iconName: "FileSpreadsheet"
  },
  {
    title: "Network Switch & Printer Ping Sweep",
    category: "Site Monitoring",
    problem: "Thermal barcode printers and edge switches failing during off-shifts without immediate technician notification.",
    solution: "Deployed a lightweight PowerShell daemon running on a local server checking IP availability every 3 minutes.",
    impact: "Reduced unannounced production line halts by catching offline peripherals before workers report tickets.",
    tech: ["PowerShell", "Windows Service", "SMTP"],
    iconName: "Activity"
  },
  {
    title: "Internal IT Repair Portal",
    category: "Workflow Automation",
    problem: "Equipment sent for external repairs tracked via fragmented paper slips and email threads.",
    solution: "Created a full-stack Next.js tracking dashboard with stages for inspection, quotation approval, and dispatch.",
    impact: "100% visibility on repair status, eliminating duplicate vendor inquiries and accelerating turnaround by 35%.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    iconName: "Layers"
  },
  {
    title: "Daily Intune Attendance & Asset Cross-Check",
    category: "Productivity",
    problem: "Verifying laptop custodian presence and equipment status across factory departments.",
    solution: "Built Google Apps Script integrations that fetch device last-seen timestamps and map to employee rosters.",
    impact: "Quickly flags devices that have not connected to corporate Wi-Fi for prolonged periods.",
    tech: ["Google Apps Script", "Microsoft Graph", "REST API"],
    iconName: "CheckCircle2"
  }
];

export const educationList: EducationItem[] = [
  {
    year: "2015 – 2019",
    title: "Bachelor of Business Management (B.BM)",
    institution: "University of Kelaniya, Sri Lanka",
    type: "Degree",
    details: "Focus on operational management, business processes, systems integration, and organizational strategy."
  },
  {
    year: "2022",
    title: "CCNA Certification Administrator",
    institution: "Vibernets Academy Campus, Malabe",
    type: "Certification",
    details: "Cisco routing, switching, IP addressing, VLAN configurations, network security, and WAN architectures."
  },
  {
    year: "2019",
    title: "ITIL V3 2011 Foundation",
    institution: "ANC Education, Colombo 03",
    type: "Certification",
    details: "IT service management principles, service lifecycle, incident management, and continuous improvement."
  },
  {
    year: "2013",
    title: "Diploma in Windows Network Administrator",
    institution: "Turnkey IT Campus, Colombo 03",
    type: "Diploma",
    details: "Windows Server infrastructure, Active Directory domain services, Group Policy, DNS, and DHCP."
  },
  {
    year: "2013",
    title: "UNIX / Linux Fundamentals, Network and Systems Administration",
    institution: "University of Colombo, Sri Lanka",
    type: "Certification",
    details: "Linux shell scripting, server administration, user permissions, and network services."
  },
  {
    year: "2009",
    title: "National Trade Certificate of Computer Applications",
    institution: "National Apprentice and Industrial Training Authority (NAITA)",
    type: "Diploma",
    details: "Computer fundamentals, troubleshooting, office automation, and database administration."
  },
  {
    year: "2008",
    title: "Higher Diploma in Computer Studies",
    institution: "NAC Computer System, Balangoda",
    type: "Diploma",
    details: "System architecture, software development fundamentals, and data structures."
  },
  {
    year: "2007 – 2008",
    title: "Diploma in Graphic Design and Computer Studies",
    institution: "NAC Computer System, Balangoda",
    type: "Diploma",
    details: "Visual communication, digital illustration, and computing workflows."
  },
  {
    year: "2008",
    title: "Certified Leadership Development Program",
    institution: "University of Sabaragamuwa, Sri Lanka",
    type: "Certification",
    details: "Team leadership, conflict management, and workplace communications."
  },
  {
    year: "2009",
    title: "G.C.E. Advanced Level (Commerce Stream)",
    institution: "National Examinations Department, Sri Lanka",
    type: "School",
    details: "Accounting (A), Economics (B), Business Studies (S)."
  },
  {
    year: "2006",
    title: "G.C.E. Ordinary Level",
    institution: "Sri Dharmananda Vidyayathana Pirivena, Sri Lanka",
    type: "School",
    details: "Completed standard secondary education certifications."
  }
];

export const personalDetails: PersonalDetails = {
  gender: "Male",
  dob: "26th June 1990",
  nationality: "Sri Lankan",
  nic: "901731306V",
  maritalStatus: "Married",
  address: "No: 260/3, Kongolla, Hatharabage, Balangoda, Sri Lanka",
  phones: ["+94 77 649 6163 (WhatsApp)", "+94 75 560 6269"],
  email: "chaminda.d.sampath@gmail.com",
  hobbies: ["Traveling", "Photography", "Movies", "Gaming"],
  declarationDate: "02nd of April 2026"
};

export const refereesList: RefereeItem[] = [
  {
    name: "Mr. THARUKA ALGAMA",
    role: "Cluster Lead – MAS ACTIVEWEAR",
    company: "MAS TECHNOLOGY SERVICES",
    address: "No.199, Kaduwela Road, Battaramulla, Sri Lanka.",
    phone: "+94 77 360 5698"
  },
  {
    name: "Mr. Gihan De Silva",
    role: "Cluster ICT Infrastructure Head",
    company: "Brandix Apparel Solutions Ltd – Casualwear",
    address: "Ekala, Ja-ela, Sri Lanka.",
    phone: "+94 77 731 6026"
  }
];

