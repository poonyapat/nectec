<template>
    <v-toolbar fixed class="indigo darken-3" dark>
        <v-toolbar-title class="mr-4">
            <router-link class="toolbar-logo" to="/">ที่นี่ที่เดิม</router-link>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat dark>วัดสำคัญในประเทศไทย</v-btn>
            <v-btn flat dark>สถานที่ทางประวัติศาสตร์</v-btn>
            <v-btn flat dark :to="{name: 'tel'}">เบอร์ฉุกเฉิน</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>
.toolbar-logo {
    color: white;
    text-decoration: none;
}


.toolbar-logo:hover {
    color: lightgray;
}
</style>
