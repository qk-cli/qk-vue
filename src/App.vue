<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/header/index.vue'
import '@/assets/css/global.css'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style scoped>

</style>
