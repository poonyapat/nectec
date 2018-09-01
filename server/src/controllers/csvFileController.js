const fs = require('fs')
const csv = require('fast-csv')
const year = 2461
let templeData = []
module.exports = {
    loadTempleData(callback){
        fs.createReadStream('src/assets/temple_data.csv')
            .pipe(csv())
            .on('data', data => {
                // filter
                // before 2461
                if (data[5].substring(data[5].length-4) < year){
                    templeData.push(data)
                }
            })
            .on('end', data => {
                console.log("Temple's data has been loaded")
                callback(templeData)
        })
    },

    getTemples(){
        return templeData
    }
}
