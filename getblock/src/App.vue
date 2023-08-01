<template>
  <NavBar/>
  <router-view class="mb"></router-view>
  <Footer/>
</template>

<script>

import NavBar from "@/components/Common/NavBar";
import Footer from "@/components/Common/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    NavBar,

  }
}
</script>

<style>
.mb{
  margin-bottom: 160px;
}
</style>
