<template>
  <div id="container1" class="container">
      <h1>{{ appName }}</h1>
      <h2>{{subhead}}</h2>
      <transition name="fade">
        <loader v-show="!sorted"></loader>
      </transition>
      <transition name="fade">
        <div v-show="sorted" class="grid">
          <countpara id="itemA" :value="confirmedPlanets.value" :text="confirmedPlanets.text"></countpara>
          <namedstat id="itemB" :queryFor="mostMass.queryFor" :units="mostMass.units" :value="mostMass.value" :text="mostMass.text" :planet="mostMass.planet"></namedstat>
          <namedstat id="itemC" :queryFor="leastMass.queryFor" :units="leastMass.units" :value="leastMass.value" :text="leastMass.text" :planet="leastMass.planet"></namedstat>
          <namedstat id="itemD" :queryFor="biggest.queryFor" :units="biggest.units" :value="biggest.value" :text="biggest.text" :planet="biggest.planet"></namedstat>
          <namedstat id="itemE" :queryFor="smallest.queryFor" :units="smallest.units" :value="smallest.value" :text="smallest.text" :planet="smallest.planet"></namedstat>
          <namedstat id="itemF" :queryFor="starWithMostPlanets.queryFor" :units="starWithMostPlanets.units" :value="starWithMostPlanets.value" :text="starWithMostPlanets.text" :planet="starWithMostPlanets.star"></namedstat>
          <namedstat id="itemG" :queryFor="furthest.queryFor" :units="furthest.units" :value="furthest.value" :text="furthest.text" :planet="furthest.planet"></namedstat>
          <namedstat id="itemH" :queryFor="closest.queryFor" :units="closest.units" :value="closest.value" :text="closest.text" :planet="closest.planet"></namedstat>
          <namedstat id="itemI" :queryFor="longestOrbit.queryFor" :units="longestOrbit.units" :value="longestOrbit.value" :text="longestOrbit.text" :planet="longestOrbit.planet"></namedstat>
          <namedstat id="itemJ" :queryFor="shortestOrbit.queryFor" :units="shortestOrbit.units" :value="shortestOrbit.value" :text="shortestOrbit.text" :planet="shortestOrbit.planet"></namedstat>
        </div>
      </transition>
    </div>
</template>

<script>
//import axios from 'axios'
import countpara from '@/components/count-para'
import namedstat from '@/components/named-stat'
import loader from '@/components/loader'
import {bus} from '@/main.js'

export default {
  name: 'featuredstats',
  components: {
    countpara: countpara,
    namedstat: namedstat,
    loader: loader
  },
  data () {
    return {
      appName: 'ExoVue',
      subhead: 'Exoplanet Data brought to you by VueJS and the NASA Exoplanet Archive',
      planetData: '',
      fetching: true,
      sorted: false,
      confirmedPlanets: {
          value: '',
          text: 'Confirmed Planets'
        },
      starWithMostPlanets: {
        text: 'Star with most planets',
        units: 'planets',
        value: '',
        star: '',
        queryFor: 'stars'
      },
      mostMass: {
        text: 'Highest mass',
        units: 'Earth masses',
        value: '',
        planet: '',
        queryFor: 'planets'
      },
      leastMass: {
        text: 'Lowest mass',
        units: 'Earth masses',
        value: '',
        planet: '',
        queryFor: 'planets'
      },
      biggest: {
        text: 'Biggest',
        units: 'Earth radii',
        value: '',
        planet: '',
        queryFor: 'planets'
      },
      smallest: {
        text: 'Smallest',
        units: 'Earth radii',
        value: '',
        planet: '',
        queryFor: 'planets'
      },
      closest: {
        text: 'Closest',
        units: 'parsecs',
        value: '',
        planet: '',
        queryFor: 'planets'
      },
      furthest: {
        text: 'Furthest',
        units: 'parsecs',
        value: '',
        planet: '',
        queryFor: 'planets'
      },
      longestOrbit: {
        text: 'Longest Orbit',
        units: 'days',
        value: '',
        planet: '',
        queryFor: 'planets'
      },
      shortestOrbit: {
        text: 'Shortest Orbit',
        units: 'days',
        value: '',
        planet: '',
        queryFor: 'planets'
      }
    }
  },
  created() {
    //console.log(this.planetData);
    bus.$on('dataSender', (data) => {
      //console.log(data);
      this.planetData = JSON.parse(localStorage.getItem('planetData'));
      //  console.log(this.planetData);
      //this.planetData = data;
      var maxWght, minWght, bigRad, smallRad, closePlan, furthPlan, longOrb, shortOrb, mostPlanets;
      var dataLength = this.planetData.length;
      var weights = [];
      var radii = [];
      var dists = [];
      var orbits = [];
      var numberPlanets = [];
      for (var i = 0; i < dataLength; i++) {
      //console.log(data.body[i]['pl_masse'])
        var thisItem = this.planetData[i]
        if(thisItem['pl_masse'] != null) {
          weights.push(thisItem['pl_masse'])
        }
        if(thisItem['pl_rade'] != null) {
          radii.push(thisItem['pl_rade'])
        }
        if(thisItem['st_dist'] != null){
          dists.push(thisItem['st_dist'])
        }
        if(thisItem['pl_orbper'] != null){
          orbits.push(thisItem['pl_orbper'])
        }
        if(thisItem['pl_pnum'] != null){
          numberPlanets.push(thisItem['pl_pnum'])
        }
      }
      maxWght = Math.max.apply(Math, weights);
      minWght = Math.min.apply(Math, weights);
      bigRad = Math.max.apply(Math, radii);
      smallRad = Math.min.apply(Math, radii);
      furthPlan = Math.max.apply(Math, dists);
      closePlan = Math.min.apply(Math, dists);
      longOrb = Math.max.apply(Math, orbits);
      shortOrb = Math.min.apply(Math, orbits);
      mostPlanets = Math.max.apply(Math, numberPlanets);
      for (var j = 0; j < dataLength; j++) {
        var thisItem = this.planetData[j];
        if (thisItem['pl_masse'] ==  maxWght) {
          this.mostMass.planet = thisItem['pl_name'];
          this.mostMass.value = maxWght.toLocaleString('en');
        }
        if (thisItem['pl_masse'] ==  minWght) {
          this.leastMass.planet = thisItem['pl_name'];
          this.leastMass.value = minWght;
        }
        if (thisItem['pl_rade'] == bigRad) {
          this.biggest.planet = thisItem['pl_name'];
          this.biggest.value =  bigRad;

        }
        if (thisItem['pl_rade'] == smallRad) {
          this.smallest.planet = thisItem['pl_name'];
          this.smallest.value = smallRad;
        }
        if (thisItem['st_dist'] == closePlan) {
          this.closest.planet = thisItem['pl_name'];
          this.closest.value = closePlan;
        }
        if (thisItem['st_dist'] == furthPlan) {
          this.furthest.planet = thisItem['pl_name'];
          this.furthest.value = furthPlan.toLocaleString('en');
        }
        if (thisItem['pl_orbper'] == longOrb) {
          this.longestOrbit.planet = thisItem['pl_name'];
          this.longestOrbit.value = longOrb.toLocaleString('en');
        }
        if (thisItem['pl_orbper'] == shortOrb) {
          this.shortestOrbit.planet = thisItem['pl_name'];
          this.shortestOrbit.value = shortOrb.toFixed(3);
        }
        if (thisItem['pl_pnum'] == mostPlanets) {
          this.starWithMostPlanets.star = thisItem['pl_hostname'];
          this.starWithMostPlanets.value = mostPlanets;
        }
      }
      this.confirmedPlanets.value = dataLength.toLocaleString('en');
      this.sorted = true;
    })
  },
  mounted(){
  var mobBreakPoint = 576;
  var screenWidth = screen.width;
  var container = document.getElementById('container1');
  var loader = document.getElementById('loader');
  var loaderMargin;
  if (screenWidth > mobBreakPoint) {
    loaderMargin  = ((container.clientWidth - 20) - 500) / 2
    loader.style.margin = '20px ' + loaderMargin + 'px'
  } else {
    loaderMargin  = ((container.clientWidth - 20) - loader.clientWidth) / 2
    loader.style.margin = '20px ' + loaderMargin + 'px'
  }
  var ticker = document.getElementById('ticker');
  var myInterval = setInterval(function(){
      //console.log(ticker);
      ticker.classList.toggle('hidden');
    if(!ticker){
      clearInterval(myInterval);
    }

  }, 500);
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
