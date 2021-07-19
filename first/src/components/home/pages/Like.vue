<template>
  <div class="like">
    <div class="like-ai">
      猜你喜欢
    </div>
    <div class="like-item">
      <ul v-for="item,index in likeData"
          :key="index">
        <li class="like-li" @click="detailClick">
          <span class="img">
            <img :src="item.imgUrl" alt="">
          </span>
          <span class="content">
            <h1>{{item.title}}</h1>
            <p>
              <span class="iconfont wjx">
              &#xe64a;&#xe64a;&#xe64a;&#xe64a;&#xe64a;
              </span>
              {{item.comment}}条评论
            </p>
            
            <span class="price">￥{{item.price}}</span>
            起
          </span>
            
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Like',
  data() {
    return {
      
    }
  },
  props: {
    likeData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    detailClick() {
      this.$router.push('/detail')
    }
  }
}

</script>

<style scoped>
  .like {
    width: 100%;
    font-size: .28rem;
    background-color: #fff;
  }

  .like-ai {
    height: 1rem;
    line-height: 1rem;
    font-weight: 700;
    margin-left: .2rem;
  }

  .like-ai::before {
    content: '\e774';
    font-family: iconfont;
    margin-right: .1rem;
    color: red;
  }

  .like-item img {
    width: 1.8rem;
    height: 1.8rem;
  }

  .like-li {
    display: flex;
    width: 100%;
    height: 2rem;
    margin-bottom: .2rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .img {
    margin-left: .2rem;
  }

  .content {
    margin-left: .5rem;
  }

  .content h1 {
    font-size: .36rem;
    font-weight: 400;
    margin-bottom: .4rem;
  }

  .content p {
    margin-bottom: .5rem;
    color: #75737b;
  }
  .content p>span {
    color: #f1ad38;
  }

  .price {
    color: #e67341;
  }
</style>