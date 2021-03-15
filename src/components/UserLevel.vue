<template>
<div id="UserLevel">
  <VeLine :data="chartData" ></VeLine>
</div>
</template>

<script>
import Store from '../store/store'
import {Chart} from "@/request/api";
import  VeLine from 'v-charts/lib/line.common.min'

export default {
name: "UserLevel",
  store:Store,
  data: function () {
    return {
      chartData: {
        columns: [],
        rows: []
      }
    }
  },
  components: { VeLine },
  methods:{
    GetChartData:async function(){
      const Data = await Chart("UserLevel",this.PostBarID)
      this.chartData.columns = Data.data["columns"]
      this.chartData.rows = Data.data["rows"]

    }
  },
//     computed :{
//     PostBarID(){
//       return this.$store.state.PostBarID
//     }
// },
  watch:{
    PostBarID:function (){
      if (this.PostBarID!=="1")
        this.GetChartData()
    }
  },
  computed:{
    PostBarID(){
      return this.$store.state.PostBarID
    }
  },
  mounted() {
    this.GetChartData()
  }
}
</script>

<style scoped>
#UserLevel{
  display: inline-block;
  margin: 10px;
  width: 600px;
  height: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>