const express = require('express')
const helmet = require('helmet') // common security settings
const compression = require('compression') // gz compression
const history = require('connect-history-api-fallback') // reroute all requests to index.html for vuejs routing

const app = express()

// Register middleware
app.use(helmet())
app.use(history())
app.use(compression())

// Listen to the dist folder
app.use(express.static('dist'))

app.listen(process.env.PORT, () => console.log('TBM listening on port ' + process.env.PORT + '!'))
