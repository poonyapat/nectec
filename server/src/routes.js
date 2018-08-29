const TestService = require('./controllers/testController')

module.exports = (app) => {
    app.get('/test', TestService.test)
}