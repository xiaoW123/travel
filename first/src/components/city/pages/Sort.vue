<template>
<div>
  <div class="city-list">
    <p class="list-p">字母排序</p>
    <div class="list-item">
      <ul>
        <li v-for="item,index in cityList" :key="index">
          <a :href="'#'+index" >{{item.title}}</a>
        </li>  
      </ul>
    </div>
  </div>
  <div v-for="item,index in cityList" :key="index" class="clear">
      <p :id="index" class="letter-p" :ref="index">{{item.title}}</p>
      <div class="letter-item">
        <ul >
          <li v-for="val,index in item.lists" 
            :key="index" @click="changeClick(val)">
            {{val}}
          </li>
        </ul>
      </div>
    </div>

</div>
  
</template>

<script>
import {mapMutations} from 'vuex'


export default {
  name: 'Sort',
  components: {

  },
  props: {
    cityList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    changeClick(cityName) {
      this.changeCity(cityName)
      this.$router.push('/')
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
    font-size: .28rem;
    font-weight: 600;
    background-color: #fff;
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

  .letter-p {
    font-size: .28rem;
    font-weight: 600;
    margin-top: .2rem;
    margin-bottom: .2rem;
    margin-left: .2rem;
  }

  .letter-item {
    width: 100%;
    overflow: hidden; 
  }

  .letter-item ul {
    position: relative;
    background-color: #fff;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
  }

  .letter-item ul li {
    box-sizing: border-box;
    float: left;
    width: 93.75px;
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    border-bottom: 2px solid #f4f4f4;
    font-size: .28rem;
    border-right: 1px solid #f4f4f4;
    border-left: 1px solid #f4f4f4;
    background-color: #fff;


  }                                                                         

</style>