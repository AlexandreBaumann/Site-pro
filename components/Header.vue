<template>
  <header>
    <div class="primaryBar">
      <div class="logo">
        <nuxt-link to="/">
          <p>Alexandre Baumann</p>
        </nuxt-link>
      </div>
      <nav>
        <ul>
          <!-- <li><nuxt-link to="/developpement">Développement</nuxt-link></li>
          <li><nuxt-link to="/seo">SEO</nuxt-link></li> -->
          <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
          <li>
            <FormCTA />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
  
<script>
import FormCTA from '@/components/FormCTA.vue';

export default {
  components: {
    FormCTA,
  },
  name: 'Header'
}
</script>
  
<style scoped lang="scss">
@import '~/assets/variables.scss';

header {
  background-color: $dark-blue;
  height: $headerHeight;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;

  .primaryBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @include contentFrame;
  }

  .logo {
    font-size: 30px;
    font-weight: 600px;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;

    li {
      margin: 0 10px;
      font-size: 24px;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }
}
</style>
  