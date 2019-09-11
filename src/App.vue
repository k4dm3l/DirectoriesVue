<template>
  <div id="app">
    <NavbarTest></NavbarTest>
    
      <router-view/>
      
    <FooterTest></FooterTest>
  </div>
</template>
<script>

import NavbarTest from '@/components/Navbar.vue'
import FooterTest from '@/components/Footer.vue'

export default {
  components: {
    NavbarTest,
    FooterTest
  }
}

</script>
<style>

</style>
