<template>
  <header>
    <div class="navBarWrapper">
      <Logo/>
      <nav>
        <ul class="navBarUl">
          <li class="navBarLi" :class="{navBorderBottom:isNavMouseOver[0]}" @mouseover="mouseOver(0)"
              @mouseout="mouseOut(0)">Company
          </li>
          <li class="navBarLi" :class="{navBorderBottom:isNavMouseOver[1]}" @mouseover="mouseOver(1)" @mouseout="mouseOut(1)">Products</li>
          <li class="navBarLi" :class="{navBorderBottom:isNavMouseOver[2]}" @mouseover="mouseOver(2)" @mouseout="mouseOut(2)">Patent</li>
          <li class="navBarLi" :class="{navBorderBottom:isNavMouseOver[3]}" @mouseover="mouseOver(3)" @mouseout="mouseOut(3)">Application</li>
          <li class="navBarLi" :class="{navBorderBottom:isNavMouseOver[4]}" @mouseover="mouseOver(4)" @mouseout="mouseOut(4)">Inquiry</li>
        </ul>
      </nav>
      <div class="divBlank"/>
    </div>
  </header>
  <NavModal :isMouseOver="isMouseOver"/>
</template>

<script>
import Logo from "@/components/Common/Logo";
import NavModal from "@/components/Common/NavModal";
import './NavBar.css'

export default {
  name: "NavBar",
  components: {Logo, NavModal,},
  data() {
    return {
      isMouseOver: false,
      isNavMouseOver: [false, false, false, false, false]
    }
  },
  methods: {
    mouseOver(i) {
      this.isMouseOver = true;
      this.isNavMouseOver[i] = true
    },
    mouseOut(i) {
      this.isMouseOver = false;
      this.isNavMouseOver[i] = false
    }
  }
}
</script>

<style scoped>

</style>