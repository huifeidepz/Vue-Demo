<template>
  <div id="PostBarList" style="width: 240px">
    <el-table
      @row-click="handleCurrentPostBarID"
      :data="CurrtData"
      style="width: 240px"
      @selection-change="handleSelectionChange">
    >
      <el-table-column
          type="selection"
          width="55"
      >
      </el-table-column>
      <el-table-column
        prop="PostBarID"
        label="吧名"
        width="180px"
        height="40px"

      >

      </el-table-column>

    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="PostBars.length"
      @current-change="handleCurrentChange"
      :current-page="CurrPage"
      :page-size="pageSize"
      :key="reflush"
      >
    </el-pagination>
    </div>
</template>

<script>

import store from "../store/store";
import {PostBarList} from '@/request/api'
export default {
  name:"PostBarList",
  data () {
    return {
      PostBars:[],
      CurrPage:1,
      pageSize:10,
      reflush:true,
      CurrtData:[],
      multipleSelection:[]
    }
  },
  store:store,
  async created() {
    this.PostBars = await this.GetPostBarList()
    this.$store.commit("setPostBarID", this.PostBarID)
    this.CurrtData = this.PostBars.slice((this.CurrPage - 1) * this.pageSize, this.CurrPage * this.pageSize)
    this.$store.commit("setPostBarList",this.PostBars)
  },
  methods: {
    GetPostBarList: async function(){
      const List = await PostBarList()
      return List.data["PostBars"]
    },
    handleCurrentChange: function (currentPage) {
      this.CurrPage = currentPage;
      this.CurrtData = this.PostBars.slice((this.CurrPage-1) * this.pageSize,this.CurrPage*this.pageSize)
    },
    handleCurrentPostBarID:function (row){
      this.$store.commit("setPostBarID", row.PostBarID)
    }, handleSelectionChange(val) {
      this.multipleSelection=[]
      for (let i=0; i<val.length; i++){
        this.multipleSelection.push(val[i]["PostBarID"])
      }
      this.$store.commit("setMultipleSelection",this.multipleSelection)
    }
  },
}
</script>
<style>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");
.el-pagination{
  width: 100%;
}
</style>
