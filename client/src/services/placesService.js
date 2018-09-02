import Api from '@/services/api'

export default {
  get() {
    console.log("in get func")
    return Api().get('')
  },
  show () {
    return Api().get('list')
  },
  index (search) {
    return Api().get('list', {
      params: {
        search: search
      }
    })
  },
  getContent(id){
    return Api().get(`content/${id}`)
  }
}
