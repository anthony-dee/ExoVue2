<template>
  <div class="">
    <pageHeader :headline="headline" :smText="smText"></pageHeader>
    <select class="" name="topTenSelect">
      <option v-for="(option, index) in topTenOptions" :value="index">{{ option }}</option>
    </select>
    <topTen></topTen>
  </div>



</template>

<script>
import pageHeader from '@/components/shared/pageHeader'
import topTen from '@/components/topten'
export default {
  name: 'planets',
  components: {
    pageHeader: pageHeader,
    topten: topTen
  },
  props: ['planetData'],
  data () {
    return {
      headline: 'Top Tens',
      smText: 'Everyone loves a ranked list',
      topTenOptions: [ 'Most Massive', 'Least Mass', 'Biggest', 'Smallest',
                  'Furthest Away', 'Closest','Longest Orbits', 'Shortest Orbits'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
