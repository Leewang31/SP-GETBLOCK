<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const count = 0;
    return {
      count,
    };
  },
});
</script>

<template>
	<div class="grid test-example-content">
		<div class="test-text b-24">Weight 700, Size 3rem(24px)</div>
		<div class="test-text b-18">Weight 700, Size 2.25rem(18px)</div>
		<div class="test-text b-16">Weight 700, Size 2rem(16px)</div>
		<div class="test-text r-18">Weight 400, Size 2.25rem(18px)</div>
		<div class="test-text r-16">Weight 400, Size 2rem(16px)</div>
	</div>
</template>
