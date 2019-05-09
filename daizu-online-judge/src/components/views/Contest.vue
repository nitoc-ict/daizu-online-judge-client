<template>
  <div id="contest">
    <v-app>
      <Header/>
      <v-content>
        <v-container>
          <Main/>
        </v-container>
      </v-content>
      <Footer/>
    </v-app>
    <router-view/>
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
};
</script>
