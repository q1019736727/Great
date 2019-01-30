
import './index_base.css'
import './index.css'
import Vue from 'vue'
import router from './router'
import bus from 'js/bus.js'
import store from './store'


new Vue({
  el:'#app',
  router,
  store,
  created(){
    bus.$on('change',(res)=>{
      console.log('接收到'+res)
    })
  }

})
