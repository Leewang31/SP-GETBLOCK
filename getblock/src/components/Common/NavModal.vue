<template>
  <transition name="modal">
    <div class="modal" v-if="isMouseOver"></div>
  </transition>
</template>

<script>
export default {
  name: "NavModal",
  props: {
    isMouseOver: Boolean,
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 80px;
  width: 100%;
  height: 300px;
  background: var(--lightblack);
  box-shadow: 0 3px 8px -1px var(--lightblack);
}

.modal-enter-from {
  height: 0
}

.modal-enter-active {
  transition: all 0.4s
}

.modal-enter-to {
  height: 300px;
}

.modal-leave-from {
  height: 300px;
}

.modal-leave-active {
  transition: all 0.4s
}

.modal-leave-to {
  height: 0px;
}

</style>