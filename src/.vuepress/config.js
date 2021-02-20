const feed_options = {

  canonical_base: 'https://note.tubone-project24.xyz',

};

module.exports = {
  lang: 'ja-JP',
  locales: {
    '/': {
      lang: 'ja'
    },
  },
  title: 'Notes',
  description: 'tubone note',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#1ee641' }, { charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' },],
    ['meta', { name: 'google-site-verification', content: '--LalgZ9bPi0TeRovPWh1jMxI1TuCs0dESPlyDtR_EQ' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.6.0/dist/katex.min.css',
      },
    ],
  ],
  themeConfig: {
    sidebar: 'auto',
    footer: 'Text: CC BY-NC-ND 4.0 | Code: MIT Licensed | Copyright © 2021 tubone',
    docsRepo: 'tubone24/markdown-memo',
    docsBranch: 'master',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit this',
    serviceWorker: {
      updatePopup: true,
    },
    algolia: {
      appId: "PRHD8Z7068",
      apiKey: '7a11c69594bc587d09175a1dec031af9',
      indexName: 'vuepress'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: 'https://blog.tubone-project24.xyz/' },
      { text: 'Portfolio', link: 'https://portfolio.tubone-project24.xyz/' },
      { text: 'GitHub', link: 'https://github.com/tubone24' },
      { text: 'Resume', link: 'https://tubone24.github.io/resume/' },
    ]
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2] },
  },
  extendMarkdown(md) {
    md.use(require('markdown-it-katex'));
    md.use(require('markdown-it-imsize'));
    md.use(require('markdown-it-abbr'));
    md.use(require('markdown-it-footnote'));
    md.use(require('markdown-it-task-lists'));
    md.use(require('markdown-it-video'));
    md.use(require('markdown-it-sub'));
    md.use(require('markdown-it-deflist'));
    md.use(require('markdown-it-plantuml'));
  },
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-147267955-1',
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true,
    },
    'sitemap': {
      hostname: 'https://note.tubone-project24.xyz'
    },
    'feed': feed_options,
  },
  serviceWorker: true,
};
