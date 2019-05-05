<template>
  <div id="about">
    <v-app>
      <Header/>
      <v-content>
        <v-container>
          <v-layout align-center justify-center row fill-height>
            <Main/>
          </v-layout>
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
import Main from "../modules/main-about";
import Footer from "../modules/app-footer";

export default {
  name: "about",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>
