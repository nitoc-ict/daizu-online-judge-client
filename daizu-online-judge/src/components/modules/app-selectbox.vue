<!-- プルダウン選択のセレクトボックス -->
<template>
  <div id="app-selectbox">
    <div class="body-2 textcolor--text">{{ title }}</div>
    <v-select v-model="items" :item="items" single-line flat height="1.5rem" style="padding: 0;"></v-select>
  </div>
</template>

<script>
export default {
  name: "selectbox",
  props: {
    title: String
    // items: Array
  },
  data() {
    return {
      items: Array
    };
  }
};
</script>

