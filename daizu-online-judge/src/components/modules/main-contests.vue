<template>
  <div id="main-contests">
    <v-content wrap>
      <v-container>
        <Lists/>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Lists from "./app-lists";

export default {
  name: "main-contests",
  components: {
    Lists
  }
};
</script>
