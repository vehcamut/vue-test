<script lang="ts">
import { defineComponent } from 'vue';
import { IPhoto } from '../../interfaces';

export default defineComponent({
  props: {
    photo: {
      type: Object as () => IPhoto,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.dialogVisible = this.value;
  },

  data() {
    return {
      dialogVisible: false,
    };
  },
  watch: {
    value(newValue) {
      this.dialogVisible = newValue;
    },
    dialogVisible(newValue) {
      this.$emit('input', newValue);
    },
  },
});
</script>

<template>
  <v-dialog v-model="dialogVisible" max-width="600">
    <v-card>
      <v-card-title primary-title>
        {{photo.title}}
      </v-card-title>
      <v-card-text>
        <v-img :src="`${photo.url}`"></v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style lang="">

  </style>
