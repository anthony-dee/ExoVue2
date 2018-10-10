<template>
  <div id="app">
    <navmenu></navmenu>
    <router-view/>
  </div>
</template>

<script>
import navMenu from '@/components/nav'
export default {
  name: 'App',
  components: {
    navmenu: navMenu
  }
}
</script>

<style>
  @import '../src/assets/css/exovue.css';
</style>
