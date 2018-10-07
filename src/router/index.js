import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FeaturedStats from '@/components/featured-stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'featuredstats',
      component: FeaturedStats
    }
  ]
})
