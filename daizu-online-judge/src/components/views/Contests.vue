<template>
  <div id="contests">
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
// @ is an alias to /src
import Header from "../modules/app-header";
import Footer from "../modules/app-footer";
import Main from "../modules/main-contests";
export default {
  name: "contests",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>