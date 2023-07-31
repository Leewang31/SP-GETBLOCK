<template>
  <transition name="modal">
    <div class="modal" v-if="isMouseOver" @mouseleave="$emit('closeModal',false)">
      <div class="navModalWrapper" >
        <ul class="navModalDetailUl" >
          <li class="navModalDetailLi">
            <p @mouseover="mouseOver(0,0)" @mouseout="mouseOut(0,0)"
               :class="{navDetailBorderBottom:isNavDetailMouseOver[0][0]}">Introduction</p>
          </li>
          <li class="navModalDetailLi"><p @mouseover="mouseOver(0,1)" @mouseout="mouseOut(0,1)"
                                          :class="{navDetailBorderBottom:isNavDetailMouseOver[0][1]}">History</p></li>
          <li class="navModalDetailLi"><p @mouseover="mouseOver(0,2)" @mouseout="mouseOut(0,2)"
                                          :class="{navDetailBorderBottom:isNavDetailMouseOver[0][2]}">Patent</p></li>
          <li class="navModalDetailLi"><p @mouseover="mouseOver(0,3)" @mouseout="mouseOut(0,3)"
                                          :class="{navDetailBorderBottom:isNavDetailMouseOver[0][3]}">Organization</p>
          </li>
        </ul>
        <ul class="navModalDetailUl">
          <li class="navModalDetailLi"><p @mouseover="mouseOver(1,0)" @mouseout="mouseOut(1,0)"
                                          :class="{navDetailBorderBottom:isNavDetailMouseOver[1][0]}">
            ChaRacteristics</p>
          </li>
          <li class="navModalDetailLi"><p @mouseover="mouseOver(1,1)" @mouseout="mouseOut(1,1)"
                                          :class="{navDetailBorderBottom:isNavDetailMouseOver[1][1]}">Difference</p>
          </li>
          <li class="navModalDetailLi"><p @mouseover="mouseOver(1,2)" @mouseout="mouseOut(1,2)"
                                          :class="{navDetailBorderBottom:isNavDetailMouseOver[1][2]}">Test &
            Certification</p></li>
        </ul>
        <ul class="navModalDetailUl">
          <li class="navModalDetailLi">
            <p @mouseover="mouseOver(2,0)" @mouseout="mouseOut(2,0)"
               :class="{navDetailBorderBottom:isNavDetailMouseOver[2][0]}">Way To Apply</p></li>
          <li class="navModalDetailLi"><p @mouseover="mouseOver(2,1)" @mouseout="mouseOut(2,1)"
                                          :class="{navDetailBorderBottom:isNavDetailMouseOver[2][1]}">Applications</p>
          </li>
        </ul>
        <ul class="navModalDetailUl">
          <li class="navModalDetailLi"><p @mouseover="mouseOver(3,0)" @mouseout="mouseOut(3,0)"
                                          :class="{navDetailBorderBottom:isNavDetailMouseOver[3][0]}">Inquiry</p></li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import './NavModal.css'

export default {
  name: "NavModal",
  props: {
    isMouseOver: Boolean,
  },
  data() {
    return {
      isNavDetailMouseOver: [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]]
    }
  },
  methods: {
    mouseOver(i, j) {
      this.isNavDetailMouseOver[i][j] = true;
    },
    mouseOut(i, j) {
      this.isNavDetailMouseOver[i][j] = false;
    }
  }
}
</script>

<style scoped>
</style>