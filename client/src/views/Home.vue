<template>
    <div class="container">
      <div class="row">
        <div class="col-md-2"/>
        
        <!-- imageSlide -->
        <div class="col-md-8">
          <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="4000"
                  img-width="800"
                  img-height="480"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
          >
              <b-carousel-slide caption="First slide"
                                  text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                  img-src="https://picsum.photos/1024/480/?image=52"
              ></b-carousel-slide>

              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                  <h1>Hello world!</h1>
              </b-carousel-slide>

              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
              </b-carousel-slide>

              <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                      src="https://picsum.photos/1024/480/?image=55" alt="image slot">
              </b-carousel-slide>
          </b-carousel>

        </div>
        <div class="col-md-2"/>
      </div>
      <br>
      <!-- 3D Slide-->
      <div class="row">
        <div class="col-md-12">
          <h3>วัดสำคัญในประเทศไทย</h3>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="row">
          <card-content class="col-3" v-for="(item, index) in hilights" v-if="index < 4" 
            :key="item.id"
            :id="item.id"
            :img="!item.media ? '' : item.media[0].bigPic"
            :txt="item.title"
          />
        </div>
      </div>
      
      <br/>
      <div class="row">
        <h3>สถานที่ทางประวัติศาสตร์</h3>
        <hr/>
        <div class="col-md-8">
          <!-- init slide -->
        </div> 
      </div>

      <!-- <img alt="Vue logo" src="../assets/logo.png">
      <google-map/> -->

    </div>

  
</template>

<script>
import Vue from "vue";
import bCarousel from "bootstrap-vue/es/components/carousel/carousel";
import GoogleMap from "@/components/GoogleMap.vue";
import CardContent from "@/components/CardContent.vue";
import axios from "@/services/placesService";
import { mapActions, mapState } from "vuex";
Vue.component("b-carousel", bCarousel);
// @ is an alias to /src

export default {
  name: "home",
  computed: mapState({
    hilights: state => state.hilights
  }),

  data() {
    return {
      posts: null,
      errors: [],
      slide: 0,
      sliding: true
    };
  },

  components: {
    GoogleMap, CardContent
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    ...mapActions(["getHilights"]),
    ...mapActions({
      hilight: "getHilights"
    })
  },
  async mounted() {
    const highlights = (await axios.get()).data.hilights;
    console.log(highlights);
    this.$store.dispatch("getHilights", highlights);
    console.log("DONEEEEEE!!!!");
    console.log(this.$store.state);
  }
};
</script>


