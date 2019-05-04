<template>
  <div id="contests">
    <v-app>
      <Header/>
      <Footer/>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../modules/app-header";
import Footer from "../modules/app-footer";

export default {
  name: "contests",
  components: {
    Header,
    Footer
  }
};
</script>