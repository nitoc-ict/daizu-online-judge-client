<template>
  <div id="main-contest">
    <!-- コンテストのタイトル -->
    <div class="display-2 font-weight-medium primary--text mt-2 mb-4">{{ contestTitle }}</div>
    <!-- タブ -->
    <v-tabs v-model="tab" color="grey lighten-5">
      <v-tabs-slider color="accent"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      <!-- トップ -->
      <v-tab-item>
        <v-card flat color="background">
          <div class="display-1 primary--text mt-5 mb-2">This is "{{ contestTitle }}"</div>
          <div class="subheading grey--text text--darken-1 mb-5">{{ contestDate }}</div>
          <div class="body-1 textcolor--text">{{ contestExplain }}</div>
        </v-card>
      </v-tab-item>
      <!-- 問題 -->
      <v-tab-item>
        <v-card flat color="background">
          <taskList/>
          <router-link to="/contests/welcomecontest/problem">test problem page</router-link>
        </v-card>
      </v-tab-item>
      <!-- 提出 -->
      <v-tab-item>
        <v-card flat color="background" class="mt-5">
          <Submit/>
        </v-card>
      </v-tab-item>
      <!-- 提出状況 -->
      <v-tab-item>
        <v-card flat color="background">
          <taskList/>
          <router-link to="/contests/welcomecontest/submitstate">test submitstate page</router-link>
        </v-card>
      </v-tab-item>
      <!-- ランキング -->
      <v-tab-item>
        <v-card flat color="background">
          <taskList/>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import taskList from "../modules/app-lists";
import Submit from "./main-submit";
export default {
  name: "main-contest",
  components: {
    taskList,
    Submit
  },
  data() {
    return {
      tab: null,
      items: ["トップ", "問題", "提出", "提出状況", "ランキング"]
    };
  },
  props: {
    contestTitle: String,
    contestDate: String,
    contestExplain: String
  }
};
</script>
