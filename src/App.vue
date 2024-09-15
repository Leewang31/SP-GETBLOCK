<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useHead } from '@unhead/vue';
useHead({
  title: 'APOC',
  meta: [{ name: 'description', content: 'Interactive XR content platform that empowers world to bridge the experiential gap in Metaverse' }],
});
</script>

<template>
	<router-view :key="$route.path" />
</template>

<style lang="scss">
@import 'assets/css/app.scss';
</style>
