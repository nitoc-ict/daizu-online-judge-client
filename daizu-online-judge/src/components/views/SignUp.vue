<template>
  <div id="sign-up">
    <v-app>
      <SignUp/>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUp from "../modules/form-signup";

export default {
  name: "sign-up",
  components: {
    SignUp
  }
};
</script>

