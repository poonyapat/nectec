import Api from '@/services/api'

export default {
    test() {
        return Api().get('test')
    }
}