/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (true) {
  assetPrefix = 'https://lodianiez.github.io/myportfolio/'
  basePath = '/myportfolio'
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: 'export',
  images: {
    path: basePath,
  },
}
