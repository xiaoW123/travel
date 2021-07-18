<template>
  <div class="city-list">
    <p class="list-p">字母排序</p>
    <div class="list-item">
      <ul>
        <li v-for="item,index in cityList" :key="index">{{item.title}}</li>  
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  props: {
    cityList: {
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
    margin-top: .2rem;
    margin-bottom: .2rem;
    margin-left: .2rem;
  }

  .list-item {
    width: 100%;
    height: 4rem;
    background-color: #fff;
    font-size: .28rem;
    font-weight: 600;
  }
  .list-item ul {
    flex-wrap: wrap;
  }
  
  .list-item ul li {
    float: left;
    width: 1.25rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
  }
</style>