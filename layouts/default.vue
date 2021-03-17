<template>
  <div class="container">
    <Nav @click="this.$router.go(0)" v-if="conditional" />
      <nuxt :key="$route.fullPath" />
    <span v-if="conditional">
      <Footer v-if="!whiteFooter" />
    </span>
    <span v-if="conditional">
      <WhiteFooter v-if="whiteFooter" />
    </span>
  </div>
</template>

<script>
import '@/assets/main.css'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import WhiteFooter from '@/components/WhiteFooter.vue'

export default {
  scrollToTop: true,
  components: {
    Nav,
    Footer,
    WhiteFooter
  },
  data() {
    return {
      conditional: true,
      whiteFooter: false
    }
  },
  beforeMount() {
    // var route = this.$nuxt._route.fullPath
    // if(this.$nuxt._route.fullPath === '/kontakta-oss') {
    //   this.conditional = false
    // } else if (this.$nuxt._route.fullPath === '/bli-medlem') {
    //   this.conditional = false
    // } else {
    //   this.conditional = true
    // }
    // var routeArray = route.split('/')
    // console.log(routeArray[1])
    // var categoryRoute = routeArray[1]
    // if(categoryRoute === 'kategori') {
    //   this.whiteFooter = true
    // }
  },
    css: ['@/assets/main.css']
}

</script>


