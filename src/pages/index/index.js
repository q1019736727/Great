
import 'css/common.css'
import './index.css'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import router from './router/index'
import tabbar from 'components/Tabbar.vue'
import swiper from 'components/Swiper.vue'
import axios from 'axios'
import api from 'js/api.js'
import { InfiniteScroll } from 'mint-ui';

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(InfiniteScroll);
Vue.prototype.$http = axios
Vue.config.productionTip = false

let app = new Vue({
  el: '#app',
  // router,
  data:{
    selectTabbar:1,
    goodsList:[],
    loading:false,
    pageNum:1,
    loadAll:false,
    bannerlist:[]
  },
  components:{
    tabbar,
    swiper
  },
  created(){
    this.loadMore()
    this.getbanner()
  },
  methods:{
    loadMore(){
      if (this.loadAll === true){
        return
      }
      this.loading = true
      this.$http.get(api.hotLists,{
        pageSize:8,
        pageNum:this.pageNum
      }).then((res)=>{
        this.loading = false
        this.pageNum += 1
        if (res.data.lists.length<8) {
          this.loadAll = true
        }
        if (this.goodsList.length === 0){
          this.goodsList = res.data.lists
        }else{
          this.goodsList = this.goodsList.concat(res.data.lists)
        }
      }).catch((e)=>{
        this.loading = false
        console.log(e)
      })
    },
    getbanner(){
      this.$http.get(api.banner).then((res)=>{
        this.bannerlist = res.data.lists
      })
    }
  }
})
