<!-- 提出ページ -->
<template>
  <div id="main-submit">
    <v-layout justify-start column fill-height>
      <Selectbox title="問題"/>
      <Selectbox title="言語"/>
      <div class="body-2 textcolor--text">ソースコード</div>
      <v-textarea
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
import Selectbox from "./app-selectbox";
// import SubmitButton from "./app-button";
// import Dialog from "./app-dialog";
export default {
  components: {
    Selectbox
    // SubmitButton
    // Dialog
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

