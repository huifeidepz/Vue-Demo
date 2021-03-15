<template>
<div id="DataChart">
  <div >
    <el-radio v-model="ChartType" label="WordCloud">词云</el-radio>
    <el-radio v-model="ChartType" label="Time">用户活跃时间分布</el-radio>
    <el-radio v-model="ChartType" label="UserLevel">用户等级分布</el-radio>
    <el-radio v-model="ChartType" label="PosOrNeg">情绪值分布</el-radio>

  </div>
  <router-view  :key="ChartType"></router-view>
</div>
</template>

<script>

import route from "../route/route";

export default {
name: "Chart",
  router:route,
  data(){
  return{
    ChartType:"WordCloud",
  }
  },
  computed:{
  },watch:{
    ChartType:function (){
      this.$router.push('/Chart/'+this.ChartType+'/')

    },

  },methods:{
  //   ReflushChartData:function (){
  //     this.$store.commit("setReflushFlagTrue")
  //     console.log(this.$store.state.reflushFlag)
  // }
  }
}
</script>

<style scoped>
#DataChart{
  width: 600px;
  height: 600px;
  float: left;
  margin-left: 200px;
}
</style>