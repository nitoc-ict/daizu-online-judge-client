<template>
  <div style="position: relative;">
    <v-toolbar class="pa-1" absolute color="grey lighten-5" light>
      <v-toolbar-title style="color: #00897B;">daizu Online Judge</v-toolbar-title>
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
        <v-btn flat>Sign in</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
