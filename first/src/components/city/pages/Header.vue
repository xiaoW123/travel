<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont" @click="headerClick">&#xe603;</span>
    </div> 
      <p>城市选择</p>
  </div>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    headerClick() {
      this.$router.push('/')
    }
  }
}
</script>


<style scoped>
  .header {
    position: relative;
    width: 100%;
    height: .88rem;
    background-color: #00bcd4;
    color: #fff;
    font-size: .36rem;
    margin-bottom: .2rem;

    display: flex;
    line-height: .88rem;

    z-index: 10;
  }
  .header-left {
    margin-right: .4rem;
    font-weight: 700;
  }

  .header p {
    font-size: .3rem;
    margin: 0 auto;
    padding-right: .35rem;
  }

  .header-left span {
    font-size: .4rem;
  }

</style>