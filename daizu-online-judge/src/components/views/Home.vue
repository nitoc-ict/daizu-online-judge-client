<template>
  <div id="home">
    <v-app>
      <Header/>
      <v-container class="container align-start column fill-height">
        <Main/>
      </v-container>
      <Footer/>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../modules/app-header";
import Footer from "../modules/app-footer";
import Main from "../modules/main-home";

export default {
  name: "home",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>
