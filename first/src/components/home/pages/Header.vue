<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe603;</span>
    </div>
    <div class="header-conter">
      <span class="iconfont">&#xe601;</span>
      输入城市/景点/游玩主题
    </div>
    <!-- <router-link to="/city"></router-link> -->
      <div class="header-right" @click="bnt1">
      {{city}}
      <span class="iconfont">&#xe604;</span>
      </div>
    
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Header',
  methods: {
    bnt1() {
      this.$router.push('/city').catch(err => err)
    }
  },
  computed: {
    ...mapState(['city'])
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

    display: flex;
    line-height: .88rem;

    z-index: 10;
  }
  .header-left {
    margin-right: .4rem;
    font-weight: 700;
  }

  .header-left span {
    font-size: .4rem;
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