<template>
  <div id="app-card">
    <v-card class="py-2">
      <v-card-title primary-title>
        <h3 class="headline mb-0">{{ contests.results[0].title }}</h3>
      </v-card-title>

      <v-card-text>
        <div>開催日時：{{ contests.results[0].startDate }}</div>
        <div>コンテスト時間：{{ contests.results[0].contestTime }}</div>
        <div>writer：{{ contests.results[0].writer }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn flat class="accent">参加登録</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  el: '#app-card',
  data() {
    return {
      contests: []
    }
  },
  mounted() {
    this.$axios.get('http://127.0.0.1:8000/api/1.0/contests/')
    .then(response => {
      this.contests = response.data
    });
  }
}
</script>
