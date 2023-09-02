<template>
  <div>
    <div class="card" @click="showModal = true">
      <img :src="card.thumb" alt="Screenshot illustrant le projet" aria-hidden />
      <ul class="technologies">
        <li v-for="tech in card.technologies" :key="tech" :class="tech">
          {{ tech }}
        </li>
      </ul>
      <div class="cardText">
        <h3>{{ card.titre }}</h3>
        <p>{{ card.abstract }}</p>
      </div>
    </div>
    <CardModal :show="showModal" :card="card" @close="showModal = false" />
  </div>
</template>

<script>
import CardModal from './CardModal.vue'

export default {
  components: {
    CardModal,
  },
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    closeModal(event) {
      // Vérifie si l'événement provient de la div `.modal` elle-même
      if (event.target.classList.contains('modal')) {
        this.showModal = false
      }
    },
  },
}
</script>

<style scoped lang="scss">
.card {
  padding: 1em;
  margin: 1em 0;
  width: 300px;
  height: 400px;
  padding: 20px;
  border-radius: 20px;
  background-color: $light-gray;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease; // Animation douce pour l'effet de survol

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translate(2px, -2px);
  }

  @media (max-width:$tall-to-mid) {
    height: 250px;
  }

  @media (max-width:1300px) {
    height: 250px;
    width: 250px;
  }

  @media (max-width:$mid-to-tablet) {
    width: 400px;
  }


  @media (max-width:$tablet-to-smalltablet) {}

  @media (max-width:$smalltablet-to-phone) {
    width: 300px;

  }

  @media (max-width:$phone-to-smallphone) {
    width: 250px;
  }

  img {
    height: 150px;
    width: 100%;
    object-fit: contain;

    @media (max-width:$tall-to-mid) {
      height: 100px;

    }

    @media (max-width:$mid-to-tablet) {}

    @media (max-width:$tablet-to-smalltablet) {}

    @media (max-width:$smalltablet-to-phone) {}

    @media (max-width:$phone-to-smallphone) {}
  }

  h3 {
    text-align: center;
    font-size: 24px;

    @media (max-width:$tall-to-mid) {
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    @media (max-width:1300px) {
      font-size: 18px;
      margin-top: 7px;
      margin-bottom: 7px;
    }

    @media (max-width:$mid-to-tablet) {
      font-size: 24px;
    }

    @media (max-width:$tablet-to-smalltablet) {}

    @media (max-width:$smalltablet-to-phone) {
      font-size: 20px;
    }

    @media (max-width:$phone-to-smallphone) {
      font-size: 18px;

    }
  }

  p {
    font-size: 20px;
    line-height: 160%;

    @media (max-width:$tall-to-mid) {
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 0px;
    }

    @media (max-width:1300px) {
      font-size: 13px;
      margin-top: 5px;
    }

    @media (max-width:$mid-to-tablet) {
      font-size: 18px;
    }

    @media (max-width:$tablet-to-smalltablet) {
      font-size: 16px;
    }

    @media (max-width:$smalltablet-to-phone) {
      font-size: 14px;
    }

    @media (max-width:$phone-to-smallphone) {}
  }

  .technologies {
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 5px;

    @media (max-width:$tall-to-mid) {}

    li {
      line-height: 26px;
      font-size: 16px;
      padding: 0 10px 0 25px;
      margin-right: 20px;
      border-radius: 20px;

      @media (max-width:$tall-to-mid) {
        border-radius: 3px 0 0 3px;
        line-height: 20px;
        font-size: 10px;
        padding: 0 10px 0 15px;
        margin-right: 20px;
        border-radius: 20px;
      }

      @media (max-width:$mid-to-tablet) {}

      @media (max-width:$tablet-to-smalltablet) {}

      @media (max-width:$smalltablet-to-phone) {}

      @media (max-width:$phone-to-smallphone) {}

      &::before {
        content: "";
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);

        height: 7px;
        width: 7px;
        top: 10px;
        left: 10px;

        @media (max-width:$tall-to-mid) {
          height: 5px;
          width: 5px;
          top: 7px;
          left: 7px;
        }

        @media (max-width:$mid-to-tablet) {}

        @media (max-width:$tablet-to-smalltablet) {}

        @media (max-width:$smalltablet-to-phone) {}

        @media (max-width:$phone-to-smallphone) {}

      }
    }
  }

}
</style>
