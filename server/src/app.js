console.log("Starting server");

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config/config')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.listen(config.port)
console.log(`Server started on port ${config.port}`)

const csvFileController = require('./controllers/temple/csvFileController')
const TempleMachingController = require('./controllers/temple/templeMatchingController')
const ArchiologicalSiteController = require('./controllers/archiologicalSiteController')
ArchiologicalSiteController.load()
csvFileController.loadTempleData(TempleMachingController.generateCompletedTempleData)
// csvFileController.loadTempleMedia(log)
// console.log(ArchiologicalSiteController.findAll())
