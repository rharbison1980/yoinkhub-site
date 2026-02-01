/**
 * YoinkHub Site Content
 *
 * All website text lives in this file.
 * To update anything on the site, edit the values below.
 * No need to touch React components or CSS.
 */

export const siteContent = {
  // ──────────────────────────────────────
  // Brand
  // ──────────────────────────────────────
  brand: {
    name: 'YoinkHub',
    tagline: 'The CRM that actually gets roofing.',
  },

  // ──────────────────────────────────────
  // Navigation
  // ──────────────────────────────────────
  nav: {
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Community', href: '/community' },
    ],
    cta: 'Get Early Access',
  },

  // ══════════════════════════════════════
  // HOME PAGE
  // ══════════════════════════════════════

  // ──────────────────────────────────────
  // Hero Section
  // ──────────────────────────────────────
  hero: {
    badge: 'Early Access — Built by Roofers, for Roofers',
    headline: 'Your CRM shouldn\'t need its own IT department.',
    subheadline:
      'Some tools are amazing at what they do. The problem is none of them talk to each other. YoinkHub connects to the tools you already love and builds everything else — CRM, estimates, proposals, scheduling, and AI — into one platform. Zero setup fees, zero add-ons, zero commitment.',
    cta: 'Get Early Access',
    ctaSubtext: 'Free during early access. No credit card. No contract. No catch.',
  },

  // ──────────────────────────────────────
  // Pain Points Section (replaces old Features)
  // ──────────────────────────────────────
  painPoints: {
    heading: 'Sound familiar?',
    subheading: 'We built YoinkHub because we were sick of the same problems you are.',
    items: [
      {
        hook: '"Everything is an add-on"',
        problem: 'Other CRMs lure you in cheap, then nickel-and-dime you for email, proposals, scheduling, and reporting. $20/user becomes $200/user real fast.',
        solution: 'YoinkHub includes everything. One price. No add-ons. No surprise invoices.',
        icon: 'money',
      },
      {
        hook: '"Nothing talks to each other"',
        problem: 'QuickBooks doesn\'t know about your estimates. CompanyCam doesn\'t know about your contacts. Your CRM doesn\'t know about anything. You\'re the integration layer — copy-pasting between tabs all day.',
        solution: 'YoinkHub connects to the tools that are already great at what they do and builds everything else in-house. One hub, no copy-pasting, no Zapier tax.',
        icon: 'puzzle',
      },
      {
        hook: '"Setup took 3 months and I still can\'t find anything"',
        problem: 'Most CRMs are built for generic sales teams, not contractors. You spend weeks customizing something that was never designed for roofing in the first place.',
        solution: 'YoinkHub comes pre-loaded with roofing tokens, pitch multipliers, material databases, and estimate templates. It knows what a hip and a valley are.',
        icon: 'clock',
      },
      {
        hook: '"The AI is just a chatbot that says sorry a lot"',
        problem: 'Every CRM slaps "AI-Powered" on their marketing page. Then you try it and it\'s a glorified search bar that hallucinates your customer data.',
        solution: 'Our AI reads your price lists, writes estimates, drafts emails in your tone, scores leads, and flags anomalies — with anti-hallucination architecture that cites its sources.',
        icon: 'brain',
      },
      {
        hook: '"My crew can barely use their phones, let alone this software"',
        problem: 'Enterprise CRMs designed for corporate sales floors. Your guys are on roofs, not at desks. If it\'s not dead simple, it doesn\'t get used.',
        solution: 'Native desktop app for Mac and Windows. Mobile apps for iOS and Android coming soon. Designed for people who hate software — if your crew can text, they can use YoinkHub.',
        icon: 'phone',
      },
      {
        hook: '"I\'m locked into a contract and they know it"',
        problem: '12-month commitments. $5,000 setup fees. Hostage-level data export policies. You\'re stuck even when the product sucks.',
        solution: 'No contracts. No setup fees. Export your data anytime in standard formats. If we\'re not earning your business every month, we don\'t deserve it.',
        icon: 'unlock',
      },
    ],
  },

  // ──────────────────────────────────────
  // What You Get Section
  // ──────────────────────────────────────
  whatYouGet: {
    heading: 'One platform. Everything included.',
    subheading: 'Stop paying for 12 subscriptions. Start running your business from one place.',
    items: [
      { label: 'CRM & Contacts', included: true },
      { label: 'Estimates & Proposals', included: true },
      { label: 'Email (Gmail, Outlook, Yahoo, iCloud)', included: true },
      { label: 'SMS Messaging & Sequences', included: true },
      { label: 'VoIP Phone System & AI Voice', included: true },
      { label: 'Calendar & Scheduling', included: true },
      { label: 'Task Management', included: true },
      { label: 'AI Assistant', included: true },
      { label: 'Customer Portal', included: true },
      { label: 'Project Management', included: true },
      { label: 'Work Orders & Purchase Orders', included: true },
      { label: 'Safety & Compliance', included: true },
      { label: 'Inventory & Asset Tracking', included: true },
      { label: 'Vendor Price Lists', included: true },
      { label: 'Reports & Analytics', included: true },
      { label: 'Team Management', included: true },
      { label: 'Cross-Platform Apps (Mac, Windows, iOS, Android)', included: true },
    ],
  },

  // ──────────────────────────────────────
  // How It Works Section
  // ──────────────────────────────────────
  howItWorks: {
    heading: 'From lead to invoice without switching apps',
    steps: [
      {
        step: 1,
        title: 'Import your world',
        description:
          'Bring your contacts, price lists, and materials from spreadsheets, CSVs, or your old CRM. AI helps map and clean your data automatically.',
      },
      {
        step: 2,
        title: 'Drop a roof report, get an estimate',
        description:
          'Drag a QuickMeasure, EagleView, Hover, or RoofSnap PDF onto the screen. AI extracts every measurement — pitch areas, ridges, hips, valleys, flashing — and generates a fully priced estimate in seconds. No manual entry. No retyping numbers from a PDF.',
      },
      {
        step: 3,
        title: 'Let the system work for you',
        description:
          'AI scores your leads, drafts follow-up emails, flags project risks, and keeps your pipeline moving — so you can focus on the work that actually pays.',
      },
    ],
  },

  // ──────────────────────────────────────
  // Stats Section
  // ──────────────────────────────────────
  stats: {
    items: [
      { value: '$0', label: 'Setup Fee' },
      { value: '0', label: 'Contracts' },
      { value: '1', label: 'Platform for Everything' },
      { value: '100%', label: 'Your Data, Always' },
    ],
  },

  // ──────────────────────────────────────
  // Social Proof / Mission Section
  // ──────────────────────────────────────
  socialProof: {
    quote:
      'We didn\'t build YoinkHub because the market needed another CRM. We built it because every CRM we tried was either overpriced, half-baked, or built for someone selling insurance — not someone replacing a roof. So we built our own.',
    attribution: 'The YoinkHub Team',
  },

  // ──────────────────────────────────────
  // Waitlist Section
  // ──────────────────────────────────────
  waitlist: {
    heading: 'Done with half-baked software?',
    subheading:
      'Get early access to YoinkHub — free. No credit card. No commitment. Just a CRM that finally makes sense for roofing.',
    placeholder: 'Enter your email',
    cta: 'Count Me In',
    successMessage: "You're on the list! We'll be in touch soon.",
    errorMessage: 'Something went wrong. Please try again.',
    duplicateMessage: "Looks like you're already on the list! We'll reach out soon.",
  },

  // ══════════════════════════════════════
  // FEATURES PAGE
  // ══════════════════════════════════════

  featuresPage: {
    hero: {
      headline: 'Every feature. One price. No add-ons.',
      subheadline: 'Here\'s everything YoinkHub does — and where we are in building it. Full transparency, no vaporware.',
    },
    statusLegend: {
      live: 'Live & Working',
      beta: 'Developed, In Testing',
      development: 'In Development',
      planned: 'Planned',
    },
    categories: [
      {
        name: 'CRM & Contacts',
        hook: 'Tired of your contacts living in 4 different spreadsheets?',
        features: [
          { name: 'Contact & Company Management', benefit: 'Every lead, customer, and vendor in one searchable database with full history.', status: 'beta' },
          { name: 'AI Lead Scoring', benefit: 'Stop guessing who to call next. AI ranks your leads by likelihood to close.', status: 'beta' },
          { name: 'Opportunity Pipeline', benefit: 'Visual pipeline so you always know what\'s sold, what\'s pending, and what\'s slipping.', status: 'beta' },
          { name: 'Bulk Operations', benefit: 'Update 50 contacts at once instead of clicking through them one by one.', status: 'beta' },
          { name: 'Permission Levels', benefit: 'Control who sees what — public, private, or team-only records.', status: 'beta' },
          { name: 'Smart Import', benefit: 'AI-assisted import from CSV, Excel, or JSON. Duplicate detection built in.', status: 'beta' },
        ],
      },
      {
        name: 'Estimates & Proposals',
        hook: 'Still building estimates in Excel and hoping you didn\'t miss a line item?',
        features: [
          { name: 'Drag-and-Drop Roof Reports', benefit: 'Drop a QuickMeasure, EagleView, Hover, RoofSnap, Roofr, or KRL PDF onto the screen. AI auto-detects the provider, extracts every measurement, and splits multi-building properties (house, garage) automatically.', status: 'beta' },
          { name: 'One-Click Estimate Generation', benefit: 'Parsed measurements flow straight into your estimate templates. Pick a template, and pricing, labor, waste, and pitch adjustments calculate instantly — no retyping from a PDF.', status: 'beta' },
          { name: 'Estimate Builder', benefit: 'Live calculation engine with measurement tokens, pitch adjustments, waste factors, and margin control.', status: 'beta' },
          { name: 'Roofing-Specific Tokens', benefit: '40+ pre-built tokens for squares, hips, valleys, ridges, flashing — enter once, calculate everywhere.', status: 'beta' },
          { name: 'Estimate Templates', benefit: 'Build once, reuse forever. Templates with materials, labor, and miscellaneous sections.', status: 'beta' },
          { name: 'Upgrade Tiers', benefit: 'Good / Better / Best pricing tiers. Let customers pick their package.', status: 'beta' },
          { name: 'Proposal Builder', benefit: 'Branded proposals with sections, images, and e-signature. Send professional docs, not spreadsheets.', status: 'beta' },
          { name: 'PDF Export', benefit: 'Generate polished PDF proposals in one click.', status: 'beta' },
          { name: 'Customer Portal', benefit: 'Customers review estimates, pick options, and sign — all from a branded portal with your logo.', status: 'beta' },
        ],
      },
      {
        name: 'Pricing & Materials',
        hook: 'Vendor price lists scattered across email attachments from 2019?',
        features: [
          { name: 'Material Database', benefit: 'Centralized materials with pricing, coverage, manufacturers, and vendor associations.', status: 'beta' },
          { name: 'Multi-Vendor Pricing', benefit: 'Same material, different vendors, different prices. Compare and pick the best deal.', status: 'beta' },
          { name: 'Labor Rate Management', benefit: 'Base rates with pitch multipliers (2/12 through 12/12). The math handles itself.', status: 'beta' },
          { name: 'Smart Price List Import', benefit: 'Upload vendor PDFs or spreadsheets. AI parses and maps pricing to your database.', status: 'beta' },
          { name: 'Formula Engine', benefit: 'Custom calculation formulas for quantity and pricing. Spreadsheet-grade power without the spreadsheet.', status: 'beta' },
          { name: 'Manufacturer Scrapers', benefit: 'Auto-pull marketing specs, tech docs, and product data from GAF, CertainTeed, Owens Corning, IKO, and more. Pricing comes from your vendors.', status: 'beta' },
        ],
      },
      {
        name: 'Email & Communication',
        hook: '1,967 unread emails and counting?',
        features: [
          { name: 'Built-in Email', benefit: 'Gmail, Outlook, Yahoo, iCloud — your inboxes inside YoinkHub. No Zapier required.', status: 'beta' },
          { name: 'Email Concierge', benefit: 'AI reads, prioritizes, and surfaces what actually matters. It drafts replies, flags urgent items, and quietly handles the noise — so you open your inbox to a game plan, not a panic attack.', status: 'beta' },
          { name: 'Email Templates', benefit: 'Reusable templates with merge tokens. {{contact.firstName}} writes the email for you.', status: 'beta' },
          { name: 'AI Reply Suggestions', benefit: 'AI drafts replies that match your writing style. Review, tweak, send.', status: 'beta' },
          { name: 'Thread View', benefit: 'Full conversation history with each contact. No more digging through inboxes.', status: 'beta' },
          { name: 'Multi-Account Support', benefit: 'Personal, company, sales — manage all your email accounts in one place.', status: 'beta' },
        ],
      },
      {
        name: 'Phone & SMS',
        hook: 'Still using your personal cell and hoping you remember to log the call?',
        features: [
          { name: 'VoIP Phone System', benefit: 'Business phone numbers with click-to-call, call history, voicemail, and automatic logging — all inside YoinkHub.', status: 'beta' },
          { name: 'AI Voice Agents', benefit: 'AI answers inbound calls, qualifies leads, and books appointments when you can\'t pick up. Powered by ElevenLabs.', status: 'beta' },
          { name: 'Voicemail Transcription', benefit: 'Every voicemail transcribed and attached to the contact record. Scan instead of listen.', status: 'beta' },
          { name: 'SMS Messaging', benefit: 'Send and receive texts from your business number. Full conversation threads tied to contacts.', status: 'beta' },
          { name: 'SMS Sequences', benefit: 'Automated text drip campaigns triggered by events — estimate sent, proposal viewed, project completed. Stops when they reply.', status: 'beta' },
          { name: 'Call & SMS Analytics', benefit: 'Volume, connect rates, response times. Know which outreach actually converts.', status: 'beta' },
        ],
      },
      {
        name: 'AI & Automation',
        hook: 'Heard "AI-Powered" so many times it lost all meaning?',
        features: [
          { name: 'AI Agents', benefit: 'Configurable AI assistants with personality, FAQ guardrails, and anti-hallucination architecture.', status: 'beta' },
          { name: 'Knowledge Base (RAG)', benefit: 'Upload your docs. AI searches them semantically and cites its sources.', status: 'beta' },
          { name: 'Weekly Digest', benefit: 'AI-generated summary of your pipeline, anomalies, and action items. Every Monday.', status: 'beta' },
          { name: 'Lead Scoring', benefit: 'ML-based scoring that learns from your pipeline to rank leads by close probability.', status: 'beta' },
          { name: 'Measurement Extraction', benefit: 'Supports 6 report providers (QuickMeasure, EagleView, Hover, RoofSnap, Roofr, KRL). Two-stage AI parsing with self-correction. Multi-building detection splits house and garage automatically.', status: 'beta' },
          { name: 'Concierge Rules Engine', benefit: 'If/then business rules that automate follow-ups, status changes, and alerts.', status: 'beta' },
          { name: '4 AI Providers', benefit: 'Claude, Gemini, OpenAI, Grok — pick your provider or let the system choose the best for each task.', status: 'beta' },
        ],
      },
      {
        name: 'Scheduling & Tasks',
        hook: 'Double-booked your crew again because the calendar lives on a whiteboard?',
        features: [
          { name: 'Calendar', benefit: 'Appointments, site visits, inspections — color-coded and shareable across your team.', status: 'beta' },
          { name: 'Task Management', benefit: 'Assign tasks with due dates, priorities, and status tracking. No more sticky notes.', status: 'beta' },
          { name: 'Customer Scheduling Portal', benefit: 'Customers request appointments from your portal. You approve, reschedule, or decline.', status: 'beta' },
        ],
      },
      {
        name: 'Projects & Operations',
        hook: 'Tracking jobs on a clipboard that got left in the truck?',
        features: [
          { name: 'Project Pipeline', benefit: 'Kanban-style board: sold, in-progress, review, completed. Visual project tracking.', status: 'beta' },
          { name: 'Crew Assignment', benefit: 'Assign crews to projects. See who\'s where and what\'s next.', status: 'beta' },
          { name: 'Work Orders', benefit: 'Generate work orders tied to projects. Assign scope, materials, and crew — then track completion from the field.', status: 'beta' },
          { name: 'Purchase Orders', benefit: 'Create POs against vendor price lists. Track what\'s been ordered, received, and invoiced per job.', status: 'beta' },
          { name: 'Job Costing', benefit: 'Track actual costs against estimates in real time. Materials, labor, subs — know your margins before the job is done, not after.', status: 'beta' },
          { name: 'Project Risk Assessment', benefit: 'AI flags projects that are at risk of delays or cost overruns.', status: 'beta' },
        ],
      },
      {
        name: 'SOPs & Field Operations',
        hook: 'Your best crew knows the process. The rest are guessing.',
        features: [
          { name: 'SOP Builder', benefit: 'Create step-by-step standard operating procedures for installs, inspections, safety, and cleanup. Assign to job types or crews.', status: 'beta' },
          { name: 'SOP Checklists', benefit: 'Turn SOPs into checklists your crew completes on-site. Track compliance and sign-off per job.', status: 'beta' },
          { name: 'Safety Paperwork', benefit: 'Digital safety forms, toolbox talks, and incident reports. Completed on-site, stored with the project — no more paper binders.', status: 'beta' },
          { name: 'Pre-Job & Post-Job Inspections', benefit: 'Configurable inspection forms with photo capture. Document conditions before and after every job.', status: 'beta' },
        ],
      },
      {
        name: 'Safety & Compliance',
        hook: 'Still doing safety paperwork on clipboards that end up under the truck seat?',
        features: [
          { name: 'Safety Form Builder', benefit: '16 pre-built templates (Fall Protection, FLHA, Equipment Inspection, Toolbox Talk, and more) plus a drag-and-drop builder for custom forms.', status: 'beta' },
          { name: 'Mobile Form Completion', benefit: 'Crews fill out safety forms on-site with photo capture, GPS, and digital signatures. Stored with the project automatically.', status: 'beta' },
          { name: 'Incident Reporting', benefit: 'Report injuries, near-misses, and property damage with severity tracking, investigation workflow, and days-without-incident counters.', status: 'beta' },
          { name: 'Corrective Actions', benefit: 'Auto-generate corrective actions from failed inspections. Track assignment, priority, resolution, and verification.', status: 'beta' },
          { name: 'Certification Tracking', benefit: '15 certification types — Fall Protection, First Aid, WHMIS, OSHA, COR — with expiry alerts and renewal reminders.', status: 'beta' },
          { name: 'Compliance Dashboard', benefit: 'Safety scores, trends, overdue forms, and incident history at a glance. COR audit package export for Alberta.', status: 'beta' },
        ],
      },
      {
        name: 'Inventory & Asset Tracking',
        hook: 'Lost another $800 nail gun because nobody knows who checked it out?',
        features: [
          { name: 'Asset Management', benefit: 'Track tools, equipment, and materials with categories, photos, and status (active, maintenance, retired, lost).', status: 'beta' },
          { name: 'QR Code Tracking', benefit: 'Generate QR codes for every item. Scan to check out, check in, transfer, or inspect — no typing required.', status: 'beta' },
          { name: 'Check-Out / Check-In', benefit: 'Assign items to crew members, trucks, or job sites. Full audit trail of who had what and when.', status: 'beta' },
          { name: 'Transfers & Inspections', benefit: 'Move items between locations and record inspections with notes. Inspection-due reminders keep equipment compliant.', status: 'beta' },
          { name: 'Inventory Dashboard', benefit: 'Counts by status, location, and category. See what\'s checked out, what needs inspection, and what\'s overdue.', status: 'beta' },
        ],
      },
      {
        name: 'Team & Admin',
        hook: 'New hire needs access and it takes a week to set up?',
        features: [
          { name: 'Role-Based Access', benefit: 'Super Admin, Company Admin, User — control exactly who can do what.', status: 'beta' },
          { name: 'Team Management', benefit: 'Add users, assign roles, manage permissions from one screen.', status: 'beta' },
          { name: 'Admin Panel', benefit: 'User management, impersonation for testing, and system-wide controls.', status: 'beta' },
          { name: 'Multi-Tenant Architecture', benefit: 'Your data is completely isolated. Enterprise-grade security without the enterprise price.', status: 'beta' },
        ],
      },
      {
        name: 'Customer Portal',
        hook: 'Sending estimates as email attachments and hoping for the best?',
        features: [
          { name: 'Branded Portal', benefit: 'Your logo, your colors, your domain. Customers see a professional experience, not a generic form.', status: 'beta' },
          { name: 'Estimate Review & Sign', benefit: 'Customers review tiers, select component upgrades, pick options, and e-sign — all online.', status: 'beta' },
          { name: 'Financing Calculator', benefit: 'Built-in payment calculator with multiple terms so customers see monthly costs right on the proposal.', status: 'beta' },
          { name: 'Before/After Gallery', benefit: 'Interactive slider to compare before and after photos. Build trust before you show up.', status: 'beta' },
          { name: 'Appointment Scheduling', benefit: 'Customers request site visits, inspections, or follow-ups with preferred dates. You approve or reschedule.', status: 'beta' },
          { name: 'Project Timeline', benefit: 'Customers see exactly where their project stands — from sold through completion — without calling the office.', status: 'beta' },
          { name: 'Document Library', benefit: 'Share warranties, product specs, and sell sheets. Customers download what they need.', status: 'beta' },
          { name: 'Referral Program', benefit: 'Customers refer friends and neighbors right from the portal. Name, phone, and relationship — captured automatically.', status: 'beta' },
          { name: 'Learning Center', benefit: 'Roofing glossary, material education, and FAQs so customers understand what they\'re buying.', status: 'beta' },
          { name: 'Promotions & Discounts', benefit: 'Display active promotions with promo codes and expiration dates. Rotating carousel for multiple offers.', status: 'beta' },
          { name: 'Contact Update Requests', benefit: 'Customers request address or phone changes. You review and approve.', status: 'beta' },
          { name: 'Proposal Analytics', benefit: 'Track when customers open, scroll, and interact with proposals. Know who\'s engaged before you follow up.', status: 'beta' },
        ],
      },
      {
        name: 'Platform & Apps',
        hook: 'Your office is a truck cab, a kitchen table, and a job site.',
        features: [
          { name: 'Web App', benefit: 'Full-featured web app that runs in any modern browser. No install required.', status: 'beta' },
          { name: 'Mac Desktop App', benefit: 'Native macOS app. Fast, responsive, and built for Macs — not a browser tab pretending to be software.', status: 'development' },
          { name: 'Windows Desktop App', benefit: 'Native Windows app with the same full feature set. Runs on any modern PC.', status: 'development' },
          { name: 'iOS App (iPhone & iPad)', benefit: 'Full YoinkHub on your iPhone or iPad. Create estimates, manage contacts, and check your pipeline from the field.', status: 'development' },
          { name: 'Android App (Phone & Tablet)', benefit: 'Same mobile experience for your Android crew. No feature gaps between platforms.', status: 'development' },
          { name: 'Offline Mode', benefit: 'Spotty signal on the roof? Work offline and sync when you\'re back. No lost data.', status: 'planned' },
        ],
      },
      {
        name: 'Coming Soon',
        hook: 'What\'s next on the roadmap?',
        features: [
          { name: 'Automated Backup & Restore', benefit: 'One-click backup of all your data. Restore anytime.', status: 'beta' },
          { name: 'Advanced Reporting', benefit: 'Revenue by crew, close rates by lead source, seasonal trends. Project profitability and crew performance.', status: 'development' },
          { name: 'Google Calendar Sync', benefit: 'Two-way sync between YoinkHub and Google Calendar. Appointments show up on your phone automatically.', status: 'development' },
          { name: 'Dedicated Crew App', benefit: 'Stripped-down field app for your crew. Work orders, checklists, safety forms, and time tracking — nothing they don\'t need, everything they do.', status: 'planned' },
          { name: 'HR & Employee Management', benefit: 'Employee records, time tracking, timesheet approval, PTO, performance reviews, and training records.', status: 'planned' },
          { name: 'Power Dialer', benefit: 'Sequential auto-dial through filtered contact lists with AI post-call summarization and smart follow-up queues.', status: 'planned' },
        ],
      },
    ],
  },

  // ══════════════════════════════════════
  // INTEGRATIONS PAGE
  // ══════════════════════════════════════

  integrationsPage: {
    hero: {
      headline: 'We don\'t replace what already works.',
      subheadline: 'Some tools are best-in-class at what they do. We\'re not going to out-QuickBooks QuickBooks. Instead, YoinkHub connects to the software you already rely on — and builds everything else the way it should have been built in the first place.',
    },
    philosophy: {
      heading: 'Our approach',
      text: 'Most CRMs try to do everything and end up doing nothing well. We took a different approach: if a tool is already incredible at what it does, we integrate with it. If nobody\'s built it right for roofing, we build it ourselves. That\'s how you get a platform that actually works — not a half-baked clone of 20 other products.',
    },
    statusLegend: {
      connected: 'Connected',
      building: 'In Development',
      planned: 'On the Roadmap',
    },
    categories: [
      {
        name: 'Already Connected',
        description: 'These integrations are built-in and working today.',
        integrations: [
          {
            name: 'Gmail',
            description: 'Send, receive, and track email right inside YoinkHub. Full thread history synced to each contact.',
            status: 'connected',
          },
          {
            name: 'Outlook',
            description: 'Microsoft 365 and Outlook.com accounts. Same full integration as Gmail.',
            status: 'connected',
          },
          {
            name: 'Yahoo Mail',
            description: 'Connect Yahoo accounts for sending and receiving within the platform.',
            status: 'connected',
          },
          {
            name: 'iCloud Mail',
            description: 'Apple iCloud email support for contractors in the Apple ecosystem.',
            status: 'connected',
          },
          {
            name: 'QuickBooks Online',
            description: 'OAuth2 connection with customer sync, invoice push, tax code mapping, and Projects API. Your books stay in sync automatically.',
            status: 'connected',
          },
          {
            name: 'CompanyCam',
            description: 'Job site photos flow into the right project automatically. Your crew takes the photo, YoinkHub has it.',
            status: 'connected',
          },
          {
            name: 'Twilio',
            description: 'Business phone numbers, SMS messaging, voice calls, and AI voice agents — all powered by Twilio under the hood.',
            status: 'connected',
          },
        ],
      },
      {
        name: 'Coming Soon',
        description: 'Actively being built. These are next in line.',
        integrations: [
          {
            name: 'Google Calendar',
            description: 'Two-way sync. Appointments created in YoinkHub show up on your phone and vice versa.',
            status: 'building',
          },
          {
            name: 'Stripe',
            description: 'Accept payments from the customer portal. Credit card, ACH, financing — all tied back to the estimate.',
            status: 'building',
          },
        ],
      },
      {
        name: 'On the Roadmap',
        description: 'Planned integrations we\'re evaluating and scoping.',
        integrations: [
          {
            name: 'EagleView',
            description: 'Pull roof measurement reports directly into your estimates. No manual entry from PDFs.',
            status: 'planned',
          },
          {
            name: 'GAF QuickMeasure',
            description: 'Import aerial roof measurements and auto-populate estimate tokens.',
            status: 'planned',
          },
          {
            name: 'Xactimate',
            description: 'Import and export Xactimate-format estimates for insurance restoration work.',
            status: 'planned',
          },
          {
            name: 'Zapier',
            description: 'Connect YoinkHub to 5,000+ apps for anything we haven\'t built a native integration for yet.',
            status: 'planned',
          },
          {
            name: 'Google Business Profile',
            description: 'Pull in reviews, respond to customers, and track your online reputation from inside YoinkHub.',
            status: 'planned',
          },
          {
            name: 'FinanceIT',
            description: 'Consumer financing for Canadian contractors. Pre-filled applications, status tracking, and monthly payment options on proposals.',
            status: 'planned',
          },
        ],
      },
    ],
    cta: {
      heading: 'Missing an integration?',
      text: 'We\'re building this for contractors, not MBAs. If there\'s a tool your crew depends on, tell us.',
      buttonLabel: 'Request an Integration',
      buttonHref: '/community',
    },
  },

  // ══════════════════════════════════════
  // COMMUNITY PAGE
  // ══════════════════════════════════════

  communityPage: {
    hero: {
      headline: 'Built in the open. Roast us.',
      subheadline: 'YoinkHub is being built with input from real contractors. Tell us what sucks, what\'s missing, and what would make you switch. No PR filter.',
    },
    categories: ['Feature Request', 'Bug Report', 'Question', 'General Feedback', 'Roast Us'],
    threadForm: {
      heading: 'Start a Thread',
      titlePlaceholder: 'Thread title',
      categoryLabel: 'Category',
      messagePlaceholder: 'What\'s on your mind?',
      cta: 'Post Thread',
      signInPrompt: 'Sign in to start a discussion.',
    },
    replyForm: {
      placeholder: 'Write a reply... (use @Name to mention someone)',
      cta: 'Post Reply',
      signInPrompt: 'Sign in to join the discussion.',
    },
    emptyState: 'No threads yet. Be the first to start a discussion.',
    errorMessage: 'Something went wrong. Please try again.',
  },

  // ──────────────────────────────────────
  // Footer
  // ──────────────────────────────────────
  footer: {
    copyright: `\u00A9 ${new Date().getFullYear()} YoinkHub. All rights reserved.`,
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Community', href: '/community' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
};
