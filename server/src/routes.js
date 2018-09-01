const ModelController = require('./controllers/modelController')
const PlaceController = require('./controllers/placeController')
const GoogleService = require('./services/googleService')

module.exports = (app) => {

    app.get('/', PlaceController.index)

    app.get('/content/:id')

    app.get('/content/:id/model', ModelController.index)
}
