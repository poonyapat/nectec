import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://172.18.16.171:8081/',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
}
