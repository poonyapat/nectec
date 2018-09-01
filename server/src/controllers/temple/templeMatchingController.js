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

templeData = []
module.exports = {
    generateCompletedTempleData(csvData){
<<<<<<< HEAD
        this.templeData = []
=======
        templeData = []
>>>>>>> master
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
<<<<<<< HEAD
                            case 0: region = 'ภาคกลาง'
=======
                            case 0: region = 'ภาคกลาง' 
>>>>>>> master
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
<<<<<<< HEAD
                        this.templeData.push({
=======
                        templeData.push({
>>>>>>> master
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
<<<<<<< HEAD
                            region: region
=======
                            region: region,
                            media: []
>>>>>>> master
                        })
                        run = false
                    }
                }
            }
        }
        console.log("Complete matching temple")
        // console.log(templeData)
    },

    addImageToTemple(media){
        for (let i = 0; i < templeData.length; i++){
            switch(templeData[i].region){
                case 'ภาคกลาง':
                    for (let j = 0; j < media.central.length; j++){
                        if (templeData[i].id === media.central[j][0]){
                            templeData[i].media.push({
                                thumbPic: media.central[j][1],
                                bigPic: media.central[j][2],
                                thumbVdo: media.central[j][3],
                                bigVdo: media.central[j][4],
                                type: media.central[j][5]
                            })
                        }
                    }
                    break
                case 'ภาคตะวันออก':
                    for (let j = 0; j < media.east.length; j++){
                        if (templeData[i].id === media.east[j][0]){
                            templeData[i].media.push({
                                thumbPic: media.east[j][1],
                                bigPic: media.east[j][2],
                                thumbVdo: media.east[j][3],
                                bigVdo: media.east[j][4],
                                type: media.east[j][5]
                            })
                        }
                    }
                    break
                case 'ภาคอีสาน':
                    for (let j = 0; j < media.northEast.length; j++){
                        if (templeData[i].id === media.northEast[j][0]){
                            templeData[i].media.push({
                                thumbPic: media.northEast[j][1],
                                bigPic: media.northEast[j][2],
                                thumbVdo: media.northEast[j][3],
                                bigVdo: media.northEast[j][4],
                                type: media.northEast[j][5]
                            })
                        }
                    }
                    break
                case 'ภาคเหนือ' :
                    for (let j = 0; j < media.north.length; j++){
                        if (templeData[i].id === media.north[j][0]){
                            templeData[i].media.push({
                                thumbPic: media.north[j][1],
                                bigPic: media.north[j][2],
                                thumbVdo: media.north[j][3],
                                bigVdo: media.north[j][4],
                                type: media.north[j][5]
                            })
                        }
                    }
                    break
                case 'ภาคใต้' :
                    for (let j = 0; j < media.south.length; j++){
                        if (templeData[i].id === media.south[j][0]){
                            templeData[i].media.push({
                                thumbPic: media.south[j][1],
                                bigPic: media.south[j][2],
                                thumbVdo: media.south[j][3],
                                bigVdo: media.south[j][4],
                                type: media.south[j][5]
                            })
                        }
                    }
                    break 
                case 'ภาคตะวันตก':
                    for (let j = 0; j < media.west.length; j++){
                        if (templeData[i].id === media.west[j][0]){
                            templeData[i].media.push({
                                thumbPic: media.west[j][1],
                                bigPic: media.west[j][2],
                                thumbVdo: media.west[j][3],
                                bigVdo: media.west[j][4],
                                type: media.west[j][5]
                            })
                        }
                    }
                    break 
            }
        }
    },

    getTempleData(req, res){
        res.send(templeData)
    }
}