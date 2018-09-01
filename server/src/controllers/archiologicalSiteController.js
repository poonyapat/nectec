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

async function find (params) {
    const data = await Api().get('query', {
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
    })
    // console.log(data.data)
    console.log('Complete Loaded',params.path)
    return data.data.data
}


module.exports = {
    archiologicalSite: {},
    async load(){
        await find({
            dsname: 'vir_225_1533289131',
            path: 'vir_225_1533289131'
        }).then(a => {
            this.archiologicalSite.east = a
        })
        await find({
            dsname: 'vir_228',
            path: 'vir_228'
        }).then(a => this.archiologicalSite.central = a)
        await find({
            dsname: 'vir_224',
            path: 'vir_224'
        }).then(a => this.archiologicalSite.south = a)
        await find({
            dsname: 'vir_229',
            path: 'vir_229'
        }).then(a => this.archiologicalSite.west = a)
        await find({
            dsname: 'vir_231',
            path: 'vir_231'
        }).then(a => this.archiologicalSite.north = a)
        await find({
            dsname: 'vir_232',
            path: 'vir_232',
        }).then(a => {this.archiologicalSite.northEast = a;console.log(this.archiologicalSite)})
    },
    getArchiologicalSite(req, res){
        res.send(this.archiologicalSite)
    }
}