<template>
  <div class="icons">
    <swiper :options="swiperOptions" class>
      <swiper-slide v-for="item,index in page" :key="index">
        <div class="icons-div">
          <div class="icons-item" v-for="page,index in item" :key="index">
            <img :src="page.imgUrl" alt="">
            <p>{{page.id}}</p>
          </div>
        </div>
          
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
      swiperOptions: {          
        pagination:{
          el:'.swiper-pagination',
        },
      }
    }
  },
  props: {
    iconItem: {
      type: Array,
      default() {
        return []
      }
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
    background-color: #fff;
    
  }
  .icons-div {
    display: flex;
    flex-wrap: wrap;
  }
  .icons-item {
    flex: 25%;
    text-align: center;
    margin-top: .3rem;
    /* float: left; */
    /* margin: .4rem 0 .65rem .7rem; */
    /* padding: .4rem; */
    /* margin-bottom: 10px; */
    /* margin-left: .7rem;
    margin-top: .4rem;
    text-align: center;
    width: 1rem;
    height: 1.24rem; */
  }

  .icons-item img{
    width: 1rem;
  } 

  .icons-item p {
    font-size: .25rem;
  }

  .swiper-item {
    margin-top: 5rem;
  } 
 .icons>>>.swiper-slide-active{
   /* background-color: black; */
   width: 100%;
   height: 4rem;
 }
 /* class="swiper-pagination swiper-item swiper-pagination-bullets" */
</style>