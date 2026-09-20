import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();

  // Page dimensions: Letter size (612 x 792)
  const pageWidth = 612;
  const pageHeight = 792;

  // Load fonts
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Read profile image if available
  let profileImageEmbed = null;
  const imagePath = path.join(process.cwd(), 'public/assets/chaminda-profile.jpg');
  if (fs.existsSync(imagePath)) {
    try {
      const imageBytes = fs.readFileSync(imagePath);
      profileImageEmbed = await pdfDoc.embedJpg(imageBytes);
    } catch (e) {
      console.warn('Could not embed profile image:', e);
    }
  }

  // Colors
  const primaryBlue = rgb(0.12, 0.45, 0.78); // #1f73c7
  const darkNavy = rgb(0.1, 0.15, 0.22);
  const textDark = rgb(0.15, 0.15, 0.15);
  const textGray = rgb(0.35, 0.35, 0.35);
  const lightBg = rgb(0.94, 0.96, 0.98);
  const lineGray = rgb(0.82, 0.85, 0.88);
  const sectionTitleColor = rgb(0.12, 0.45, 0.78);

  // ==========================================
  // PAGE 1
  // ==========================================
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);

  // Left sidebar background
  const sidebarWidth = 190;
  page1.drawRectangle({
    x: 0,
    y: 0,
    width: sidebarWidth,
    height: pageHeight,
    color: lightBg,
  });

  // Vertical divider line
  page1.drawLine({
    start: { x: sidebarWidth, y: 0 },
    end: { x: sidebarWidth, y: pageHeight },
    thickness: 1,
    color: lineGray,
  });

  // Profile Image in Left Sidebar
  let photoY = 645;
  if (profileImageEmbed) {
    const imgDim = 110;
    const imgX = (sidebarWidth - imgDim) / 2;
    page1.drawImage(profileImageEmbed, {
      x: imgX,
      y: photoY,
      width: imgDim,
      height: imgDim,
    });
    // Border around photo
    page1.drawRectangle({
      x: imgX,
      y: photoY,
      width: imgDim,
      height: imgDim,
      borderWidth: 2,
      borderColor: primaryBlue,
      opacity: 0,
      borderOpacity: 1,
    });
  }

  // --- Left Sidebar: PROFILE ---
  let sideY = photoY - 25;
  page1.drawText('PROFILE', {
    x: 18,
    y: sideY,
    size: 11,
    font: fontBold,
    color: sectionTitleColor,
  });

  sideY -= 14;
  const profileLines = [
    'A person with a passion for',
    'exciting opportunities and a thirst',
    'to learn. Seeking an opportunity',
    'where I could utilize my ICT,',
    'Management skills, and experiences',
    'gained through education and',
    'projects to the ongoing success of',
    'your company.',
    '',
    'Whilst I am excited to broaden my',
    'learnings under a working',
    'professional to gain knowledge and',
    'improve my technical and soft skills',
    'by giving my best effort to your',
    'valued company.'
  ];

  for (const line of profileLines) {
    if (line === '') {
      sideY -= 6;
      continue;
    }
    page1.drawText(line, {
      x: 18,
      y: sideY,
      size: 8,
      font: fontRegular,
      color: textDark,
    });
    sideY -= 11.5;
  }

  // --- Left Sidebar: CONTACT ---
  sideY -= 15;
  page1.drawText('CONTACT', {
    x: 18,
    y: sideY,
    size: 11,
    font: fontBold,
    color: sectionTitleColor,
  });

  sideY -= 14;
  page1.drawText('ADDRESS:', {
    x: 18,
    y: sideY,
    size: 8,
    font: fontBold,
    color: darkNavy,
  });
  sideY -= 11;
  page1.drawText('No: 260/3, Kongolla, Hatharabage,', {
    x: 18,
    y: sideY,
    size: 8,
    font: fontRegular,
    color: textDark,
  });
  sideY -= 11;
  page1.drawText('Balangoda, Sri Lanka.', {
    x: 18,
    y: sideY,
    size: 8,
    font: fontRegular,
    color: textDark,
  });

  sideY -= 14;
  page1.drawText('PHONE:', {
    x: 18,
    y: sideY,
    size: 8,
    font: fontBold,
    color: darkNavy,
  });
  sideY -= 11;
  page1.drawText('+94 77 649 6163 (WhatsApp)', {
    x: 18,
    y: sideY,
    size: 8,
    font: fontRegular,
    color: textDark,
  });
  sideY -= 11;
  page1.drawText('+94 75 560 6269', {
    x: 18,
    y: sideY,
    size: 8,
    font: fontRegular,
    color: textDark,
  });

  sideY -= 14;
  page1.drawText('EMAIL:', {
    x: 18,
    y: sideY,
    size: 8,
    font: fontBold,
    color: darkNavy,
  });
  sideY -= 11;
  page1.drawText('chaminda.d.sampath@gmail.com', {
    x: 18,
    y: sideY,
    size: 7.5,
    font: fontRegular,
    color: primaryBlue,
  });

  sideY -= 14;
  page1.drawText('LINKEDIN:', {
    x: 18,
    y: sideY,
    size: 8,
    font: fontBold,
    color: darkNavy,
  });
  sideY -= 11;
  page1.drawText('linkedin.com/in/chaminda-', {
    x: 18,
    y: sideY,
    size: 7.5,
    font: fontRegular,
    color: primaryBlue,
  });
  sideY -= 10;
  page1.drawText('sampath-7aab40104', {
    x: 18,
    y: sideY,
    size: 7.5,
    font: fontRegular,
    color: primaryBlue,
  });

  // --- Right Main Column: HEADER ---
  const contentX = sidebarWidth + 24;
  const contentWidth = pageWidth - contentX - 24;
  let mainY = 745;

  page1.drawText('CHAMINDA SAMPATH ', {
    x: contentX,
    y: mainY,
    size: 20,
    font: fontBold,
    color: darkNavy,
  });
  page1.drawText('(B.BM)', {
    x: contentX + 230,
    y: mainY,
    size: 13,
    font: fontRegular,
    color: textGray,
  });

  mainY -= 18;
  page1.drawText('ICT ADMINISTRATOR', {
    x: contentX,
    y: mainY,
    size: 12,
    font: fontBold,
    color: primaryBlue,
  });

  mainY -= 20;
  page1.drawLine({
    start: { x: contentX, y: mainY },
    end: { x: pageWidth - 24, y: mainY },
    thickness: 1,
    color: lineGray,
  });

  // --- Right Main Column: WORK EXPERIENCE ---
  mainY -= 20;
  page1.drawText('WORK EXPERIENCE', {
    x: contentX,
    y: mainY,
    size: 12,
    font: fontBold,
    color: darkNavy,
  });

  function wrapAndDrawBullets(page, bullets, startX, startY, maxWidth, bulletSize = 7.5, lineSpacing = 9.2) {
    let curY = startY;
    for (const bullet of bullets) {
      // Draw bullet
      page.drawText('•', {
        x: startX,
        y: curY,
        size: 8.5,
        font: fontBold,
        color: primaryBlue,
      });

      // Wrap words
      const words = bullet.split(' ');
      let line = '';
      const textX = startX + 10;
      const textMaxW = maxWidth - 10;

      for (let i = 0; i < words.length; i++) {
        const testLine = line ? line + ' ' + words[i] : words[i];
        const testW = fontRegular.widthOfTextAtSize(testLine, bulletSize);
        if (testW > textMaxW && i > 0) {
          page.drawText(line, {
            x: textX,
            y: curY,
            size: bulletSize,
            font: fontRegular,
            color: textDark,
          });
          curY -= lineSpacing;
          line = words[i];
        } else {
          line = testLine;
        }
      }
      if (line) {
        page.drawText(line, {
          x: textX,
          y: curY,
          size: bulletSize,
          font: fontRegular,
          color: textDark,
        });
        curY -= lineSpacing;
      }
      curY -= 2; // space between bullets
    }
    return curY;
  }

  // Role 1: MAS Capital (Current Role)
  mainY -= 17;
  page1.drawText('MAS Capital (Pvt) Ltd - IT Support Specialist (L1)', {
    x: contentX,
    y: mainY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });

  mainY -= 12;
  page1.drawText('1 July 2026 - Present  (Current Role)', {
    x: contentX,
    y: mainY,
    size: 8.5,
    font: fontOblique,
    color: primaryBlue,
  });

  mainY -= 12;
  page1.drawText('Strategic corporate management & shared services arm of MAS Holdings driving enterprise IT solutions.', {
    x: contentX,
    y: mainY,
    size: 7.5,
    font: fontRegular,
    color: textGray,
  });

  mainY -= 4;
  const masCapitalBullets = [
    'Identity & Access Management (IAM): Administer enterprise user provisioning, privilege governance, security group policies, and multi-factor authentication across Microsoft Entra ID and Active Directory.',
    'Asset Lifecycle Analysis: Perform comprehensive IT asset lifecycle analysis, evaluating equipment utilization rates, hardware aging metrics, and warranty lifespans to optimize enterprise hardware refresh planning.',
    'Azure Virtual Desktop (AVD) Project: Spearhead rollout and operational support for the Azure Virtual Desktop initiative, migrating high-demand workflows from physical endpoints to cloud virtual machines.',
    'Reducing Physical Asset Purchasing: Actively reduce physical asset purchasing by standardizing thin-client workstations and virtualized desktop infrastructure, delivering tangible Capex hardware savings.'
  ];
  mainY = wrapAndDrawBullets(page1, masCapitalBullets, contentX, mainY, contentWidth, 7.3, 8.8);

  // Role 2: MAS Kreeda
  mainY -= 6;
  page1.drawText('MAS Kreeda – Balangoda (Outsourced) - IT Site Support Administrator (L1)', {
    x: contentX,
    y: mainY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });

  mainY -= 12;
  page1.drawText('January 2023 - June 2026', {
    x: contentX,
    y: mainY,
    size: 8.5,
    font: fontOblique,
    color: primaryBlue,
  });

  mainY -= 12;
  const masDesc = [
    'MAS Holdings is a leading global apparel and tech manufacturer with over 100,000 employees worldwide.',
    'Specializes in producing Intimate-wear, Sportswear, and performance garments for international superbrands.'
  ];
  for (const line of masDesc) {
    page1.drawText(line, {
      x: contentX,
      y: mainY,
      size: 7.3,
      font: fontRegular,
      color: textGray,
    });
    mainY -= 9.5;
  }

  mainY -= 3;
  const masBullets = [
    'Led ICT operations for the Kreeda site as team lead, guiding a team of six technicians to maintain high uptime.',
    'Provided Level 1 & Level 2 IT support, including workstation configuration, troubleshooting, and end-user assistance.',
    'Monitored and maintained network infrastructure, managing LAN/WAN connectivity, switches, and industrial hardware.',
    'Maintained IT process documentation, scheduled disaster recovery data backups, and ensured IT operational compliance.',
    'Managed ICT asset inventory, including physical asset tracking, auditing, and lifecycle management of equipment.',
    'Developed and maintained internal web-based systems using React.js and Node.js to support operational workflows.',
    'Coordinated with vendors and finance teams for IT-related procurement, warranty repairs, and supplier follow-ups.'
  ];
  mainY = wrapAndDrawBullets(page1, masBullets, contentX, mainY, contentWidth, 7.3, 8.8);

  // Role 3: Brandix Essentials
  mainY -= 6;
  page1.drawText('Brandix Apparel Solutions Ltd - Essentials | ICT Administrator', {
    x: contentX,
    y: mainY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });

  mainY -= 12;
  page1.drawText('March 2022 – 2023', {
    x: contentX,
    y: mainY,
    size: 8.5,
    font: fontOblique,
    color: primaryBlue,
  });

  mainY -= 11;
  page1.drawText('Largest apparel exporter in Sri Lanka with over 47,000 associates across 42 manufacturing facilities.', {
    x: contentX,
    y: mainY,
    size: 7.3,
    font: fontRegular,
    color: textGray,
  });

  mainY -= 3;
  const brandixBullets = [
    'Led the ICT infrastructure across the business unit, ensuring 99.9% uptime for factory manufacturing lines.',
    'Configured and maintained SharePoint cloud services, enforcing corporate data classification standards.',
    'Maintained Active Directory, DNS/DHCP, file servers, NAS storage, and scheduled backup repositories.',
    'Automated hardware upgrades and software deployments using Microsoft SCCM and manual procedures.',
    'Enforced endpoint security protocols and threat mitigation using CrowdStrike Falcon endpoint protection.',
    'Administered user accounts, role-based access control, security groups, and multi-factor authentication.',
    'Responsible for ICT asset inventory, hardware lifecycle maintenance, and supervising junior support staff.'
  ];

  mainY = wrapAndDrawBullets(page1, brandixBullets, contentX, mainY, contentWidth, 7.3, 8.8);

  // Page 1 footer
  page1.drawText('Chaminda Sampath – Curriculum Vitae  |  Page 1 of 2', {
    x: contentX,
    y: 18,
    size: 7.5,
    font: fontRegular,
    color: textGray,
  });

  // ==========================================
  // PAGE 2
  // ==========================================
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);

  // Left sidebar on Page 2
  page2.drawRectangle({
    x: 0,
    y: 0,
    width: sidebarWidth,
    height: pageHeight,
    color: lightBg,
  });

  page2.drawLine({
    start: { x: sidebarWidth, y: 0 },
    end: { x: sidebarWidth, y: pageHeight },
    thickness: 1,
    color: lineGray,
  });

  // Page 2 Left Sidebar: SKILLS
  let p2SideY = 745;
  page2.drawText('SKILLS', {
    x: 18,
    y: p2SideY,
    size: 11,
    font: fontBold,
    color: sectionTitleColor,
  });

  const skillsList = [
    { name: 'Active Directory', pct: 100 },
    { name: 'VMware Workstation', pct: 100 },
    { name: 'Microsoft Server 2016', pct: 90 },
    { name: 'Adobe Photoshop', pct: 90 },
    { name: 'React.js / Node.js', pct: 85 },
    { name: 'PHP & MySQL', pct: 80 },
    { name: 'SQL Server 2016', pct: 80 },
    { name: 'Power Apps', pct: 75 },
    { name: 'DHCP / DNS / LAN', pct: 85 },
    { name: 'SCCM / Intune Admin', pct: 80 },
  ];

  p2SideY -= 16;
  for (const sk of skillsList) {
    page2.drawText(sk.name, {
      x: 18,
      y: p2SideY,
      size: 7.5,
      font: fontBold,
      color: textDark,
    });
    // Bar
    const barWidth = 145;
    const barHeight = 5;
    const fillWidth = (barWidth * sk.pct) / 100;
    const barY = p2SideY - 8;

    // Background bar
    page2.drawRectangle({
      x: 18,
      y: barY,
      width: barWidth,
      height: barHeight,
      color: rgb(0.85, 0.88, 0.92),
    });
    // Fill bar
    page2.drawRectangle({
      x: 18,
      y: barY,
      width: fillWidth,
      height: barHeight,
      color: primaryBlue,
    });

    p2SideY -= 18;
  }

  // Page 2 Left Sidebar: PERSONAL DETAILS
  p2SideY -= 12;
  page2.drawText('PERSONAL DETAILS', {
    x: 18,
    y: p2SideY,
    size: 11,
    font: fontBold,
    color: sectionTitleColor,
  });

  const personalFields = [
    ['GENDER:', 'Male'],
    ['DATE OF BIRTH:', '26th June 1990'],
    ['NATIONALITY:', 'Sri Lankan'],
    ['N.I.C:', '901731306V'],
    ['STATUS:', 'Married']
  ];

  p2SideY -= 15;
  for (const [label, val] of personalFields) {
    page2.drawText(label, {
      x: 18,
      y: p2SideY,
      size: 7.5,
      font: fontBold,
      color: darkNavy,
    });
    page2.drawText(val, {
      x: 18,
      y: p2SideY - 9,
      size: 7.5,
      font: fontRegular,
      color: textDark,
    });
    p2SideY -= 20;
  }

  // Page 2 Left Sidebar: HOBBIES
  p2SideY -= 6;
  page2.drawText('HOBBIES', {
    x: 18,
    y: p2SideY,
    size: 11,
    font: fontBold,
    color: sectionTitleColor,
  });

  const hobbies = ['Traveling', 'Photography', 'Movies', 'Gaming'];
  p2SideY -= 14;
  for (const hob of hobbies) {
    page2.drawText('•  ' + hob, {
      x: 18,
      y: p2SideY,
      size: 7.5,
      font: fontRegular,
      color: textDark,
    });
    p2SideY -= 11;
  }

  // Page 2 Left Sidebar: REFEREES
  p2SideY -= 10;
  page2.drawText('REFEREES', {
    x: 18,
    y: p2SideY,
    size: 11,
    font: fontBold,
    color: sectionTitleColor,
  });

  p2SideY -= 14;
  page2.drawText('Mr. THARUKA ALGAMA', {
    x: 18,
    y: p2SideY,
    size: 8,
    font: fontBold,
    color: darkNavy,
  });
  p2SideY -= 10;
  page2.drawText('Cluster Lead – MAS ACTIVEWEAR', {
    x: 18,
    y: p2SideY,
    size: 7,
    font: fontRegular,
    color: textDark,
  });
  p2SideY -= 9;
  page2.drawText('MAS TECHNOLOGY SERVICES', {
    x: 18,
    y: p2SideY,
    size: 7,
    font: fontRegular,
    color: textDark,
  });
  p2SideY -= 9;
  page2.drawText('No.199, Kaduwela Road,', {
    x: 18,
    y: p2SideY,
    size: 7,
    font: fontRegular,
    color: textDark,
  });
  p2SideY -= 9;
  page2.drawText('Battaramulla, Sri Lanka.', {
    x: 18,
    y: p2SideY,
    size: 7,
    font: fontRegular,
    color: textDark,
  });
  p2SideY -= 9;
  page2.drawText('Tel: +94 77 360 5698', {
    x: 18,
    y: p2SideY,
    size: 7,
    font: fontBold,
    color: primaryBlue,
  });

  p2SideY -= 15;
  page2.drawText('Mr. Gihan De Silva', {
    x: 18,
    y: p2SideY,
    size: 8,
    font: fontBold,
    color: darkNavy,
  });
  p2SideY -= 10;
  page2.drawText('Cluster ICT Infrastructure Head,', {
    x: 18,
    y: p2SideY,
    size: 7,
    font: fontRegular,
    color: textDark,
  });
  p2SideY -= 9;
  page2.drawText('Brandix Apparel Solutions Ltd – Casualwear,', {
    x: 18,
    y: p2SideY,
    size: 7,
    font: fontRegular,
    color: textDark,
  });
  p2SideY -= 9;
  page2.drawText('Ekala, Ja-ela.', {
    x: 18,
    y: p2SideY,
    size: 7,
    font: fontRegular,
    color: textDark,
  });
  p2SideY -= 9;
  page2.drawText('Tel: +94 77 731 6026', {
    x: 18,
    y: p2SideY,
    size: 7,
    font: fontBold,
    color: primaryBlue,
  });

  // --- Right Main Column: PAGE 2 EXPERIENCE CONTINUATION ---
  let p2MainY = 745;

  // Role 3: Dream Curious International Dubai
  page2.drawText('Dream Curious International PVT Ltd - Dubai | ICT Executive', {
    x: contentX,
    y: p2MainY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  p2MainY -= 12;
  page2.drawText('December 2021 – March 2022', {
    x: contentX,
    y: p2MainY,
    size: 8.5,
    font: fontOblique,
    color: primaryBlue,
  });
  p2MainY -= 11;
  page2.drawText('One of the leading Marketing service companies located in Dubai and I was there for just 03 months period.', {
    x: contentX,
    y: p2MainY,
    size: 7.5,
    font: fontRegular,
    color: textGray,
  });

  p2MainY -= 3;
  const dreamBullets = [
    'Monitoring, configuring, and maintaining the main Windows platform servers.',
    'Provided high-level help desk support for the users by upgrading, installing, and configuring new hardware and software.'
  ];
  p2MainY = wrapAndDrawBullets(page2, dreamBullets, contentX, p2MainY, contentWidth, 7.5, 9.5);

  // Role 4: Brandix Casualwear
  p2MainY -= 6;
  page2.drawText('Brandix Apparel Solutions Ltd - Casualwear | ICT Administrator', {
    x: contentX,
    y: p2MainY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  p2MainY -= 12;
  page2.drawText('December 2012 – November 2021', {
    x: contentX,
    y: p2MainY,
    size: 8.5,
    font: fontOblique,
    color: primaryBlue,
  });
  p2MainY -= 11;
  const brandixCasBullets = [
    'Led the ICT infrastructure of the casualwear washing plant in both Awissawella and Ratmalana location. Had same above primary responsible as ICT Administrator including Servers, Network, Support Desk, Security, Inventory, ICT Governance of both washing plants and the Nivithigala sewing plant.'
  ];
  p2MainY = wrapAndDrawBullets(page2, brandixCasBullets, contentX, p2MainY, contentWidth, 7.5, 9.5);

  // --- Right Main Column: PROFESSIONAL QUALIFICATION ---
  p2MainY -= 10;
  page2.drawText('PROFESSIONAL QUALIFICATION', {
    x: contentX,
    y: p2MainY,
    size: 11,
    font: fontBold,
    color: darkNavy,
  });

  p2MainY -= 5;
  page2.drawLine({
    start: { x: contentX, y: p2MainY },
    end: { x: pageWidth - 24, y: p2MainY },
    thickness: 0.7,
    color: lineGray,
  });

  const qualifications = [
    { title: 'Bachelor of Business Management', meta: '2015 - 2019 - University of Kelaniya' },
    { title: 'CCNA Certification Administrator', meta: '2022 - Vibernets Academy Campus - Malabe' },
    { title: 'Diploma in Windows Network Administrator', meta: '2013 - 2013 - Turnkey IT Campus – Colombo 03' },
    { title: 'National Trade Certificate of Computer Applications', meta: '2009 - 2009 - National Apprentice and Industrial Training Authority (NAITA)' },
    { title: 'Higher Diploma in Computer Studies', meta: '2008 - 2008 - NAC Computer System – Balangoda' },
    { title: 'Diploma in Graphic Design / Computer Studies', meta: '2007 - 2008 - NAC Computer System - Balangoda' },
  ];

  p2MainY -= 12;
  for (const q of qualifications) {
    page2.drawText('•  ' + q.title, {
      x: contentX,
      y: p2MainY,
      size: 8,
      font: fontBold,
      color: textDark,
    });
    p2MainY -= 10;
    page2.drawText('    ' + q.meta, {
      x: contentX + 8,
      y: p2MainY,
      size: 7.5,
      font: fontRegular,
      color: textGray,
    });
    p2MainY -= 10;
  }

  // --- Right Main Column: TRAININGS & CERTIFICATIONS ---
  p2MainY -= 4;
  page2.drawText('TRAININGS & CERTIFICATIONS', {
    x: contentX,
    y: p2MainY,
    size: 11,
    font: fontBold,
    color: darkNavy,
  });

  p2MainY -= 5;
  page2.drawLine({
    start: { x: contentX, y: p2MainY },
    end: { x: pageWidth - 24, y: p2MainY },
    thickness: 0.7,
    color: lineGray,
  });

  const trainings = [
    { title: 'ITIL V3 2011 Foundation', meta: '2019 - 2019 - ANC Education – Colombo 03' },
    { title: 'UNIX / Linux Fundamentals, Network & Systems Administration', meta: '2013 - 2013 - University of Colombo' },
    { title: 'Certified Leadership Development Program', meta: '2008 - 2008 - University of Sabaragamuwa' },
  ];

  p2MainY -= 12;
  for (const tr of trainings) {
    page2.drawText('•  ' + tr.title, {
      x: contentX,
      y: p2MainY,
      size: 8,
      font: fontBold,
      color: textDark,
    });
    p2MainY -= 10;
    page2.drawText('    ' + tr.meta, {
      x: contentX + 8,
      y: p2MainY,
      size: 7.5,
      font: fontRegular,
      color: textGray,
    });
    p2MainY -= 10;
  }

  // --- Right Main Column: PRIMARY EDUCATION ---
  p2MainY -= 4;
  page2.drawText('PRIMARY EDUCATION', {
    x: contentX,
    y: p2MainY,
    size: 11,
    font: fontBold,
    color: darkNavy,
  });

  p2MainY -= 5;
  page2.drawLine({
    start: { x: contentX, y: p2MainY },
    end: { x: pageWidth - 24, y: p2MainY },
    thickness: 0.7,
    color: lineGray,
  });

  p2MainY -= 12;
  page2.drawText('School - Sri Dharmananda Vidyayathana Pirivena', {
    x: contentX,
    y: p2MainY,
    size: 8,
    font: fontBold,
    color: textDark,
  });
  p2MainY -= 11;
  page2.drawText('G.C.E Advanced Level Examination – 2009', {
    x: contentX,
    y: p2MainY,
    size: 8,
    font: fontBold,
    color: textDark,
  });
  p2MainY -= 10;
  page2.drawText('Accounting - A  |  Economics - B  |  Business Studies - S', {
    x: contentX + 12,
    y: p2MainY,
    size: 7.5,
    font: fontRegular,
    color: textGray,
  });

  p2MainY -= 11;
  page2.drawText('G.C.E Ordinary Level Examination – 2006: Passed', {
    x: contentX,
    y: p2MainY,
    size: 8,
    font: fontRegular,
    color: textDark,
  });

  // --- Right Main Column: DECLARATION & SIGNATURE ---
  p2MainY -= 16;
  page2.drawText('I do hereby certify that the above particulars given by me are true & correct, to', {
    x: contentX,
    y: p2MainY,
    size: 7.5,
    font: fontOblique,
    color: textGray,
  });
  p2MainY -= 10;
  page2.drawText('the best of my knowledge.', {
    x: contentX,
    y: p2MainY,
    size: 7.5,
    font: fontOblique,
    color: textGray,
  });

  p2MainY -= 14;
  page2.drawText('Chaminda Sampath', {
    x: contentX,
    y: p2MainY,
    size: 9,
    font: fontBold,
    color: darkNavy,
  });
  p2MainY -= 10;
  page2.drawText('02nd of April 2026', {
    x: contentX,
    y: p2MainY,
    size: 7.5,
    font: fontRegular,
    color: textGray,
  });

  // Page 2 footer
  page2.drawText('Chaminda Sampath – Curriculum Vitae  |  Page 2 of 2', {
    x: contentX,
    y: 18,
    size: 7.5,
    font: fontRegular,
    color: textGray,
  });

  // Save PDF to public/assets/Chaminda-Sampath-CV.pdf
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), 'public/assets/Chaminda-Sampath-CV.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated CV PDF at:', outputPath, 'Bytes:', pdfBytes.length);
}

generateCV().catch(console.error);
