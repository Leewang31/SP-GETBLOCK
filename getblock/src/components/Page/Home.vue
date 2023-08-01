<template>
<div class="backgroundDiv ">
  <div class="locationUl"></div>
</div>
</template>

<script>
export default {
name: "Home"
}
</script>

<style>
.backgroundDiv{
  /*background: linear-gradient(var(--cement),0.01%, var(--white));*/
  margin-top: 80px;
  height: 100vh;
  font-family: common;
}
.locationUl{
  font-size: 12px;
  display: flex;
  padding: 20px 0 36px 100px;
  align-items: center;
  color: var(--lightblack);
}
.fontHighlight {
  color: var(--black);
  font-family: navLi;
  font-size: 11.75px;
}
.locationUl > li{
  padding: 0 5px ;
}
</style>