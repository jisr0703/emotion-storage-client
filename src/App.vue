<template>
  <div id="app">
    <ESHeader />
    <div class="main">
      <router-view />
    </div>
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

<style scoped>
@import '@/styles/styles.css';
</style>