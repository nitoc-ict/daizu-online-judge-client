<template>
  <div class="form-signup">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-5">
              <v-toolbar dark class="primary">
                <v-toolbar-title>Sign Up 😎✨</v-toolbar-title>
              </v-toolbar>
              <v-spacer></v-spacer>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="person"
                    v-model="name"
                    :rules="nameRules"
                    label="Your name"
                    type="text"
                    required
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="email"
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    required
                  ></v-text-field>
                  <div class="caption">
                    <router-link
                      to="/signin"
                      class="linkcolor--text pl-2"
                      style="text-decoration: none;"
                    >すでにアカウントをお持ちの方はこちら</router-link>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <DecisionButton buttonText="OK"/>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import DecisionButton from "./app-button.vue";
export default {
  name: "form-signup",
  components: {
    DecisionButton
  }
};
</script>
