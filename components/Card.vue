<template>
  <div>
    <div class="card" @click="showModal = true">
      <img :src="card.thumb" />
      <ul class="technologies">
        <li v-for="tech in  card.technologies " :key="tech" :class="tech">{{ tech }}</li>
      </ul>
      <div class="cardText">
        <h3>{{ card.titre }}</h3>
        <p>{{ card.abstract }}</p>
      </div>
    </div>
    <div v-if="showModal" class="modal" @click="closeModal($event)">
      <div class="modal-content">
        <span class="close-btn" @click="showModal = false">&times;</span>
        <img :src="card.thumb" />
        <ul class="technologies">
          <li v-for="tech in  card.technologies " :key="tech" :class="tech">{{ tech }}</li>
        </ul>
        <h2>{{ card.titre }}</h2>
        <p v-html="card.resumeP1"></p>
        <div class="cardLastDiv">
          <p v-html="card.resumeP2"></p>
          <a :href="card.url"><button>Voir le projet<br />en détail</button></a>
        </div>
      </div>
    </div>

  </div>
</template>
  
<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    closeModal(event) {
      // Vérifie si l'événement provient de la div `.modal` elle-même
      if (event.target.classList.contains('modal')) {
        this.showModal = false;
      }
    }
  }
}
</script>
  
<style scoped lang="scss" >
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}


.card {
  border: 1px solid $dark-blue;
  padding: 1em;
  margin: 1em 0;
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 20px;
  background-color: $light-gray;
  cursor: pointer;

  img {
    height: 100px;
    width: 100%;
    object-fit: contain;
  }

  h3 {
    text-align: center;
  }

  .technologies {
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 5px;

    li {


      border-radius: 3px 0 0 3px;
      line-height: 20px;
      font-size: 10px;
      padding: 0 10px 0 15px;
      margin-right: 20px;
      border-radius: 20px;

      &::before {
        content: "";
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        height: 5px;
        width: 5px;
        top: 7px;
        left: 7px;

      }
    }
  }

}


.modal-content {
  background-color: white;
  position: relative;
  padding: 30px;
  border-radius: 10px;
  width: 70%;
  max-width: 50%;

  img {
    height: 200px;
    width: 100%;
    object-fit: contain;
  }

  .close-btn {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }

  h2 {
    text-align: center;
    font-size: 30px;
  }

  p {
    font-size: 16px;
    line-height: 160%;
    margin-top: 5px;
    margin-bottom: 5px;

  }

  .cardLastDiv {
    display: flex;
    align-items: center;

    p {
      width: 60%;
    }

    a {
      width: 40%;
      display: flex;
      justify-content: center;
      text-decoration: none;

      button {
        background-color: $yellow;
        color: $dark-blue;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
        font-weight: 600;
        line-height: 160%;
      }


    }

  }

  .technologies {
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 0px;
    row-gap: 5px;

    li {
      border-radius: 3px 0 0 3px;
      line-height: 26px;
      font-size: 16px;
      padding: 0 10px 0 25px;
      margin-right: 20px;
      border-radius: 20px;

      &::before {
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        height: 7px;
        width: 7px;
        top: 10px;
        left: 10px;
      }
    }
  }
}



.technologies {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {

    display: inline-block;
    color: white;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      background: #fff;

    }
  }

  .Next,
  .React {
    background-color: #8A3400;
  }

  .Nuxt,
  .Vue {
    background-color: #FF5500;
  }

  .SCSS,
  .CSS {
    background-color: #707070;
  }

  .Node,
  .Express {
    background-color: #8E4585;

  }

  .Python {
    background-color: #191970;
  }

  .MongoDB {
    background-color: #9932CC;

  }
}
</style>
  