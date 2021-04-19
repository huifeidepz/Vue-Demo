<template>
  <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="false"
      >
  </wordcloud>
</template>

<script>
import wordcloud from 'vue-wordcloud'
import {Chart} from "../request/api";
export default {
  name: 'app',
  components: {
    wordcloud
  },
  methods: {
    GetChartData:async function(){
      console.log(this.PostBarID)
      const Data = await Chart("WordCloud",this.PostBarID)
      this.defaultWords =  Data.data["rows"]


    }
  },
  data() {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      defaultWords: [
      ]
    }
  },watch:{
    PostBarID:function (){
      if (this.PostBarID!=="1")
        this.GetChartData()
    }
  },
  computed:{
    PostBarID(){
      return this.$store.state.PostBarID
    }
  },
  mounted() {
    this.GetChartData()
  }
}
</script>
<style>
#WordCloud{
  display: inline-block;
  width: 600px;
  height: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>