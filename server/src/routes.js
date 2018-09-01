
const TestService = require('./controllers/testController')
const TemplaeMatchingController = require('./controllers/temple/templeMatchingController')
const ArchiologicalSiteController = require('./controllers/archiologicalSiteController')

const GoogleController = require('./controllers/googleController')

module.exports = (app) => {
    app.get('/test', TestService.test)
    app.get('/temple', TemplaeMatchingController.getTempleData)
    app.get('/archiology', ArchiologicalSiteController.getArchiologicalSite)
    app.get('/', (req, res) => {
        res.send('Hello')
    })
    app.get('/map', GoogleController.getHotelsAndRestaurant)
}