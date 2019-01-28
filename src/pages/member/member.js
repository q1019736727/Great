
import './index_base.css'
import './index.css'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

let router = new VueRouter({
  routes:[
    {
      path:'/',
      name:'member',
      component:require('./components/member.vue')
    },
    {
      path:'/adress',
      name:'adress',
      component:require('./components/allAddress.vue')
    },

  ]
})

new Vue({
  el:'#app',
  router,

})
