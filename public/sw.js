if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let s = Promise.resolve()
      return (
        c[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const c = document.createElement('script')
              ;(c.src = e), document.head.appendChild(c), (c.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!c[e]) throw new Error(`Module ${e} didn’t register its module`)
          return c[e]
        })
      )
    },
    s = (s, c) => {
      Promise.all(s.map(e)).then((e) => c(1 === e.length ? e[0] : e))
    },
    c = { require: Promise.resolve(s) }
  self.define = (s, a, r) => {
    c[s] ||
      (c[s] = Promise.resolve().then(() => {
        let c = {}
        const i = { uri: location.origin + s.slice(1) }
        return Promise.all(
          a.map((s) => {
            switch (s) {
              case 'exports':
                return c
              case 'module':
                return i
              default:
                return e(s)
            }
          })
        ).then((e) => {
          const s = r(...e)
          return c.default || (c.default = s), c
        })
      }))
  }
}
define('./sw.js', ['./workbox-c2b5e142'], function (e) {
  'use strict'
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url:
            '/_next/static/chunks/095733ecbe0b48b89da6e50689d15492344c5f54.3a97515ba5788dfe5170.js',
          revision: '7a1010a6eaea8ffae3b9d0b150b6fe8b',
        },
        {
          url:
            '/_next/static/chunks/0bb452bbda45f8e0c343687e37cb0089bd2c6f54.35e36af660fe08c908d5.js',
          revision: '03ef91093d843c164960eeb335ec3b79',
        },
        {
          url:
            '/_next/static/chunks/42a550aed16621ddfc495e50ce0cfec9d24c03e0.850ce6db014810c91c05.js',
          revision: '05ea4aadb38ca4ff8e4eab7b55f13297',
        },
        {
          url: '/_next/static/chunks/commons.b603684b81076fefb02d.js',
          revision: 'ef4165e1213470d0b00ed538e645bd39',
        },
        {
          url: '/_next/static/chunks/framework.e9a558c01302de2936c7.js',
          revision: 'bf4e5f46a6bd44e27e84ad2c715b7fe9',
        },
        {
          url: '/_next/static/chunks/main-b795f88c0017a08d26cc.js',
          revision: '8f3526ccf6eb98b7fc4191259e25c500',
        },
        {
          url: '/_next/static/chunks/pages/_app-75918f16ac80e7336929.js',
          revision: 'f85d4b6948a06d98c1157e1620ce7a87',
        },
        {
          url: '/_next/static/chunks/pages/_error-86d3d4c4801c50e3a419.js',
          revision: '4d1ffbb978863969e5d80433f4feedcf',
        },
        {
          url: '/_next/static/chunks/pages/index-3ba62f35fa30e301d90b.js',
          revision: 'd10391314a90271f73937fa4cef2edb4',
        },
        {
          url:
            '/_next/static/chunks/pages/movie/%5BmovieId%5D-cd5405ff47789590b997.js',
          revision: 'e49b8f21e540b35385d29eb65740a6bc',
        },
        {
          url:
            '/_next/static/chunks/pages/movies-search/%5Bsearchterm%5D-228a380b5004cb991281.js',
          revision: '6918306a8e2565a7f361c179439109f2',
        },
        {
          url: '/_next/static/chunks/polyfills-4beebf4ac9054f0bf4e6.js',
          revision: 'c8b961cfccce0518d96d73f45e46210d',
        },
        {
          url: '/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js',
          revision: '8c19f623e8389f11131a054a7e17ff95',
        },
        {
          url: '/_next/static/css/39d8e1a04a466350750a.css',
          revision: '04537ceaf8613e23ece8484e16a6864b',
        },
        {
          url: '/_next/static/css/444572595738f0e81577.css',
          revision: '91d625acc55b75767d52709a1539d74e',
        },
        {
          url: '/_next/static/q0CyOAWJ_BiKRAEsD7tNb/_buildManifest.js',
          revision: 'c559d4e61ef7019afd2f7e065e1b228f',
        },
        {
          url: '/_next/static/q0CyOAWJ_BiKRAEsD7tNb/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff',
        },
        {
          url: '/apple-touch-icon.png',
          revision: '7d8281986da8db9c1b5413570ecc1f83',
        },
        {
          url: '/audit/report.html',
          revision: 'c946ed8f17072684a619a0774f71323d',
        },
        {
          url: '/favicon-16x16.png',
          revision: '12b1cab2ce8a716a075f33cffcc9bc97',
        },
        {
          url: '/favicon-32x32.png',
          revision: '096850f15c19cf78da22a61a7fc60b53',
        },
        {
          url: '/favicon-mask.svg',
          revision: '40c9bc99e963fb841cd147f0374682fe',
        },
        { url: '/favicon.ico', revision: '21b739d43fcb9bbb83d8541fe4fe88fa' },
        {
          url: '/font/material-icons.woff2',
          revision: '703cf8f274fbb265d49c6262825780e1',
        },
        {
          url: '/font/roboto-v20-latin-regular.eot',
          revision: '4be1a572fca40bcb2202504cb17aed91',
        },
        {
          url: '/font/roboto-v20-latin-regular.svg',
          revision: '3ce3e2e315625e0955240b145c85c682',
        },
        {
          url: '/font/roboto-v20-latin-regular.ttf',
          revision: '329ae1c377b1fb667f5be6abd50327fc',
        },
        {
          url: '/font/roboto-v20-latin-regular.woff',
          revision: '60fa3c0614b8fb2f394fa29944c21540',
        },
        {
          url: '/font/roboto-v20-latin-regular.woff2',
          revision: '479970ffb74f2117317f9d24d9e317fe',
        },
        { url: '/imgFail.jpg', revision: 'bdf46074ba652e8777e3d0c51ad900b6' },
        {
          url: '/imgPlaceholder.png',
          revision: '7ce360630d762e2be1b8c122fffba869',
        },
        { url: '/manifest.json', revision: '4f91a33b290d9668ad45c54ee595194b' },
        {
          url: '/styles/lazy-img-style.ts',
          revision: 'ee604ecda7a8a8d9fdf0efc43119a5e5',
        },
        {
          url: '/styles/responsive.css',
          revision: '258e002b23aece65eccd09686750600e',
        },
        {
          url: '/styles/global.module.css',
          revision: '014d2f5d0290646de3cc9b2b9fa3030c',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    )
})
