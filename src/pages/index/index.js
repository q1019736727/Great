
import 'css/common.css'
import './index.css'
import Vue from 'vue'
import router from './router/index'
import tabbar from 'components/Tabbar.vue'
import axios from 'axios'
import api from 'js/api.js'
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
Vue.prototype.$http = axios
Vue.config.productionTip = false

let app = new Vue({
  el: '#app',
  router,
  data:{
    goodsList:[],
    loading:false,
    pageNum:1,
    loadAll:false
  },
  components:{
    tabbar,
  },
  created(){
    this.loadMore()
  },
  methods:{
    loadMore(){
      if (this.loadAll === true){
        return
      }
      console.log(1111)
      this.loading = false
      this.$http.get(api.hotLists,{
        pageSize:8,
        pageNum:this.pageNum
      }).then((res)=>{
        this.loading = false
        if (res.data.lists.length<8) {
          this.loadAll = true
        }
        if (this.goodsList.length === 0){
          this.goodsList = res.data.lists
        }else{
          this.goodsList = this.goodsList.concat(res.data.lists)
        }
        console.log(this.goodsList)
      }).catch((e)=>{
        this.loading = false
        console.log(e)
      })
    }
  }
})
