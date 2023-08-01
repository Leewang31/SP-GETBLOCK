<template>
  <div class="backgroundDiv">
    <ul class="locationUl">
      <li style="cursor: pointer" :class="{fontHighlight:mouseOver[0]}" @mouseover="mouseOver[0]=true"
          @mouseout="mouseOver[0]=false" @click="this.$router.push('/')">Home
      </li>
      <li style="cursor: default">></li>
      <li style="cursor: pointer" :class="{fontHighlight:mouseOver[1]}" @mouseover="mouseOver[1]=true"
          @mouseout="mouseOver[1]=false" @click="this.$router.push('/introduction')">Company
      </li>
      <li style="cursor: default">></li>
      <li style="cursor: pointer" :class="{fontHighlight:mouseOver[2]}" @mouseover="mouseOver[2]=true"
          @mouseout="mouseOver[2]=false" @click="this.$router.push('/introduction')">Introduction
      </li>
    </ul>
    <h2 class="introductionTitle">Introduction</h2>
    <p class="introductionInfo">GetBlock is the most advanced waterproof zipper technology</p>
    <div class="introductionImg"/>
    <div class="introductioncontentWrapper">
      <h4 class="introductionH4">GETBLOCK</h4>
      <p class="introductioncontent">
        Through our experience to supply zippers to worldwide leading garment brands for more than 10 years, we felt
        keenly the necessity of 100% perfect waterproof zipper with competitive price.
        We finally succeeded to develop GETBLOCK only with a passion to provide 100% guaranteed waterproof zipper after
        a lot of trial and error to find suitable materials and optimal structure.
        GETBLOCK can replace current coated waterproof zipper which has incomplete waterproof function, and special
        waterproof zipper which has comparatively high price for its function.
        GETBLOCK will provide 100% guaranteed waterproof and competitive price to all manufacturers who need waterproof
        for gar-ments, bags, shoes, tents.
      </p>
    </div>
    <div class="introductioncontentWrapper">
      <h4 class="introductionH4">PROFILE</h4>
      <pre class="introductioncontent">This is the profile seat
This is the profile seat
This is the profile seat
This is the profile seat
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "introduction",
  methoded() {
    scroll();
  },
  data() {
    return {
      mouseOver: [false, false, false]
    }
  },

}
</script>

<style>
.introductionTitle {
  font-family: logo;
  text-align: center;
  font-size: 42px;
  padding-bottom: 30px;
}

.introductionInfo {
  font-size: 20px;
  padding-bottom: 20px;
  text-align: center;
  color: var(--lightblack);
}

.introductionImg {
  background-image: url("../../assets/image/getblock4.png");
  background-size: cover;
  width: 100%;
  height: 230px;
  overflow: hidden;
}

.introductioncontentWrapper {
  margin: 54px auto;
  width: fit-content;
  display: flex;
  line-height: 1.8;
  letter-spacing: -0.2px;
}

.introductionH4 {
  width: 220px;
  margin-right: 20px;
  font-family: logo;
  font-size: 20px;
}

.introductioncontent {
  width: 800px;
  color: var(--lightblack);
  font-size: 15px;
}
</style>