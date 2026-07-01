import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Szolgáltatások',
      href: getPermalink('/services'),
    },
    {
      text: 'Rólam',
      href: getPermalink('/about'),
    },
    {
      text: 'Kapcsolat',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Beszéljünk', href: getPermalink('/contact') }],
  // TODO: cseréld ki valós telefonszámra, mielőtt élesbe megy az oldal.
  phone: '+36 30 000 0000',
};

export const footerData = {
  links: [
    {
      title: 'Szolgáltatások',
      links: [
        { text: 'Deviza- és forexkockázat kezelés', href: getPermalink('/services') + '#forex' },
        { text: 'Vállalati pénzügyi tanácsadás', href: getPermalink('/services') + '#vallalati' },
        { text: 'Befektetési tanácsadás', href: getPermalink('/services') + '#befektetes' },
        { text: 'Pénzügyi folyamat- és termékfejlesztés', href: getPermalink('/services') + '#folyamat' },
      ],
    },
    {
      title: 'Cég',
      links: [
        { text: 'Rólam', href: getPermalink('/about') },
        { text: 'Kapcsolat', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Jogi',
      links: [
        { text: 'Általános Szerződési Feltételek', href: getPermalink('/terms') },
        { text: 'Adatvédelmi tájékoztató', href: getPermalink('/privacy') },
        { text: 'Impresszum', href: getPermalink('/impresszum') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'ÁSZF', href: getPermalink('/terms') },
    { text: 'Adatvédelem', href: getPermalink('/privacy') },
    { text: 'Impresszum', href: getPermalink('/impresszum') },
  ],
  socialLinks: [{ ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/tibor-kocsis-b973b312b/' }],
  footNote: `
    © ${new Date().getFullYear()} Kocsis Tibor Pénzügyi Tanácsadás · Minden jog fenntartva.
  `,
};
