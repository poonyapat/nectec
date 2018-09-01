// const fs = require('fs')

// readJSONFile = (path) => {
//     let regionData = JSON.parse(fs.readFileSync(path)).data
//     console.log('Read',path, 'completed')
//     return regionData
// }
// const archiologicalSite =  readJSONFile('src/assets/archiology/east_site.json')

// module.exports = {
//     findAll(){
//         return archiologicalSite
//     }
// }


const Api = require('./api')
const fs = require('fs')

async function find (params) {
    let data = (await Api().get('query', {
        params: {
            dsname: params.dsname,
            path: params.path,
            property: params.property || 'col_9',
            operator: params.operator || 'CONTAINS',
            valueLiteral: params.valueLiteral || 'โบราณสถาน',
            loadAll: 1,
            type: 'json',
            limit: params.operator || 100,
            offset: 0
        }
    })).data.data
    // console.log(data.data)
    console.log('Complete Loaded arch',params.path)
    return data
}

addMedia = (media) =>{
    addMediaForEachRegion(archiologicalSite.east, media.east)
    addMediaForEachRegion(archiologicalSite.central, media.central)
    addMediaForEachRegion(archiologicalSite.west, media.west)
    addMediaForEachRegion(archiologicalSite.north, media.north)
    addMediaForEachRegion(archiologicalSite.south, media.south)
    addMediaForEachRegion(archiologicalSite.northEast, media.northEast)
}


addMediaForEachRegion = (regionArch, regionMedia) => {
    for (let i = 0; i < regionArch.length; i++){
        regionArch[i].media = []
        for (let j = 0; j < regionMedia.length; j++){
            if (regionArch[i].id === regionMedia[j][0]){
                regionArch[i].media.push(({
                    thumbPic: regionMedia[j][1],
                    bigPic: regionMedia[j][2],
                    thumbVdo: regionMedia[j][3],
                    bigVdo: regionMedia[j][4],
                    type: regionMedia[j][5]
                }))
            }
        }
    }
}

function readJSONFile (path) {
    let regionData = JSON.parse(fs.readFileSync(path)).data
    console.log('Read',path, 'completed')
    return regionData
}

archiologicalSite= {
    east: readJSONFile('src/assets/archiological_site/east_site.json'),
    north: readJSONFile('src/assets/archiological_site/central_site.json'),
    central: readJSONFile('src/assets/archiological_site/north_site.json'),
    south: readJSONFile('src/assets/archiological_site/northeast_site.json'),
    west: readJSONFile('src/assets/archiological_site/west_site.json'),
    northEast: readJSONFile('src/assets/archiological_site/south_site.json')
},
module.exports = {
    load(media){
        addMedia(media)
    },
    // load(media){
    //     find({
    //         dsname: 'vir_225_1533289131',
    //         path: 'vir_225_1533289131'
    //     }).then(a => {
    //         archiologicalSite.east = a
    //         find({
    //             dsname: 'vir_228',
    //             path: 'vir_228'
    //         }).then(a => {archiologicalSite.central = a
    //             find({
    //                 dsname: 'vir_224',
    //                 path: 'vir_224'
    //             }).then(a => {archiologicalSite.south = a
    //                 find({
    //                     dsname: 'vir_229',
    //                     path: 'vir_229'
    //                 }).then(a => {archiologicalSite.west = a
    //                     find({
    //                         dsname: 'vir_231',
    //                         path: 'vir_231'
    //                     }).then(a => {archiologicalSite.north = a
    //                         find({
    //                             dsname: 'vir_232',
    //                             path: 'vir_232',
    //                         }).then(a => {
    //                             archiologicalSite.northEast = a
    //                             addMedia(media)
    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // },
    getArchiologicalSite(){
        return archiologicalSite
    }
}
