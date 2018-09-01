const GoogleController = require('./controllers/googleController')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello')
    })

    app.get('/map', GoogleController.getHotelsAndRestaurant)
}