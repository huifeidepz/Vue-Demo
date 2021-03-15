<template>
  <div id="Time"> <VeLine :data="chartData" ></VeLine></div>

</template>

<script>
import Store from '../store/store'
import {Chart} from "@/request/api";
import  VeLine from 'v-charts/lib/line.common.min'
export default {
  name:'Time',
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
      const Data = await Chart("Time",this.PostBarID)
      this.chartData.columns = Data.data["columns"]
      this.chartData.rows =  Data.data["rows"]

    }
  },
  watch:{
    // reflushFlag:function (){
    //
    //   if (this.reflushFlag)
    //     this.GetChartData()
    //     this.$store.commit("setReflushFlagFalse")
    //     console.log(this.$store.state.reflushFlag)
    // },
    PostBarID:function (){
     this.GetChartData()
    }
  },
  computed:{
    PostBarID(){
      return this.$store.state.PostBarID
    },
    // reflushFlag(){
    //   return this.$store.state.reflushFlag
    // }
  },
  mounted() {
    this.GetChartData()
  }
}

</script>

<style>
#Time{
  display: inline-block;
  width: 600px;
  height: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}


</style>