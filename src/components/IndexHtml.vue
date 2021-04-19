<template>
  <div id="IndexHtml">
    <el-container>
      <el-header><PageHeader></PageHeader></el-header>
      <el-container>
        <el-aside width="200px"><PageAside></PageAside></el-aside>
        <el-main ><PageMain></PageMain></el-main>

      </el-container>
      <el-footer>Copyright@YUHUIWU 赣ICP备2021002196号-1</el-footer>
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

      // Loading: false
    }

  },
  methods:{

  },computed:{

  },

  watch:{

  },created() {

  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 600px;
}
</style>
