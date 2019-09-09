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
    docsRepo: 'tubone24/markdown-memo',
    docsBranch: 'master',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit this',
    serviceWorker: {
      updatePopup: true,
    },
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
  },
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-147267955-1',
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true,
    },
  },
  serviceWorker: true,
};
