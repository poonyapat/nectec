const googleTrends = require('google-trends-api')
const axios = require('axios')

module.exports = {
    async getTrends (req, res) {
        try {
            const results = await googleTrends.relatedTopics({
                keyword: 'ประวัติศาสตร์',
                category: 208,
                hl: 'TH',
                geo: 'TH'
            })
            const searchResults = (JSON.parse(results)).default.rankedList[0].rankedKeyword
            var topics = []
            for (let index in searchResults) {
                topics = searchResults[index].topic.title
            }
            return topics
        } catch (err) {
            res.status(500).send({
                error: 'Unable to fetch data from Google API'
            })
        }
    },
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