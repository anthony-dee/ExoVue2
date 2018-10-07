<template>
  <div class="gridItem" id="confPlanets">
    <h3 class="statLabel"> {{ text }}</h3>
    <p class="statText">{{ value }}</p>
  </div>
</template>

<script>

export default {
  name: 'countpara',
  props: ['value', 'text'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
