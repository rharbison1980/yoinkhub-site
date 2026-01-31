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
    tagline: 'Roofing & Construction Estimation Tool',
  },

  // ──────────────────────────────────────
  // Navigation
  // ──────────────────────────────────────
  nav: {
    cta: 'Join the Waitlist',
  },

  // ──────────────────────────────────────
  // Hero Section
  // ──────────────────────────────────────
  hero: {
    badge: 'Coming Soon — Join the Waitlist',
    headline: "Estimates that don't make you wanna throw your laptop off the roof.",
    subheadline:
      'YoinkHub is the estimation tool built for roofers and contractors who are tired of spreadsheets, guesswork, and lost profit. Smart templates. Automatic calculations. Done.',
    cta: 'Get Early Access',
    ctaSubtext: 'Free during early access. No credit card required.',
  },

  // ──────────────────────────────────────
  // Features Section
  // ──────────────────────────────────────
  features: {
    heading: 'Built for the way contractors actually work',
    subheading:
      "No more wrestling with spreadsheets or forgetting to add the waste factor. YoinkHub handles the math so you can focus on the job.",
    items: [
      {
        title: 'Smart Price Lists',
        description:
          'Manage materials and labor pricing in one place. Import from Excel, set margins, and keep everything up to date.',
        icon: 'price-tag',
      },
      {
        title: 'Formula-Powered Calculations',
        description:
          'Build custom formulas with tokens like roof area, pitch, and waste factor. The math runs itself — just plug in the measurements.',
        icon: 'calculator',
      },
      {
        title: 'Scope of Work Templates',
        description:
          'Create reusable templates for common job types. Materials, labor, and extras — organized in sections, ready to go.',
        icon: 'clipboard',
      },
      {
        title: 'Roofing Measurement Tokens',
        description:
          'Pre-built tokens for pitches, ridges, hips, valleys, and more. Enter your measurements once and let formulas do the rest.',
        icon: 'ruler',
      },
      {
        title: 'Google Drive Backup',
        description:
          'Sync your data to Google Drive automatically. Access your price lists and templates from anywhere.',
        icon: 'cloud',
      },
      {
        title: 'No Lock-In, Your Data',
        description:
          'Export everything as JSON anytime. Import from Excel. Your data stays yours — always.',
        icon: 'unlock',
      },
    ],
  },

  // ──────────────────────────────────────
  // How It Works Section
  // ──────────────────────────────────────
  howItWorks: {
    heading: 'From measurements to money in three steps',
    steps: [
      {
        step: 1,
        title: 'Set up your playbook',
        description:
          'Add your materials, labor rates, and margins. Import from Excel or build from scratch. Set it once, use it forever.',
      },
      {
        step: 2,
        title: 'Build your template',
        description:
          'Drag in items from your price list, organize by section, and let formulas handle quantity and pricing calculations.',
      },
      {
        step: 3,
        title: 'Yoink the estimate',
        description:
          'Plug in the measurements, review the numbers, and send a professional estimate. Done before lunch.',
      },
    ],
  },

  // ──────────────────────────────────────
  // Stats Section
  // ──────────────────────────────────────
  stats: {
    items: [
      { value: '40+', label: 'Roofing Tokens' },
      { value: '8', label: 'Calculation Functions' },
      { value: 'Unlimited', label: 'Templates & Price Lists' },
      { value: '100%', label: 'Your Data' },
    ],
  },

  // ──────────────────────────────────────
  // Social Proof / Mission Section
  // ──────────────────────────────────────
  socialProof: {
    quote:
      'We watched contractors lose hours to spreadsheets and miss line items that cost them thousands. YoinkHub exists because estimating shouldn\'t be the hardest part of the job.',
    attribution: 'The YoinkHub Team',
  },

  // ──────────────────────────────────────
  // Waitlist Section
  // ──────────────────────────────────────
  waitlist: {
    heading: 'Be first through the door',
    subheading:
      'Join the waitlist and get early access when we launch. Early birds get it free.',
    placeholder: 'Enter your email',
    cta: 'Count Me In',
    successMessage: "You're on the list! We'll be in touch soon.",
    errorMessage: 'Something went wrong. Please try again.',
    duplicateMessage: "Looks like you're already on the list! We'll reach out soon.",
  },

  // ──────────────────────────────────────
  // Footer
  // ──────────────────────────────────────
  footer: {
    copyright: `© ${new Date().getFullYear()} YoinkHub. All rights reserved.`,
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
};
