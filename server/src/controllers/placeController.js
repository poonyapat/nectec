const GoogleService = require('../services/googleService')
const TempleMatchingController = require('./temple/templeMatchingController')
const ArchiologicalSiteController = require('./archiologicalSiteController')

let templeData, archilogicalSiteData

module.exports = {
    index (req, res) {
        templeData = TempleMatchingController.getTempleData()
        archilogicalSiteData = ArchiologicalSiteController.getArchiologicalSite()
        const places = {
            hilights: [],
            temples: [],
            others: []
        }
        const hilights = []
        GoogleService.getTrends().then(trends => {
            for (let data in templeData) {
                if (trends.includes(templeData[data].title) || trends.includes(templeData[data].province)) {
                    hilights.push({ id: templeData[data].id, title: templeData[data].title })
                }
            }
             for (let data in archilogicalSiteData) {
                for (let index in archilogicalSiteData[data]) {
                    if (trends.includes(archilogicalSiteData[data][index].title) || trends.includes(archilogicalSiteData[data][index].province)
                        || trends.includes(archilogicalSiteData[data][index].category)) {
                        hilights.push({ id: archilogicalSiteData[data][index].id, title: archilogicalSiteData[data][index].title })
                    }
                }
            }
            console.log(hilights)
            res.send(hilights)
        })
            // hilights = hilights.slice(0, 10)
            // places.hilights = hilights
        //     res.send(hilights)
        // }).catch ((error) => res.status(400).send(error))

    },
    async get (req, res) {
        try {

        } catch (error) {

        }
    },
    async search (req, res) {
        try {

        } catch (error) {

        }
    }
}
