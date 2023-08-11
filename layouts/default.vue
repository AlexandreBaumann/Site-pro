<template>
  <div>

    <Head />
    <Header /> <!-- votre header -->
    <Nuxt /> <!-- le contenu de la page -->
    <Footer /> <!-- votre footer -->
  </div>
</template>
  
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Head from '~/components/Head.vue';

export default {
  components: {
    Header,
    Head,
    Footer
  }
}
</script>
<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>