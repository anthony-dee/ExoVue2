<template>
  <div class="">

  </div>
</template>

<script>

export default {
  name: 'topten',
  props: ['topTenData'],
  components: {

  },

  data () {
    return {
      planetData: '',
      headline: 'Top Tens',
      smText: 'Everyone loves a ranked list',
      topTen: ''
    }
  },
  updated(){
    this.topTen = topTenData
    console.log(this.topTen);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
