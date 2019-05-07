<!-- 提出ページ -->
<template>
  <div id="submit">
    <v-app>
      <Header/>
      <v-content wrap>
        <v-container></v-container>
      </v-content>
      <Footer/>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
import Header from "../modules/app-header";
import Footer from "../modules/app-footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
