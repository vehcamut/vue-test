<script lang="ts">
import { defineComponent } from 'vue';
import { IPhoto } from '../../interfaces';

export default defineComponent({
  data: () => ({
    title: '',
    img: null,
  }),
  methods: {
    addPhoto() {
      const reader = new FileReader();
      reader.onload = () => {
        const photo: IPhoto = {
          id: Date.now(),
          title: this.title,
          url: reader.result as string,
        };
        this.$emit('addPhoto', photo);
      };
      reader.readAsDataURL(new Blob([this.img ? this.img : ''], { type: 'text/plain' }));
    },
  },
});
</script>

<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field v-model="title" name="name" label="label" id="id"></v-text-field>
      <v-file-input v-model="img" />
      <v-btn color="success" @click="addPhoto">Добавить</v-btn>
    </v-row>
  </v-container>
</template>

<style lang="">

  </style>
