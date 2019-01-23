import Vue from 'vue'
import 'css/common.css'
import './index.css'
import axios from 'axios'
import api from 'js/api.js'
import Tabber from 'components/Tabbar.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload)
Vue.use(MintUI)
Vue.prototype.$http = axios
let category = new Vue({
  el:'#app',
  components:{
    Tabber
  },
  data(){
    return{
      selectTabbar:2,
      currentIndex:0,
      subList:[],
      hotbrand:[],
      hotCategory:[]
    }
  },
  created(){
    this.getkinds()
    this.getkindstoList('-1')
  },
  methods:{
    getkinds(){
      this.$http.get(api.kinds).then((res)=>{
        this.subList = res.data.kinds
      })
    },
    getkindstoList(cid){
      this.$http.get(api.items,{
        cid: cid
      }).then((res)=>{
        this.hotbrand = res.data.hotItems
        this.hotCategory = res.data.hotKinds
      })
    },
    clickSublist(index,cid){
      this.currentIndex = index
      this.getkindstoList(cid)
    }
  }

})
