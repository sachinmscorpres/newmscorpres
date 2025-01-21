// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://newmscorpres.vercel.app/', // Replace with your site's URL
    generateRobotsTxt: true, // (Optional) Generates `robots.txt` file
    changefreq: 'daily', // Frequency of changes
    priority: 0.7, // Default priority
    sitemapSize: 5000, // Number of URLs per sitemap file
    exclude: ['/admin/*'], // Exclude specific routes (optional)
    // Additional options
  };
  