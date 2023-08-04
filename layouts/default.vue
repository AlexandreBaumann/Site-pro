<template>
    <div>
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
  
  export default {
    components: {
      Header,
      Footer
    }
  }
  </script>
  