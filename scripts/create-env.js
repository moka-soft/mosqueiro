// Create .env file before build
const fs = require('fs')
fs.writeFileSync('./.env', `ENV=${process.env.ENV} \n GOOGLE_ANALYTICS_UA=${process.env.GOOGLE_ANALYTICS_UA}`)
