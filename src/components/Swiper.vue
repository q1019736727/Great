<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="list in lists">
        <a class="js-no-follow" href="javascript:void(0)">
          <img class="goods-main-photo fadeIn" :src="list.img">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
    export default {
      name: "Swiper",
      props:{
        lists:{
          required:true
        }
      },
      mounted(){
        var mySwiper = new Swiper('.swiper-container',{
          loop: true,
          autoplay: {
            delay: 3000,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        })
      }
    }
</script>

<style lang="scss" scoped>
.swiper-container{
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
