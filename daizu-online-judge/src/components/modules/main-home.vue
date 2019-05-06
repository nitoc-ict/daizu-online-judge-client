<template>
  <div id="main-home">
    <v-layout wrap>
      <v-flex xs12 my-5>
        <!--
        <div class="font-weight-bold display-3 teal--text text--darken-1">#ICT Welcome Contest 2019</div>
        <div class="subheading py-2 textcolor--text">ICTウェルカムコンテストを開催しています.</div>
        <div class="subheading py-2 textcolor--text">皆様奮ってご参加くださいませ.</div>
        -->
        <div class="font-weight-bold display-3 text-lg-center teal--text text--darken-1">Welcome to "daizu Online Judge"</div>
        <div class="subheading py-2 textcolor--text">まだ見ぬ世界を, "daizu Online Judge"で.</div>
        
        <v-layout align-center row>
          <router-link to="/signin" style="text-decoration: none;">
            <EntryButton buttonText="参加する"/>
          </router-link>
          <div class="subheading">
            <router-link
              to="/signup"
              class="linkcolor--text pl-2"
              style="text-decoration: none;"
            >アカウント登録はこちら</router-link>
          </div>
        </v-layout>
        <v-layout>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12 md6>
        <div class="font-weight-bold display-2 text-lg-center teal--text text--darken-1">開催中のコンテスト</div>
        <Card/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import EntryButton from "./app-button";
import Card from "./app-card";
export default {
  name: "main-home",
  components: {
    EntryButton,
    Card
  }
};
</script>