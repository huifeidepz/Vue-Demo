<template>
  <div id="DataPanel"><el-table
      :data="tableData"
      style="width: 200px">
    <el-table-column
        prop="Name"
        label=""
        width="90">
    </el-table-column>
    <el-table-column
        prop="Data"
        label="count"
        width="90">
    </el-table-column>
  </el-table></div>


</template>

<script>
import {StatisticsData} from '../request/api'
export default {
  name: "DataPanel",
  data(){
    return{
      tableData: []
    }
  },methods:{
    GetData: async function (){
      const Data = await StatisticsData()
      return Data.data["data"]
    },time:async function(){
      setInterval(async ()=>{
        this.tableData =await this.GetData()
      },10000)
    }
  }, mounted:async function () {
      this.tableData =await this.GetData()
      await this.time()
  }

}
</script>

<style scoped>
#DataPanel{
  float: right;
  margin-right: 20px;
}
</style>