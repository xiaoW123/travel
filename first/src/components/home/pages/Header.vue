<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe603;</span>
    </div>
    <div class="header-conter">
      <span class="iconfont">&#xe601;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      北京
      <span class="iconfont">&#xe604;</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>


<style scoped>
  .header {
    width: 100%;
    height: .88rem;
    background-color: #00bcd4;
    color: #fff;
    font-size: .36rem;

    display: flex;
    line-height: .88rem;
  }
  .header-left {
    margin-right: .4rem;
    font-weight: 700
    ;
  }

  .header-conter {
    flex: 1;
    background-color: #fff;
    margin: .11rem 0;
    color: #e4e7ea;
    line-height: .6rem;
    border-radius: .1rem;
    font-size: .28rem;
    padding-left: .2rem;
  }

  .header-right {
    margin-left: .1rem;
    padding: 0 .1rem;
    font-size: .28rem;
  }
</style>