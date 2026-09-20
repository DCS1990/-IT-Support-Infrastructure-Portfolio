import React from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { AssetManagement } from '@/components/asset-management';
import { Automation } from '@/components/automation';
import { Education } from '@/components/education';
import { CvSection } from '@/components/cv-section';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Professional Experience Timeline */}
        <Experience />

        {/* 4. Categorized Skills Section */}
        <Skills />

        {/* 5. Applied Project Portfolio */}
        <Projects />

        {/* 6. Dedicated IT Asset Management Expertise */}
        <AssetManagement />

        {/* 7. Automation & Software Development */}
        <Automation />

        {/* 8. Education & Certifications */}
        <Education />

        {/* 9. Professional CV Download & Preview */}
        <CvSection />

        {/* 10. Contact Section with Inquiry Form */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
