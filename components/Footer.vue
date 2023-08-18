<template>
  <footer>
    <nav>
      <ul>

        <li><nuxt-link to="/mentions-legales" :class="{ active: $route.path === '/mentions-legales' }">Mentions
            légales</nuxt-link></li>
        <li><nuxt-link to="/politique-de-confidentialite"
            :class="{ active: $route.path === '/politique-de-confidentialite' }">Politique de confidentialité</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>
  
<script>
export default {
  name: 'Footer'
}
</script>
  
<style scoped lang="scss">
@import '~/assets/variables.scss';

footer {
  background-color: $dark-blue;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: 30px;

  .container {
    max-width: 1200px;
    margin: auto;
  }

  nav ul {
    list-style-type: none;
    padding: 0;

    li {
      display: inline;
      margin: 0 10px;

      a {
        color: #fff;
        text-decoration: none;

        :hover {
          text-decoration: underline;
          text-underline-offset: 10px;

        }

      }
    }
  }
}
</style>
  