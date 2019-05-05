<template>
  <div id="sign-up">
    <v-app>
      <Header/>
      <v-container></v-container>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../modules/app-header";
import Footer from "../modules/app-footer";

export default {
  name: "sign-up",
  components: {
    Header,
    Footer
  }
};
</script>

