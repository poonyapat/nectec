<template>
    <div class="sketchfab-embed-wrapper">
        <iframe width="640" height="480" :src="url" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
</template>

<script>
import ModelsService from '@/services/modelsService'
export default {
    props:{
        url: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            url: ''
        }
    }
}
</script>

<style>

</style>
