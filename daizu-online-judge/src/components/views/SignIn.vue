
<template>
  <div id="sign-in">
    <v-app>
      <!-- <Footer/> -->
      <signinForm/>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import Footer from "../modules/app-footer";
import signinForm from "../modules/form-signin";

export default {
  name: "sign-in",
  components: {
    signinForm
  }
};
</script>