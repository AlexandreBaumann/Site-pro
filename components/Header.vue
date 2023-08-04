<template>
    <header>
        <div class="primaryBar">
        <div class="logo">
          <nuxt-link to="/"><p>Alexandre Baumann</p></nuxt-link>
        </div>
        <nav>
          <ul>
            <li><nuxt-link to="/developpement">Développement</nuxt-link></li>
            <li><nuxt-link to="/seo">SEO</nuxt-link></li>
            <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </nav>
    </div>
    </header>

  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  </style>
  