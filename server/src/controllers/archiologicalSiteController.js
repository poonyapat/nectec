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

// async function find (params) {
//     const data = await Api().get('query', {
//         params: {
//             dsname: params.dsname,
//             path: params.path,
//             property: params.property || 'col_9',
//             operator: params.operator || 'CONTAINS',
//             valueLiteral: params.valueLiteral || 'โบราณสถาน',
//             loadAll: 1,
//             type: 'json',
//             limit: params.operator || 100,
//             offset: 0
//         }
//     })
//     // console.log(data.data)
//     console.log('Complete Loaded',params.path)
//     return data.data.data
// }

archiologicalSite= {
    east: [],
    north: [],
    central: [],
    south: [],
    westL: [],
    northEast: []
},
module.exports = {
    load(){
        find({
            dsname: 'vir_225_1533289131',
            path: 'vir_225_1533289131'
        }).then(a => {
            archiologicalSite.east = a
            find({
                dsname: 'vir_228',
                path: 'vir_228'
            }).then(a => {archiologicalSite.central = a
                find({
                    dsname: 'vir_224',
                    path: 'vir_224'
                }).then(a => {archiologicalSite.south = a
                    find({
                        dsname: 'vir_229',
                        path: 'vir_229'
                    }).then(a => {archiologicalSite.west = a
                        find({
                            dsname: 'vir_231',
                            path: 'vir_231'
                        }).then(a => {archiologicalSite.north = a
                            find({
                                dsname: 'vir_232',
                                path: 'vir_232',
                            }).then(a => {archiologicalSite.northEast = a})
                        })
                    })
                })
            })
        })
    },
    getArchiologicalSite(req, res){
        console.log(archiologicalSite)
        res.send(archiologicalSite)
    }
}