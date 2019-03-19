// 城市界面搜索
<template>
  <div>
    <div>
      <div class="search">
        <input  v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
      </div>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-result border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
      </ul>
      <div class="search-result border-bottom" v-show="hasItem">
        没有找到指定城市
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: ''
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('handleCityChange', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasItem () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .search
    position fixed
    top .7rem
    z-index 2
    height .7rem
    width 100%
    background $bgColor
    line-height .7rem
    text-align center
    font-size .3rem
    .search-input
      margin 0 auto
      background #fff
      width 94%
      height .5rem
      border-radius .06rem
      text-align center
      font-size .24rem
      padding 0 .1rem
  .search-content
    overflow hidden
    position absolute
    top 1.4rem
    left 0
    right 0
    bottom 0
    z-index 9
    background #eee
    .search-result
      line-height .6rem
      background #fff
      padding-left .15rem
      color #666
</style>
