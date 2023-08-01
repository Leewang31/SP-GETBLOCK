<template>
  <div class="footerWrapper">
    <div class="footerContent">
    <p class="logoDiv">GETBLOCK™</p>
      <div>TEL: ++ 82 70 7601 9672 FAX: ++ 82 32 234 4672 CONTACTS: sales@getblock.com ADDRESS: #Na-211, Incheon
        Techpia, 223-38 Seoknam-dong. Seo-gi
        Incheon city, Korea.
        Copyright (c) 2012 JINSUNG Corporation. All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footerWrapper {
  background-color: var(--lightgrey);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 54px 0 50px;
}

.footerContent {
  width: 800px;
  display: flex;
  height: 16px;
  font-size: 12px;
  font-family: navLi;
  justify-content: center;

}

.logoDiv {
  color: var(--lightblack);
  cursor: pointer;
  font-family: logo;
  font-size: 18px;
  margin-right: 20px;
}
</style>