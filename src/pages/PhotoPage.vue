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
      currentPhoto: {} as IPhoto,
      dialogVisible: false,
    };
  },
  /*= > ({
    photos: [] as IPhoto[],
    currentPhoto: IPhoto = {},
  }), */

  mounted() {
    this.fetchTodo();
  },
  methods: {
    fetchTodo() {
      this.$axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then((response) => { this.photos = response.data; });
    },
    addPhoto(photo: IPhoto) {
      this.photos.push(photo);
    },
    openPhoto(photo: IPhoto) {
      this.currentPhoto = photo;
      this.dialogVisible = true;
    },
  },
});
</script>

<template>
  <v-container>
    <PhotoFormVue @addPhoto="addPhoto"></PhotoFormVue>
    <v-row>
      <PhotoItemVue v-for="photo in photos" :key="photo.id" :photo="photo" @openPhoto="openPhoto" />
    </v-row>
    <PhotoDialog :photo="currentPhoto" :dialogVisible="dialogVisible" />
  </v-container>
</template>

<style lang="">

</style>
