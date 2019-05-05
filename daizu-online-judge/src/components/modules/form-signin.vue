
<template>
  <div class="form-signup">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5>
        <v-card class="elevation-5">
          <v-toolbar dark class="primary">
            <v-toolbar-title>Sign In 😊💕</v-toolbar-title>
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
                prepend-icon="lock"
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <div class="caption">
                <router-link
                  to="/signup"
                  class="linkcolor--text pl-2"
                  style="text-decoration: none;"
                >アカウントをお持ちでない方はこちら</router-link>
                <v-spacer></v-spacer>
                <router-link
                  to="/"
                  class="linkcolor--text pl-2"
                  style="text-decoration: none;"
                >パスワード, またはアカウント名を忘れた方はこちら</router-link>
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
  </div>
</template>

<script>
import DecisionButton from "./app-button.vue";
export default {
  name: "form-signup",
  components: {
    DecisionButton
  },
  data: () => ({
    valid: true,
    name: "",
    // 制約
    nameRules: [
      v => !!v || "あなたの名前を入力してください"
      // 名前をアルファベットと数字のみにする
      // n文字制約
    ],
    passwordRules: [
      v => !!v || "パスワードを入力してください"
      // パスワードをアルファベットと数字のみにする
    ]
  })
};
</script>
