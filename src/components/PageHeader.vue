<template>
<div id="PageHeader">

  <el-button v-on:click="openSpider" type="primary"  plain
             v-bind:disabled="Spider">启动爬虫</el-button>
  <el-button v-on:click="StartTrainModel" type="primary"  plain
             v-bind:disabled="Train">启动数据分析</el-button>
  <el-button v-on:click="drawer=true" type="primary"  plain
             v-bind:disabled="Train">运行日志</el-button>
  <el-drawer
      title="系统日志"
      :visible.sync="drawer"
      :with-header="false"
      size="40%"
  >
  <SystemLog></SystemLog>
  </el-drawer>
</div>
</template>

<script>

import {GetFlag,Spider,DataModel} from "@/request/api";
import SystemLog from "./SystemLog";
export default {
name: "PageHeader",
  data() {
  return {
    drawer: false,
    Train:false,
    Spider: false,
    updateInterval: null,
    dateInterval: 60 * 1000,
  }
  },components:{
    SystemLog
  },methods:{
      GetBool:async function (Config){
        const bol = await GetFlag(Config)
        return bol.data["ValueConfig"] === '1';

      },StartTrainModel:async function(){
        this.Train = await this.GetBool("TrainModelFlag")
        const h = this.$createElement;
        if (this.Train){
        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '数据分析运行中')
        });
      }else{
        this.$notify({
              title: '标题名称',
              message: h('i', { style: 'color: teal'}, '数据分析启动')
            } ,
        );
    }
        this.Train=true
        DataModel()
        },
    openSpider(){
      const msg = "爬虫目标："+this.$store.state.multipleSelection.toString()
      if (this.$store.state.multipleSelection.length!==0){
        console.log(this.$store.state.multipleSelection)
        this.$confirm(msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '启动!'
          });
          this.StartPostBar()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }else {
        this.$message({
          type: 'warning',
          message: '请选择吧!'
        });
      }

    },
     StartPostBar:async function (){
       this.Spider =  await this.GetBool("SpiderFlag")
        const h = this.$createElement;
      if (this.Spider){
          this.$notify({
            title: '标题名称',
            message: h('i', { style: 'color: teal'}, '爬虫运行中')
          });
        }else{
          this.$notify({
            title: '标题名称',
            message: h('i', { style: 'color: teal'}, '爬虫启动')
          } ,
         );
          this.Spider=true
        Spider(this.$store.state.multipleSelection)
        }


    },mounted(){
      this.updateInterval = setInterval(function (){
        this.dis=this.GetBool("SpiderFlag")
        console.log(1)
      },this.dateInterval)
  }, beforeDestroy() {
    clearInterval(this.updateInterval);// 清楚定时刷新，不清除会一直运行，关闭页面也会定时刷新
  }


}}
</script>

<style scoped>
.el-button{
  margin: 10px;
}
</style>
