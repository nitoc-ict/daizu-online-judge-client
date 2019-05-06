<template>
  <div id="main-about">
    <!-- <div class="subheading textcolor--text">I'm sorry</div> -->
    <textarea v-model="formula" cols="30" rows="10"></textarea>
    <vue-mathjax :formula="formula"></vue-mathjax>
  </div>
</template>

<script>
import { VueMathjax } from "vue-mathjax";
export default {
  name: "main-about",
  components: {
    "vue-mathjax": VueMathjax
  },
  mounted() {
    VueMathjax.Hub.Queue(["Typeset", VueMathjax.Hub]);
  },
  data() {
    return {
      formula: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"
    };
  }
};
</script>
