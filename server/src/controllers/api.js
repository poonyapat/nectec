const axios = require('axios')
module.exports = () => {
    return axios.create({
        baseURL: 'https://api.data.go.th/search_virtuoso/api/dataset/'
    })
}