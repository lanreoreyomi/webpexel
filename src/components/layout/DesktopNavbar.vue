<template>

  <div id="desktopNav">
    <div class="navbar" :class="{db: scrollPosition>800}">
      <div id="nav-logo">
        <a v-scroll-to="'#home'"><img :src="logoImg" alt="logo"></a>
      </div>
      <div id="nav-items">
        <ul>
          <li>
            <router-link :to="{name: 'Home'}" class="router-link" exact  v-scroll-to="'#home'">Home</router-link>
          </li>

          <li @click="toggleMenu=!toggleMenu">
            <a class="button1" v-scroll-to="'#about'">About </a>
          </li>
          <li @click="toggleMenu=!toggleMenu">
            <a class="button1" v-scroll-to="'#skillSet'">Projects </a>
          </li>
          <li>
            <router-link :to="{name: 'Portfolio'}" class="router-link  career" v-scroll-to="'#home-c'">Portfolio
              <img src="https://img.icons8.com/color/28/000000/arrow--v2.png" alt="arrow-right"/>
            </router-link>
          </li>

        </ul>
      </div>

    </div>
  </div>

</template>

<script>

// import socialButton from '../SocialButtons';

export default {
  name: "DesktopNavbar",
  data() {
    return {
      logoImg: require('../../assets/Image/white_logo.svg'),
      scrollPosition: null
    }
  },
  components: {
    // socialButton,
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY

      if (this.scrollPosition > 800) {
        this.logoImg = require('../../assets/Image/blueLogo.svg')
      } else {
        this.logoImg = require('../../assets/Image/white_logo.svg');
      }

    },

  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);

  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/Styles/colors";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#desktopNav {
  position: relative;
  z-index: 9999 !important;

  .db {
    background: #F1F2F6 !important;

    ul {
      li {
        a {
          color: $headerColor !important;
        }
      }
    }

  }

  .navbar {
    display: flex;

    position: fixed;
    justify-content: center;
    top: 0;
    z-index: 999;
    width: 100%;
    background: $headerColor ;
    #nav-logo {
      width: 35%;
      padding: 20px;

      img {
        width: 150px;
        padding: 0;
        margin: 0;

      }
    }

    #nav-items {
      margin: 0 auto;
      width: 65%;
      display: flex;

      .career {
        background: $textHighlight !important;
        border-radius: 6px;
        padding: 6px;
        color: $headerColor !important;
        border: 2px solid $textHighlight !important;
        img {
          display: none;
          width: 60px;
          padding: 0 !important;
          margin: 0 !important;
          text-align: center;
          justify-content: center;
          align-items: center;
        }

        &:hover {
          img {
            display: inline;

          }
        }
      }

      ul {
        margin: 0 auto;
        text-align: end;

        li {
          display: inline-block;
          list-style: none;
          padding: 20px;

          a {
            color: white;
            font-family: 'Poppins', sans-serif;
            text-align: center;
            cursor: pointer;
            text-decoration: none;
            &:hover {
              text-decoration: none;
              text-underline: none;
              color: #7f8fa6;

            }
          }

          .router-link-active {
            border-radius: 6px;
            color: $textHighlight;
            border-bottom: none !important;
            padding: 8px;
            //color: $headerColor !important;
          }

          .router-link {
            img {
              width: 15px;
              display: none;
            }

            &:hover {
              img {
                display: unset;
              }
            }
          }
        }
      }
    }

  }
}


@media (max-width: 767px) {
  #desktopNav{
display: none !important;
  }
}

</style>
