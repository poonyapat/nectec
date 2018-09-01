const googleTrends = require('google-trends-api')

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
                topics.push(searchResults[index].topic.title)
            }
            return topics
        } catch (err) {
            res.status(500).send({
                error: 'Unable to fetch data from Google API'
            })
        }

    }
}