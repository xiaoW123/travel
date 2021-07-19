<template>
  <div class="score">
    <div class="score-item">
      <div class="item-a">
        4.8<span>分&nbsp;&nbsp;&nbsp;很棒</span>
        <p>1361条评论&nbsp;&nbsp;&nbsp;3条攻略</p>
        </div>
      <div class="item-b">
        景点介绍<br>
        <span>开放时间、贴士</span>
      </div>
    </div>
    <div class="score-icon">
      <p class="iconfont">
        &#xe674;&nbsp;&nbsp;北京市平谷区东南盘山脚下海子村
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Score'
}
</script>

<style scoped>
  .score {
    background-color: #fff;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
    margin-top: .2rem;
  }
  .score-item {
    display: flex;
    height: 1rem;
    border-bottom: 1px solid #f4f4f4;
  }
  .score-item div {
    flex: 1;
  }

  .score-item div:nth-child(1) {
    color: #e67e36;
    font-size: .4rem;
    margin: .2rem 0 .2rem .2rem;
  }

  .score-item div:nth-child(1) span {
    font-size: .3rem;
  }

  .score-item div:nth-child(1) p {
    font-size: .2rem;
    color: #989898;
    margin-top: .1rem;
  }
  .item-a {
    position: relative;
    border-right: 2px solid #f4f4f4;
  }
  .item-a::after {
    position: absolute;
    content: '\e605';
    font-family: iconfont;
    right: 0;
    top: .14rem;
    color: #989898;
  }
  
  .item-b {
    position: relative;
    font-size: .3rem;
    margin: .25rem 0 0 .2rem;
  }

  .item-b span {
    font-size: .2rem;
    color: #989898;
  }

  .item-b::after {
    position: absolute;
    content: '\e605';
    font-family: iconfont;
    right: 0;
    top: .11rem;
    color: #989898;
    font-size: .4rem;
  }

  .score-icon {
    padding: .2rem .2rem .2rem .2rem;
    
  }

  .iconfont {
    font-size: .1rem;
    color: #989898;
  }

  .score-icon p::after {
    content: '\e605';
    margin-left: 2.5rem;
    font-family: iconfont;

  }
</style>