
const TemplaeMatchingController = require('./controllers/temple/templeMatchingController')
const ArchiologicalSiteController = require('./controllers/archiologicalSiteController')
const ModelController = require('./controllers/modelController')

module.exports = (app) => {
    app.get('/temple', TemplaeMatchingController.getTempleData)
    app.get('/archiology', ArchiologicalSiteController.getArchiologicalSite)
    app.get('/', (req, res) => {
        res.send('Hello')
    })

    app.get('/content/:id')

    app.get('/content/:id/model', ModelController.index)
}