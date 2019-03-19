// 城市界面头部
<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont back-icon">&#xeb99;</span>
      </div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    position fixed
    width 100%
    z-index 2
    height .7rem
    width 100%
    background $bgColor
    color: #ffffff
    line-height .7rem
    text-align center
    font-size .3rem
    .back-icon
      position absolute
      top 0
      left .1rem
      bottom 0
</style>
