<template>
  <div id="app-button">
    <v-btn dark color="red">
      {{ buttonText }}
      <!-- <router-link :to="{path: {{ link }}}" style="color:#FAFAFA; text-decoration: none;">{{ buttonText }}</router-link> -->
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: String
    // link: String
  }
};
</script>

<style>
</style>

