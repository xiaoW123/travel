<template>
  <div class="hot">

    <div class="hot-header">
      <span class="header-left">本周热门榜单</span>
      <span class="header-right">全部榜单</span>
    </div>

    <div class="hot-body">
        <div class="hot-item" 
            v-for="item,index in hotData"
            :key="index">
          <img :src="item.imgUrl" alt="">
          <span class="title">{{item.title}}</span><br>
          <span class="price">￥{{item.price}}</span>起
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Hot',
  data() {
    return {
      hotData: [
        {
          id: '1',
          imgUrl: require('@/assets/img/rm1_03.png'),
          title: '故宫',
          price: '20'
        },
        {
          id: '2',
          imgUrl: require('@/assets/img/rm2_05.png'),
          title: '十渡聚龙湾玻璃栈道',
          price: '35'
        },
        {
          id: '3',
          imgUrl: require('@/assets/img/rm3_07.png'),
          title: '八达岭长城',
          price: '25'
        },
        {
          id: '4',
          imgUrl: require('@/assets/img/rm4_03.png'),
          title: '水立方',
          price: '14'
        },
        {
          id: '5',
          imgUrl: require('@/assets/img/rm5_05.png'),
          title: '定陵',
          price: '50'
        },
        {
          id: '6',
          imgUrl: require('@/assets/img/rm6_07.png'),
          title: '故宫',
          price: '20'
        }, 
      ]
    }
  }
}
</script>

<style scoped>
  .hot {
    background-color: #fff;
  }
  .hot-header {
    display: flex;
    width: 100%;
    height: .5rem;
    /* background-color: pink; */
    font-size: .3rem;
    line-height: .5rem;
  }

  .header-left {
    flex: 1;
  }

  .header-left::before {
    content: '\e664';
    font-family: iconfont;
    color: #e67341;
    margin-right: .1rem;
    margin-left: .1rem;
    font-size: .3rem;
  }

  .header-right {
    font-size: .2rem;
  } 

  .header-right::after {
    content: '\e605';
    font-family: iconfont;
    margin-left: .1rem;
    font-size: .2rem;
  }

  .hot-body {
    height: 3rem;
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
  }

  .hot-item {
    display: inline-block;
    width: 1.8rem;
    height: 3rem;
    font-size: .2rem;
    text-align: center;
    margin-left: 20px;
  }

  .title {
    display: block;
    margin: 0 auto;
    width: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
  }

  .hot-item img {
    width: 1.8rem;
    height: 1.8rem;
  }

  .price {
    color: #c3763a;  
  }
</style>