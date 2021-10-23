<template>
  <div class="mainSkill">
    <div class="skillSet" id="skillSet">

      <div class="skillSection1">
      </div>
      <div class="skillSection2" data-aos="zoom-in-right">
        <div class="skill " v-for="(skills, index) in skillSet" :key="skills[index]">
          <h4>{{ skills.name }} </h4>
          <p v-html="skills.skillText">
            {{ skills.skillText }}
          </p>
        </div>
      </div>
    </div>

    <div class="skillCont">
      <div class="search-input" style="justify-content:center; text-align:center;">
        <div class="container">
          <input placeholder='Search...' class='js-search' type="text" v-model="userSearch" id="userSearch">
          <span class="clearFilters">
          <img src="../assets/Image/cancel.svg" width="40" v-on:click="restFilter" style="width:30px; " alt="Cancel"
               id="cancelIcon"/>
        </span>
        </div>
      </div>

      <div class="skillDesc">
        <div class="viewSkills">
          <div class="skillDetails" v-for="skillPage in filteredGallery" :key="skillPage[0]" data-aos="fade-up"
               data-aos-duration="2000">
            <img :src="skillPage.image" alt="skills_image">
            <h4>{{ skillPage.tittle }}</h4>
            <p v-html="skillPage.description">{{ skillPage.description }}</p>
            <a :href="skillPage.link" target="_blank" class="button1" v-if="skillPage.link">View Live</a>
            <a :href="skillPage.github" target="_blank" class="button2" v-if="skillPage.github">Code</a>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      filterSet: " ",
      filter: ' ',
      userSearch: '',
      bgColor: this.generateRandomColors(),
      skillSet: [

        {
          name: "Programming / Web",
          skillText: "I use Java, PHP, VUE JS, Javascript, HTML, CSS, SCSS, Boostrap, Node js to develop and maintain Web applications, RESTFUL API,  and SPA according to WCAG and WET standards. I have used Servlet, JPA, CDI, Hibernate, MVC design pattern, Java EE annotations, and CDI, Jest, JUnit to develop, debug, and deploy web applications." +
              "<br>" +


              "I am skillful in creating" +
              " responsive websites and SPAs with modern technologies and frameworks " +
              "I use web asset bundlers like Webpack and package managers like " +
              " NPM and YARN to manage and maintain project dependencies"
        },
        {
          name: "Business Reporting",
          skillText: "I use IBM Cognos Analytics Reporting Studio and Framework Manager to create reports,  dashboards, visualization, and exploration widgets. I also use various visualization widgets such as Area, Crosstab, Radial, Maps, etc. to analyze data which helps clients in making better business decisions.  " +
              "<br>" +

              "I use different stages in IBM Datastage Application to perform ETL on datasets.  " +
              "I write SQL queries, perform low-level SQL operations against the database. " +
              "<br>" +

              "I communicate with clients, data providers, and the database team to discuss the development and final delivery of projects. I develop packages and reports, following business requirements."
        },
        {
          name: "Database",
          skillText: " I have solid years of experience using several database engines, both SQL and NoSQL databases." +
              "I am very comfortable creating DDL, ERD, store procedures, indexes, and connecting " +
              "front-end applications to the database." +
              " I also perform database backup and recovery, database following business requirements and practice."
        },

        {
          name: "Mobile Application Development",
          skillText: "I have developed a couple of android applications using Java, Android Studio IDE, several other technologies and libraries like Volley for making API calls, " +
              "Material Design theme for better UI experience, and Picasso for Media management. " +
              "<br>" +
              "These applications connect to a database. User data is persisted into the database. Users can create Account, Sign in, and Sign out functionality.",
        },
        {
          name: "Google Analytics",
          skillText: "Over the years working as a Web developer, I have gained a solid knowledge of using Google " +
              "Analytics to analyze website data and boost online performance." +
              "<br>" +
              " I am knowledgeable using Google Analytics tool to track website visits, pages users visited, the devices they used to access the website, how long they stayed on each page, their location, how they interact, and overall performance. Website data are analyzed to provide more engaging content to the user"
        },
        {
          name: "SEO Management",
          skillText: "Search Engine Optimization is key when it comes to website development. " +
              "I use a couple of different tools and logic to increase website traffic through SEO. Some of which include using" +
              " relevant keywords for search indexing, image geo-tagging." +
              "I use Google Console to crawl and index all pages on a website. This process provides more information about the website to " +
              "google." +
              "<br> " +
              "I also set up Google my business for clients' to ensure smooth business delivery and better communication."

        },
      ],
      skillDec: [
        {
          skillName: "Database",
          tittle: "SQL",
          description: "" +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Database</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Nateeza</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Msqlwork</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Oracle</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>PostgreSQL</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>MongoDB</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>ERD</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>GraphQL</span> ",
          image: require("../assets/Image/idrisapp.png"),
          github: "https://github.com/lanreoreyomi/SQLite-Database"

        },
        {
          skillName: "Programming Web",
          tittle: "PHP ",
          description: "" +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Web</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Programming</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>PHP</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Javascript</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>PHPMyAdmin</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>PostgreSQL</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring Boot</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring Framework</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Node Js</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Java</span> ",

          image: require("../assets/Image/nikkihairstudio.png"),
          github: "https://github.com/lanreoreyomi/Resturant",
        },
        {
          skillName: "Programming",
          tittle: "Node Js",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Web</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Programming</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Nodejs</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Javascript</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>SQL</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Backend</span> ",
          image: require("../assets/Image/swfsolutions.png"),
          github: "https://github.com/lanreoreyomi/CovidCases",

        },
        {
          skillName: "Programming",
          tittle: "Vue Js",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Web</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Programming</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Nodejs</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Vuetify</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Javascript</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>VueJs</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>SQL</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>VueRouter</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>FrontEnd</span> ",
          image: require("../assets/Image/Kola.png"),
          github: "https://github.com/lanreoreyomi/dementiacare",
          link: "https://www.diversifieddementiacare.com",

        },
        {
          skillName: "Business Reporting",
          tittle: "Business Reporting",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Business Intelligence</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Business Reporting</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Data Warehouse</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Database</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Star Schema</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Cognos</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Data Analysis</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Business Analysis</span> ",
          image: require("../assets/Image/triviaapp.png"),
        },
        {
          skillName: "Android Dev",
          tittle: "Android",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Android</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Programming</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Data Warehouse</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Java</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Material Design</span> " +
               "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Mobile Application</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Picasso</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>SQLiteDatabase</span> ",
          image: require("../assets/Image/tripvault.png"),
          github: "https://github.com/lanreoreyomi/TripVault",

        },
        {
          skillName: "Programming",
          tittle: "Javascript",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Web</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Programming</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Javascript</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>ES5</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>ES6</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>WCAG</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Front End</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>NPM</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Yarn</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Babel</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Webpack</span> ",
          image: require("../assets/Image/Jaavascriptgame.png"),
          github: "https://github.com/lanreoreyomi/Budgety",
          link: "https://mybudgetyapp.netlify.app/"

        },
        {
          skillName: "Programming",
          tittle: "Java",

          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Spring Framework</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Apache Tomcat</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Payara</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Hibernate</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>myBatis</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Java 8</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Servlet</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>RESTApi</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Selenuim</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Microservices</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>J Unit</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Mockito</span> ",
          image: require("../assets/Image/swfsolutions.png"),
          github: "https://github.com/lanreoreyomi/cloudstorage",

        },
        {
          skillName: "Build Tools",
          tittle: "Version Control/ Build Tools",
          description:
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Eclipse IDE</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Intellij IDE</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Git</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>CI/CD</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Kubernetes</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Splunk</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>Servlet</span> " +
              "<span style='border-radius: 6px; padding:5px; background-color:#dcdde1;'>DevOps</span> " ,
           image: require("../assets/Image/planetsoccer.png"),

        }

      ],

    }

  },
  methods: {

    getUserSearch(txt) {
      this.filterSet = txt.split(" ");
      this.userSearch = this.filterSet[0];


    },
    restFilter() {
      this.userSearch = '';

    },
    generateRandomColors() {
      var num = Math.floor(Math.random() * 10 + 1);
      var colorCodes = ["#ffc0eb", "#25CCF7", "#D980FA", "#148893", "#D6A2E8", "#323264", "#FA3232", "#FD7272", "#6D214F", "#f6b93b"];
      return colorCodes[num];
    }
  },
  created() {
    this.generateRandomColors();
    console.log(this.bgColor);
  },
  computed: {
    filteredGallery() {
      return this.skillDec.filter(skills => {
        return (skills.tittle.match(this.userSearch) || skills.description.match(this.userSearch))

      });
    }
  }

}
</script>

<style scoped lang="scss">
@import "src/assets/Styles/Buttons";
@import "src/assets/Styles/colors";

* {
  box-sizing: border-box;
}

.mainSkill {

  .skillSet {
    z-index: 999999;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .skillSection1 {
      background: $alt-bg;
      clip-path: polygon(0 0, 94.6% 0, 3% 100%, 0% 100%);
    }

    .skillSection2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      margin: 10px;
      grid-column-start: 2;
      grid-column-end: 5;

    }

    .skill {
      background: transparent;
      //border: 2px solid $alt-bg;
      border-radius: 1rem;
      cursor: pointer;
      padding: 20px;
      height: auto;

      h4 {
        text-align: center;
        font-family: $headerFont2;
        font-size: 30px;
        font-weight: bold;
        padding: 8px;
        margin: 0 !important;
      }

      p {
        padding: 5px;
        margin: 0;
        font-family: $textFont;
        font-weight: normal;
        color: #576574;

      }

      &:hover {
        transition: all 0.7s ease 0s;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    }


  }

  .skillCont {
    .search-input {
      position: relative;
      margin-top: 40px;

      .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;

        input[type=text] {
          @include inputTextField();
          background: #F1F2F6;;
        }

        #cancelIcon {
          position: relative;
          left: -37px;
          color: #8233C5;
          width: 30px;
          top: 5px;

        }
      }

    }

    .skillDesc {
      .viewSkills {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 2px;
        grid-gap: 20px;

        .skillDetails {
          position: relative;
          border-radius: 2em;
          text-align: center;
          padding: 20px;
          max-width: 100%;

          img {
            max-width: 100%;
            height: auto;
          }

          h4 {
            font-family: $headerFont2;
            font-size: 30px;
            padding: 0;
            margin: 0;

          }

          p {
            color: $textColor;
            padding: 20px;
            margin: 0 auto;
            display: block;
            font-family: $textFont;

          }


          .button1 {
            display: none;
            @include Button();
            position: absolute;
            cursor: pointer;
            top: 150px;
            z-index: 1;
            left: 50px;
            padding: 5px;
            color: $headerColor;
            background: $textHighlight;

            &:hover {
              background: lighten($textHighlight, 10%);
            }
          }

          .button2 {
            display: none;
            position: absolute;
            top: 150px;
            padding: 5px !important;
            @include Button();
            background: white;
            color: $headerColor;

            &:hover {
              &:hover {
                background: darken(white, 10%);
              }
            }
          }

          &:hover {
            img {
              filter: blur(2px);
            }

            a {
              z-index: 1;
              display: unset;

            }
          }
        }
      }
    }
  }

  .clearFilters {
    text-align: end;

    img {
      cursor: pointer;
    }
  }
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mainSkill {

    .skillSet {

      grid-template-columns: 1fr;
      grid-template-areas: "a a a"
            "b b b";

      .skillSection1 {
        grid-area: a;
        background: $alt-bg;
        clip-path: polygon(0 0, 94.6% 0, 3% 100%, 0% 100%);
      }

      .skillSection2 {
        grid-template-columns: 1fr;
      }
    }

    .skillCont {
      .search-input {
        position: relative;

        input[type="text"] {
          width: 90%;

        }

        img {
          width: 40px;

          cursor: pointer;
        }
      }

      .skillDesc {

        .viewSkills {
          display: grid;
          grid-template-columns: 1fr;

          h4 {
            font-family: $headerFont2;
            font-size: 25px !important;
            font-weight: bolder;


          }

          .skillDetails {
            //overflow: auto;
            width: unset;

            p {
              overflow: auto;
              padding: 5px;
            }

            padding: 0;

            h4 {
              font-size: 30px;
            }

            img {
              padding: 0;
              margin: 0;
              width: 400px;
            }
          }
        }
      }
    }
  }


}

@media (max-width: 768px) {
  .mainSkill {

    .skillSet {
      grid-template-columns: 1fr;
      grid-template-areas: "a a a"
            "b b b";

      .skillSection1 {
        grid-area: a;
        background: $alt-bg;
        clip-path: polygon(0 0, 94.6% 0, 3% 100%, 0% 100%);
      }

      .skillSection2 {
        grid-template-columns: 1fr;
      }
    }

    .skillCont {
      .search-input {
        position: relative;

        input[type="text"] {
          width: 90%;

        }

        img {
          width: 40px;

          cursor: pointer;
        }
      }

      .skillDesc {

        .viewSkills {
          display: grid;
          grid-template-columns: 1fr;

          h4 {
            font-family: $headerFont2;
            font-size: 30px;


          }

          .skillDetails {
            //overflow: auto;
            width: unset;

            p {
              overflow: auto;
              padding: 5px;
            }

            padding: 0;

            h4 {
              font-size: 30px;
            }

            img {
              padding: 0;
              margin: 0;
              width: 400px;
            }
          }
        }
      }
    }
  }

}


@media only screen and (min-device-width: 772px) and (max-device-width: 1024px) {
  .mainSkill {
    .skillCont {
      .skillDesc {

        .viewSkills {
          display: grid;
          grid-template-columns: 1fr 1fr !important;

        }
      }
    }
  }
}

</style>