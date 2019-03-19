<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="isShowAbs"><span class="iconfont back-icon01">&#xeb99;</span></router-link>
    <div class="header-fixed" v-show="!isShowAbs" :style="opacityStyle">
      <router-link tag="div" to="/" class="icon-container"><span class="iconfont back-icon02">&#xeb99;</span></router-link>
      <div class="header-text">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShowAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.isShowAbs = false
      } else {
        this.isShowAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    top .1rem
    left .1rem
    width .7rem
    height .7rem
    line-height .7rem
    text-align center
    border-radius 50%
    background rgba(0, 0, 0, .6)
    .back-icon01
      color #fff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    width 100%
    height .8rem
    line-height: .8rem
    background-color: $bgColor
    color #fff
    z-index 10
    .icon-container
      width: .8rem
      float: left
      text-align: center
    .header-text
      padding-left 3.2rem
</style>
