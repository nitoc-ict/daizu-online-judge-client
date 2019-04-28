<template>
  <div style="position: relative;">
    <v-toolbar absolute color="grey lighten-5" light>
      <v-toolbar-title style="color: #00897B;">daizu Online Judge</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/about">About</router-link>
        </v-btn>
        <v-btn flat>Contests</v-btn>
        <v-btn flat>Sign in</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
