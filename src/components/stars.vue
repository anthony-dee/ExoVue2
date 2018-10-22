<template>
  <div class="container">
    <pageHeader :headline="headline" :smText="smText"></pageHeader>
  </div>
</template>

<script>
import pageHeader from '@/components/shared/pageHeader'
export default {
  name: 'stars',
  components: {
    pageHeader: pageHeader
  },
  props: ['topTenData'],
  data () {
    return {
      headline: 'Stars',
      smText: 'Fireflies that got stuck up in that big bluish-black thing',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
