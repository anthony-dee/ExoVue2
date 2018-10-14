<template>
  <div class="">
    <pageHeader :headline="id" :smText="smText"></pageHeader>
    <div class="starData">
      <h2>Star Data</h2>
      <table>
        <thead>
          <tr>
            <th>Stat</th><th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key, index) in starData">
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
  name: 'star',
  components: {
    pageHeader: pageHeader
  },
  props: [],
  data () {
    return {
      id: this.$route.params.id,
      headline: 'Stars',
      smText: '',
      starData: '',
      starParams: ['pl_pnum', 'ra', 'dec', 'dec_str', 'ra_str']
    }
  },
  created(){
    axios.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&where=pl_hostname like '" + this.id + "'&format=JSON")
    .then(response => {
        //console.log(response.data)
        let sortedResponse = {};
        for (var key in response.data[0]) {
        if (this.starParams.indexOf(key) != -1  || key.indexOf('st_') >= 0 || key.indexOf('gaia_') >= 0 ) {
          //console.log(key)
            sortedResponse[key] = response.data[0][key]
        }
        }
        this.starData = sortedResponse;
        console.log(this.starData);
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
