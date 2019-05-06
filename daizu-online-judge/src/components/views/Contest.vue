<template>
  <div id="contest">
    <v-app>
      <Header/>
      <v-content>
        <v-container>
          <Main contestTitle="ICT Welcome Contest 2019" contestDate="2019/05/09 16:30-18:00"/>
        </v-container>
      </v-content>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import Header from "../modules/app-header";
import Footer from "../modules/app-footer";
import Main from "../modules/main-contest";

export default {
  name: "contest",
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      contestTitle: "ICT Welcome Contest 2019"
    };
  }
};
</script>
