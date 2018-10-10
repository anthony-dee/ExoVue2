<template>
  <div class="">
    <pageHeader :headline="id" :smText="smText"></pageHeader>
    <div class="planetData">
      <h2>Planet Data</h2>
      <table>
        <thead>
          <tr>
            <th>Stat</th><th>Vlaue</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key, index) in planetData">
            <td>{{ key }}</td><td>{{ value }}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import pageHeader from '@/components/shared/pageHeader'
export default {
  name: 'planets',
  components: {
    pageHeader: pageHeader
  },
  props: [],
  data () {
    return {
      id: this.$route.params.id,
      headline: '',
      smText: 'Test',
      planetData: ''
    }
  },
  created(){
    axios.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&where=pl_name like '" + this.id + "'&format=JSON")
    .then(response => {
        console.log(response.data)
        this.planetData = response.data[0];
    })
    .catch(e => {
      // this.errors.push(e)
      console.log(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
