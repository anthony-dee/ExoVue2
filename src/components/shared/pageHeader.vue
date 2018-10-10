<template>
  <div class="page-header">
    <h1> {{ headline }} <small>{{ smText }}</small>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'pageHeader',
  props: ['headline', 'smText'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
