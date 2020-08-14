const withPWA = require('next-pwa')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

// If prod build then create PWA infrastructure
module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_PRODUCTION_BUILD) {
    return withPWA({
      pwa: { dest: 'public' }
    })
  }
  return {
    env: []
  }
}