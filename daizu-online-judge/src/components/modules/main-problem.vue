<!-- 問題文表示ページ -->
<template>
  <div id="main-problem">
    <v-layout justify-start column fill-height>
      <Title problemTitle="eee" timeLimit="1" memoryLimit="256"/>
      <ProblemText/>
    </v-layout>
    <router-link to="/contests/welcomecontest/problem/submit" style="text-decoration: none;">
      <submitButton buttonText="解答を提出する"/>
    </router-link>
  </div>
</template>

<script>
import Title from "./app-problemTitle";
import ProblemText from "./app-problemText";
import submitButton from "./app-button.vue";

export default {
  components: {
    Title,
    ProblemText,
    submitButton
  }
};
</script>

