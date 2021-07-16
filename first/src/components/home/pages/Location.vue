<template>
  <div class="location">
    <div class="location-left">
      <span class="left-item ">定位</span>
    </div>
    <div class="location-right">
      <span class="right-item">玩水季</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',

}
</script>

<style scopde>

  .location {
    display: flex;
    width: 100%;
    height: 1.4rem;
    color: #323634;
    font-size: .28rem;
    font-weight: 700;
    line-height: 1.4rem;
    text-align: center;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    background-color: #fff;
    margin-bottom: .4rem;
    /* border-bottom: 20px solid #f5f4f5; */
    /* box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, .2); */
  }

  .location-left {
    flex: 1;
    /* background-color: pink; */
    border-right: 1px solid #e0e0e0 ;

  }

  .location-right {
    flex: 1;
  }

  .location-left::before {
    content: '\e674';
    font-family: iconfont;
    margin-right: .1rem;
    color: #bbb9bb;
  }

  .location-right::before {
    content: '\e66f';
    font-family: iconfont;
    margin-right: .1rem;
    color: #bbb9bb;

  }
</style>