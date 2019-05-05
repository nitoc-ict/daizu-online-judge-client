
<template>
  <div id="sign-in">
    <v-app>
      <Footer/>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../modules/app-footer";

export default {
  name: "login",
  components: {
    Footer
  }
};
</script>