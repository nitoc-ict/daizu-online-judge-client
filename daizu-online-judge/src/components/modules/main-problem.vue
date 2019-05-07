<!-- 問題文表示ページ -->
<template>
  <div id="main-problem">
    <Title problemTitle="eee" timeLimit="1" memoryLimit="256"/>
    <ProblemText/>
  </div>
</template>

<script>
import Title from "./app-problemTitle";
import ProblemText from "./app-problemText";
export default {
  components: {
    Title,
    ProblemText
  }
};
</script>

