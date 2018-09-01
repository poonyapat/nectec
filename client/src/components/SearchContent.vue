<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
import SongsService from '@/services/SongsService'
export default {
    components: {
        SongsPanel,
        SongsSearchPanel
    },
    data () {
        return {
            songs: null
        }
    },
    async mounted () {
        // do a request to the backend for all the songs
        this.songs = (await SongsService.index()).data
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
