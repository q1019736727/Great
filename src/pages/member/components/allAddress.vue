<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block">
      <router-link class="block-item js-address-item address-item " :to="{name:'edit'}">
        <div class="address-title">tony 13112345678</div>
        <p>广东省珠海市香洲区南方软件园</p>
      </router-link>
      <a class="block-item js-address-item address-item address-item-default" @click="goEdit">
        <div class="address-title">tony 13112345678</div>
        <p>北京市北京市东城区天安门</p>
      </a>
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" :to="{name:'addAddress'}">
        新增地址
      </router-link>
    </div>
  </div>
</template>

<script>
  import bus from 'js/bus.js'
  export default {
    data(){
      return{
        adressList:this.$store.state.list//测试一下
      }
    },
    created(){
      console.log(this.$route)
      setTimeout(()=>{
        bus.$emit('change',666)
        this.$store.dispatch('changeAction','我要改变')
      },3000)
    },
    methods:{
      goEdit(){
        this.$router.push({
          name:'edit',
          params:{
            dataOne:'数据1',
            dataTwo:'数据2'
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import "./address_base.css";
  @import "./adress.css";
</style>
