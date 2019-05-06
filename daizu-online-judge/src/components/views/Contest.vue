<template>
  <div id="contest">
    <v-app>
      <Header/>
      <v-content>
        <v-container>
          <Main
            contestTitle="ICT Welcome Contest 2019"
            contestDate="2019/05/09 16:30-18:00"
            contestExplain="このコンテストは, 1 年生向けの初心者コンテストです.
            問題を解く際は, C 言語で解くことを推奨します.
            問題数は 6 問です. 配点は各問 100 点で, 満点は 600 点です.
            出題範囲はM教材のfor文程度までとします."
          />
        </v-container>
      </v-content>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import Header from "../modules/app-header";
import Footer from "../modules/app-footer";
import Main from "../modules/main-contest";

export default {
  name: "contest",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>
