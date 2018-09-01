const ModelController = require('./controllers/modelController')
const PlaceController = require('./controllers/placeController')

module.exports = (app) => {

    app.get('/', PlaceController.index)

    app.get('/content', PlaceController.search)

    app.get('/content/:id', PlaceController.get)

    app.get('/list', PlaceController.show)

    app.get('/content/:id/model', ModelController.index)

}
