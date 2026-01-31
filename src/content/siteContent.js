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
    badge: 'Coming Soon — Built by Roofers, for Roofers',
    headline: 'Your CRM shouldn\'t need its own IT department.',
    subheadline:
      'Tired of duct-taping 6 different apps together just to send an estimate? YoinkHub is one platform that does it all — CRM, estimates, proposals, email, scheduling, and AI — with zero setup fees, zero add-ons, and zero commitment.',
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
        hook: '"I need 6 apps and Zapier to run my business"',
        problem: 'One tool for estimates, another for CRM, another for email, another for scheduling. Nothing talks to each other. Data lives in 12 different places.',
        solution: 'CRM, estimates, proposals, email, calendar, tasks, and AI — all in one platform. Your data lives in one place because your business runs in one place.',
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
        solution: 'Built mobile-first. Designed for people who hate software. If your crew can text, they can use YoinkHub.',
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
      { label: 'Calendar & Scheduling', included: true },
      { label: 'Task Management', included: true },
      { label: 'AI Assistant', included: true },
      { label: 'Customer Portal', included: true },
      { label: 'Project Management', included: true },
      { label: 'Vendor Price Lists', included: true },
      { label: 'Reports & Analytics', included: true },
      { label: 'Team Management', included: true },
      { label: 'Mobile App', included: true },
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
        title: 'Build estimates in minutes',
        description:
          'Plug in roof measurements, pick a template, and let the calculation engine handle pricing, waste, pitch adjustments, and margins. Send a professional proposal before you leave the driveway.',
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
          { name: 'Manufacturer Scrapers', benefit: 'Auto-pull latest pricing from GAF, CertainTeed, Owens Corning, IKO, and more.', status: 'beta' },
        ],
      },
      {
        name: 'Email & Communication',
        hook: 'Alt-tabbing between your CRM and Gmail all day?',
        features: [
          { name: 'Built-in Email', benefit: 'Gmail, Outlook, Yahoo, iCloud — your inboxes inside YoinkHub. No Zapier required.', status: 'beta' },
          { name: 'Email Templates', benefit: 'Reusable templates with merge tokens. {{contact.firstName}} writes the email for you.', status: 'beta' },
          { name: 'AI Reply Suggestions', benefit: 'AI drafts replies that match your writing style. Review, tweak, send.', status: 'beta' },
          { name: 'Thread View', benefit: 'Full conversation history with each contact. No more digging through inboxes.', status: 'beta' },
          { name: 'Multi-Account Support', benefit: 'Personal, company, sales — manage all your email accounts in one place.', status: 'beta' },
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
          { name: 'Measurement Extraction', benefit: 'Upload a roof report image. AI extracts measurements and populates your estimate.', status: 'beta' },
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
          { name: 'Project Risk Assessment', benefit: 'AI flags projects that are at risk of delays or cost overruns.', status: 'beta' },
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
          { name: 'Estimate Review & Sign', benefit: 'Customers review tiers, select upgrades, pick shingle colors, and sign — all online.', status: 'beta' },
          { name: 'Contact Update Requests', benefit: 'Customers request address or phone changes. You review and approve.', status: 'beta' },
          { name: 'Financing Calculator', benefit: 'Built-in payment calculator so customers see monthly costs right on the proposal.', status: 'beta' },
          { name: 'Photo Gallery', benefit: 'Showcase your work. Before/after photos build trust before you show up.', status: 'beta' },
        ],
      },
      {
        name: 'Coming Soon',
        hook: 'What\'s next on the roadmap?',
        features: [
          { name: 'Automated Backup & Restore', benefit: 'One-click backup of all your data. Restore anytime.', status: 'development' },
          { name: 'Advanced Reporting', benefit: 'Revenue by crew, close rates by lead source, seasonal trends.', status: 'development' },
          { name: 'Voice Integration', benefit: 'Click-to-call from contact records with automatic logging.', status: 'planned' },
          { name: 'Inventory Tracking', benefit: 'Track material stock levels across jobs and warehouses.', status: 'planned' },
          { name: 'QuickBooks Integration', benefit: 'Sync estimates and invoices directly to your accounting software.', status: 'planned' },
        ],
      },
    ],
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
      { label: 'Community', href: '/community' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
};
