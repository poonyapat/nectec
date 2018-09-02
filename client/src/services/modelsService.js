import Api from '@/services/api'

export default {
  get () {
    return Api().get()
  },

  getModel(id){
    return Api().get(`content/${id}/model`)
  }
}
