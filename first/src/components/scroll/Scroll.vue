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
      scroll: ''
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.aaa,{
      probeType: 2,
      pullUpLoad: true,
      click: true,
      scrollX: true,
      // // mouseWheel: true,
      mouseWheel: true
    }) 
  },
  methods: {
    refresh() {
      this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
  }
}
</script>

<style>
  .wrapper {
    width: 100%;
    height: calc(100vh - 0.88rem);

    overflow: hidden;
  }
</style>