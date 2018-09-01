<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <google-map/>
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  name: 'home',
  components: {
    GoogleMap
  }
}
</script>
