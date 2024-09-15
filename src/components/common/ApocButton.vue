<script lang="ts">
import { defineComponent, type PropType, toRefs } from 'vue';

export default defineComponent({
  name: 'ApocButton',
  props: {
    isPrimary: {
      type: Boolean,
      default: false,
      require: false,
    },
    onClick: {
      type: Function as PropType<() => void>,
      default: () => {},
    },
  },
  setup(props) {
    const propsRef = toRefs(props);

    return {
      ...propsRef,
    };
  },
});
</script>

<template>
	<button class="apoc-btn" :class="{ primary: isPrimary, secondary: !isPrimary }" @click.stop.prevent="onClick"><slot /></button>
</template>

<style scoped></style>
