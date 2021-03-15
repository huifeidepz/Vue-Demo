import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
      PostBarID:'wp7',
      PostBarList:[],
      Loading:3,
      multipleSelection:[],
      reflushFlag:false,
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
            this.state.Loading = this.state.Loading-1
        },
        setMultipleSelection(state,multipleSelection){
          this.state.multipleSelection = multipleSelection
        },setReflushFlagTrue(){
          this.state.reflushFlag = true;
        },setReflushFlagFalse(){
          this.state.reflushFlag = false;
        }
  }
})

export default store
