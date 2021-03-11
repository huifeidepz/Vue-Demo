<template>
  <div id="PosOrNeg"> <VeLine :data="chartData" :settings="chartSettings" ></VeLine></div>

</template>

<script>
import Store from '../store/store'
import {Chart} from "@/request/api";
import  VeLine from 'v-charts/lib/histogram.common'
export default {
  name:'PosOrNeg',
  store:Store,
  props:["PostBarID"],
  data: function () {
    return {
      chartSettings:{
        yAxisName: ['评论数'],
        xAxisName:['情绪值']
      },
      chartData: {
        columns: [],
        rows: []
      }
    }
  },
  components: { VeLine },
  methods:{
    GetChartData:async function(){
      this.$store.commit("setLoadingLow")
      const Data = await Chart("PosOrNeg",this.PostBarID)
      this.chartData.columns = Data.data["columns"]
      this.chartData.rows = Data.data["rows"]
      this.$store.commit("setLoadingPlus")

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
  }
}

</script>
<style>
#PosOrNeg{
  display: inline-block;
  width: 400px;
  height: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>