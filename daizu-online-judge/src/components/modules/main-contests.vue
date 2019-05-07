<template>
  <div id="main-contests">
    <!-- 検索部 -->
    <v-card class="elevation-0">
      <v-card-title>
        <v-spacer/>
        <v-text-field v-model="search" append-icon="search" label="検索" single-line hide-details></v-text-field>
      </v-card-title>
    </v-card>

    <!-- タブ -->
    <v-tabs v-model="tab" color="white lighten-5">
      <v-tabs-slider color="accent"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      <!-- 開催中 -->
      <v-tab-item>
        <v-card flat>
          <Lists />
        </v-card>
      </v-tab-item>
      <!-- 開催予定 -->
      <v-tab-item>
        <v-card flat>
          <Lists/>
        </v-card>
      </v-tab-item>
      <!-- 終了後 -->
      <v-tab-item>
        <v-card flat>
          <Lists/>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Lists from "./app-contests-list";

export default {
  name: "main-contests",
  components: {
    Lists
  },
  data() {
    return {
      tab: null,
      items: ["開催中", "開催予定", "終了後"],
    }
  }
};
</script>
