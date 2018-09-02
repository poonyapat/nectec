<template>
    <div class="container mt-5">
        <!-- title -->
        <h1 class="center-text pr-5">{{title}}</h1>
        <v-layout justify-center column align-center class="ma-4">
            <v-flex class="ma-4">
                <!-- img -->
                <b-img :src="pic" fluid alt="Responsive image" />
            </v-flex>
            <v-flex>
              <v-dialog modal width="650" v-model="dialog" v-if="!!url">
                <v-btn slot="activator" class="orange darken-1 ma-3" dark>
                  3D!!!
                </v-btn>
                <v-card>
                  <v-toolbar dark color="indigo darken-1">
                    <v-toolbar-title>3D</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn icon dark @click.native="dialog = false">
                        <v-icon>close</v-icon>
                      </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <v-card-text>
                    <v-layout justify-center align-center>
                      <sketch-up :url="url"></sketch-up>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex>
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
import SketchUp from '@/components/SketchUp'
import ModelsService from '@/services/modelsService'
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
      pic: "",
      dialog: false,
      url: ""
    };
  },
  props: {
    markers: {
      type: Object,
      default: ""
    }
  },
  components: {
    GoogleMap, SketchUp
  },
  async mounted() {
    const content = (await PlacesService.getContent(
      this.$store.state.route.params.id
    )).data.object;
    console.log(content);
    this.title = content.title;
    this.description = content.description;
    if (content.position){
      this.lat = content.position.lat;
      this.lng = content.position.lon;
    } 
    else {
      this.lat = content.lat
      this.lng = content.lon
    }
    this.pic = content.media[0].bigPic;
    console.log(content)
    this.url = (await ModelsService.getModel(content.id)).data.url
  }
};
</script>

<style scoped>
.center-text {
  text-align: center;
}
</style>
