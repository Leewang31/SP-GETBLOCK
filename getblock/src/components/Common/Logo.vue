<template>
  <p class="logoDiv" @click="this.$router.push('/')">GETBLOCK™</p>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style scoped>
.logoDiv {
  cursor: pointer;
  width: 170px;
  font-family: logo;
  font-size: 24px;
  align-content: center;
  justify-content: center;
  margin-left: 80px;
  padding: 10px 0;
}
</style>