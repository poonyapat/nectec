const fs = require('fs')
const csv = require('fast-csv')
const year = 2461

media = {
    central: [],
    north: [],
    east: [],
    northEast: [],
    south: [],
    west: []
}
module.exports = {
    templeData: [],
    loadTempleData(callback){
        this.templeData = []
        fs.createReadStream('src/assets/temple/temple_data.csv')
            .pipe(csv())
            .on('data', data => {
                // filter
                // before 2461
                if (data[5].substring(data[5].length-4) < year){
                    this.templeData.push(data)
                }
            })
            .on('end', data => {
                console.log("Temple's CSV data has been loaded")
                callback(this.templeData)
        })
    },
    loadTempleMedia(callback){
        media = {
            central: [],
            north: [],
            east: [],
            northEast: [],
            south: [],
            west: []
        }
        fs.createReadStream('src/assets/multimedia/central_media.csv')
            .pipe(csv())
            .on('data', data => media.central.push(data))
            .on('end', data => {
                console.log("Complete loaded central media")
                fs.createReadStream('src/assets/multimedia/east_media.csv')
                    .pipe(csv())
                    .on('data', data => media.east.push(data))
                    .on('end', data => {
                        console.log("Complete loaded east media")
                        fs.createReadStream('src/assets/multimedia/north_media.csv')
                            .pipe(csv())
                            .on('data', data => media.north.push(data))
                            .on('end', data => {
                                console.log("Complete loaded north media")
                                fs.createReadStream('src/assets/multimedia/northeast_media.csv')
                                    .pipe(csv())
                                    .on('data', data => media.northEast.push(data))
                                    .on('end', data => {
                                        console.log("Complete loaded north east media")
                                        fs.createReadStream('src/assets/multimedia/south_media.csv')
                                            .pipe(csv())
                                            .on('data', data => media.south.push(data))
                                            .on('end', data => {
                                                console.log("Complete loaded south media")
                                                fs.createReadStream('src/assets/multimedia/west_media.csv')
                                                    .pipe(csv())
                                                    .on('data', data => media.west.push(data))
                                                    .on('end', data => {
                                                        console.log("Complete loaded west media")
                                                        callback(media)
                                                    })
                                            })
                                })
                            })
                    })
            })
    },

    getMedia(){
        return media
    }
}
