<template>
  <v-app>
    <v-container fluid>
      <v-app-bar
        color="orange"
        dark
      >
      <v-spacer/>
      <v-btn outlined color="white" class="ml-3">Главная</v-btn>
      <v-btn outlined color="white" class="ml-3">Фотографии</v-btn>
      </v-app-bar>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>
