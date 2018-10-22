<template>
  <div class="container">
    <pageHeader :headline="headline" :smText="smText"></pageHeader>
    <p>Select an option form the dropdown below and then press Generate Top Ten to ... well ... generate a top ten!</p>
    <select id="topTenSelect" class="" name="topTenSelect" @change="logChoice()">
      <option v-for="(option, index) in topTenOptions" :value="index" :data-sort="option.sort" :data-param="option.param">{{ option.text }}</option>
    </select>
    <button id="genTopTen" type="button" name="topTenGenerator" @click="sortTopTenData()">Generate Top Ten</button>
    <topten :topTenData="sortedTopTen"></topten>
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
        {text: 'Most Massive', param: 'pl_masse', sort: 'desc'},
        {text: 'Least Massive', param: 'pl_masse', sort: 'asc'},
        {text: 'Biggest Exoplanets', param: 'pl_rade', sort: 'desc'},
        {text: 'Smallest Massive', param: 'pl_rade', sort: 'asc'},
        {text: 'Furthest Away', param: 'st_dist', sort: 'desc'},
        {text: 'Closest', param: 'st_dist', sort: 'asc'},
        {text: 'Longest Orbits', param: 'pl_orbper', sort: 'desc'},
        {text: 'Shortest Orbit', param: 'pl_orbper', sort: 'asc'},
      ],
      sortedTopTen: ''
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
      const param = select.options[select.selectedIndex].getAttribute('data-param')
      const sort = select.options[select.selectedIndex].getAttribute('data-sort')
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
      console.log(preTopTenArr);
      preTopTenArr.splice(10);
      this.sortedTopTen = preTopTenArr;
      console.log(this.sortedTopTen);
    }

  },
  created(){
    console.log(JSON.parse(localStorage.getItem('planetData')));
    this.planetData = JSON.parse(localStorage.getItem('planetData'));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
