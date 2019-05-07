<template>
  <div id="app-lists">
    <!-- table部 -->
    <v-data-table
      :headers="headers"
      :items="contestList"
      :search="search"
      :filter="filter"
      :class="elevation-5"
      rows-per-page-items
      rows-per-page-text
    >
      <template v-slot:items="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-left">{{ props.item.startDate }}</td>
        <td class="text-xs-left">{{ props.item.contestTime }}</td>
        <td class="text-xs-left">
          <router-link
            to="/contests/contest"
            class="linkcolor--text"
            style="text-decoration: none;"
          >参加する</router-link>
        </td>
        <v-spacer/>
      </template>
      <!-- もし検索できなかった場合に表示するエラー -->
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">"{{ search }}" を見つけることができませんでした.</v-alert>
      </template>
      <template v-slot:pageText="props">{{ props.pageStop }} / {{ props.itemsLength }}件表示</template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "app-lists",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "コンテスト名",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "開催日", sortable: false, value: "data" },
        { text: "時間", sortable: false, value: "time" },
        { text: "", sortable: false, value: "entry" }
      ],
      contestList: [],
    };
  },
  mounted() {
    this.$axios.get('http://127.0.0.1:8000/api/1.0/contests/')
    .then(response => {
      this.contestList = response.data.results;
    });
  }
};
</script>
