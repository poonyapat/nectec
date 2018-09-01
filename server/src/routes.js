const TestService = require('./controllers/testController')
const TemplaeMatchingController = require('./controllers/temple/templeMatchingController')
const ArchiologicalSiteController = require('./controllers/archiologicalSiteController')

module.exports = (app) => {
    app.get('/test', TestService.test)
    app.get('/temple', TemplaeMatchingController.getTempleData)
    app.get('/archiology', ArchiologicalSiteController.getArchiologicalSite)
}