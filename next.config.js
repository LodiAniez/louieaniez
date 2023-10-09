/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  assetPrefix = 'https://lodianiez.github.io/myportfolio/'
  basePath = 'https://lodianiez.github.io/myportfolio/'
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: 'export',
  images: {
    path: basePath,
  },
}
