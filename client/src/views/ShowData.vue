<template>
    <div class="container">
        <div class="row" v-for="item in list" :key="item.id">
            <div class="col-sm-4">
                <li><router-link :to="{name: 'content', params: {id: item.id}}">{{ item.title }}</router-link></li>
            </div>
            <div class="col-sm-4">
                <li><router-link :to="{name: 'content', params: {id: item.id}}">{{ item.title }}</router-link></li>
            </div>
            <div class="col-sm-4">
                <li><router-link :to="{name: 'content', params: {id: item.id}}">{{ item.title }}</router-link></li>
            </div>
        </div>
    </div>
</template>

<script>
import PlacesService from '@/services/placesService'
export default {
    async mounted () {
        this.list = (await PlacesService.show()).data
    },
    data () {
        return {
            list: null
        }
    }
}
</script>

<style>

</style>
