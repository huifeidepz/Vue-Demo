<template>
  <div id="IndexHtml">
    <el-container>
      <el-header><PageHeader></PageHeader></el-header>
      <el-container>
        <el-aside width="200px"><PageAside></PageAside></el-aside>
        <el-main v-loading="Loading"><PageMain></PageMain></el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import Store from '../store/store'
import PageAside from "@/components/PageAside";
import PageMain from './PageMain'
import PageHeader from "./PageHeader"

export default {
  name: "IndexHtml",
  store:Store,
  components: {PageMain,PageHeader,PageAside},
  data(){
    return{
      LoadingNum:1,
      // Loading: false
    }

  },
  methods:{

  },computed:{
    Loading(){
      return this.$store.state.Loading !== this.LoadingNum;
    }
  },

  watch:{

  },created() {
      this.LoadingNum = this.$store.state.Loading
  }
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");
/*.el-header, .el-footer {*/
/*  background-color: #B3C0D1;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 60px;*/
/*}*/



/*.el-main {*/
/*  background-color: #E9EEF3;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 160px;*/
/*  height: 600px;*/
/*}*/
</style>
