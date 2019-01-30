import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    list:[{name:'farnk',id:1},{name:'ChiuYung',id:2}]
  },
  mutations:{
    changeItem(state,value){
      (state.list[0]).name = value
    }
  },
  actions:{
    changeAction(context,value){
      context.commit('changeItem',value)
    }
  }
})

export default store
