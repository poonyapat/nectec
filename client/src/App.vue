<template>
  <div id="app">
    <div id="nav">
      <header>
        <b-navbar toggleable="md" type="dark" variant="info">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-navbar-brand href="#">TNTD.COM</b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
              <b-nav-item href="#">Content</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
              <router-link to="tel">เบอร์ฉุกเฉิน</router-link>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>
    
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>
      </header>
      
    </div>
    <router-view/>

    <!-- footer -->
    <v-footer
      dark
      height="auto"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <strong class="subheading"></strong>

          <v-spacer id="about">Power by KUCS 3PZ</v-spacer>

          <!-- <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn> -->
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy; <strong></strong>
        </v-card-actions>

      </v-card>
    </v-footer>
  </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

import Home from '@/views/Home.vue'
export default {
  components: {
    Home
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
