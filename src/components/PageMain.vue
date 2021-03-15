<template>
<div id="main">
  <DataChart></DataChart>
  <DataPanel ></DataPanel>
  <DataPanel2 ></DataPanel2>

</div>
</template>

<script>

import Store from '../store/store'
import DataPanel from '../components/DataPanel'
import DataPanel2 from '../components/DataPanel2'
//
import DataChart from "../components/DataChart";
// import test from '../components/test'
// import Time from '../components/Time'
export default {
name: "main",
  components:{DataChart ,DataPanel,DataPanel2},
  store:Store,
  data(){
  return{

  }
  },
  computed:{

  }
}
</script>

<style scoped>
</style>
