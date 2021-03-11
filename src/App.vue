<template>
  <div id="app">
  <IndexHtml></IndexHtml>
<!--    <test></test>-->
  </div>
</template>

<script>


import IndexHtml from "@/components/IndexHtml";

// import test from "@/components/test";

export default {
  name: 'App',
  components: {
    IndexHtml
    // test
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
