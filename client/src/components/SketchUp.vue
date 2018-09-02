<template>
  <div class="sketchfab-embed-wrapper"><iframe width="640" height="480" src="https://sketchfab.com/models/31300464d18745129e5502521fbbf6ca/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="this.url" target="_blank" style="font-weight: bold; color: #1CAAD9;">วัดศรีชุม</a>
        by <a href="https://sketchfab.com/thamolwan.po?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">thamolwan.po</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
    </div>
</template>

<script>
export default {
    props:{
        id: {
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>
