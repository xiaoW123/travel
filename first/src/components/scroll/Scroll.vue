<template>
  <div class="wrapper" ref="aaa">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.aaa,{
      probeType: 2,
      pullUpLoad: true,
      click: true,
      mouseWheel: true,
    }) 
  }
}
</script>

<style>
  .wrapper {
    width: 100%;
    height: calc(100vh - 0.88rem);

    overflow-y: hidden;
  }
</style>