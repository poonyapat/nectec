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

              <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                  ut lacus vel interdum.
                  </p>
              </b-carousel-slide>
          </b-carousel>

        </div>
        <div class="col-md-2"/>
      </div>

      <!-- 3D Slide-->
      <div class="row">
      </div>

      <img alt="Vue logo" src="../assets/logo.png">
      <google-map/>

    </div>

  
</template>

<script>
import Vue from 'vue'
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
import GoogleMap from '@/components/GoogleMap.vue'
Vue.component('b-carousel', bCarousel);
// @ is an alias to /src

export default {
  name: 'home',
  components: {
      GoogleMap
    },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },

    
  }
}
</script>
