<template>
  <div id="app-card">
    <!--
    <v-card v-for="contest in contests" :key="contest.id" class="py-2">
      <v-card-title primary-title>
        <h3 class="headline mb-0">{{contest.title}}</h3>
      </v-card-title>

      <v-card-text>
        <div>開催日時：{{contest.contest_date}}</div>
        <div>コンテスト時間：{{contest.contest_time}}</div>
        <div>writer：{{contest.writer}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn flat class="accent">参加する！</v-btn>
      </v-card-actions>
    </v-card>
  -->
    {{ contests }}
  </div>
</template>

<script>
export default {
  el: '#app-card',
  data() {
    return {
      contests: 'hoge'
    }
  },
  mounted() {
    alert(1);
    this.$axios.get('http://127.0.0.1:8000/api/1.0/contests/')
    .then(response => (this.contests = response));
    alert(this.contests);
  }
}
</script>
