<template>
  <div class="detail">
    <header-item class="header-item" v-show="isShow"
    :style="styleOpacity"></header-item>
    <scroll class="detail-scroll" @scroll="contentScroll">
      <detail-header :details="details" :imgStr="imgStr"></detail-header>
      <score></score>
      <div class="test">
        <h5>写css太废时间了，本次学习就到这了！</h5>
        <p>1.熟悉Vue-cl2</p>
        <p>2.掌握基础的 Vue-router</p>
        <p>3.能够使用axios</p>
        <p>4.Vuex的基本使用</p>
        <p>5.vue基础指令</p>
        <p>6.组件之间的数据传递</p>
      </div>
    </scroll>
    

  </div>
</template>

<script>
import DetailHeader from './pages/Header.vue'
import Scroll from '../scroll/Scroll.vue'
import {requestCity} from '../../network/index'
import Score from './pages/Score.vue'
import HeaderItem from './pages/HeaderItem.vue'

export default {
  name: 'Detail',
  components: {
    DetailHeader,
    Scroll,
    Score,
    HeaderItem,
  },
  data() {
    return {
      details: [],
      imgStr: '',
      isShow: false,
      styleOpacity: {
        opacity: 0
      }
    }
  },
  mounted() {
    requestCity().then((res) => {
      let data = res.data
      this.details = data.details
      this.imgStr = data.details[0].imgUrl
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    contentScroll(position) {
      console.log(-position.y)
      this.isShow = (-position.y) > 51
      let opacity = (-position.y) / 150 
      opacity = opacity > 1? 1: opacity 
      this.styleOpacity = {opacity}  //{opacity:opacity}
      
    }
  }
}
</script>

<style scoped>
  .detail .detail-scroll {
    height: 100vh;
  }

  .detail {
    background-color: #f5f4f6;
  }

  .test {
    width: 100%;
    height: 2000px;
    color: pink;
    font-size: .5rem;
  }

  .detail .header-item {
    opacity: 0;
  }
</style>