<template>
  <div id="app-tasks">
    <div class="display-1 primary--text mt-5 mb-2">This is "{{ taskTitle }}"</div>
    <div
      class="subheading grey--text text--darken-1 mb-5"
    >時間制限: {{ timeLimit }}/メモリ制限: {{ memoryLimit }}</div>
  </div>
</template>

<script>
export default {
  props: {
    taskTitle: String,
    timeLimit: String,
    memoryLimit: String
  }
};
</script>

