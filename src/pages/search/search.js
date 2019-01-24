import 'css/common.css'
import './index.css'
import Vue from 'vue'
import axios from 'axios'
import api from 'js/api.js'
import qs from 'qs'
import jq from 'jquery'

new Vue({
  el:'#app',
  data(){
    return{
      keyword:'',
      lists:[],
      showTop:false//是否显示返回顶部
    }
  },
  created(){
    let searchStr = window.location.search.substr(1)
    this.keyword = qs.parse(searchStr)['keyword']
    this.getList()
  },
  methods:{
    getList(){
      axios.get(api.searchHotItems,{
          keyword:this.keyword
      }).then((res)=>{
        this.lists = res.data.lists
      })
    },
    scroller(ele){
      let scrollerH = jq(document.documentElement).scrollTop()
      if (scrollerH>150){
        this.showTop = true
      } else{
        this.showTop = false
      }
    },
    backTop(){
      jq(document.documentElement).scrollTop(0)
      this.showTop = false
    }
  }
})
