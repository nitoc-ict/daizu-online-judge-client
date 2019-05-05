<template>
  <div class="main-signin">
    <v-content wrap>
      <v-container>
        <v-layout align-center justify-center column>
          <div class="display-2 font-weight-medium primary--text ma-3">Sign in to your account!</div>
        </v-layout>
        <SigninForm/>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import SigninForm from "./form-signin";

export default {
  name: "main-signup",
  components: {
    SigninForm
  }
};
</script>
