<template>
  <div>
    <gmap-map
    :center="{lat:lat, lng:lng}"
    :zoom="7"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
    </gmap-map>
  </div>
</template>

<script>
import PlacesService from '@/services/placesService'

export default {
  data () {
    return {
      markers: {},
      info: null
    }
  },
  props: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  async mounted () {
    this.info = (await PlacesService.get()).data
    console.log(this.lat, this.lng)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
