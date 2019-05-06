<template>
  <div id="app-card">
    <v-card class="py-2">
      <v-card-title primary-title>
        <h3 class="headline mb-0">{{contestName}}</h3>
      </v-card-title>

      <v-card-text>
        <div>開催日時：{{contestDate}}</div>
        <div>コンテスト時間：{{contestTime}}</div>
        <div>writer：{{contestWriter}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn flat class="accent--text">参加する！</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contestName: 'ICT Welcome Contest 2019',
      contestDate: '2019-05-09 16:00~',
      contestTime: '90min',
      contestWriter: 'Taichi Uchihara'
    }
  }
}
</script>
