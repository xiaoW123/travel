<template>
<div class="header-swiper">
  <swiper ref="mySwiper" :options="swiperOptions" >
    <swiper-slide v-for="(item,index) in swiperList" :key="index" class="swiper">
      <img :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
  
</template>

<script>

  export default {
    name: 'HomeSwiper',
    components: {
    },
    data() {
      return {
        swiperList: [
          {
            id: '1',
            imgUrl: require('@/assets/img/1.jpg')
          },
          {
            id: '2',
            imgUrl: require('@/assets/img/2.jpeg')
          },
          {
            id: '3',
            imgUrl: require('@/assets/img/3.jpeg')
          },
          {
            id: '4',
            imgUrl: require('@/assets/img/4.jpeg')
          },
        ],
        swiperOptions: {
          pagination:{
            el:'.swiper-pagination',
          },
          autoplay: true,
          speed: 400,
          loop: true,
        }
      }
    },
  }
</script>

<style scoped>
  .header-swiper {
    width: 100%;
    height: 2rem;
    background-color: pink;
  }

  .swiper img{
    width: 100%;
    height: 2rem;
  }

  .header-swiper >>> .swiper-pagination-bullet-active {
    background-color: #fff
  }
  
  
</style>