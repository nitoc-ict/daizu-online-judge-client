<!-- プルダウン選択のセレクトボックス -->
<template>
  <div id="app-selectbox">
    <div class="body-2 textcolor--text">{{ title }}</div>
    <v-select :items="items" label box></v-select>
  </div>
</template>

<script>
export default {
  name: "selectbox",
  props: {
    title: String
  },
  data() {
    return {
      items: ["A", "B", "C", "D", "E"]
    };
  }
};
</script>

