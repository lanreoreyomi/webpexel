<template>
  <div id="app">
    <div id="nav">
      <div class="desktop">
        <navBar/>
      </div>
<div class="mobile">
  <mobile-nav/>
</div>

    </div>
    <router-view />
  </div>
</template>
<script>
import navBar from '@/components/layout/DesktopNavbar.vue'
import mobileNav from '@/components/layout/MobileNav.vue'


export default {
  data() {
    return {
      mobileView: 0,
      showNav: false,
    }
  },
  components: {
    navBar,
    mobileNav,

  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth;

    }
  },
  created() {
    this.handleView();

  },
}
</script>

<style lang="scss">
@import "src/assets/Styles/colors";

.html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  line-height: 35px;
  background:$backgroundColor !important;
}

</style>
