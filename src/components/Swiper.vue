<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <swiper-slide class="img-wrapper"  v-for="item in lists" :key="item.img">
      <img :src="item.img" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
      name: "Swiper",
      components: {
        swiper,
        swiperSlide
      },
      props:{
        lists:{
          required:true
        }
      },
      data(){
        return{
          swiperOption: {
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
            loop : true,
            pagination: {
              el: '.swiper-pagination'
            }
          },
        }
      },
      mounted(){

      },
      methods:{
        callback(index){
          console.log(index)
        }
      }
    }
</script>

<style lang="scss" scoped>
  .img-wrapper{
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
