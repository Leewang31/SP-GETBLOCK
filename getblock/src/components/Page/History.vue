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
          @mouseout="mouseOver[2]=false" @click="this.$router.push('/history')">History
      </li>
    </ul>
    <h2 class="introductionTitle">History</h2>
    <div class="introductionImg"/>
    <div class="introductioncontentWrapper">
      <h4 class="introductionH4">Present - 2007 </h4>
      <ul class="introductioncontent historyE">
        <li class="historyLi" v-for="(d,i) in historyData" :key="i">
          <div class="historyYear">{{ d.year }}</div>
          <div class="historyMonth">{{ d.month }}</div>
          <div class="historyContent">{{ d.content }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import historyData from "@/assets/data/historyData";

export default {
  name: "History",
  data() {
    return {
      mouseOver: [false, false, false],
      historyData
    }
  },
}
</script>

<style scoped>
.fontHighlight {
  color: var(--lightblack);
}

li {
  padding: 0 3px;
}

.historyLi {
  display: flex;
  padding: 30px 0;
  border-bottom: 2px solid rgba(128,128,128,0.2);
  width: 620px;
}

.historyYear {
  font-size: 20px;
  font-family: semi-bold;
  width: 140px;
  margin: auto 0;
  padding-left: 15px;
}

.historyMonth {
  font-family: semi-bold;
  width: 50px;
  margin: auto 0;
}

.historyContent {
  margin: auto 0;
}
.historyE{
  margin-top: -30px;
}
</style>
