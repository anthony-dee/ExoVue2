<template>
  <div class="">
    <pageHeader :headline="headline" :smText="smText"></pageHeader>
    <p>Select an option form the dropdown below and then press Generate Top Ten to ... well ... generate a top ten!</p>
    <select class="" name="topTenSelect">
      <option v-for="(option, index) in topTenOptions" :value="index">{{ option }}</option>
    </select>
    <button type="button" name="topTenGenerator">Generate Top Ten</button>
    <topten></topten>
  </div>
</template>

<script>
import pageHeader from '@/components/shared/pageHeader'
import topTen from '@/components/topten'
import {bus} from '@/main.js'
export default {
  name: 'toptens',
  props: ['planetData'],
  components: {
    pageHeader: pageHeader,
    topten: topTen
  },

  data () {
    return {
      nasaData: '',
      headline: 'Top Tens',
      smText: 'Everyone loves a ranked list',
      topTenOptions: [ 'Most Massive', 'Least Mass', 'Biggest', 'Smallest',
                  'Furthest Away', 'Closest','Longest Orbits', 'Shortest Orbits'
      ]
    }
  },
  created(){
    /*console.log(this.$props.planetData);
    this.nasaData = this.$props.planetData;
    console.log(this.nasaData);*/
    bus.$on('navToTopTens', (data) => {
      console.log(data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
