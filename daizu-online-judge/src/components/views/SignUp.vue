<template>
  <div id="sign-up">
    <v-app>
      <!-- <SignUp/> -->
      <Main/>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
// import SignUp from "../modules/form-signup";
import Main from "../modules/main-signup";

export default {
  name: "sign-up",
  components: {
    // SignUp
    Main
  }
};
</script>

