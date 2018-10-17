<template>
  <div class="gridItem">
    <h3 class="statLabel">{{ text  }}</h3>
    <!--<p class="stat">{{ planet }}</p>-->
    <router-link class="statText" :to="'../' + queryFor + '/' +  planet   ">{{ planet }}</router-link>
    <p class="statText">{{ value }} {{ units }}</p>
  </div>
</template>

<script>

export default {
  name: 'namedstat',
  props: ['text', 'value', 'units', 'planet', 'queryFor'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
