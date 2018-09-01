import Api from '@/services/api'

export default {
  get() {
    console.log("in get func")
    return Api().get('')
  },
  show () {
    return Api().get()
  },
  index (search) {
    return Api().get('content', {
      params: {
        search: search
      }
    })
  }
}
