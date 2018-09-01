import Api from '@/services/api'

export default {
  get () {
    return Api().get()
  }
}
