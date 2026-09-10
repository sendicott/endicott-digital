/** Site-wide content. Copy lives here so the components stay purely structural. */

export const site = {
  name: 'Endicott Digital Systems',
  legalName: 'Endicott Digital Systems LLC',
  title: 'Endicott Digital Systems | Software that moves you forward',
  description:
    'Endicott Digital Systems helps organizations modernize existing software, migrate data and connect the systems they depend on. Led by Scott Endicott in Pennsylvania.',
  themeColor: '#263e2b',
  location: 'Enola, Pennsylvania · Working remotely',
  copyrightYear: 2026,
} as const;

export const contact = {
  email: 'scott@endicott.digital',
  inquirySubject: 'Project inquiry — Endicott Digital Systems',
  /** E.164 form used in the tel: href. */
  phoneHref: 'tel:+17175161430',
  /** Human-readable form shown on the page. */
  phoneDisplay: '717-516-1430',
} as const;

/** mailto: link with the pre-filled project-inquiry subject. */
export const inquiryMailto = `mailto:${contact.email}?subject=${encodeURIComponent(contact.inquirySubject)}`;

export interface NavLink {
  href: `#${string}`;
  label: string;
  /** Decorative trailing arrow, rendered aria-hidden. */
  arrow?: boolean;
}

export const navLinks: readonly NavLink[] = [
  { href: '#services', label: 'What we do' },
  { href: '#approach', label: 'How we work' },
  { href: '#contact', label: 'Let’s talk', arrow: true },
];

export interface Service {
  number: string;
  title: string;
  description: string;
}

export const services: readonly Service[] = [
  {
    number: '01',
    title: 'Modernize existing applications',
    description:
      'Update dated interfaces, replace difficult workflows and improve the tools your team already depends on.',
  },
  {
    number: '02',
    title: 'Move data and customer accounts',
    description:
      'Plan migrations with field mapping, validation and a considered cutover—so the important details make the move.',
  },
  {
    number: '03',
    title: 'Connect platforms and repair logins',
    description:
      'Improve authentication, connect business platforms and reduce the manual work between systems.',
  },
  {
    number: '04',
    title: 'Build focused web software',
    description:
      'Create useful portals, websites and custom applications with a clear purpose and manageable scope.',
  },
];

export interface Step {
  label: string;
  title: string;
  description: string;
}

export const steps: readonly Step[] = [
  {
    label: '01 — UNDERSTAND',
    title: 'Start with the actual problem.',
    description:
      'Review the existing system, the people using it and what a successful outcome needs to look like.',
  },
  {
    label: '02 — BUILD',
    title: 'Make the work reviewable.',
    description:
      'Agree on deliverables and milestones. Review working software as it takes shape, with changes discussed before they expand the scope.',
  },
  {
    label: '03 — HAND OVER',
    title: 'Leave you ready to use it.',
    description:
      'Test the agreed workflows, document what matters and plan the transition and support expectations together.',
  },
];

export const priorExperience: readonly string[] = [
  'Digital library interfaces & e-reading',
  'Authentication & customer migration',
  'Commerce & B2B portal development',
  'Learning-platform integrations',
];
