<template>
  <header>
    <div class="primaryBar">
      <div class="logo">
        <nuxt-link to="/">
          <p>Alexandre Baumann</p>
        </nuxt-link>
      </div>
      <nav class="navBarWide">
        <ul>
          <li>
            <nuxt-link to="/a-propos" :class="{ active: $route.path === '/a-propos' }">
              A propos
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/portfolio" :class="{ active: $route.path === '/portfolio' }">
              Portfolio
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" :class="{ active: $route.path === '/contact' }">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="menuButton" @click="toggleMenu">
        <span :class="{ 'active1': isMenuOpen }"></span>
        <span :class="{ 'active2': isMenuOpen }"></span>
        <span :class="{ 'active3': isMenuOpen }"></span>
      </div>
      <transition name="slide-fade">
        <nav v-show="isMenuOpen" class="navBarSmall" :class="{ 'isOpen': isMenuOpen }">
          <ul>
            <li>
              <nuxt-link to="/a-propos" :class="{ active: $route.path === '/a-propos' }">
                A propos
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/portfolio" :class="{ active: $route.path === '/portfolio' }">
                Portfolio
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" :class="{ active: $route.path === '/contact' }">
                Contact
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </transition>

    </div>
  </header>
</template>
  
<script>
import FormCTA from '@/components/FormCTA.vue';

export default {
  components: {
    FormCTA,
  },
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>
  
<style scoped lang="scss">
@import '~/assets/variables.scss';

header {
  background-color: $dark-blue;
  height: $headerHeight-tall;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;

  @media (max-width: $tall-to-mid) {
    height: $headerHeight-mid;
  }

  .primaryBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    @include contentFrame;
  }

  .logo {
    font-size: 30px;
    font-weight: 600;

    @media (max-width:$smalltablet-to-phone) {
      font-size: 20px;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }


}

.active {
  text-decoration: underline;
  text-underline-offset: 10px;
}

//////////////////////////////////// NAVBARWIDE //////////////////////////
.navBarWide {
  height: 100%;
  display: flex;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
    margin: 0px;
    display: flex;
    align-items: center;

    @media (max-width:$smalltablet-to-phone) {
      display: none;
    }

    li {
      margin: 0 10px;
      font-size: 30px;
      height: 100%;
      display: flex;
      align-items: center;

      a {
        height: 100%;
        display: flex;
        align-items: center;

      }

      :hover {
        text-decoration: underline;
      }

      @media (max-width: $tall-to-mid) {
        font-size: 26px;

      }

      @media (max-width:$mid-to-tablet) {
        font-size: 22px;
      }

      @media (max-width:$tablet-to-smalltablet) {}

      @media (max-width:$smalltablet-to-phone) {}

      @media (max-width:$phone-to-smallphone) {}
    }

  }
}

.menuButton {
  flex-direction: column;
  width: 50px;
  cursor: pointer;
  display: none;

  @media (max-width:$smalltablet-to-phone) {
    display: flex;
  }

  span {
    background: white;
    border-radius: 10px;
    height: 5px;
    margin: 5px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    &:nth-of-type(1) {
      width: 50%;

      &.active1 {
        transform-origin: bottom;
        transform: rotateZ(45deg) translate(5px, 0px);
      }
    }

    &:nth-of-type(2) {
      width: 100%;

      &.active2 {
        transform-origin: top;
        transform: rotateZ(-45deg);
      }
    }

    &:nth-of-type(3) {
      width: 75%;

      &.active3 {
        transform-origin: bottom;
        width: 50%;
        transform: translate(20px, -8px) rotateZ(45deg);
        /* Ajuster la transformation */
      }
    }
  }
}

.navBarSmall {
  position: absolute;

  top: $headerHeight-mid;
  right: 0;
  background-color: $dark-blue;
  z-index: 10;
  width: 50%;
  border-radius: 0px 0px 0px 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

  transform: translateY(-100%); // Cachez le menu en le déplaçant au-dessus
  transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  &.isOpen {
    transform: translateY(0);
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding-left: 0px;

    li {
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 25px;

    }
  }

}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6), opacity 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
  