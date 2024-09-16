<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useHead } from '@unhead/vue';
useHead({
  title: 'GET BLOCK',
  meta: [{ name: 'description', content: 'Get smart. Get block getblock' }],
});
</script>

<template>
	<router-view :key="$route.path" />
</template>

<style lang="scss">
@import 'assets/css/app.scss';
</style>
