const axios = require('axios')

module.exports = {
    async getHotelsAndRestaurant (req, res) {
        try {
            const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyBoG_aY6ArMSAgYg8HLF8ebe6lQn6qkgU0'
            const results = await axios.get(url)
            res.send(results.data.results)
        } catch (err) {
            res.status(500).send({
                error: 'Unable to fetch data from Google API'
            })
        }
    }
}
