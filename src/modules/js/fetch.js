
import axios from 'axios'
import api from './api.js'

const Cartlist = {

  getList(params) {
   return new Promise((resolve, reject) => {
     axios.get(api.cartLists,params).then((res)=>{
       //这里可以统一一下操作
       // if(status === 200) {
       //   resolve(res)
       // }
       // if(status === 300) {
       //   location.href = 'login.html'
       //   resolve(res)
       // }
       // reject(res)
       resolve(res)
     }).catch(error => {
       reject(error)
     })
   })
  }


}

export default Cartlist
