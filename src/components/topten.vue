<template>
  <div class="">
    <h2>{{ title }}</h2>
    <table id="topTenTable">
      <thead>
        <tr>
          <th>Position</th><th>Planet Name</th><th>{{ colheader }}<br>({{ units }})</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(item, index) in topTenData">
          <td>{{ index + 1 }}</td><td><router-link :to="'../planets/' +  item[0]">{{ item[0] }}</router-link></td><td>{{ item[1] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'topten',
  props: ['title', 'colheader', 'units', 'topTenData'],
  components: {

  },

  data () {
    return {
      planetData: '',
      headline: 'Top Tens',
      smText: 'Everyone loves a ranked list',
      topTen: this.topTenData
    }
  },
  updated(){
    //console.log(this.topTen);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
