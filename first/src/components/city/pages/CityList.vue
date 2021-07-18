<template>
  <div class="city-list">
    <p class="list-p">热门城市</p>
    <div class="list-item">
      <ul >
        <li v-for="item,index in hotCityList" :key="index">{{item.cityName}}</li>  
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  props: {
    hotCityList: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style scoped>
  .city-list {
    width: 100%;
    margin-top: .1rem;
  }

  .list-p {
    font-size: .28rem;
    font-weight: 600;
    margin-bottom: .2rem;
    margin-left: .2rem;
  }

  .list-item {
    position: relative;
    background-color: #fff;
  }
  .list-item ul {
    display: flex;
    flex-wrap: wrap;
  }
  .list-item ul li {
    flex: 33.333%;
    height: 1rem;
    font-size: .3rem;
    text-align: center;
    line-height: 1rem;
    border-bottom: 2px solid #f4f4f4;
  }
  .list-item ul::after {
    position: absolute;
    left: 5rem;
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    background-color: #f4f4f4;
  }
  .list-item ul::before {
    position: absolute;
    left: 2.5rem;
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    background-color: #f4f4f4;
  }
</style>