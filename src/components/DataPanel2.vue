<template>
  <div id="DataPanel2"><el-table
      :data="tableData"
      style="width: 200px">

    <el-table-column
        prop="Name"
        label=""
        width="90">
    </el-table-column>
    <el-table-column
        prop="Data"
        label=""
        width="90">
    </el-table-column>
  </el-table></div>
</template>

<script>
import {StatisticsDataByPostBar} from "../request/api";

export default {
name: "DataPanel2",
  data(){
    return{
      tableData: []
    }
  },methods:{
    GetData: async function (){
      const Data = await StatisticsDataByPostBar(this.PostBarID)
      return Data.data["data"]
    },time:async function(){
      setInterval(async ()=>{
        this.tableData =await this.GetData()
        this.tableData.unshift({"Name":"吧名","Data":this.PostBarID})
        console.log(this.tableData)
      },10000)
    }
  }, mounted:async function () {
    this.tableData =await this.GetData()
    await this.time()
  },
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
  }
}
</script>

<style scoped>
#DataPanel2{
  float: right;
  margin-right: 20px;
}
</style>