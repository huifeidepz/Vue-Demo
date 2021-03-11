<template>
  <div id="test"> <VeLine :data="chartData" ></VeLine></div>

</template>

<script>
import Store from '../store/store'
import {Chart} from "@/request/api";
import  VeLine from 'v-charts/lib/line.common.min'
export default {
  name:'test',
  store:Store,
  props:["PostBarID"],
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
      console.log(this.PostBarID)
      const Data = await Chart("Time",this.PostBarID)
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
  }
}

</script>
