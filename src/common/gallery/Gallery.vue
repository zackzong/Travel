<template>
  <div class="container"  @click="handleImgsClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleImgsClick () {
      this.$emit('change')
    }
  }
}
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit
  .container
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background #000
    display flex
    flex-direction column
    justify-content center
    z-index 99
    .gallery-img
      width 100%
      flex 1
  .swiper-pagination
    bottom -2rem
    color #fff
</style>
