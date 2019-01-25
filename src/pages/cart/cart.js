import './cart_base.css'
import './cart_trade.css'
import './cart.css'
import Vue from 'vue'
import cartReuqest from 'js/fetch.js'

new Vue({
  el:'#app',
  data(){
    return{
      lists:[]
    }
  },
  created(){
    cartReuqest.getList().then(res => {
      console.log(res)
      let data = res.data.lists.map(item => {
         return {...item,selected:false}
      })
      this.lists = data
    })
  },
  methods:{

  },
  computed:{
    storeSelect:{
      get(){
        return ''
      }

    }
  }

})
