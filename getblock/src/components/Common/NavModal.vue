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
  height: 200px;
  border: 2px solid var(--blue);
}

.modal-enter-from {
  height: 0
}

.modal-enter-active {
  transition: all 0.4s
}

.modal-enter-to {
  height: 200px;
}

.modal-leave-from {
  height: 200px;
}

.modal-leave-active {
  transition: all 0.4s
}

.modal-leave-to {
  height: 0px;
}
</style>