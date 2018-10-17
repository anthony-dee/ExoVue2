<template>
  <div id="app">
    <navmenu></navmenu>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import navMenu from '@/components/nav'
import {bus} from '@/main.js'
export default {
  name: 'App',
  components: {
    navmenu: navMenu
  },
  data () {
    return {
      planetData: ''
    }
  },
  created() {
    console.log(this.planetData)
    axios.get(`https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_status,pl_hostname,pl_name,pl_masse,pl_rade,st_dist,pl_orbper,pl_pnum&order=dec&format=json`)
    .then(response => {
      // JSON responses are automatically parsed.
      //console.log(response.data)
      this.planetData = response.data;
      var data = response.data;
      bus.$emit('dataSender', data);
    })
    .catch(e => {
      // this.errors.push(e)
      console.log(e)
    })
  }
}
</script>

<style>
  @import '../src/assets/css/exovue.css';
</style>
