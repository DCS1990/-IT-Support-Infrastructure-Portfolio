# Chaminda Sampath – Professional IT Support & Infrastructure Portfolio

A modern, responsive, production-ready personal portfolio web application built for **Chaminda Sampath**, an IT Support Specialist with over 13 years of enterprise experience across infrastructure support, IT operations, asset management (ITAM), network administration, and operational automation.

---

## 🚀 Key Highlights & Structure

1. **Hero Section**:
   - Executive title: *"IT Support Specialist | Infrastructure | IT Operations | Asset Management"*
   - Authentic portrait photo and quick-contact channels (Email, WhatsApp, Phone, LinkedIn, GitHub).
   - Direct CTA buttons: **"View My Work"** and **"Download CV"**.
   - Verified stats banner: 13+ years experience, MAS Holdings & Brandix tenure, L1/L2 team leadership.

2. **About Me**:
   - Comprehensive background covering multi-site apparel manufacturing ICT operations.
   - 11 core focus cards: IT infrastructure, End-user support, Network diagnostics, Hardware/software repair, ITAM, Microsoft Intune, Process improvement, and Automation.

3. **Professional Experience Timeline**:
   - Interactive, expandable timeline documenting all career roles:
     - **MAS Capital (Pvt) Ltd / MAS ACTIVE (PRIVATE) LIMITED** (January 2023 – Present)
     - **Brandix Apparel Solutions Ltd – Essentials** (March 2022 – 2023)
     - **Dream Curious International Pvt Ltd, Dubai** (Dec 2021 – March 2022)
     - **Brandix Apparel Solutions Ltd – Casualwear** (Dec 2012 – Nov 2021, 9-year multi-site tenure)

4. **Skills & Capabilities**:
   - Structured categories: *IT Infrastructure*, *Asset Management*, *Microsoft / Enterprise*, *Development*, and *Tools & Automation*.
   - Implemented with neutral badges and cards without artificial percentage meters, as requested.

5. **Applied Project Portfolio**:
   - Data-driven project cards with category filters, architecture highlights, GitHub links, and live preview modal.
   - Features: IT Asset Management System, Asset Audit & Reconciliation Dashboard, IT Repair Management Dashboard, Attendance Management System, Automated Endpoint & Switch Monitor, and Intune Sync Automation.

6. **Dedicated IT Asset Management (ITAM) Section**:
   - Deep-dive into 11 operational disciplines: Lifecycle Management, Physical Verification, Offline Reconciliation, Aging Analysis, IT Disposal, Hardware Repair, License Tracking, Intune Device Management, Audit Support, Vendor Coordination, and Dashboards.

7. **Automation & Development**:
   - Demonstrates practical software engineering solving actual factory operational bottlenecks (Python, PowerShell, React, Next.js, and Google Apps Script).

8. **Education & Certifications**:
   - Bachelor of Business Management (B.BM) – University of Kelaniya
   - CCNA Certification Administrator – Vibernets Academy
   - ITIL V3 2011 Foundation – ANC Education
   - Windows Network Administrator Diploma – Turnkey IT Campus
   - Linux Fundamentals & System Administration – University of Colombo
   - National Trade Certificate – NAITA

9. **CV Download & Interactive Preview**:
   - Instant PDF download linking to `/assets/Chaminda-Sampath-CV.pdf`.
   - In-browser interactive CV modal for rapid screening.

10. **Contact Section & Sticky Navigation**:
    - Direct inquiry form with client-side validation.
    - Dark & Light mode toggle with persistent state.
    - Accessible, responsive mobile drawer menu.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Subtle, accessible transitions and motion
- **SEO & Metadata**: OpenGraph, Twitter Cards, Schema.org Person JSON-LD

---

## 📁 Project Directory Structure

```text
├── app/
│   ├── globals.css         # Tailwind styles & light/dark CSS variables
│   ├── layout.tsx          # Root layout with SEO metadata & JSON-LD
│   └── page.tsx            # Main page assembling all portfolio sections
├── components/
│   ├── about.tsx           # Background & core competencies
│   ├── asset-management.tsx# Dedicated 11-pillar ITAM section
│   ├── automation.tsx      # Problem-solution engineering showcase
│   ├── contact.tsx         # Contact info & interactive form
│   ├── cv-section.tsx      # CV download card & quick view modal
│   ├── education.tsx       # Degrees, diplomas & certifications
│   ├── experience.tsx      # Timeline of career positions
│   ├── footer.tsx          # Footer with credits & back-to-top
│   ├── hero.tsx            # Hero banner, stats & primary CTAs
│   ├── icons.tsx           # Dynamic Lucide icon renderer
│   ├── navbar.tsx          # Sticky navigation & theme toggle
│   ├── project-modal.tsx   # Detailed modal for projects
│   ├── projects.tsx        # Project cards with category filters
│   ├── skills.tsx          # Categorized neutral skill cards
│   └── theme-provider.tsx  # Light/dark mode context
├── public/
│   └── assets/
│       ├── chaminda-profile.jpg     # Profile portrait image
│       └── Chaminda-Sampath-CV.pdf  # Curriculum Vitae PDF
├── src/
│   └── data/
│       └── profile.ts      # ★ CENTRAL DATA FILE: All personal info, projects & experience
├── .gitignore              # Clean GitHub ignore rules
├── package.json            # Node.js dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Documentation & setup guide
```

---

## ⚙️ Quick Start & Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or v20+) and `npm` installed.

### 2. Clone or Extract the Repository
```bash
git clone https://github.com/DCS1990/portfolio.git
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 📝 How to Customize Your Information

All personal and professional information is centralized in a single file:
👉 **`src/data/profile.ts`**

You do **not** need to modify multiple React components to update your information.

### 1. Updating Name, Bio, or Contact Details
Open `src/data/profile.ts` and modify `personalInfo`:
```typescript
export const personalInfo: PersonalInfo = {
  name: "Chaminda Sampath",
  roleTitle: "IT Support Specialist | Infrastructure | IT Operations | Asset Management",
  email: "chaminda.d.sampath@gmail.com",
  whatsapp: "+94 77 649 6163",
  phone: "+94 75 560 6269",
  location: "Balangoda, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/chaminda-sampath-7aab40104/",
  github: "https://github.com/DCS1990",
  // ...
};
```

### 2. Adding a New Job Position
In `src/data/profile.ts`, add a new object to the top of `experienceList`:
```typescript
export const experienceList: ExperienceItem[] = [
  {
    id: "new-role-id",
    period: "2026 – Present",
    role: "Senior IT Infrastructure Specialist",
    company: "Company Name",
    location: "Colombo, Sri Lanka",
    isCurrent: true,
    companyDescription: "Brief description of the organization.",
    responsibilities: [
      "Key responsibility 1",
      "Key responsibility 2",
    ],
    technologies: ["Windows Server", "Intune", "Cisco", "Python"],
  },
  // existing roles...
];
```

### 3. Adding or Modifying Projects
In `src/data/profile.ts`, add a new entry to `projectsList`:
```typescript
export const projectsList: ProjectItem[] = [
  {
    id: "my-new-tool",
    title: "Automated Backup Verifier",
    category: "Automation & Tools",
    description: "Lightweight script monitoring daily Veeam and NAS backup integrity.",
    problemSolved: "Prevented silent backup failures by running daily checksums.",
    technologies: ["PowerShell", "Python", "Veeam API", "SMTP"],
    status: "In Production",
    githubUrl: "https://github.com/DCS1990",
    liveUrl: "#",
    highlights: ["Automatic email dispatch on failure", "Integrates with site event log"],
  },
  // existing projects...
];
```

### 4. Replacing the CV Document
1. Save your latest CV as a PDF named **`Chaminda-Sampath-CV.pdf`**.
2. Replace the file at:
   ```text
   public/assets/Chaminda-Sampath-CV.pdf
   ```
3. The download button and in-browser preview will automatically serve your new file.

---

## 🌐 Deploying to GitHub & Free Hosting Platforms

### A. Uploading Source Code to GitHub

Open your terminal in the project root directory and run:

```bash
# 1. Initialize a new git repository (if not already initialized)
git init

# 2. Stage all project files
git add .

# 3. Create your first commit
git commit -m "feat: initial release of Chaminda Sampath IT portfolio website"

# 4. Set the default branch name to main
git branch -M main

# 5. Connect to your GitHub repository
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git

# 6. Push your code to GitHub
git push -u origin main
```

### B. Deploying to Vercel (Recommended – 100% Free & Automatic)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"New Project"** and select your portfolio repository.
3. Keep default settings (`Framework Preset: Next.js`).
4. Click **"Deploy"**.
5. Your website will be live with free SSL and custom domain support in under 2 minutes!

### C. Deploying to GitHub Pages (Static Export)
If you prefer hosting directly on GitHub Pages:
1. In `next.config.ts`, add `output: 'export'` and set `images: { unoptimized: true }`.
2. Run `npm run build`, which will generate a static `/out` folder.
3. In your GitHub repository settings, go to **Pages**, select **GitHub Actions** or **Deploy from branch**, and deploy the `/out` directory.

---

## 📄 License & Privacy
- **License**: MIT
- **Privacy Notice**: Confidential business records, internal passwords, and private company tokens are strictly excluded.
- **Copyright**: © 2026 Chaminda Sampath. All rights reserved.
