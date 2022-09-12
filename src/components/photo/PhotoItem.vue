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
});
</script>

<template>
  <div>
    {{photo.id + ' ' + photo.title}}
  </div>
</template>

<style lang="">

</style>
