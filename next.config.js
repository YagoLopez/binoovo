const withPWA = require('next-pwa')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

// If compile phase is prod build then create PWA infrastructure
module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return withPWA({
      pwa: { dest: 'public' },
      images: {
        domains: ['image.tmdb.org'],
      },
    })
  }
  return {
    env: [],
    images: {
      domains: ['image.tmdb.org'],
    },
  }
}
