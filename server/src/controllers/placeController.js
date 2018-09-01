const GoogleService = require('../services/googleService')
const TempleMatchingController = require('./temple/templeMatchingController')
const ArchiologicalSiteController = require('./archiologicalSiteController')
const axios = require('axios')

templeData = TempleMatchingController.getTempleData()
archilogicalSiteData = ArchiologicalSiteController.getArchiologicalSite()

module.exports = {
    index (req, res) {
        // templeData = TempleMatchingController.getTempleData()
        const places = {
            hilights: [],
            temples: []
        }
        const hilights = []
        GoogleService.getTrends().then(trends => {
            for (let data in templeData) {
                if (trends.includes(templeData[data].title) || trends.includes(templeData[data].province)) {
                    hilights.push({ id: templeData[data].id, title: templeData[data].title, media: templeData[data].media })
                }
            }
            for (let data in archilogicalSiteData) {
                for (let index in archilogicalSiteData[data]) {
                    if (trends.includes(archilogicalSiteData[data][index].title) || trends.includes(archilogicalSiteData[data][index].province)
                        || trends.includes(archilogicalSiteData[data][index].category)) {
                        hilights.push({ id: archilogicalSiteData[data][index].id, title: archilogicalSiteData[data][index].title, media: archilogicalSiteData[data][index].media })
                    }
                }
            }
            places.hilights = hilights
            let temples = [
                {id: 'MOC-34070', title: "วัดนางพญา", media: []},
                {id: 'MOC-163100', title: "วัดมหาธาตุ อยุธยา", media: []},
                {id: 'MOC-39988', title: "วัดศรีสวาย", media: []},
                {id: 'MOC-177074', title: "วัดสิงห์", media: []},
                {id: 'MOC-39463', title: "วัดศรีชุม", media: []}
            ]


            for (let i = 0; i < temples.length; i++) {
                for (let data in templeData) {
                    if (temples[i].id === templeData[data].id) {
                        temples[i].media = templeData[data].media
                    }
                }
            }

            places.temples = temples
            res.send(places)
        })

    },
    async get (req, res) {
        let foundObject = {}
        for (let data in templeData) {
            if (templeData[data].id === req.params.id) {
                foundObject = templeData[data]
                break
            }
        }
        if (Object.keys(foundObject).length === 0 && foundObject.constructor === Object) {
            for (let data in archilogicalSiteData) {
                for (let index in archilogicalSiteData[data]) {
                    if (archilogicalSiteData[data][index].id === req.params.id) {
                        foundObject = archilogicalSiteData[data][index]
                        break
                    }
                }
            }
        }

        if (foundObject != null) {
            try {
                let url;
                if (!!foundObject.position) {
                    url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${foundObject.position.lat},${foundObject.position.lon}&radius=1500&type=restaurant&key=AIzaSyBoG_aY6ArMSAgYg8HLF8ebe6lQn6qkgU0`
                }
                else {
                    url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${foundObject.lat},${foundObject.lon}&radius=1500&type=restaurant&key=AIzaSyBoG_aY6ArMSAgYg8HLF8ebe6lQn6qkgU0`
                }
                const results = await axios.get(url)
                const response = {
                    object: foundObject,
                    otherLocation: results.data.results
                }
                res.send(response)
            } catch (err) {
                res.status(500).send({
                    error: 'Unable to fetch data from Google API'
                })
            }
        } else {
            res.status(400).send({
                error: 'Wow there is a problem'
            })
        }
    },
    show (req, res) {
        let results = []
        for (let data in templeData) {
            results.push({ id: templeData[data].id, title: templeData[data].title, media: templeData[data].media })
        }
        for (let data in archilogicalSiteData) {
            for (let index in archilogicalSiteData[data]) {
                results.push({ id: archilogicalSiteData[data][index].id, title: archilogicalSiteData[data][index].title, media: archilogicalSiteData[data][index].media })
            }
        }

        res.send(results)
    },
    search (req, res) {
        let results = []
        for (let data in templeData) {
            results.push({ id: templeData[data].id, title: templeData[data].title, province: templeData[data].province,  media: templeData[data].media })
        }
        for (let data in archilogicalSiteData) {
            for (let index in archilogicalSiteData[data]) {
                results.push({ id: archilogicalSiteData[data][index].id, title: archilogicalSiteData[data][index].title, province: archilogicalSiteData[data][index].province, media: archilogicalSiteData[data][index].media })
            }
        }

        const search = req.query.search

        let searchResults = results.map(result => {
                return result.title.includes(search) ? result.title : ""
        })

        let otherResults = results.map(result => {
            return result.province.includes(search) ? result.province : ""
        })

        searchResults.join(otherResults)
        let returnResults = []
        for (let i = 0; i < 10; i++) {
            if (searchResults[i] != "") {
                returnResults.push(searchResults[i])
            }
            else {
                i--;
            }
        }

        res.send(returnResults)
    }
}
