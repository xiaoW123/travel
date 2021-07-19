<template>
  <div class="detail-header">
      <div class="img-b" @click="imgClick">
        <div class="iconfont detail-icon" @click="iconClick">&#xe603;</div>
        <h1 class="detail-h1">金海湖风景区(AAA景区)</h1>
        <img :src="imgStr" alt="">
      </div>
      <div class="img-show" v-show="isShow" @click="imgClick1">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide 
              v-for="item,index in details" 
              :key="index"
              class="img-swiper">
                <img :src="item.imgUrl" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isShow: false,
      swiperOptions: {
        pagination:{
          el:'.swiper-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + ' / ' + total;
          }
        },
          autoplay: true,
          speed: 400,
          loop: true,
        }
    }
  },
  props: {
    details: {
      type: Array,
      default() {
        return []
      }
    },
    imgStr: String
  },
  methods: {
    imgClick() {
      this.isShow = true
    },
    imgClick1() {
      this.isShow = false
    },
    iconClick() {
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
  .detail-header {
    overflow: hidden;
  }
  .img-b {
    position: relative;
    width: 100%;
    height: 4rem;
    background-color: pink;
  }

  .img-b img {
    width: 100%;
    height: 4rem;
  }

  .img-show {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .8);
  }

  .img-swiper img {
    width: 80%;
    height: 4rem;
    margin-top: 50%;
  }

  .img-swiper {
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
  }
  
  .swiper-pagination-custom {
    color: #fff;
    font-size: .3rem;
  }

  .detail-icon {
    position: fixed;
    line-height: .7rem;
    text-align: center;
    left: .1rem;
    top: .1rem;
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .7);
    font-size: .4rem;
    color: #fff;
  }

  .detail-h1 {
    position: absolute;
    left: .2rem;
    bottom: .2rem;
    font-size: .4rem;
    color: #fff;
  }
</style>