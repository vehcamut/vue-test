<template>
  <v-app>
    <NavbarItemVue />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavbarItemVue from '@/components/NavbarItem.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NavbarItemVue,
  },
});
</script>
