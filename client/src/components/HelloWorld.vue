<template>
  <div class="hello">
    <h1>{{ info }}</h1>
    <v-btn dark class="">hello</v-btn>
  </div>
</template>

<script>
import TestService from '@/services/testService'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      info: {}
    }
  },
  async mounted () {
    this.info = (await TestService.test()).data
  }
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
