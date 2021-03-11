<template>
<div id="main">
<!--  <PosOrNeg :PostBarID="PostBarID"  ></PosOrNeg>-->
<!--  <UserLevel :PostBarID="PostBarID" ></UserLevel>-->
  <Test :PostBarID = "PostBarID"></Test>
</div>
</template>

<script>

// import PosOrNeg from "@/components/PosOrNeg";
import Store from '../store/store'
// import UserLevel from "@/components/UserLevel";
import Test from "@/components/test";

export default {
name: "main",
  components:{Test},
  store:Store,
  data(){
  return{

  }
  },
  computed:{
       PostBarID(){
         return this.$store.state.PostBarID
       }
  },watch:{

  }
}
</script>

<style scoped>

/*.test{*/
/*  display: inline-block;*/
/*  width: 400px;*/
/*  height: 300px;*/
/*}*/
</style>
