<template>
  <div class="our-services">

    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/computer-and-man.png" alt="java">
      </div>
      <div class="services_desc">
        <h2>Website Development</h2>
        <h3>Modern fast, user-friendly and responsive website from scratch. Developed using
          modern web development technologies and frameworks.</h3>
        <br>
        <a href="" v-scroll-to="'#contactsContainer'">Find out more</a>
      </div>
    </div>
    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/maintenance.png" alt="java">
      </div>
      <div class="services_desc">
        <h2>Website Maintenance</h2>
        <h3>Do you want a partial or full website redesign?
          Do you have an idea, content, design or feature you want to
          push to your website? We are here for you.</h3>
        <br>
        <a href="" v-scroll-to="'#contactsContainer'">Find out more</a>
      </div>
    </div>
    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/domain-registration.png" alt="java">
      </div>
      <div class="services_desc">
        <h2>Domain Registration</h2>
        <h3>Domain Registration and hosting plan with industry leading hosting services.
          We will get your domain, SSL, private email, DNS and everything your websites needs to be alive.</h3>
        <br>
        <a href="" v-scroll-to="'#contactsContainer'">Find out more</a>
      </div>
    </div>
    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/seo-opt.png" alt="java">
      </div>
      <div class="services_desc">
        <h2>SEO Optimization</h2>
        <h3>
          We use best industry standards and practises to get your website highly ranked and increase in traffic.
          We promote your website to reach more customers.</h3>
        <br>
        <a href="" v-scroll-to="'#contactsContainer'">Find out more</a>
      </div>
    </div>
    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/insights.png" alt="java">
      </div>
      <div class="services_desc">
        <h2>Google Analytics</h2>
        <h3>We will analyze your website traffic. This data are transformed to a business model which
          will help you make smarter business decision,
          knowing what content to show on what section of your website.</h3>
        <br>
        <a href="" v-scroll-to="'#contactsContainer'">Find out more</a>
      </div>
    </div>
    <div class="services_con">
      <div class="services_img">
        <img src="../assets/Image/expenses.png" alt="java">
      </div>
      <div class="services_desc">
        <h2>Google Business</h2>
        <h3>Setting up your Business on Google Business is very important. This gives customer more instant and most
          important information about the your business.
        </h3>
        <br>
        <a href="" v-scroll-to="'#contactsContainer'">Find out more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card"
}
</script>
<style scoped lang="scss">
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";
@import url('https://fonts.googleapis.com/css2?family=Coda:wght@800&family=Poller+One&family=Poppins:wght@800&display=swap');

.our-services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2px;
  width: 80%;
  margin: 0 auto 20vh;

  .services_con {
    margin: 0 auto;
    text-align: center;
    width: 80%;
    //background:#f1f2f6;
    .services_img {
      text-align: center;
      img {
        width: 350px;
        max-width: 100%;
      }
    }
    .services_desc {
      font-family: 'poppins', cursive;

      h2 {
        color: #2f3542;
        font-family: 'Coda', cursive;
        font-size: 30px;
        padding: 10px;
      }

      h3 {
       font-weight: unset;
        line-height: 30px;
        font-size: 14px;
        opacity: 0.9;
        padding: 10px;
      }
      padding: 20px;
      text-align: start;
      margin: 10px auto;
      color: #747d8c;
      a {
        text-decoration: none;
        background: black;
        color: $alt-bg;
        padding: 15px;
        border-radius: 2rem;
        //margin: 20px;
        &:hover {
          background: white;
          color: black;
          border: 2px solid black;
        }
      }
    }
    &:hover {
      -webkit-box-shadow: 0px -1px 12px 7px rgba(255, 255, 255, 1.0);
      box-shadow: 0px -1px 12px 7px rgba(223, 228, 234, 1.0);
    }
  }
}
@media (max-width: 768px) {
  .our-services {
    width: 100%;
    margin: 0 auto 10vh !important;

    grid-template-columns: 1fr;

    .services_con {
      width: 100%;
    }

  }
}
@media only screen and (min-device-width: 772px) and (max-device-width: 1024px) {
  .our-services {
    width: 95%;
    grid-template-columns: 1fr  ;
    .services_con {
      padding: 10px;
      width: 100%;
    }

  }
}
@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and(-webkit-min-device-pixel-ratio: 2) {
  .our-services {
    width: 100%;
padding: 60px  !important;
    grid-template-columns: 1fr  1fr;

    .services_con {
      width: 100%;
    }

  }
}

</style>