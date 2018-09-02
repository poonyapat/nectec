<template>
  <v-carousel class="mt-5 mb-5">
    <v-carousel-item
      v-for="(item,i) in array" v-if="i < 3"
      :key="item.id"
      :src="!item.media ? '' : item.media[0].bigPic"
      reverse-transition="fade"
      transition="fade"
      light
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    props: [
        "array"
    ]
}
</script>
import Vue from
<style>

</style>
