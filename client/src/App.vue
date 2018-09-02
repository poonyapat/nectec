<template>
  <html>
    <head>
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    </head>
    <body>
      <div id="app">
        <v-app>
          <header-nav />
          <main>
            <v-container fluid>
              <router-view/>
            </v-container>
          </main>
          <page-footer />
        </v-app>
      </div>
    </body>
  </html>
</template>


<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import HeaderNav from '@/components/Header'
import PageFooter from '@/components/PageFooter'
Vue.use(BootstrapVue);

import Home from '@/views/Home.vue'
export default {
  components: {
    Home,
    HeaderNav,
    PageFooter
  }
}
</script>

<style lang="scss">
#about{
  text-align: center;
}
#app {
  font-family: 'Kanit', 'Roboto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

</style>
