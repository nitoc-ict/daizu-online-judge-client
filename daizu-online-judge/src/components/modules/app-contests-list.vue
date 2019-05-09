<template>
  <div id="app-contests-lists">
    <!-- 検索部 -->
    <v-card class="elevation-0">
    <!--  <v-card-title>
        <v-spacer/>
        <v-text-field 
          v-model="search"
          append-icon="search" 
          label="検索" 
          single-line 
          hide-details
        ></v-text-field>
      </v-card-title>-->

    <!-- table部 -->
    <v-data-table
      :headers="headers"
      :items="contests"
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
            :to="'/contests/' + props.item.tag"
            class="linkcolor--text"
            style="text-decoration: none;"
          >
          参加する</router-link>
        </td>
        <v-spacer/>
      </template>
      <!-- もし検索できなかった場合に表示するエラー -->
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">"{{ search }}" を見つけることができませんでした.</v-alert>
      </template>
      <template v-slot:pageText="props">{{ props.pageStop }} / {{ props.itemsLength }}件表示</template>
    </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'app-contest-lists',
  props: ['contests'],
  data() {
    return {
      search: '',
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
    };
  }
  /* mounted() {
    this.$axios.get('http://127.0.0.1:8000/api/1.0/contests/')
    .then(response => {
      alert("1");
      this.cnt = response.data.count;
      this.contests = response.data.results;
    });
  } */
};
</script>
