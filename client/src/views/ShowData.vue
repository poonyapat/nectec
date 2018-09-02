<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-4" v-for="(item, index) in list" :key="index">
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
