<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ExamplesLayout from '@/layouts/ExamplesLayout.vue';
import ViewsLayout from '@/layouts/ViewsLayout.vue';
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';

const route = useRoute()

const layoutComponent = computed(() => {
  switch (route.meta.layout) {
    case 'view':
      return ViewsLayout
    case 'example':
      return ExamplesLayout
    default:
      return DefaultLayout
  }
})
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>
