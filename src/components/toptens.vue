<template>
  <div class="container">
    <pageHeader :headline="headline" :smText="smText"></pageHeader>
    <p>Select an option form the dropdown below and then press Generate Top Ten to ... well ... generate a top ten!</p>
    <select id="topTenSelect" class="" name="topTenSelect">
      <option v-for="(option, index) in topTenOptions" :value="index" :data-sort="option.sort" :data-param="option.param" :data-units="option.units" :data-col-header="option.colheader">{{ option.text }}</option>
    </select>
    <button id="genTopTen" type="button" name="topTenGenerator" @click="sortTopTenData()">Generate Top Ten</button>
    <topten :title="topTenTitle" :colheader="topTenColHeader" :units="topTenUnits" :topTenData="sortedTopTen"></topten>
  </div>
</template>

<script>
import pageHeader from '@/components/shared/pageHeader'
import topTen from '@/components/topten'
import {bus} from '@/main.js'
export default {
  name: 'toptens',
  //props: ['planetData'],
  components: {
    pageHeader: pageHeader,
    topten: topTen
  },

  data () {
    return {
      planetData:  '',
      headline: 'Top Tens',
      smText: 'Everyone loves a ranked list',
      topTenOptions: [
        {text: 'Most Massive', param: 'pl_masse', sort: 'desc', units: 'Earth masses', colheader: 'Planet Mass'},
        {text: 'Least Massive', param: 'pl_masse', sort: 'asc', units: 'Earth masses', colheader: 'Planet Mass'},
        {text: 'Biggest Exoplanets', param: 'pl_rade', sort: 'desc', units: 'Earth radii', colheader: 'Planet Radius'},
        {text: 'Smallest Exoplanets', param: 'pl_rade', sort: 'asc', units: 'Earth radii',  colheader: 'Planet Radius'},
        {text: 'Furthest Away', param: 'st_dist', sort: 'desc', units: 'parsecs', colheader: 'Distance to Planetary System'},
        {text: 'Closest', param: 'st_dist', sort: 'asc', units: 'parsecs', colheader: 'Distance to Planetary System'},
        {text: 'Longest Orbits', param: 'pl_orbper', sort: 'desc', units: 'days', colheader: 'Orbital Period'},
        {text: 'Shortest Orbit', param: 'pl_orbper', sort: 'asc', units: 'days', colheader: 'Orbital Period'}
      ],
      sortedTopTen: '',
      topTenTitle: '',
      topTenColHeader: '',
      topTenUnits: ''
    }
  },
  methods: {
    logChoice: function(){
      const select = document.getElementById('topTenSelect');
      console.log(select.options[select.selectedIndex].getAttribute('data-param'));
      console.log(select.options[select.selectedIndex].getAttribute('data-sort'));
      console.log(select.value);
    },
    sortTopTenData: function(){
      const select = document.getElementById('topTenSelect');
      const param = select.options[select.selectedIndex].getAttribute('data-param');
      const sort = select.options[select.selectedIndex].getAttribute('data-sort');
      const units = select.options[select.selectedIndex].getAttribute('data-units');
      const col3header = select.options[select.selectedIndex].getAttribute('data-col-header');
      this.topTenTitle = select.options[select.selectedIndex].innerText
      this.topTenColHeader = col3header;
      this.topTenUnits = units;
      let preTopTenArr = [];
      for (var i = 0; i < this.planetData.length; i++) {
        let thisItem = this.planetData[i];
          if (thisItem[param] != null) {
            preTopTenArr.push([thisItem['pl_name'],thisItem[param]])
          }
      }
      preTopTenArr.sort(function(a, b){
          a = a[1];
          b = b[1];
          if (sort == 'asc') {
            return a < b ? -1 : (a > b ? 1 : 0);
          }
          if (sort == 'desc') {
            return a > b ? -1 : (a < b ? 1 : 0);
          }
      })
      //console.log(preTopTenArr);
      preTopTenArr.splice(10);
      this.sortedTopTen = preTopTenArr;
      //console.log(this.sortedTopTen);
    }

  },
  created(){
    //console.log(JSON.parse(localStorage.getItem('planetData')));
    this.planetData = JSON.parse(localStorage.getItem('planetData'));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
