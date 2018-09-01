<template>
    <router-link :to="{name: 'content', params: {id: id}}">
        <div>
            <v-hover>
                <v-card
                    slot-scope="{ hover }"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="300"
                >
                    <v-img
                        :aspect-ratio="16/9"
                        :src="img"
                    >
                        <v-expand-transition>
                            <div
                                id="card"
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black text-md-center darken-2 v-card--reveal headline white--text .subheading"
                                style="height: 100%;">
                                {{ txt }}
                            </div>
                        </v-expand-transition>
                    </v-img>
                </v-card>
            </v-hover>
        </div>
    </router-link>

</template>

<script>
import Vue from 'vue';
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        txt: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit');

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

#card {
    font-family: 'Kanit' !important;
}
</style>
