<template>
  <div>

    <Head />
    <Header /> <!-- votre header -->
    <main>
      <Nuxt /> <!-- le contenu de la page -->
    </main>
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
  