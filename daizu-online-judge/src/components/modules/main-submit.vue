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
    <SubmitButton buttonText="提出"/>
  </div>
</template>
<script>
import Selectbox from "./app-selectbox";
import SubmitButton from "./app-button";
export default {
  components: {
    Selectbox,
    SubmitButton
  }
};
</script>

