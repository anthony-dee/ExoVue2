<template>
  <div class="navbar">
    <!--<router-link v-for="nav in mainNavLinks" class="" :to="nav[1]">{{ nav[0] }}</router-link>-->
    <router-link class="" :to="'/'">Home</router-link>
    <router-link class="" :to="'/planets'">Planets</router-link>
    <router-link class="" :to="'/stars'">Stars</router-link>
    <router-link class="" :to="'/toptens'" v-on:click.native="moveData()">Top Tens</router-link>
  </div>
</template>

<script>
import {bus} from '@/main.js'
export default {
  name: 'navmenu',
  props: ['planetData'],
  data () {
    return {
        dataObj: '',
        mainNavLinks: [
          ['Home', '/'],
          ['Planets', '/planets'],
          ['Stars', '/stars'],
          ['Top Tens',  '/toptens']
        ]
    }
  },
  methods: {
    moveData: function(){
      console.log('skljfsadkjf');
      bus.$emit('navToTopTens', this.dataObj);
    }
  },
  created() {

    bus.$on('dataSender', (data) => {
      this.dataObj = data;
      console.log(this.dataObj);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
