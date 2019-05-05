<template>
  <div class="main-signup">
    <v-content wrap>
      <v-container>
        <v-layout align-center justify-center column>
          <div
            class="display-2 font-weight-medium primary--text ma-3"
          >Welcome to daizu Online Judge!</div>
        </v-layout>
        <SignupForm/>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import SignupForm from "./form-signup";

export default {
  name: "main-signup",
  components: {
    SignupForm
  }
};
</script>
