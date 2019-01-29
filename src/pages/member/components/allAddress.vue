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
  export default {
    created(){
      console.log(this.$route)
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
