<template>
  <header>
    <div class="navBarWrapper">
      <Logo/>
      <nav>
        <ul class="navBarUl">
          <li class="navBarLi" @mouseover="isMouseOver=true" @mouseout="isMouseOver=false">Company</li>
          <li class="navBarLi" @mouseover="isMouseOver=true" @mouseout="isMouseOver=false">Products</li>
          <li class="navBarLi" @mouseover="isMouseOver=true" @mouseout="isMouseOver=false">Patent</li>
          <li class="navBarLi" @mouseover="isMouseOver=true" @mouseout="isMouseOver=false">Application</li>
          <li class="navBarLi" @mouseover="isMouseOver=true" @mouseout="isMouseOver=false">Inquiry</li>
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

export default {
  name: "NavBar",
  components: {Logo, NavModal,},
  data() {
    return {
      isMouseOver: false,
    }
  },
  methods: {}
}
</script>

<style scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  min-width: 1100px;
  width: max-content;
}

.navBarWrapper {
  max-width: 1600px;
  height: 80px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  align-items: center;
}

.navBarUl {
  display: flex;
  margin-left: 100px;
}

.navBarLi {
  font-size: 15px;
  font-family: logo;
  margin: 0 20px;
  color: #333333;
  padding: 10px;
  cursor: pointer;
}

.divBlank {
  width: 200px;
}
</style>