<template>
    <div class="container">
        <!-- Name -->
        <div class="row">
            <div class="col-md-2"/>
            <div class="dol-md-10">
                {{ Name }}
            </div>
        </div>

        <!-- img -->
        <div class="row">
            <div class="col-md-3"/>
            <div class="dol-md-6">
                <b-img :src="img" fluid alt="Responsive image" />
            </div>
            <div class="col-md-3"/>
        </div>

        <!-- description -->
        <div class="row">
            <p>
                {{ description }}
            </p>
        </div>

        <!-- location -->
        <div class="row">
            <GmapMap
                :center="{lat, lng}"
                :zoom="7"
                map-type-id="terrain"
                style="width: 500px; height: 300px"
                >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
            </GmapMap>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps'
export default {
    load: {
        key: 'YOUR_API_TOKEN',
        libraries: 'places',
    },
    prop:['Name', 'description', 'img', 'lat', 'lng']
}
</script>

