<template>
  <div id="main-home">
    <v-layout wrap>
      <v-flex xs12>
        <!--
        <div class="font-weight-bold display-3 teal--text text--darken-1">#ICT Welcome Contest 2019</div>
        <div class="subheading py-2 textcolor--text">ICTウェルカムコンテストを開催しています.</div>
        <div class="subheading py-2 textcolor--text">皆様奮ってご参加くださいませ.</div>
        -->
        <div class="font-weight-bold display-3 teal--text text--darken-1">Welcome to "daizu Online Judge"</div>
        
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
          <div class="textcolor--text">testest</div>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import EntryButton from "./app-button";
export default {
  name: "main-home",
  components: {
    EntryButton
  }
};
</script>