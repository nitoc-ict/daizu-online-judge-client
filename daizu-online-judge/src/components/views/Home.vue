<template>
  <div class="home">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../modules/app-header";
import Footer from "../modules/app-footer";

export default {
  name: "home",
  components: {
    Header,
    Footer
  }
};
</script>
