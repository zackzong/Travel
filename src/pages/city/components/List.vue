<template>
  <div class="list" ref="wrapper">
    <div>
     <div class="area">
       <div class="title" ref="theTop">您的位置</div>
       <div class="button-list">
         <div class="button-wrapper">
           <div class="button">{{this.city}}</div>
         </div>
       </div>
     </div>
     <div class="area">
       <div class="title">热门城市</div>
       <div class="button-list">
         <div class="button-wrapper" v-for="item of hot" :key="item.id"  @click="handleCityClick(item.name)">
           <div class="button">{{item.name}}</div>
         </div>
       </div>
     </div>
     <div class="area">
       <div class="title">字母排序</div>
       <div class="button-list">
         <div class="button-wrapper-a" v-for="(item, key) of cities" :key="key" @click="handleClick">
           <div class="button-alphabet">{{key}}</div>
         </div>
       </div>
     </div>
     <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
       <p class="title">{{key}}</p>
       <div class="item-list" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
         <div class="item border-bottom">{{innerItem.name}}</div>
       </div>
     </div>
   </div>
   <div>
     <div class="goTop" @click="goTop">^</div>
   </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('handleCityChange', city)
      this.$router.push('/')
    },
    goTop () {
      this.scroll.scrollToElement(this.$refs.theTop)
    },
    handleClick (e) {
      const element = this.$refs[e.target.innerText][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .list
    overflow hidden
    position absolute
    top 1.4rem
    left 0
    right 0
    bottom 0
    .title
      height .5rem
      background #f5f5f5
      line-height .5rem
      padding-left .4rem
      font-size .24rem
    .button-list
      margin 0.1rem .1rem 0.1rem .3rem
      overflow hidden
      .button
        float left
        width 2rem
        height .45rem
        line-height .45rem
        text-align center
        border .02rem solid #ccc
        border-radius .1rem
        margin .1rem
      .button-wrapper-a
        text-decoration none
        color #333
        .button-alphabet
          float left
          width 1.1rem
          height .45rem
          line-height .45rem
          text-align center
          border .02rem solid #ccc
          border-radius .1rem
          margin .1rem
    .item
      height .5rem
      line-height .5rem
      padding-left .3rem
      font-size .27rem
  .goTop
    position fixed
    right .2rem
    bottom .2rem
    width .8rem
    height .7rem
    background rgba(0, 188, 212 , .5)
    z-index 7
    font-size 1rem
    color #fff
    text-align center
    border-radius .1rem
</style>
