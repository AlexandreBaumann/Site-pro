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
  
<style scoped lang="scss" > .card {
   padding: 1em;
   margin: 1em 0;
   width: 300px;
   height: 500px;
   padding: 20px;
   border-radius: 20px;
   background-color: $light-gray;
   cursor: pointer;

   @media (max-width:$tall-to-mid) {
     height: 300px;

   }

   img {
     height: 150px;
     width: 100%;
     object-fit: contain;

     @media (max-width:$tall-to-mid) {
       height: 100px;

     }
   }

   h3 {
     text-align: center;
     font-size: 26px;

   }

   p {
     font-size: 20px;
     line-height: 160%;
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

       }
     }
   }

 }

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

 .modal-content {
   background-color: white;
   position: relative;
   padding: 50px;
   border-radius: 20px;
   width: 70%;
   max-width: 50%;

   @media (max-width:$tall-to-mid) {
     padding: 30px;

   }

   img {
     height: 300px;
     width: 100%;
     object-fit: contain;

     @media (max-width:$tall-to-mid) {
       height: 200px;

     }
   }

   .close-btn {
     position: absolute;
     right: 20px;
     top: 10px;
     cursor: pointer;

     @media (max-width:$tall-to-mid) {}
   }

   h2 {
     text-align: center;
     font-size: 50px;

     @media (max-width:$tall-to-mid) {
       font-size: 30px;
     }

   }

   p {

     line-height: 160%;
     margin-top: 10px;
     margin-bottom: 10px;

     @media (max-width:$tall-to-mid) {
       font-size: 16px;
       margin-top: 5px;
       margin-bottom: 5px;
     }


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
         padding: 20px 30px 20px 30px;
         font-weight: 600;
         line-height: 160%;

         @media (max-width:$tall-to-mid) {
           padding: 10px 20px 10px 20px;
         }

       }


     }

   }

   .technologies {
     margin-top: 20px;
     margin-bottom: 0px;
     padding-left: 0px;
     row-gap: 5px;

     @media (max-width:$tall-to-mid) {
       margin-top: 5px;
       margin-bottom: 5px;
     }

     li {
       border-radius: 3px 0 0 3px;
       line-height: 34px;
       font-size: 22px;
       padding: 0 16px 0 30px;
       margin-right: 20px;
       border-radius: 20px;

       @media (max-width:$tall-to-mid) {
         line-height: 26px;
         font-size: 16px;
         padding: 0 10px 0 25px;

       }

       &::before {
         border-radius: 10px;
         box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
         height: 7px;
         width: 7px;
         top: 10px;
         left: 10px;

         @media (max-width:$tall-to-mid) {}

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


 }
</style>
  