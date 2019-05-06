<template>
  <div id="main-contest">
    <!-- コンテストのタイトル, 日時など -->
    <div class="subheading grey--text text--darken-1 mt-2 mb-2">{{ contestDate }}</div>
    <div class="display-2 font-weight-medium primary--text mt-2 mb-4">{{ contestTitle }}</div>
    <v-tabs v-model="tab" color="grey lighten-5">
      <v-tabs-slider color="accent"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: "main-contest",
  data() {
    return {
      tab: null,
      items: ["トップ", "問題", "提出", "提出状況", "ランキング"]
    };
  },
  props: {
    contestTitle: String,
    contestDate: String
  }
};
</script>

