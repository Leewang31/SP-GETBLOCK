<template>
  <div class="backgroundDiv">
    <ul class="locationUl">
      <li style="cursor: pointer" :class="{fontHighlight:mouseOver[0]}" @mouseover="mouseOver[0]=true"
          @mouseout="mouseOver[0]=false" @click="this.$router.push('/')">Home
      </li>
      <li style="cursor: default">></li>
      <li style="cursor: pointer" :class="{fontHighlight:mouseOver[1]}" @mouseover="mouseOver[1]=true"
          @mouseout="mouseOver[1]=false" @click="this.$router.push('/characteristics')">Products
      </li>
      <li style="cursor: default">></li>
      <li style="cursor: pointer" :class="{fontHighlight:mouseOver[2]}" @mouseover="mouseOver[2]=true"
          @mouseout="mouseOver[2]=false" @click="this.$router.push('/test_certification')">Test&Certification
      </li>
    </ul>
    <h2 class="introductionTitle">Test & Certification</h2>
    <p class="introductionInfo">GetBlock is the most advanced waterproof zipper technology</p>

  </div>
</template>

<script>
export default {
  name: "TestCertification",
  data() {
    return {
      mouseOver: [false, false, false]
    }
  },
}
</script>

<style scoped>


</style>
