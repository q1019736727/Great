
import './index_base.css'
import './index.css'
import VueRouter from 'vue-router'
import Vue from 'vue'
import member from './components/member'
import address from './components/allAddress'
Vue.use(VueRouter)

let router = new VueRouter({
  routes:[
    {
      path:'/',
      name:'member',
      component:member
    },
    {
      path:'/adress',
      name:'adress',
      component:address
    },

  ]
})

new Vue({
  el:'#app',
  router,
})
