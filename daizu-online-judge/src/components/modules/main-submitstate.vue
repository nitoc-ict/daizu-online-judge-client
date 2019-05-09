<!-- 提出状況の詳細 -->
<template>
  <div id="main-submitstate">
    <!-- タイトル -->
    <div
      class="display-1 primary--text mt-5 mb-2 font-weight-medium"
      max-height="15rem"
    >提出 #{{ sourceID }}</div>
    <v-divider/>
    <!-- ソースコード -->
    <div class="body-2 font-weight-bold textcolor--text mb-1 mt-5">ソースコード</div>
    <v-card
      color="grey lighten-3"
      class="textcolor--text elevation-1"
      style="font-family: Consolas, 'Courier New', Courier, Monaco, monospace;"
    >
      <div class="body-1">{{ sourceCode }}</div>
    </v-card>
    <!-- 提出情報 タイトル -->
    <div class="body-2 font-weight-bold textcolor--text mb-1 mt-5">提出情報</div>
    <!-- テーブル部 -->
    <v-data-table :items="states" :headers="headers" class="elevation-1" hide-actions>
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.data }}</td>
      </template>
    </v-data-table>
    <!-- ワーニング -->
    <div class="body-2 font-weight-bold textcolor--text mb-1 mt-5">Warning</div>
    <v-card
      color="grey lighten-3"
      class="textcolor--text elevation-1"
      style="font-family: Consolas, 'Courier New', Courier, Monaco, monospace;"
    >
      <div class="body-1">{{ warningMsg }}</div>
    </v-card>

    <!-- コンパイルエラー -->
    <div class="body-2 font-weight-bold textcolor--text mb-1 mt-5">Compile Error</div>
    <v-card
      color="grey lighten-3"
      class="textcolor--text elevation-1"
      style="font-family: Consolas, 'Courier New', Courier, Monaco, monospace;"
    >
      <div class="body-1">{{ compileErrorMsg }}</div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "main-submitstate",
  el: "#main-submitstate",
  data() {
    return {
      sourceID: "001122",
      sourceCode: "#include<stdio.h>",
      warningMsg: "hoge hoge",
      compileErrorMsg: "huga huga",
      headers: [
        {
          text: "提出日時",
          align: "left",
          sortable: false
        },
        {
          text: "問題",
          sortable: false
        },
        {
          text: "ユーザ",
          sortable: false
        },
        {
          text: "言語",
          sortable: false
        },
        {
          text: "得点",
          sortable: false
        },
        {
          text: "コード長",
          sortable: false
        },
        {
          text: "結果",
          sortable: false
        },
        {
          text: "実行結果",
          sortable: false
        },
        {
          text: "メモリ",
          sortable: false
        },
        {
          text: "得点",
          sortable: false
        }
      ],
      states: [
        {
          // state: "提出日時",
          data: "2019-01-10 16:00:00"
        },
        {
          // state: "提出日時",
          data: "2019-01-10 16:00:00"
        }
      ]
    };
  }
};
</script>
