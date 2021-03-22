<template>
  <div class="container">
    <Nav @click="this.$router.go(0)" />
    <nuxt :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import '@/assets/main.css'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  scrollToTop: true,
  components: {
    Nav,
    Footer,
  },
  css: ['@/assets/main.css']
}

</script>


