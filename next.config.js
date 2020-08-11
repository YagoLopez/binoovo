const env = process.env.NODE_ENV

console.log('Environment: ', env)

if (env === 'production') {
  const withPWA = require('next-pwa')
  module.exports = (env === 'production') && withPWA({
    pwa: {
      dest: 'public'
    }
  })
}
