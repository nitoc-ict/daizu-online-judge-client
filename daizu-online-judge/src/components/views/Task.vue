<template>
  <div id="task">
    <v-app>
      <Header/>
      <v-content>
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
  name: "task",
  components: {
    Header,
    Footer
  }
};
</script>

