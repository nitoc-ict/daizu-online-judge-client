<template>
  <div id="main-home">
    <v-layout wrap>
      <v-flex xs12>
        <div class="font-weight-bold display-3">#ICT Welcome Contest 2019</div>
        <div class="subheading py-2">「ICTウェルカムコンテスト」を開催しています.</div>
        <div class="subheading py-2">皆様奮ってご参加くださいませ.</div>
        <EntryButton></EntryButton>
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