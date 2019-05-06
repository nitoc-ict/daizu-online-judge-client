<template>
  <div id="main-contests">
    <v-content wrap>
      <v-container>
        <!-- <Search/> -->
        <!-- <Table/> -->
        <Lists/>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// import Search from "./app-search";
// import Table from "./table-contests";
import Lists from "./app-lists";

export default {
  name: "main-contests",
  components: {
    // Search,
    // Table
    Lists
  }
};
</script>
