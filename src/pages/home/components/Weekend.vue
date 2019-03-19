<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekend" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc"> {{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    weekend: Array
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
    height: 4rem
    display: flex
    flex-direction: column
    .item-img
      height: 2.8rem
      margin: .1rem
      margin-top: .2rem
      border-radius: .1rem
    .item-info
      float: left
      flex: 1
      min-width: 0
      .item-title
        margin-top: .1rem
        margin-left: .2rem
        font-weight: 400
        min-width: 0
        ellipsis()
      .item-desc
        margin-top: .1rem
        margin-left: .2rem
        font-size: .26rem
        color: #ccc
        ellipsis()
</style>
