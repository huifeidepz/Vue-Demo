import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
      PostBarID:'1',
      PostBarList:[],
      Loading:1,
      multipleSelection:[]
  },mutations:{
      setPostBarID(state,PostBarID){
        this.state.PostBarID = PostBarID
      },
        setPostBarList(state,PostBarList){
            this.state.PostBarList = PostBarList
        },
        setLoadingPlus(){
          this.state.Loading = this.state.Loading+1
        },
        setLoadingLow(){
            this.state.Loading = this.state.Loading-+1
        },
        setMultipleSelection(state,multipleSelection){
          this.state.multipleSelection = multipleSelection
        }
  }
})

export default store
