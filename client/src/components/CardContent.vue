<template>
    <router-link :to="{ name: 'content', params: {'name': this.content.title, 
                            'description': this.content.description,
                            'img': this.content.media ? '' : this.content.media[0].bigPic,
                            'lat': this.content.position.lat,
                            'lng': this.content.position.lon
                            }}">
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
                                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
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
import axios from "@/services/placesService";
import Content from "@/components/Content"
import { mapActions, mapState } from "vuex";
export default {
    name: "cardContent",
    computed: mapState({
        content: state => state.content
    }),
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
    },
    component: {
        Content
    },
    methods: {
        ...mapActions(['getContent']),
        ...mapActions({
            content: 'getContent'
        })
    },
    async mounted(){
        const content = (await axios.getContent(this.id)).data.object;
        console.log("content", content);
        this.$store.dispatch("getContent", content);
    }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
  font-family: 'kanit';
}
</style>
