<template>
  <div class="activity">
    <div class="activity-left">
      <img src="~@/assets/img/mp.png" alt="">
    </div>
    <div class="activity-right">
      <img src="~@/assets/img/mp2.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeActivity'
}
</script>

<style scoped>
  .activity {
    width: 100%;
    height: 1.6rem;
    display: flex;
    font-size: .32rem;
    background-color: pink;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: .4rem;
    /* box-shadow: 0px 1px 20px 1px rgba(0, 0, 0, .2); */
  }

  .activity-left {
    flex: 1;
    border-right: 1px solid #e0e0e0 ;;
  }

  .activity-left img {
    width: 100%;
    height: 100%;
  }

  .activity-right {
    flex: 1;
  }

  .activity-right img {
    width: 100%;
    height: 100%;
  }
</style>