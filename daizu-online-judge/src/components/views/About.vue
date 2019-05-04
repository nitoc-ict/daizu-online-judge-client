<template>
  <div id="about">
    <v-app>
      <Header/>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../modules/app-header";

export default {
  name: "about",
  components: {
    Header
  }
};
</script>
