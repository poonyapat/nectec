const ModelController = require('./controllers/modelController')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello')
    })

    app.get('/content/:id')

    app.get('/content/:id/model', ModelController.index)
}