<!-- ダイアログボックス-->
<template>
  <div id="app-dialog">
    <v-dialog v-model="dialog" max-width="200">
      <v-card>
        <v-card-title class="headline primary--text">提出完了😈</v-card-title>
        <v-card-text class="body-1 textcolor--text">提出状況をみて結果を確認してみましょう！</v-card-text>
        <v-spacer/>
        <v-card-actions>
          <v-btn color="primary" @click="dialog=false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
