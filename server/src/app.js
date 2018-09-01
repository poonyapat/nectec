console.log("Starting server");

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config/config')
const mongoose = require('mongoose')

const app = express()

// Import Models
require('./models/Temple3D');

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(config.mongoURI, { useNewUrlParser: true });

require('./routes')(app)

app.listen(config.port)
console.log(`Server started on port ${config.port}`)

const csvFileController = require('./controllers/temple/csvFileController')
const TempleMachingController = require('./controllers/temple/templeMatchingController')
const ArchiologicalSiteController = require('./controllers/archiologicalSiteController')
csvFileController.loadTempleData(TempleMachingController.generateCompletedTempleData)
csvFileController.loadTempleMedia(TempleMachingController.addImageToTemple,ArchiologicalSiteController.load)
// console.log(ArchiologicalSiteController.findAll())
