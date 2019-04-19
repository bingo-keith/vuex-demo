<template>
  <div id="app">
    <router-view/>
    <FooterBar v-if="isShow"/>
  </div>
</template>

<script>
  import FooterBar from "./components/FooterBar";

  export default {
    name: 'App',
    components: {
      FooterBar,
    },
    data() {
      return {

      }
    },
    computed: {
      isShow() {
        this.$store.dispatch('hideFooter');
        console.log(this.$store.getters.isShow)
        return this.$store.getters.isShow;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
