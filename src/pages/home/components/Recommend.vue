<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" :to="'/detail/' + item.id" class="item border-bottom" v-for="item of recommend" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc"> {{item.desc}}</p>
          <button class="item-button">查看详细</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend: Array
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .title
    height: .8rem
    line-height: .8rem
    padding-left: .6rem
    background: #f5f5f5
    font-size: .35rem
    font-weight: 500
  .item
    height: 2.3rem
    display: flex
    .item-img
      width: 2rem
      height: 2rem
      float: left
      margin-top: .2rem
      margin-left: .2rem
      border-radius: .1rem
    .item-info
      float: left
      flex: 1
      min-width: 0
      .item-title
        margin-top: .4rem
        margin-left: .2rem
        font-size: .35rem
        font-weight: 400
        min-width: 0
        ellipsis()
      .item-desc
        margin-top: .2rem
        margin-left: .2rem
        color: #ccc
        font-size: .28rem
        ellipsis()
      .item-button
        margin-top: .2rem
        background: #ff8d08
        margin-left: .3rem
        padding: .06rem .15rem
        border-radius: .08rem
        color: #fff
</style>
