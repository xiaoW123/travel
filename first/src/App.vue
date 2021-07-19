<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
}
</script>

<style scopde>
@import 'assets/css/reset.css';
@import 'assets/font/iconfont.css';
</style>
