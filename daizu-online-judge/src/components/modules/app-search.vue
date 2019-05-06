<template>
  <div id="app-search">
    <v-card class="elevation-0">
      <v-card-title>
        <v-spacer/>
        <v-text-field v-model="search" append-icon="search" label="検索" single-line hide-details></v-text-field>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    pageTitle: String
  }
};
</script>
