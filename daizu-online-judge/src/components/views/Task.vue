<template>
  <div id="task">
    <v-app>
      <v-content>
        <Task/>
      </v-content>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
import Task from "../modules/app-tasks";
export default {
  name: "task",
  components: {
    Task
  }
};
</script>

