<script lang="ts">
import PhotoItemVue from '@/components/photo/PhotoItem.vue';
import PhotoFormVue from '@/components/photo/PhotoForm.vue';
import { IPhoto } from '@/interfaces';
import { defineComponent } from 'vue';
import PhotoDialog from '@/components/photo/PhotoDialog.vue';

export default defineComponent({
  components: {
    PhotoItemVue,
    PhotoFormVue,
    PhotoDialog,
  },

  data() {
    return {
      photos: [] as IPhoto[],
      // currentPhoto: {} as IPhoto,
      // dialogVisible: false,
    };
  },
  /*= > ({
    photos: [] as IPhoto[],
    currentPhoto: IPhoto = {},
  }), */

  mounted() {
    // this.fetchTodo();
    this.$store.dispatch('fetchPhotos');
  },
  methods: {
    // fetchTodo() {
    //   this.$axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then((response) => { this.photos = response.data; });
    // },
    addPhoto(photo: IPhoto) {
      this.photos.push(photo);
    },
    // openPhoto(photo: IPhoto) {
    //   this.currentPhoto = photo;
    //   this.dialogVisible = true;
    // },
  },
});
</script>

<template>
  <v-container>
    <PhotoFormVue v-if="photos.length < 11" @addPhoto="addPhoto"></PhotoFormVue>
    <div v-else>Вы не можете добавить больше фотографий</div>
    <v-row>
      <PhotoItemVue
        v-for="photo in $store.getters.getAllPhotos"
        :key="photo.id"
        :photo="photo"
      />
    </v-row>
    <PhotoDialog/>
  </v-container>
</template>

<style lang="">

</style>
