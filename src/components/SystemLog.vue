<template>

  <div style="width: 500px;margin: auto">
    <el-table
        :data="CurrData"
        style="">
      <el-table-column
          prop="ID"
          label="ID"
          width="90">
      </el-table-column>
      <el-table-column
          prop="Content"
          label="Content"
          width="200">
      </el-table-column>
      <el-table-column
          prop="time"
          label="time"
          width="200">
      </el-table-column>
    </el-table>
    <el-pagination
        layout="prev, pager, next"
        :total="tableData.length"
        @current-change="handleCurrentChange"
        :current-page="CurrPage"
        :page-size="pageSize"

    >
    </el-pagination>
  </div>
</template>

<script>
import {SystemLog} from '../request/api'
export default {
name: "SystemLog",
  data(){
    return{
      tableData: [],
      CurrPage:1,
      pageSize:10,
      CurrData:[]
    }
  },methods:{
    handleCurrentChange:function (currentPage){
      this.CurrPage = currentPage;
      console.log(this.CurrPage)

      this.CurrData = this.tableData.slice((this.CurrPage-1) * this.pageSize,this.CurrPage*this.pageSize)
      console.log(this.CurrData)
    },
     GetSystemLog:async function () {
       const List = await SystemLog()
       return List.data["data"]
    }
  },async created() {
      this.tableData = await this.GetSystemLog()
      this.CurrData = this.tableData.slice((this.CurrPage-1) * this.pageSize,this.CurrPage*this.pageSize)

  }
}
</script>

<style scoped>

</style>