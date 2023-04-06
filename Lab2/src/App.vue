<template>
<navBar v-if="!$route.meta.hideNavbar" ></navBar>
<router-view></router-view>
<!-- <componentA></componentA>
<hr>
<componentB></componentB> -->
</template>

<script>
import navBar from './components/Pages/Navbar.vue';
// import componentA from './components/report-component/componentA.vue';
// import componentB from './components/report-component/componentB.vue';

export default {
  name: 'App',
  components: {
    navBar,}
//   componentA,
// componentB  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
