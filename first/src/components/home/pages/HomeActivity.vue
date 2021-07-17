<template>
  <div class="activity">
    <div v-for="item,index in avtivityData" :key="index" class="activity-item">
      <div class="activity-div">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeActivity',
  props: {
    avtivityData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .activity {
    /* width: 100vw; */
    height: 1.2rem;
    display: flex;
    font-size: .32rem;
    /* background-color: pink; */
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: .4rem;
    /* box-shadow: 0px 1px 20px 1px rgba(0, 0, 0, .2); */
  }
  .activity-item {
    display: flex;
  }

  .activity-div {
    flex: 1;
    /* width: 50vw; */
  }

  .activity-div img {
    width: 50vw;
    height: 1.2rem;
  }


</style>