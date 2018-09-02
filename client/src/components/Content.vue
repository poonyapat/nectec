<template>
    <div class="container mt-5">
        <!-- title -->
        <h1 class="center-text pr-5">{{title}}</h1>
        <v-layout justify-center row class="ma-4">
            <v-flex md5 align-center class="ma-5">
                <!-- img -->
                <b-img :src="pic" fluid alt="Responsive image" />
            </v-flex>
            <v-flex md12>
                <p v-html="description"/>
            </v-flex>
            <google-map :lat="parseFloat(lat)" :lng="parseFloat(lng)"/>
        </v-layout>

    </div>
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import PlacesService from "@/services/placesService";
import GoogleMap from "@/components/GoogleMap";
export default {
  load: {
    key: "YOUR_API_TOKEN",
    libraries: "places"
  },
  data() {
    return {
      title: "",
      description: "",
      lat: 0,
      lng: 0,
      pic: ""
    };
  },
  props: {
    markers: {
      type: Object,
      default: ""
    }
  },
  components: {
    GoogleMap
  },
  async mounted() {
    const content = (await PlacesService.getContent(
      this.$store.state.route.params.id
    )).data.object;
    console.log(content);
    this.title = content.title;
    this.description = content.description;
    this.lat = content.position.lat;
    this.lng = content.position.lon;
    this.pic = content.media[0].bigPic;
  }
};
</script>

<style scoped>
.center-text {
  text-align: center;
}
</style>
