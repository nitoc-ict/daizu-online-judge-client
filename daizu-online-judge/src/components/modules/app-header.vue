<template>
  <v-toolbar class="pa-1" light>
    <v-toolbar-title class="primary--text">daizu Online Judge</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items style>
      <v-btn flat>
        <router-link to="/" style="color: #00897B;text-decoration: none;">Home</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/about" style="color: #00897B;text-decoration: none;">About</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/contests" style="color: #00897B;text-decoration: none;">Contests</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/signin" style="color: #00897B;text-decoration: none;">Sign in</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>
