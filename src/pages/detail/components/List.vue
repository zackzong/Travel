<template>
  <div class="container">
    <div class="item" v-for="(item, index) of categoryList" :key="index">
      <div class="item-title border-bottom">
        <span class="item-img"></span>
        {{item.title}}
      </div>
      <div v-if="item.children">
        <detail-list class="children" :categoryList="item.children">
        </detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  }
}
</script>

<style scoped lang="stylus">
.item-title
  height .7rem
  line-height .7rem
  .item-img
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-left: .2rem
    background-size: .4rem 3rem
    vertical-align middle
.children
  padding 0 .3rem
</style>
