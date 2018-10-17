<template>
  <div class="navbar">
    <router-link v-for="nav in mainNavLinks" class="" :to="nav[1]">{{ nav[0] }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'navmenu',
  props: ['planetData'],
  data () {
    return {
        mainNavLinks: [
          ['Home', '/'],
          ['Planets', '/planets'],
          ['Stars', '/stars'],
          ['Top Tens',  '/toptens']
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
