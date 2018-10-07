<template>
  <div id="loader" class="flex">
    <div id="animation">
      <div id="lgCircle" class="circle flex">
        <div id="mdCircle" class="circle flex">
          <div id="smCircle" class="circle"></div>
        </div>
      </div>
    </div>
    <div>
      <h1>Fetching Data <span id="ticker">.</span></h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'loader',
  props:['state'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
