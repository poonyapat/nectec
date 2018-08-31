<template>
    <div>
        <b-card-group deck>
            <b-card img-src="https://placekitten.com/1000/300"
                    img-alt="Card image"
                    img-top>
                <p class="card-text">
                    {{ txt }}
                </p>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    props: ['img', 'txt']
}
</script>

