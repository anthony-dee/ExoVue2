import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FeaturedStats from '@/components/featured-stats'
import Planets from '@/components/planets.vue'
import Planet from '@/components/planet.vue'
import Toptens from '@/components/toptens.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'featuredstats',
      component: FeaturedStats
    },
    {
      path: '/planets',
      name: 'planets',
      component: Planets
    },
    {
      path: '/planets/:id',
      name: 'planet',
      component: Planet
    },
    {
      path: '/toptens',
      name: 'toptens',
      component: Toptens
    }
  ]
})
