require('dotenv').config()
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['openweathermap.org'],
    loader: 'akamai',
    path: '',
  }
}
