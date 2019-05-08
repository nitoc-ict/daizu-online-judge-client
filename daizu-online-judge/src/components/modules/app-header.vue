<template>
  <v-toolbar class="pa-1" light>
    <v-toolbar-title class="primary--text">
      <router-link to="/" id="logo-daizu" style="text-decoration: none;">daizu Online Judge</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="primary--text">
      <v-btn flat>
        <router-link to="/" style="text-decoration: none;">Home</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/about" style="text-decoration: none;">About</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/contests" style="text-decoration: none;">Contests</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/signin" style="text-decoration: none;">Sign in</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style>
#logo-daizu:hover {
  color: #00897b;
}
</style>


