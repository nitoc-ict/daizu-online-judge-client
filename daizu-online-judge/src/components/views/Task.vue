<template>
  <div id="task">
    <v-app>
      <Header/>
      <v-content>
        <v-container>
          <Task taskTitle="A: Hello World!" timeLimit="1" memoryLimit="256" taskSentence="wawa"/>
        </v-container>
      </v-content>
      <Footer/>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
import Header from "../modules/app-header";
import Footer from "../modules/app-footer";
import Task from "../modules/app-tasks";
export default {
  name: "task",
  components: {
    Header,
    Task,
    Footer
  }
};
</script>

