<template>
  <div>
    <div class="banner"  @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont">&#xe615;</span>{{this.galleryImgs.length}}</div>
      </div>
    </div>
    <div>
      <common-gallery :imgs="galleryImgs" v-show="isShowImgs" @change="handleImgChange"></common-gallery>
    </div>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  components: {
    CommonGallery
  },
  data () {
    return {
      isShowImgs: false
    }
  },
  methods: {
    handleBannerClick () {
      this.isShowImgs = true
    },
    handleImgChange () {
      this.isShowImgs = false
    }
  }
}
</script>

<style scoped lang="stylus">
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      position absolute
      left 0
      right 0
      bottom 0
      display flex
      margin 0 .2rem
      margin-bottom .1rem
      color #fff
      .banner-title
        flex 1
        font-size .4rem
      .banner-number
        width 1.3rem
        height .4rem
        line-height .4rem
        text-align center
        background rgba(89, 95, 115, .8)
        font-size .3rem
        border-radius .1rem

</style>
