<template>
  <div id="PostBarList" style="width: 240px">
    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false"
        size="20%"
    >
      <PostBar v-on:PostBarSave="this.drawer=false"></PostBar>
    </el-drawer>
    <el-table
      @row-click="handleCurrentPostBarID"
      :data="CurrtData"
      style="width: 240px"
      @selection-change="handleSelectionChange"

    >

      <el-table-column
          type="selection"
          width="55"
      >
      </el-table-column>
      <el-table-column :render-header="renderHeader"
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
import {PostBarList} from '../request/api'
import PostBar from "../components/PostBar";
export default {
  name:"PostBarList",components:{PostBar},
  data () {
    return {
      drawer: false,
      PostBars:[],
      CurrPage:1,
      pageSize:10,

      CurrtData:[],
      multipleSelection:[],
      checkList:[],
      CurrtSelection:[]
    }
  },
  store:store,
  async created() {
    this.PostBars = await this.GetPostBarList()

    this.$store.commit("setPostBarID", this.PostBars[0]["PostBarID"])
    this.CurrtData = this.PostBars.slice((this.CurrPage - 1) * this.pageSize, this.CurrPage * this.pageSize)
    this.$store.commit("setPostBarList",this.PostBars)

  },
  methods: {
    renderHeader() {

      return (
          <div>
            <el-button size='small' on-click={()=>this.drawer=true}> <span  class='el-icon-upload2'></span> 添加吧</el-button>
          </div>
      )


    },
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


    },
    handleSelectionChange(val) {
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
