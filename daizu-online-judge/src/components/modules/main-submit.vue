<!-- 提出ページ -->
<template>
  <div id="main-submit">
    <v-layout justify-start column fill-height>
      <div class="body-2 textcolor--text">{{ title }}</div>
      <v-select v-model="probrem" :items="probrems" label="問題名"></v-select>
      <v-select v-model="langage" :items="langages" label="言語"></v-select>
      <div class="body-2 textcolor--text">ソースコード</div>
      <v-textarea
        v-model="source"
        box
        name="inputSource"
        height="14rem"
        style="font-family: Consolas, 'Courier New', Courier, Monaco, monospace;"
      ></v-textarea>
    </v-layout>
    <!-- 提出ボタン -->
    <v-btn dark color="accent" @click.stop="dialog=true">提出</v-btn>
    <v-dialog v-model="dialog" max-width="320">
      <!-- ダイアログボックス -->
      <v-card>
        <v-card-title class="headline primary--text">提出完了</v-card-title>
        <v-card-text class="body-1 textcolor--text">提出状況タブで結果を確認してみましょう！</v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" @click="dialog=false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
// import Selectbox from "./app-selectbox";
// import SubmitButton from "./app-button";
// import Dialog from "./app-dialog";
export default {
  el: "#main-submit",
  components: {
    // Selectbox
    // SubmitButton
    // Dialog
  },
  data() {
    return {
      probrem: "",
      langage: "",
      source: "",
      dialog: false,
      probrems: ["hoge"],
      langages: ["c", "c++", "java", "python3"]
    };
  }
};
</script>

