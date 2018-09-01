const fs = require('fs')

readJSONFile = (path) => {
    let regionData = JSON.parse(fs.readFileSync(path)).data
    console.log('Read',path, 'completed')
    return regionData
}

const central = readJSONFile('src/assets/temple/central_temple.json')
const east = readJSONFile('src/assets/temple/east_temple.json')
const north_east = readJSONFile('src/assets/temple/north_east_temple.json')
const north = readJSONFile('src/assets/temple/north_temple.json')
const south = readJSONFile('src/assets/temple/south_temple.json')
const west = readJSONFile('src/assets/temple/west_temple.json')
const regionData = [central, east, north_east, north, south, west]

module.exports = {
    templeData: [],
    generateCompletedTempleData(csvData){
        this.templeData = []
        for (let i = 0; i < csvData.length; i++){
            let amphoe = csvData[i][2].match('อำเภอ[^ ]+') || csvData[i][2].match('เขต[^ ]+')
            if (!!amphoe){
                amphoe = amphoe[0]
                amphoe.replace('อำเภอ', '')
                amphoe.replace('เขต', '')
            }
            let title = 'วัด' + csvData[i][1]
            title = title.replace(new RegExp('[ ์]', 'g'),'')
            // validate
            let run = true
            for (let j = 0; j < regionData.length && run; j++){
                for (let k = 0; k < regionData[j].length && run; k++){
                    if (regionData[j][k].title === title && regionData[j][k].province === csvData[i][7]){
                        let region
                        switch(j){
                            case 0: region = 'ภาคกลาง'
                                break
                            case 1: region = 'ภาคตะวันออก'
                                break
                            case 2: region = 'ภาคอีสาน'
                                break
                            case 3: region = 'ภาคเหนือ'
                                break
                            case 4: region = 'ภาคใต้'
                                break
                            case 5: region = 'ภาคตะวันตก'
                        }
                        this.templeData.push({
                            id: regionData[j][k].id,
                            title: regionData[j][k].title,
                            description: regionData[j][k].description,
                            tambon: regionData[j][k].tambon,
                            amphoe: regionData[j][k].amphoe,
                            positon: {
                                lat: regionData[j][k].lat,
                                lon: regionData[j][k].lon
                            },
                            province: regionData[j][k].province,
                            denomination: csvData[i][3],
                            establish: csvData[i][5],
                            region: region
                        })
                        run = false
                    }
                }
            }
        }
        console.log("Complete matching temple")
        // console.log(templeData)
    },

    // addImageToTemple(){

    // }

    getTempleData(req, res){
        res.send(this.templeData)
    }
}