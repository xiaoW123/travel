<template>
<div class="home">
  <home-header></home-header>
  <scroll ref="Scroll">
    <home-swiper :swiperList="swiperList"></home-swiper>
    <icons :iconItem="iconItem"></icons>
    <location></location>
    <home-activity :avtivityData="avtivityData"></home-activity>
    <hot :hotData="hotData"></hot>
    <like :likeData="likeData"></like>
    <home-vacation :vacationImgUrl="vacationImgUrl"></home-vacation>
  </scroll>

</div>
</template>

<script>
import HomeSwiper from './pages/Swiper.vue'
import HomeHeader from './pages/Header.vue'
import Scroll from '@/components/scroll/Scroll.vue'
import Icons from './pages/Icons.vue'
import Location from './pages/Location.vue'
import HomeActivity from './pages/HomeActivity.vue'
import Hot from './pages/Hot.vue'
import Like from './pages/Like.vue'
import HomeVacation from './pages/Vacation.vue'
import {request} from '@/network/index.js'

import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Scroll,
    Icons,
    Location,
    HomeActivity,
    Hot,
    Like,
    HomeVacation,
  },
  data() {
    return {
      hotData: [],
      iconItem: [],
      likeData: [],
      swiperList: [],
      vacationImgUrl: [],
      avtivityData: [],
      changeCity: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getData() {
      request().then((res) => {
      let data = res.data.data
      data.forEach((item) => {
        if (this.city == item.city) {
          this.hotData = item.hotData
          this.iconItem = item.iconItem
          this.likeData = item.likeData
          this.swiperList = item.swiperList
          this.vacationImgUrl = item.vacationImgUrl
          this.avtivityData = item.avtivityData
        }
      });
    }).then(res => {
      this.$refs.Scroll.scroll.refresh()
    })
    }
  },
  mounted() {
    //promise
    this.changeCity = this.city  //this.changeCity请求前保存的地址
    this.getData()

    //普通方法
    // Axios({
    //   url: 'http://localhost:8080/static/mock/dataHome.json',
    //   method: 'get'
    // }).then(res => {
    //   console.log(res)
    // })
  },
  activated() {
    // console.log(this.city, this.changeCity)  
    if (this.changeCity != this.city) {  //如果两个请求地址不一样，则再发送一次请求
      this.getData()
      this.changeCity = this.city
    }
  }

}
</script>

<style scoped>  
  .home {
    background-color: #f5f4f6;
    overflow: hidden;
  }
</style>
