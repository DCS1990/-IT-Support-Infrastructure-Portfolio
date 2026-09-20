import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Chaminda Sampath – IT Support Specialist | Infrastructure & Asset Management',
  description:
    'Professional portfolio of Chaminda Sampath, IT Support Specialist with 13+ years experience in Infrastructure Support, IT Operations, Asset Management, and Automation across Sri Lanka and Dubai.',
  keywords: [
    'Chaminda Sampath',
    'IT Support Specialist',
    'Infrastructure Support',
    'IT Operations',
    'IT Asset Management',
    'ITAM',
    'Microsoft Intune',
    'Windows Server 2016',
    'Cisco CCNA',
    'ITIL V3',
    'MAS Holdings',
    'Brandix',
    'Sri Lanka IT Specialist'
  ],
  authors: [{ name: 'Chaminda Sampath' }],
  creator: 'Chaminda Sampath',
  openGraph: {
    title: 'Chaminda Sampath – IT Support Specialist | Infrastructure & Asset Management',
    description:
      'Professional portfolio of Chaminda Sampath, IT Support Specialist with 13+ years experience in Infrastructure Support, IT Operations, Asset Management, and Automation.',
    type: 'profile',
    locale: 'en_US',
    siteName: 'Chaminda Sampath Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chaminda Sampath – IT Support Specialist | Infrastructure & Asset Management',
    description:
      'Professional portfolio of Chaminda Sampath, IT Support Specialist with 13+ years experience in Infrastructure Support, IT Operations, Asset Management, and Automation.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chaminda Sampath',
    jobTitle: 'IT Support Specialist',
    description:
      'IT Support Specialist focused on Infrastructure Support, IT Operations, Asset Management, Network Support, and technology solutions.',
    email: 'chaminda.d.sampath@gmail.com',
    telephone: '+94 77 649 6163',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Balangoda',
      addressCountry: 'Sri Lanka',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'University of Kelaniya',
      },
    ],
    knowsAbout: [
      'IT Infrastructure Support',
      'IT Asset Management',
      'Microsoft Intune',
      'Windows Server',
      'Active Directory',
      'Network Troubleshooting',
      'Python',
      'React.js',
      'PowerShell',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'MAS Capital (Pvt) Ltd',
    },
    sameAs: [
      'https://www.linkedin.com/in/chaminda-sampath-7aab40104/',
      'https://github.com/DCS1990',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-[#f4f8fd] dark:bg-[#010309] text-slate-900 dark:text-white antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

