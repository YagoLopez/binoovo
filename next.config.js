const withPWA = require('next-pwa')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

// If is prod build then create PWA infrastructure
module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_PRODUCTION_BUILD) {
    return withPWA({
      pwa: { dest: 'public' }
    })
  }
  return {

    async rewrites() {
      return [
        {
          source: '/test3',
          destination: 'https://www.themoviedb.org/movie/686-contact',
        },
      ]
    },

    env: []
  }
}