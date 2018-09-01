const fs = require('fs')
const csv = require('fast-csv')
const year = 2461

module.exports = {
    templeData: [],
    media: {
        central: [],
        north: [],
        east: [],
        northEast: [],
        south: [],
        west: []
    },
    loadTempleData(){
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
                // callback(this.templeData)
        })
    },
    async loadTempleMedia(){
        this.media = {
            central: [],
            north: [],
            east: [],
            northEast: [],
            south: [],
            west: []
        }
        await fs.createReadStream('src/assets/multimedia/central_media.csv')
            .pipe(csv())
            .on('data', data => {
                this.media.central.push(data)
            }).on('end', data => console.log("Complete loaded central media"))
        await fs.createReadStream('src/assets/multimedia/east_media.csv')
            .pipe(csv())
            .on('data', data => {
                this.media.east.push(data)
            }).on('end', data => console.log("Complete loaded east media"))
        await fs.createReadStream('src/assets/multimedia/north_media.csv')
            .pipe(csv())
            .on('data', data => {
                this.media.north.push(data)
            }).on('end', data => console.log("Complete loaded north media"))
        await fs.createReadStream('src/assets/multimedia/northeast_media.csv')
            .pipe(csv())
            .on('data', data => {
                this.media.northEast.push(data)
            }).on('end', data => console.log("Complete loaded north east media"))
        await fs.createReadStream('src/assets/multimedia/south_media.csv')
            .pipe(csv())
            .on('data', data => {
                this.media.south.push(data)
            }).on('end', data => console.log("Complete loaded south media"))
        await fs.createReadStream('src/assets/multimedia/west_media.csv')
            .pipe(csv())
            .on('data', data => {
                this.media.west.push(data)
            }).on('end', data => {
                console.log("Complete loaded west media")
            })
    }
}
