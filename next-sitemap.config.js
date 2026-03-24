/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://traveldentist.in',
  generateRobotsTxt: true,

  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  transform: async (config, path) => {
    // 🏠 Homepage (highest priority)
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // 🦷 Service Pages (important for SEO)
    const servicePages = [
      '/full-mouth-rehabilitation',
      '/laser-dentistry',
      '/gummy-smile-correction',
      '/gum-disease-treatment',
      '/dental-implants',
      '/dental-tourism',
    ];

    if (servicePages.includes(path)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // 📄 About & Contact
    if (path === '/about-us' || path === '/contact-us') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }

    // 🔒 Low priority pages
    if (path === '/privacy-policy' || path === '/terms-service') {
      return {
        loc: path,
        changefreq: 'yearly',
        priority: 0.3,
        lastmod: new Date().toISOString(),
      };
    }

    // 🔁 Default fallback
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};