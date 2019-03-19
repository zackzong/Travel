<template>
    <div class="header">
      <div class="header-left">
        <span class="iconfont back-icon">&#xeb99;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe782;</span>
        输入城市/景点/主题
      </div>
      <router-link to="/city">
        <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    line-height: .86rem
    display: flex
    background-color: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      text-align: center
      .back-icon
        display: block
    .header-input
      flex: 1
      line-height: .62rem
      background-color: #fff
      border-radius: .1rem
      margin: .12rem 0 .12rem .2rem
      padding-left: .2rem
      color: #ccc
    .header-right
      min-width: 1.2rem
      padding 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .32rem
        margin-left: -.06rem
</style>
