<template>
  <div class="home " id="home">
    <div class="wel">
      <VueSlickCarousel :arrows="false" :dots="true" v-bind="settings">
        <div class="welcome">
          <div class="welcome_info">
            <h1>Design</h1>
            <p>Modern, user-friendly, and responsive designs, following industry and accessibility standards. </p>
            <div class="welcome_btn">
              <a class="btn prim_btn" v-scroll-to="'#contactsContainer'">Contact</a>
              <a class="btn sec_btn" v-scroll-to="'#skillSet'">Projects</a>
            </div>
          </div>
          <div class="welcome_img">
            <img src="../assets/Image/design.svg" alt="">
          </div>
        </div>
        <div class="welcome">
          <div class="welcome_info">
            <h1>Develop</h1>
            <p>Modern Web technologies that will make your website scale with your business,
              meeting business needs and customer satisfaction</p>
            <div class="welcome_btn">
              <a class="btn prim_btn" v-scroll-to="'#contactsContainer'">Contact</a>
              <a class="btn sec_btn" v-scroll-to="'#skillSet'">Projects</a>
            </div>
          </div>
          <div class="welcome_img">
            <img src="../assets/Image/develop.svg" alt="">
          </div>
        </div>
        <div class="welcome">
          <div class="welcome_info">
            <h1>Deploy</h1>
            <p>Website Hosting and Domain registration with industry leading hosting platforms </p>
            <div class="welcome_btn">
              <a class="btn prim_btn" v-scroll-to="'#contactsContainer'">Contact</a>
              <a class="btn sec_btn" v-scroll-to="'#skillSet'">Projects</a>
            </div>
          </div>
          <div class="welcome_img">
            <img src="../assets/Image/deploy.svg" alt="">
          </div>
        </div>
      </VueSlickCarousel>
    </div>

    <div class="cards">
      <Card/>
    </div>
    <!-- Calendly inline widget begin -->
    <!-- Calendly inline widget end -->
<!--TODO:Make projects a clickable modal-->
    <div class="projects-b" id="skillSet">
      <div class="proj" data-aos="zoom-in" data-aos-duration="500">
        <img src="../assets/Image/ddc.png" alt="thumbnail">
        <p data-aos="zoom-in-up" data-aos-duration="1000" style="background:#222f3e;">
          <a href="https://www.diversifieddementiacare.com/#/" target="_blank">View</a>
          <br>
          <br>
          <span>Diversified Dementia Care</span>
        </p>
      </div>
      <div class="proj" data-aos="zoom-in" data-aos-duration="500">
        <img src="../assets/Image/chickenstop.png" alt="thumbnail">
        <p data-aos="zoom-in-up" data-aos-duration="1000" style="background:#5f27cd;">
          <a href="https://chickenstop.netlify.app/#/" target="_blank">View</a>
          <br>
          <br>
          <span>Chicken Stop</span>
        </p>
      </div>
      <div class="proj" data-aos="zoom-in" data-aos-duration="500">
        <img src="../assets/Image/swf_solutions.png" alt="thumbnail">
        <p data-aos="zoom-in-up" data-aos-duration="1000" style="background:#b71540;">
          <a href="https://swfsolutionca.netlify.app/" target="_blank">View</a>
          <br>
          <br>
          <span>SWF Solution</span>
        </p>
      </div>
      <div class="proj" data-aos="zoom-in" data-aos-duration="500">
        <img src="../assets/Image/bandyfit.png" alt="thumbnail">
        <p data-aos="zoom-in-up" data-aos-duration="1000" style="background:#0c2461;">
          <a href="https://bandyfit.netlify.app/" target="_blank">View</a>
          <br>
          <br>
          <span>Bandy Fit</span>
        </p>
      </div>
      <div class="proj" data-aos="zoom-in" data-aos-duration="500">
        <img src="../assets/Image/konia.png" alt="thumbnail">
        <p data-aos="zoom-in-up" data-aos-duration="1000" style="background:#5f27cd;">
          <a href="https://koniaresourcesltd.com/" target="_blank">View</a>
          <br>
          <br>
          <span>Konia Resources Ltd</span>
        </p>
      </div>

    </div>
    <div class="introduction-b" id="about">
      <div class="intro-section" style="background:#2c2c54;">
        <div class="intro-img">
          <img src="../assets/Image/Group1.svg" alt="communicate">
        </div>
        <div class="intro-text">
          <div class="textHeading"><h1 style="color:#8c7ae6;">Instant Communication</h1></div>
          <h2 class="text-desc">
            We provide smooth and prompt communication with clients right from inquiring to project design, project
            development, and deployment.
            <br>Our communication channels are always available 24/7 to reply to your messages as soon as possible.
            We are also available on our social media platforms.
          </h2>
        </div>
      </div>
      <div class="intro-section" style="background:#192a56;">
        <div class="intro-img">
          <img src="../assets/Image/maintenance.png" alt="">
        </div>
        <div class="intro-text">
          <div class="textHeading"><h1 style="color:#17c0eb;">We are Agile</h1></div>
          <h2 class="text-desc">
            Yes, we are Agile! You will be involved in the development process from design to development and
            deployment. You can make changes to your project at any stage of development without any extra charge.
            <br>
            WebPexel's goal is to make sure we deliver the best and most updated version of your project.
          </h2>
        </div>
      </div>
      <div class="intro-section" style="background:#130f40;">
        <div class="intro-img">
          <img src="../assets/Image/seo-opt.png" alt="">
        </div>
        <div class="intro-text">
          <div class="textHeading"><h1 style="color:#b77b0d;">2 months Post deployment Support</h1></div>
          <h2 class="text-desc">Starting a new project, most especially, a project that will be the face of a business
            requires all hands on deck. That is why we are providing 2 months of Post Deployment Support for newly
            created and modified websites.
            <br>
            We will change the contents on your websites for free. This is to ensure that your website reflects the most
            updated information
            on your website.
            <br>
            **Terms and conditions apply**
          </h2>
        </div>
      </div>

      <div class="intro-section" style="background:#0a3d62;">
        <div class="intro-img">
          <img src="../assets/Image/customer-support.png" alt="">
        </div>
        <div class="intro-text">
          <div class="textHeading"><h1 style="color:#ec552c;">Customer Support</h1></div>
          <h2 class="text-desc">Our customer service is very reliable, we tackle reported issues immediately,
            ensure that you are satisfied and happy with the service you received.
          </h2>
        </div>
      </div>
    </div>

<!--    <div class="calendly-inline-widget" data-url="https://calendly.com/webpexels?background_color=#fff" style="min-width:320px;height:730px;"></div>-->

    <Contact/>

    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from '@/components/layout/Footer.vue'
import Card from '@/components/card'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import {Carousel, Slide} from 'vue-carousel';

import Contact from '@/components/Contact'


export default {
  name: 'Home',
  components: {
    Footer,
    Card,
    VueSlickCarousel,
    Contact,


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
  data() {
    return {
      settings: {
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 2000,

      },

      currentIndex: 0,
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = this.currentIndex + 1;
    }, 5000);
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
@import url('https://fonts.googleapis.com/css2?family=Coda:wght@800&family=Poller+One&family=Poppins:wght@800&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.home {
  padding-top: 30px;
  box-sizing: border-box;
  margin: 0;
  background: #F1F2F6;

  .wel {
    background: $headerColor;
    width: 100%;

    .welcome {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      width: 80% !important;
      background: $headerColor;
      outline: none;
      margin: 80px auto 50px;

      .welcome_info {

        margin: 120px auto;
        text-align: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        color: white;

        h1 {
          font-size: 60px;
          padding: 20px;
          margin-bottom: 40px;
        }

        .welcome_btn {
          color: white;
          display: grid;
          grid-template-columns: 1fr 1fr;

          a {
             background: white;
            border-radius: 2rem;
            margin: 30px auto;
            width: 200px;
            border: 2px solid black;

            padding: 10px;
            cursor: pointer;
            color: #1B187D;
            &:hover {
              background: darken(white, 20%);
            }
          }

          .sec_btn {
            border: 1px solid #ED542C;
            background: #1B187D;
            color: white;

            &:hover {
              background: $textHighlight;
              color: $headerColor;
            }
          }
        }
      }

      .welcome_img {
        text-align: center;
        align-items: center;
        img {
          max-width: 100%;
        }
      }
    }
  }
  .cards {
    margin-top: 10vh;
  }

  .introduction-b {
    .intro-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      margin: 0;
      font-family: 'poppins', cursive;
      .intro-img {
        width: 100%;
        text-align: center;
        img {
          margin-top: 80px;
          width: 400px;
        }
      }
      .intro-text {
        color: $alt-bg;
        padding: 20px;
        width: 100%;
        margin-top: 80px;
        text-align: start;
        font-weight: unset;
        .textHeading {
          h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 40px;
            font-weight: bolder;
            line-height: 60px;
            padding: 10px;
          }
        }

        .text-desc {
          padding: 10px;
          font-size: 14px;
          line-height: 30px;
          font-weight: unset;
        }
      }
    }
  }

  .skills-b {
    text-align: center;
    padding: 20px;
    width: 70%;
    border-radius: 6px;
    background: #f1f2f6;
    margin: 0 auto;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    img {
      justify-content: space-around;
      width: 50px;
      margin: 20px;
      cursor: pointer;
      &:hover {
        transform: scale(1);
      }
    }
  }

  .projects-b {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    width: 80%;
    margin: 0 auto 2vh;

    .proj {
      position: relative;
      width: 100%;

      img {
        cursor: pointer;
        //width: 400px;
        width: 100%;
        height:100%;
        //height: 400px;
        //-webkit-box-shadow: 0px -1px 12px 7px rgba(255, 255, 255, 1.0);
        //box-shadow: 0px -1px 12px 7px rgba(223, 228, 234, 1.0);
        transition: all 0.3s ease 0s;
      }

      p {
        //padding:100px;
        opacity: 0;
        bottom: 0;
        text-align: center;
        position: absolute;
        cursor: pointer;
        width: 100%;
        font-size: 15px;
        height: 80%;

        span {
          font-size: 20px;
          padding-top: 10px;
          font-weight: bolder;
          color: $alt-bg;
        }

        a {
          @include Button;
          padding: 10px 25px;
          color: $alt-bg;
          border-radius: 4px;
          border: 1px solid $alt-bg;
          background: black;
          height: 200px;

          &:hover {
            background: white;
            color: black;
          }
        }
      }

      &:hover {
        border-radius: 4px;

        p {
          opacity: 0.9;
        }
      }
    }
  }

  .contactSection-b {
    //background: $headerColor;
    margin: 0;
    padding: 50px;

    .contactsContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      background: $backgroundColor;
      width: 100%;
      margin: 0 auto;

      #contactInfo {
        text-align: center;
        padding: 20px;
        position: relative;

        h4 {
          font-family: $headerFont2;
          font-size: 40px;
          text-align: center;
          padding: 0;
          margin: 0;
          color: #9e939b;
        }

        .form-section {
          text-align: center;

          form {
            justify-content: center;
            align-items: center;

            input[type=text], #messageArea {
              @include inputTextField();
              width: 400px !important;
            }

            #submit {
              @include Button();

              &:hover {
                background: black;
                transition: all 0.2s;
                color: $backgroundColor;
              }
            }
          }
        }
      }

      .letsWork {
        padding: 40px;
        background: $textColor;
        color: $backgroundColor;

        h4 {
          font-family: $headerFont2;
          font-size: 40px;
          text-align: center;
          padding: 0;
          margin: 0;
          color: #9e939b;
        }

        .work-items {
          padding-top: 20px;
        }

        p {
          font-size: 18px;
          font-family: $textFont;
        }
      }
    }
  }
}

@media screen and(max-width: 640px) {
  .home {
    display: block !important;
//display: none !important;
    .wel {
      .welcome {
        display: grid !important;
        grid-template-areas:
          " a a a"
        "b b b";

        .welcome_info {
          width: 100%;
          margin: 0 auto;
          padding: 0 !important;
          text-align: center !important;
          justify-content: center !important;
          align-items: center !important;

          .welcome_btn {
            width: 100%;

            a {
              padding: 12px !important;
            }
          }
        }

        .welcome_img {
          width: 100% !important;
          grid-area: a;
          margin: 0 auto;

          img {

          }
        }
      }
    }

    .skills-b {
      width: 90%;
    }

    .introduction-b {
      display: grid !important;
      //overflow: hidden !important;
      width: 100% !important;

      .intro-section {
        display: grid !important;
        grid-template-columns: 1fr;
        width: 100% !important;

        .intro-img {
          width: 100% !important;

          img {
            max-width: 100%;
            margin-top: 0 !important;
            width: 400px !important;
          }
        }

        .intro-text {
          color: $alt-bg;
          padding: 20px;
          width: 100% !important;
          margin-top: 0 !important;
          text-align: start;

          .textHeading {
            h1 {
              font-family: 'Poppins', sans-serif;
              font-size: 30px !important;
              font-weight: bolder;
            }
          }
        }
      }
    }

    .projects-b {
      width: 90%;
      grid-template-columns: 1fr !important;
      margin-bottom: 5vh !important;

    }
  }

}

@media only screen and(min-device-width: 375px) and (max-device-width: 667px) {

  .home {
    display: block !important;

    .wel {
      .welcome {
        display: grid !important;
        grid-template-areas:
          " a a a"
        "b b b";

        .welcome_info {
          width: 100%;
          margin: 0 auto;

          .welcome_btn {
            a {
              padding: 12px !important;
            }
          }
        }

        .welcome_img {
          width: 100% !important;
          grid-area: a;
          margin: 0 auto;

          img {

          }
        }
      }
    }

    .skills-b {
      width: 90%;
    }

    .introduction-b {

      //overflow: hidden !important;
      width: 100% !important;

      .intro-section {
        display: grid !important;
        width: 100% !important;

        .intro-img {
          width: 100% !important;

          img {
            max-width: 100%;
            margin-top: 0 !important;
            width: 400px !important;
          }
        }

        .intro-text {
          color: $alt-bg;
          padding: 20px;
          width: 100% !important;
          margin-top: 0 !important;
          text-align: start;

          .textHeading {
            h1 {
              font-family: 'Poppins', sans-serif;
              font-size: 30px !important;
              font-weight: bolder;
            }
          }
        }
      }
    }

    .projects-b {
      width: 90%;
      grid-template-columns: 1fr !important;
      margin-bottom: 5vh !important;

    }
  }

}

@media only screen and (min-device-width: 411px) and (max-device-width: 823px) {
  .home {
    display: block !important;

    .wel {
      text-align: center;
      justify-content: center;
      align-items: center;

      .welcome {
        display: grid !important;
        grid-template-columns: 1fr;
        grid-template-areas:
          " a a a"
        "b b b";

        .welcome_info {
          width: 100%;
          margin: 0 auto;

          .welcome_btn {
            a {
              padding: 15px !important;
            }
          }
        }

        .welcome_img {
          width: 100% !important;
          grid-area: a;
          margin: 0 auto;

          img {

          }
        }
      }
    }

    .skills-b {
      width: 90%;
    }

    .introduction-b {
      display: grid !important;
      //overflow: hidden !important;
      width: 100% !important;

      .intro-section {
        display: grid !important;
        width: 100% !important;

        .intro-img {
          width: 100% !important;

          img {
            margin-top: 0 !important;
          }
        }

        .intro-text {
          color: $alt-bg;
          padding: 20px;
          width: 100% !important;
          margin-top: 0 !important;
          text-align: start;

          .textHeading {
            h1 {
              font-family: 'Poppins', sans-serif;
              font-size: 30px !important;
              font-weight: bolder;
            }
          }
        }
      }
    }

    .projects-b {

      grid-template-columns: 1fr !important;
      margin-bottom: 5vh !important;

    }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .home {
    .wel {
      padding-top: 8vh;
      padding-bottom: 5vh;

      .welcome {
        //display: grid !important;
        grid-template-areas:
          " a a a"
        "b b b";
        width: 100%;

        .welcome_info {
          width: 100% !important;
          margin: 0 auto;

          .welcome_btn {

            a {
              padding: 20px;
            }
          }
        }

        .welcome_img {
          width: 100% !important;
          grid-area: a;
          margin: 0 auto;

          img {

          }
        }
      }
    }

    .skills-b {
      width: 90%;
    }

    .introduction-b {

      width: 100% !important;

      .intro-section {
        display: grid !important;
        //display: none !important;
        .intro-img {
          width: 100% !important;

          img {
            margin-top: 0 !important;
          }
        }

        .intro-text {
          color: $alt-bg;
          padding: 20px;
          width: 100% !important;
          margin-top: 0 !important;
          text-align: start;

          .textHeading {
            h1 {
              font-family: 'Poppins', sans-serif;
              font-size: 30px !important;
              font-weight: bolder;
            }
          }
        }
      }
    }

    .projects-b {

      grid-template-columns: 1fr !important;
      margin-bottom: 5vh !important;

    }
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and(-webkit-min-device-pixel-ratio: 2) {
  .home {

  }
  .contactSection {
    margin: 0 auto;
    width: 100% !important;
    padding: 0 !important;

    .contactsContainer {
      padding: 20px;
      width: 100% !important;
      margin: 0 !important;

      #contactInfo {
        padding: 20px;
        margin: 0 !important;
        width: 100%;
      }

      .con {
        .letsWork {
          padding: 20px;
          margin: 10px;
        }
      }
    }
  }
  .projects-b {
    grid-template-columns: 1fr 1fr !important;
  }
  .contactSection-b {
    padding: 0 !important;
    margin: 0 !important;
  }
  .contactsContainer {
    width: 100% !important;
    grid-template-columns: 1fr !important;
    grid-template-areas:
            "a a a"
            "b b b";

    .letsWork {
      margin: 0 !important;
      padding: 20px !important;
      grid-area: a;
      width: 100% !important;
    }
  }
}
</style>