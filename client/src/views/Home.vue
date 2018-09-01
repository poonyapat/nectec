<template>
  <div class="container">
    <div class="row">
      <carousel-vue :array="hilights"/>
    </div>
      <div class="row">
        <div class="col-md-12">
          <h3>วัดสำคัญในประเทศไทย</h3>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="row">
          <card-content class="col-3" v-for="(item, index) in temples" v-if="index < 4"
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
        <div class="container">
          <div class="row">
          <card-content class="col-3" v-for="(item, index) in hilights" v-if="index > 3 && index < 8"
            :key="item.id"
            :id="item.id"
            :img="!item.media ? '' : item.media[0].bigPic"
            :txt="item.title"
          />
          </div>
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
import CarouselVue from '@/components/Carousel';
// @ is an alias to /src

export default {
  name: "home",
  computed: mapState({
    hilights: state => state.hilights,
    temples: state => state.temples
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
    GoogleMap, CardContent, CarouselVue
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    ...mapActions(["getHilights", "getTemples"]),
    ...mapActions({
      hilight: "getHilights",
      temples: "getTemples"
    })
  },
  async mounted() {
    const highlights = (await axios.get()).data.hilights;
    console.log(highlights);
    this.$store.dispatch("getHilights", highlights);

    const temples = (await axios.get()).data.temples;
    this.$store.dispatch("getTemples", temples)
  }
};
</script>



