<template>
  <div id="app">
    <ESHeader />
    <router-view />
    <ESFooter />
  </div>
</template>

<script>
import ESHeader from '@/components/common/ESHeader.vue'
import ESFooter from '@/components/common/ESFooter.vue'

export default {
  name: 'app',
  components: {ESHeader,ESFooter}
}
</script>