<template>
  <div class="vacation">
    <h1  class="vacation-h1">周末去哪儿</h1>
    <div class="vacation-img" 
          v-for="item,index in vacationImgUrl" 
          :key="index">
      <img :src="item.imgRul" alt="">
      <h1>{{item.title}}</h1>
      <p>{{item.titlep}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vacation',
  data() {
    return {
      
    }
  },
  props: {
    vacationImgUrl: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .vacation {
    width: 100%;
    /* background-color: black; */
    background-color: #fff;
  }

  .vacation-h1 {
    height: 1rem;
    line-height: 1rem;
    font-weight: 400;
    font-size: .3rem;
    background-color: #e0e0e0;
    padding-left: .2rem;
  }

  .vacation-img {   
    width: 100%;
    height: 5rem;
  }

  .vacation-img img {
    width: 100%;
    height: 3.4rem;
  }

  .vacation-img h1 {
    font-size: .35rem;
    padding-left: .2rem;
    margin: .2rem 0;
  }

  .vacation-img p {
    font-size: .28rem;
    padding-left: .2rem;
    margin: .3rem 0;
  }
</style>