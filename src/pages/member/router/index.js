import Vue from 'vue'
import Vuerouter from 'vue-router'
import addressList from '../components/addressList'
import allAddress from '../components/allAddress'
import addAddress from '../components/addAddress'
import editAddress from '../components/editAddress'
import member from '../components/member'
Vue.use(Vuerouter)

let routes = [
  {
    path:'/',
    name:'member',
    component:member
  },
  {
    path:'/addressList',
    name:'addressList',
    component:addressList,
    redirect: '/addressList/all',//设置默认子路由
    children:[
      {
        path:'all',
        name:'all',
        component:allAddress
      },
      {
        path:'add',
        name:'addAddress',
        component:addAddress
      },
      {
        path:'edit',
        name:'edit',
        component:editAddress
      }
    ]
  },

]

const router = new Vuerouter({
  routes
})

export default router
