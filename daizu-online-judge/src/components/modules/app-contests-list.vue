<template>
  <div id="app-lists">
    <!-- table部 -->
    <v-data-table
      :headers="headers"
      :items="isCloseContests"
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
      cnt: 0,
      contests: [],
      isActiveContests: [],
      isScheduleContests: [],
      isCloseContests: [],
    };
  },
  mounted() {
    this.$axios.get('http://127.0.0.1:8000/api/1.0/contests/')
    .then(response => {
      alert(1);
      this.cnt = response.data.count;
      this.contests = response.data.results;
    });
    for (var i = 0; i < this.cnt; i++) {
      if (this.contests.results[i].isActive == 1) {
        alert(2);
        this.isActiveContests.push(this.contests.results[i]);
      }
      else if(this.contests.result[i].isSchedule == 1) {
        alert(3);
        this.isScheduleContests.push(this.contests.results[i]);
      }
      else {
        alert(4);
        this.isCloseContests.push(this.contests.results[i]);
      }
    }
  }
};
</script>
