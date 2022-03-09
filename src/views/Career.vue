<template>
  <div id="career" >
    <div id="home-c"></div>
    <div class="landing-section">
      <landing-section/>
    </div>
    <div class="introduction">
      <introduction/>
    </div>
    <div class="skills">
      <skills/>
    </div>
    <div class="contact">
      <Contact/>
    </div>
    <div class="card" >
      <Card v-if="isVisible"/>
    </div>
    <div class="footer">
      <Footer />
    </div>

  </div>

</template>

<script>

import LandingSection from '@/components/LandingSection.vue'
import introduction from '@/components/introduction.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/layout/Footer.vue'
import Card from '@/components/card'


export default {
  name: 'Home',
  data (){
    return{
      isVisible: false,

    }
  },
  components: {
    LandingSection,
    introduction,
    Skills,
    Contact,
    Footer,
    Card,
  },
  metaInfo() {
    return {
      title: "WebPexels",
      titleTemplate: '%s |Web Development Company in Ottawa/Gatineau',
      meta: [
        {charset: 'utf-8'},
        {name: 'description', content: 'gator'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          vmid: "description",
          name: "description",
          content:
              "Affordable Web Development, Web Maintenance, SEO company in Ottawa/Gatineau Area. "+
              "We develop beautiful and responsive ecommerce and personal websites for individuals, companies and organizations."
        }
      ]

    };
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/Styles/colors";
@import "src/assets/Styles/Buttons";
#career{
 background: #F1F2F6;
}
.landing-section {
  //margin-top: 5vh;
}



</style>
