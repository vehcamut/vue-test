<script lang="ts">
import { defineComponent } from 'vue';
import { IPhoto } from '../../interfaces';

export default defineComponent({
  props: {
    photo: {
      type: Object as () => IPhoto,
      required: true,
    },
  },
  methods: {
    openPhoto() {
      this.$store.commit('setCurrentPhoto', this.photo);
      this.$store.commit('showDialog');
      // this.$emit('openPhoto', this.photo);
    },
  },
});
</script>

<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-title primary-title>
        {{photo.title}}
      </v-card-title>
      <v-card-text>
        <v-img width="200" height="200" :src="`${photo.url}`"></v-img>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style lang="">

</style>
