<template>
  <div id="submit-state">
    <v-app>
      <Header/>
      <v-content wrap>
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
import Main from "../modules/main-submitstate";
export default {
  components: {
    Header,
    Main,
    Footer
  }
};
</script>
