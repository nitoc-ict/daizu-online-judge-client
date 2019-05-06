<template>
  <div id="contests">
    <v-app>
      <Header/>
      <Table/>
      <Footer/>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../modules/app-header";
import Footer from "../modules/app-footer";
import Table from "../modules/table-contests";

export default {
  name: "contests",
  components: {
    Header,
    Table,
    Footer
  }
};
</script>