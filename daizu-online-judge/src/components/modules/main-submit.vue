<!-- 提出ページ -->
<template>
  <div id="main-submit">
    <v-layout justify-start column fill-height>
      <Selectbox title="問題"/>
      <Selectbox title="言語"/>
      <div class="body-2 textcolor--text">ソースコード</div>
      <v-textarea box name="input-7-4" label></v-textarea>
    </v-layout>
    <submitButton buttonText="提出"/>
  </div>
</template>
<script>
import Selectbox from "./app-selectbox";
import submitButton from "./app-button";
export default {
  components: {
    Selectbox,
    submitButton
  }
};
</script>

