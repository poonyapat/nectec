const fs = require('fs')

generateRegionData = (path) => {
    let regionData = JSON.parse(fs.readFileSync(path)).data
    console.log('generate region data from',path, 'completed')
    return regionData
}

const central = generateRegionData('src/assets/central_temple.json')
const east = generateRegionData('src/assets/east_temple.json')
const north_east = generateRegionData('src/assets/north_east_temple.json')
const north = generateRegionData('src/assets/north_temple.json')
const south = generateRegionData('src/assets/south_temple.json')
const west = generateRegionData('src/assets/west_temple.json')
const regionData = [central, east, north_east, north, south, west]

module.exports = {
    generateCompletedTempleData(csvData){
        let completedData = []
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
                    // if (regionData[j][k].title.includes(title) && amphoe.includes(regionData[j][j].amphoe)){
                    //     console.log (title, regionData[j][k].title, amphoe, regionData[j][k].amphoe)
                    //     run = false
                    //     break    
                    // }
                    if (regionData[j][k].title === title && regionData[j][k].province === csvData[i][7]){
                        completedData.push({
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
                            establish: csvData[i][5]
                        })
                        run = false
                    }
                }
            }
        }
        console.log("matched temple data has been loaded")
    }
}