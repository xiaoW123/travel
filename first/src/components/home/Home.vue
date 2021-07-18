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
      avtivityData: []
    }
  },
  created() {
  },
  mounted() {
    //promise
    request().then((res) => {
      this.hotData = res.data.data[0].hotData
      this.iconItem = res.data.data[0].iconItem
      this.likeData = res.data.data[0].likeData
      this.swiperList = res.data.data[0].swiperList
      this.vacationImgUrl = res.data.data[0].vacationImgUrl
      this.avtivityData = res.data.data[0].avtivityData

    }).then(res => {
      this.$refs.Scroll.scroll.refresh()
    })

    //普通方法
    // Axios({
    //   url: 'http://localhost:8080/static/mock/dataHome.json',
    //   method: 'get'
    // }).then(res => {
    //   console.log(res)
    // })
  },

}
</script>

<style scoped>  
  .home {
    background-color: #f5f4f6;
    overflow: hidden;
  }
</style>
