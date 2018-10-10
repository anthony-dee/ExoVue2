<template>
  <pageHeader :headline="headline" :smText="smText"></pageHeader>
</template>

<script>
import pageHeader from '@/components/shared/pageHeader'
export default {
  name: 'planets',
  components: {
    pageHeader: pageHeader
  },
  props: [],
  data () {
    return {
      headline: 'Planets',
      smText: 'Children of the Stars',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
