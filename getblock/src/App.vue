<template>
  <NavBar/>
  <Home/>
</template>

<script>

import NavBar from "@/components/Common/NavBar";
import Home from "@/components/Page/Home";

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
  }
}
</script>

<style>
body {

  overflow: hidden;
}
</style>
