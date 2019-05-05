
<template>
  <div id="sign-in">
    <v-app>
      <signinForm/>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import Footer from "../modules/app-footer";
import signinForm from "../modules/main-signin";

export default {
  name: "sign-in",
  components: {
    signinForm
  }
};
</script>