<template>
  <div class="icons">
    <swiper :options="swiperOptions" >
      <swiper-slide v-for="item,index in page" :key="index">
          <div class="icons-item" v-for="page,index in item" :key="index">
            <img :src="page.imgUrl" alt="">
            <p>{{page.id}}</p>
          </div>
        <!-- <div class="icons-item" v-for="(item,index) in iconItem" :key="index">
          <img :src="item.imgUrl" alt="">
          <p>{{item.id}}</p>
        </div> -->
      </swiper-slide>

      <div class="swiper-pagination swiper-item" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data() {
    return {
      iconItem: [
        {id: '酒店', imgUrl: require('@/assets/img/hotel.png')},
        {id: '度假', imgUrl: require('@/assets/img/package.png')},
        {id: '景点门票', imgUrl: require('@/assets/img/piao.png')},
        {id: '火车票', imgUrl: require('@/assets/img/train.png')},
        {id: '火车票', imgUrl: require('@/assets/img/train.png')},
        {id: '火车票', imgUrl: require('@/assets/img/train.png')},
        {id: '火车票', imgUrl: require('@/assets/img/train.png')},
        {id: '火车票', imgUrl: require('@/assets/img/train.png')},
        {id: '火车票', imgUrl: require('@/assets/img/train.png')},
        {id: '火车票', imgUrl: require('@/assets/img/train.png')},
      ],
        swiperOptions: {          
          pagination:{
            el:'.swiper-pagination',
          },}
    }
  },
  computed: {
    page() {
      let pages = []
      this.iconItem.forEach((item,index) => {
        //index: 0123456789
        let idx = Math.floor(index/8) 
        if(!pages[idx]) pages[idx] = []
        pages[idx].push(item)
      });
      return pages;
    }
  }

}
</script>

<style scoped>
  .icons {
    width: 100%;

    
  }

  .icons-item {
    float: left;
    /* margin: .4rem 0 .65rem .7rem; */
    padding: .4rem;
    margin-bottom: 10px;
    text-align: center;
    width: 1rem;
    height: 1.24rem;
  }

  .icons-item img{
    width: 1rem;
  } 

  .icons-item p {
    font-size: .28px;
  }

  .swiper-item {
    margin-top: 500px;
  } 


</style>