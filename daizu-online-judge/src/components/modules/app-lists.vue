<template>
  <div id="app-lists">
    <!-- 検索部 -->
    <v-card class="elevation-0">
      <v-card-title>
        <v-spacer/>
        <v-text-field v-model="search" append-icon="search" label="検索" single-line hide-details></v-text-field>
      </v-card-title>
    </v-card>
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
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.date }}</td>
        <td class="text-xs-left">{{ props.item.time }}</td>
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
      contestList: [
        {
          name: "ICT Welcome Contest 2019",
          date: "2019/10/10",
          time: "13:00-14:00"
        },
        {
          name: "Hello world",
          date: "2019/11/12",
          time: "00:00:-00:00"
        },
        {
          name: "hoge contest",
          date: "2020/12/10",
          time: "16:00-18:00"
        }
      ]
    };
  }
};
</script>
