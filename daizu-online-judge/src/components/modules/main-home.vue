<template>
  <div id="main-home">
    <v-layout wrap>
      <v-flex xs12>
        <div class="font-weight-bold display-3">#ICT Welcome Contest 2019</div>
        <div class="subheading py-2">ICTウェルカムコンテストを開催しています.</div>
        <div class="subheading py-2">皆様奮ってご参加くださいませ.</div>
        <v-layout align-center row>
          <router-link to="/login" style="text-decoration: none;">
            <EntryButton buttonText="参加する"/>
          </router-link>
          <div class="subheading">
            <router-link to="/" style="text-decoration: none;">アカウント登録はこちら</router-link>
          </div>
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