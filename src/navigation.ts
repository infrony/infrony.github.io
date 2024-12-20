import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Consultoría Tecnológica', href: '/services#consultoria' },
        { text: 'Desarrollo Web y Móvil', href: '/services#desarrollo-web' },
        { text: 'Mantenimiento de Sitios', href: '/services#mantenimiento' },
        { text: 'Integración de APIs', href: '/services#integracion-apis' },
        { text: 'Diseño Gráfico y Branding', href: '/services#diseno-grafico' },
        { text: 'Creación de E-commerce', href: '/services#ecommerce' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Blog', href: '/blog' },
        // { text: 'Casos de Éxito', href: '/casos-exito' },
        { text: 'Tutoriales', href: '/etiqueta/tutoriales' },
        { text: 'Guías y Documentación', href: '/etiqueta/docs' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Contacto', href: '/contact' },
        { text: 'Chat en Vivo', href: 'https://wa.me/message/NQ2M2DC3AEDZD1' }, // Puede ser un enlace a un chat en vivo si lo tienes implementado
        // { text: 'Consultas Frecuentes', href: '/faqs' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Nosotros', href: '/about' },
        { text: 'Servicios', href: '/services' },
        { text: 'Planes de Diseño Web', href: '/pricing' },
        { text: 'Blog', href: '/blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://bit.ly/x-servitech-infrony' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://bit.ly/ig-servitech-infrony' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://bit.ly/fb-servitech-infrony' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/infrony' },
  ],
  footNote: `
    Por <a class="text-blue-600 underline dark:text-muted" href="https://infrony.dev/"> infrony.dev</a> · Todos los derechos reservados.
  `,
};
