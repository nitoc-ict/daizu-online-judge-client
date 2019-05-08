<template>
  <div id="main-contests">
    <!-- タブ -->
    <v-tabs v-model="tab" color="white lighten-5">
      <v-tabs-slider color="accent"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      <!-- 開催中 -->
      <v-tab-item>
        <v-card flat>
          <Lists :contests=activeContests />
        </v-card>
      </v-tab-item>
      <!-- 開催予定 -->
      <v-tab-item>
        <v-card flat>
          <Lists :contests=scheduleContests />
        </v-card>
      </v-tab-item>
      <!-- 終了後 -->
      <v-tab-item>
        <v-card flat>
          <Lists :contests=endContests />
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
      cnt: 0,
      contests: [],
      activeContests: [],
      scheduleContests: [],
      endContests: []
    }
  },
  mounted() {
    this.$axios.get('http://127.0.0.1:8000/api/1.0/contests/')
    .then(response => {
      this.cnt = response.data.count;
      this.contests = response.data.results;

      for (var i = 0; i < this.cnt; i++) {
        if (this.contests[i].isActive == true) {
          this.activeContests.push(this.contests[i]);
        }
        else if (this.contests[i].isSchedule == true){
          this.scheduleContests.push(this.contests[i])
        }
        else {
          this.endContests.push(this.contests[i])
        }
      }
    });
  }
};
</script>
