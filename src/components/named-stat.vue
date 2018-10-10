<template>
  <div class="gridItem">
    <h3 class="statLabel">{{ text }}</h3>
    <p class="statText">{{planet}}</p>
    <router-link :to="'../planets/' +  planet   ">{{ planet }}</router-link>
    <p class="statText">{{ value }} {{ units }}</p>
  </div>
</template>

<script>

export default {
  name: 'namedstat',
  props: ['text', 'value', 'units', 'planet', 'planet' ],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
