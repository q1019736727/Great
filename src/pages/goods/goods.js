import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_fade.css'

import Vue from 'vue'
import api from 'js/api.js'
import axios from 'axios'
import qs from 'qs'
import swiper from 'components/Swiper.vue'


let{id} = qs.parse(location.search.substr(1))

new Vue({
  el:'#app',
  data(){
    return{
      goodsDetail:{},
      selectItem:0,//0详情 1本店成交 2加入购物车 3立即购买
      showcartMask:false
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData(){
      axios.get(api.goodsDetail,{
        id
      }).then((res)=>{
        this.goodsDetail =  res.data
      })
    },
    changeItem(index){
      this.selectItem = index
      if (index === 2 || index ===3){
        this.showcartMask = true
      }
    },
    hidecartMask(){
      this.showcartMask = false
    }
  },
  components:{
    swiper
  },
  watch:{
    showcartMask(value,oldValue){
      document.body.style.overflow = value ? 'hidden':'auto'
      document.querySelector('html').style.overflow = value ? 'hidden':'auto'
      document.body.style.height = value ? '100':'auto'
      document.querySelector('html').style.height = value ? '100':'auto'
    }
  }
})
