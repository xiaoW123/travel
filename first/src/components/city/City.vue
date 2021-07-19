<template>
  <div class="city">
    <city-header></city-header>
    
    <scroll ref="Scroll">
      <city-list :hotCityList="hotCityList"></city-list>
      <sort :cityList="cityList"></sort>
    </scroll>

  </div>
</template>

<script>
import CityHeader from './pages/Header.vue'
import Scroll from '@/components/scroll/Scroll.vue'
import CityList from './pages/CityList.vue'
import {requestCity} from '@/network/index.js'
import Sort from './pages/Sort.vue'


export default {
  name: 'City',
  components: {
    CityHeader,
    Scroll,
    CityList,
    Sort,

  },
  data() {
    return {
      hotCityList: [],
      cityList: []
    }
  },
  mounted() {
    requestCity({}).then(res => {
      this.hotCityList = res.data.hotCityList
      this.cityList = res.data.cityList
      console.log(res)
      console.log(this.hotCityList)
      console.log(this.cityList)
    }).then(res => {
      this.$refs.Scroll.refresh()
    })
  },
}
    
</script>

<style scoped>
  .city {
    background-color: #f4f4f4;
  }
</style>