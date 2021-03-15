<template>
<div id="PostBar">
  <span>吧名</span><el-input v-model="input" placeholder="请输入内容"></el-input><br>
  <el-button @click="SavePostBar">保存</el-button>
</div>
</template>

<script>
import {PostBar} from "@/request/api";

export default {
name: "PostBar",
  data(){
  return {
    input:""
  }
  },methods:{
  SavePostBar:async function (){
    let result;
    const h = this.$createElement;
    if (this.input!==""){
      result =  (await PostBar(this.input)).data["code"]

      if (result===200){
          this.$notify({
            title: '标题名称',
            message: h('i', { style: 'color: teal'}, '保存成功')
          });
      }else if(result===404)
      {
        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '保存失败')
        });
      }else if(result===201) {
        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '该吧已存在')
        });
      }
    }else {
      this.$notify({
        title: '标题名称',
        message: h('i', { style: 'color: teal'}, '请输入吧名')
      });
    }
    this.$emit("PostBarSave")
  }
  }
}
</script>

<style scoped>

</style>