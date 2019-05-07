<template>
  <div id="app-tasks">
    <!-- 問題タイトル, 時間制限, メモリ制限 -->
    <div class="display-1 primary--text mt-5 mb-2 font-weight-medium">{{ taskTitle }}</div>
    <div
      class="subheading grey--text text--darken-1 mb-4"
    >時間制限: {{ timeLimit }} 秒/メモリ制限: {{ memoryLimit }} MB</div>
    <v-divider/>
    <!-- 問題文 -->
    <div class="body-1 textcolor--text">{{ taskSentence }}</div>
    <!-- 入力例 -->
  </div>
</template>

<script>
export default {
  props: {
    taskTitle: String,
    timeLimit: String,
    memoryLimit: String,
    taskSentence: String
  }
};
</script>

