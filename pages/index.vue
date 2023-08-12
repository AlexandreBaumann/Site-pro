<template>
  <main>
    <section class="fullheightdiv accroche">
      <div class="accrochetext">
        <p class="annonce">
          Votre <strong>site internet</strong>: une boutique accessible à tous
        </p>
        <p class="soustitre">
          Je vous aide à exploiter ce potentiel énorme de
          <strong>revenus</strong> et de <strong>visibilité</strong>
        </p>
      </div>
      <img src="/boutique.webp" alt="Boutique" class="background" />
    </section>
    <section class="fullheightdiv problematisation">
      <div class="problemaccroche">
        <p>Plus qu'une opportunité: votre identité</p>
      </div>
      <div class="problemDiv">
        <div class="problemIcones">
          <font-awesome-icon :icon="['fas', 'globe']" />
          <font-awesome-icon :icon="['far', 'comments']" />
          <font-awesome-icon :icon="['fas', 'search']" />
        </div>
        <div class="problemTextes">
          <p>
            Votre site internet fait la <strong>vente</strong> pour vous:
            anticipez les questions et gagnez du temps!
          </p>
          <p>
            Des milliards de personnes posent des <strong>questions</strong> aux
            moteurs de recherches. Combien de clients laissez-vous passer ?
          </p>
          <p>
            Vos prospects vont <strong>vous chercher</strong> sur internet. Que
            vont-ils trouver ?
          </p>
        </div>
      </div>
    </section>
    <section class="fullheightdiv prestationsGenTitle">
      <h1>Développement web et SEO</h1>
      <p>
        Je vous aide à <strong>développer vos sites internet</strong> et à
        <strong>optimiser votre visibilité</strong> dans les moteurs de recherche (SEO, Search
        Engine Optimization).
      </p>
    </section>
    <section class="fullheightdiv prestationsGenItem">
      <h2>Référencement naturel (SEO)</h2>
      <div class="prestationSeo">
        <div>
          <h3>L'audit</h3>
          <p>
            Si vous avez un site internet et que vous souhaitez le conserver,
            il faut faire un bilan avant d'engager des actions. Un
            <strong>audit SEO et accessibilité</strong> vous permet
            d'identifier les problèmes techniques de vos sites et de vérifier
            le respect des bonnes pratiques.
          </p>
        </div>
        <div>
          <h3>L'étude marché SEO</h3>
          <p>
            Le <strong>benchmark concurrentiel</strong> et la
            <strong>recherche de mots-clés</strong> vous donne une nouvelle
            perspective sur votre marché et vos concurrents. Découvrez votre
            futur produit phare !
          </p>
        </div>
        <div>
          <h3>Plan d'action et suivi</h3>
          <p>
            Je vous aide à concevoir votre <strong>plan d'action</strong> et à
            <strong>suivre</strong> vos progrès, pour faire rapidement le
            retour d'expérience et identifier les axes d'amélioration.
          </p>
        </div>

        <img src="seo.webp" alt="nuage de mots relatifs au SEO" />
      </div>
    </section>
    <section class="fullheightdiv prestationsGenItem">
      <h2>Développement web</h2>
      <div class="prestationDev">
        <div>
          <h3>Langages</h3>
          <p>
            Outre les bases (HTML, dont <strong>accessibilité</strong> et
            <strong>marquage Schema</strong>, - CSS et SCSS), j'ai développé
            plusieurs projets utilisant soit un framework JS (<strong>Next-React</strong>
            et <strong>Vue-Nuxt</strong>), soit un thème
            <strong>wordpress</strong> personnalisé.
          </p>
        </div>
        <div>
          <h3>Fonctionnalités</h3>
          <p>
            Parmi les fonctionnalités, il y a évidemment le
            <strong>formulaire sécurisé</strong>, mais aussi la génération de
            méta-données à partir d'une base de données et un backoffice pour
            alimenter cette dernière.
          </p>
        </div>
        <p>
          Je développe en détail mes réalisations, leurs fonctionnalités et
          les difficultés rencontrées, dans le <strong><a href=#porforlio>portfolio</a></strong>.
        </p>
        <div class="devLangLogos">
          <img src="javascript-logo.png" alt="Logo javascript" />
          <img src="logoreact.png" alt="Logo React" />
          <img src="logovue.png" alt="Logo Vue" />
          <img src="next-js.svg" alt="Logo Next" />
          <img src="nuxtlogo.svg" alt="Logo Nuxt" class="logoLong" />
          <img src="WordPress_logo.svg" alt="Logo Wordpress" class="logoLong" />
        </div>

      </div>
    </section>
    <section class="formCTA">
      <FormCTA />

    </section>
    <section class="fullheightdiv prestationsSpé">
      <h2>Prestations spécifiques</h2>
      <div>
        <div class="prestationSpéItem">
          <h3>Mini-audit</h3>
          <div class="prestationSpéDescription">
            <p>Faire un audit complet peut prendre entre une demi-journée et plusieurs jours. Il est souvent plus optimal
              d'en faire de petits, peu cher. </p>
            <p>Je propose des <strong>mini-audits</strong> à <strong>90€</strong>, qui vous donnent l'essentiel en
              quelques minutes.</p>
          </div>
          <p class="cta">Plus de détails</p>
        </div>
        <div class="prestationSpéItem">
          <h3>Cartographie SEO</h3>
          <div class="prestationSpéDescription">
            <p>Ma cartographie SEO est une plongée au coeur de votre secteur. Je combine l'utilisation des <strong>outils
                SEO</strong> avec toutes les <strong>sources d'information</strong> disponibles pour vous donner une
              vision précise des opportunités et
              menaces qui se dessinent sur le web dans <strong>votre secteur</strong>.
            </p>
          </div>
          <p class="cta">Plus de détails</p>
        </div>
        <div class="prestationSpéItem">
          <h3>Site internet tout inclus</h3>
          <div class="prestationSpéDescription">

            <p>Je vous propose un petit site internet basique, personnalisé, suivant les <strong>bonnes pratiques</strong>
              SEO
              et accessibilité et avec jusqu'à 10 pages de contenus. C'est le travail d'un designer, un développeur, un
              SEO et un rédacteur pour <strong>1900€</strong>.</p>
          </div>
          <p class="cta">Plus de détails</p>
        </div>
      </div>
    </section>
    <section class="fullheightdiv portfolioDiv">
      <div class="portfolioContainer">
        <h2>Portfolio</h2>
        <article class="portfolio">

          <Card v-for="cardData in topInterestProjects" :key="cardData._id" :card="cardData" />
        </article>
        <p class="lienPortfolio">
          <nuxt-link to="/portfolio">Voir tout le portfolio</nuxt-link>
        </p>
      </div>
    </section>
    <section class="fullheightdiv formulaire">
      <Form />
    </section>

  </main>
</template>

<script>
//////////////////////////////////////SCRIPTS///////////////////////////////////////////////
//////////////////////////////////////SCRIPTS///////////////////////////////////////////////
//////////////////////////////////////SCRIPTS///////////////////////////////////////////////
//////////////////////////////////////SCRIPTS///////////////////////////////////////////////

import FormCTA from '@/components/FormCTA.vue';
import Card from '~/components/Card.vue';
import { mapGetters } from 'vuex';
import Form from '@/components/Form.vue';

export default {
  components: {
    FormCTA,
    Card,
    Form
  },
  computed: {
    ...mapGetters('data', ['topInterestProjects'])
  }

};

</script>

<style scoped lang="scss">
//////////////////////////////////////STYLES///////////////////////////////////////////////
/////////////////////////////////////////STYLES///////////////////////////////////////////////
//////////////////////////////////////STYLES///////////////////////////////////////////////
//////////////////////////////////////STYLES///////////////////////////////////////////////
@import '~/assets/variables.scss';


//////////////////////////////////////Accroche///////////////////////////////////////////////

.accroche {

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .background {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -4;
    filter: brightness(50%);
  }

  .accrochetext {
    background-color: white;
    border-radius: 20px;
    padding: 50px;
    margin: 50px;
    text-align: center;
    width: 50%;

    @media (max-width:$tall-to-mid) {
      padding: 30px;
    }

    @media (max-width:1300px) {
      padding: 20px;
    }

    @media (max-width:$mid-to-tablet) {
      padding: 50px;
      width: 70%;

    }

    @media (max-width:$tablet-to-smalltablet) {
      padding: 30px;
      ;
    }

    @media (max-width:$smalltablet-to-phone) {
      padding: 20px;
    }

    @media (max-width:$phone-to-smallphone) {}

    .annonce {
      font-size: 50px;
      font-weight: 600;
      line-height: 180%;

      @media (max-width:$tall-to-mid) {
        line-height: 160%;
      }

      @media (max-width:1300px) {
        font-size: 40px;
      }

      @media (max-width:$mid-to-tablet) {
        font-size: 60px;
      }

      @media (max-width:$tablet-to-smalltablet) {
        font-size: 50px;
      }

      @media (max-width:$smalltablet-to-phone) {
        font-size: 30px;
      }

      @media (max-width:$phone-to-smallphone) {}

    }

    .soustitre {
      font-size: 30px;
      line-height: 180%;

      @media (max-width:$tall-to-mid) {}

      @media (max-width:1300px) {
        font-size: 24px;

      }

      @media (max-width:$mid-to-tablet) {
        font-size: 40px;
      }

      @media (max-width:$tablet-to-smalltablet) {
        font-size: 34px;
      }

      @media (max-width:$smalltablet-to-phone) {
        font-size: 20px;
      }

      @media (max-width:$phone-to-smallphone) {}
    }
  }


}




//////////////////////////////////////Problematisation///////////////////////////////////////////////

.problematisation {
  @include contentFrame;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    text-align: center;
  }

  .problemaccroche {
    font-size: 50px;
    font-weight: 600;

    @media (max-width:$tall-to-mid) {}

    @media (max-width:$mid-to-tablet) {
      font-size: 70px;
      line-height: 160%;
    }

    @media (max-width:$tablet-to-smalltablet) {
      font-size: 50px;
    }

    @media (max-width:$smalltablet-to-phone) {
      font-size: 40px;

    }

    @media (max-width:$phone-to-smallphone) {}
  }

  .problemDiv {

    .problemIcones,
    .problemTextes {
      gap: 3.3%;
    }

    .problemIcones svg,
    .problemTextes p {
      width: 30%;
    }

    .problemIcones {
      width: 100%;
      display: flex;
      font-size: 90px;
      margin-top: 50px;
      margin-bottom: 50px;

      @media (max-width:$tall-to-mid) {
        margin-top: 0px;
        margin-bottom: 20px;
      }

      @media (max-width:$mid-to-tablet) {
        font-size: 120px;
      }

      @media (max-width:$tablet-to-smalltablet) {}

      @media (max-width:$smalltablet-to-phone) {}

      @media (max-width:$phone-to-smallphone) {}
    }

    .problemTextes {
      display: flex;
      width: 100%;

      p {
        font-size: 24px;
        line-height: 180%;

        @media (max-width:$tall-to-mid) {
          font-size: 20px;

        }

        @media (max-width:$mid-to-tablet) {
          font-size: 26px;
        }

        @media (max-width:$tablet-to-smalltablet) {}

        @media (max-width:$smalltablet-to-phone) {}

        @media (max-width:$phone-to-smallphone) {}
      }

    }
  }
}

//////////////////////////////////////Prestations gen///////////////////////////////////////////////


.prestationsGenTitle {
  @include contentFrame;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-size: 70px;
    text-align: center;

    @media (max-width:$tall-to-mid) {
      font-size: 50px;
    }

    @media (max-width:$mid-to-tablet) {
      font-size: 70px;
    }

    @media (max-width:$tablet-to-smalltablet) {}

    @media (max-width:$smalltablet-to-phone) {}

    @media (max-width:$phone-to-smallphone) {}

  }

  >p {
    font-size: 40px;
    line-height: 180%;
    width: 80%;
    text-align: center;

    @media (max-width:$tall-to-mid) {
      font-size: 30px;
    }

    @media (max-width:$mid-to-tablet) {
      font-size: 40px;
    }

    @media (max-width:$tablet-to-smalltablet) {}

    @media (max-width:$smalltablet-to-phone) {}

    @media (max-width:$phone-to-smallphone) {}

  }
}

.prestationsGenItem {
  @include contentFrame;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    font-size: 40px;

    @media (max-width:$tall-to-mid) {}

    @media (max-width:$mid-to-tablet) {}

    @media (max-width:$tablet-to-smalltablet) {}

    @media (max-width:$smalltablet-to-phone) {}

    @media (max-width:$phone-to-smallphone) {}
  }

  h3 {
    margin-left: 10%;
    font-size: 24px;

    @media (max-width:$tall-to-mid) {}

    @media (max-width:$mid-to-tablet) {}

    @media (max-width:$tablet-to-smalltablet) {}

    @media (max-width:$smalltablet-to-phone) {}

    @media (max-width:$phone-to-smallphone) {}
  }

  p {
    margin-bottom: 10px;
    line-height: 160%;
    font-size: 18px;

    @media (max-width:$tall-to-mid) {}

    @media (max-width:$mid-to-tablet) {}

    @media (max-width:$tablet-to-smalltablet) {}

    @media (max-width:$smalltablet-to-phone) {}

    @media (max-width:$phone-to-smallphone) {}
  }

  .prestationSeo {
    @include contentFrame;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10%;
    row-gap: 20px;
    text-align: start;

    @media (max-width:$tall-to-mid) {}

    @media (max-width:$mid-to-tablet) {}

    @media (max-width:$tablet-to-smalltablet) {}

    @media (max-width:$smalltablet-to-phone) {}

    @media (max-width:$phone-to-smallphone) {}

    >* {
      width: 100%;
    }



    img {
      object-fit: contain;
      grid-column: 2 / 2;
      grid-row: 1;
    }
  }

  .prestationDev {
    @include contentFrame;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10%;
    row-gap: 20px;
    text-align: start;

    >* {
      width: 100%;
    }

    >p {
      margin-top: auto;
      margin-bottom: auto;

      @media (max-width:$tall-to-mid) {}

    }

    .devLangLogos {
      grid-column: 2;
      grid-row: 1/2;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;

      img {
        object-fit: contain;
        width: 100px;

        @media (max-width:$tall-to-mid) {}

        &.logoLong {
          width: 200px;

        }
      }
    }
  }

}


//////////////////////////////////////Prestations spé///////////////////////////////////////////////

.prestationsSpé {
  @include contentFrame;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 60px;
    text-align: center;
    height: 20%;
    margin-top: 0px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:$tall-to-mid) {
      font-size: 50px;

    }

    @media (max-width:$mid-to-tablet) {
      height: 15%;
    }

    @media (max-width:$tablet-to-smalltablet) {}

    @media (max-width:$smalltablet-to-phone) {}

    @media (max-width:$phone-to-smallphone) {}
  }

  .prestationSpéDescription {
    height: 400px;

    @media (max-width:$tall-to-mid) {
      height: 200px;
    }

    @media (max-width:$mid-to-tablet) {
      height: 120px;
    }

    @media (max-width:$tablet-to-smalltablet) {}

    @media (max-width:$smalltablet-to-phone) {}

    @media (max-width:$phone-to-smallphone) {}
  }



  >div {
    display: flex;
    height: 80%;
    align-items: center;
    justify-content: space-between;

    @media (max-width:$mid-to-tablet) {
      flex-direction: column;
      gap: 1%;

    }

    .prestationSpéItem {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 30%;
      border: 2px solid $light-blue;
      padding: 20px;
      border-radius: 40px;
      flex-shrink: 0;
      box-sizing: border-box;

      @media (max-width:$mid-to-tablet) {
        width: 100%;
        padding: 10px;

      }

      h3 {
        font-size: 32px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 5px;

        @media (max-width:$tall-to-mid) {
          font-size: 26px;
        }

        @media (max-width:$mid-to-tablet) {
          font-size: 32px;
        }

        @media (max-width:$tablet-to-smalltablet) {
          font-size: 26px;
        }

        @media (max-width:$smalltablet-to-phone) {}

        @media (max-width:$phone-to-smallphone) {}
      }

      p {
        font-size: 22px;
        line-height: 160%;

        @media (max-width:$tall-to-mid) {
          font-size: 16px;
          line-height: 150%;
        }

        @media (max-width:1300px) {
          font-size: 15px;
        }

        @media (max-width:1100px) {
          font-size: 14px;
        }

        @media (max-width:$mid-to-tablet) {
          font-size: 16px;
        }

        @media (max-width:$tablet-to-smalltablet) {}

        @media (max-width:$smalltablet-to-phone) {}

        @media (max-width:$phone-to-smallphone) {}

      }

      .cta {
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        padding: 10px 20px 10px 20px;
        background-color: $yellow;
        border-radius: 20px;
        margin-bottom: 0px;

        @media (max-width:$tall-to-mid) {
          font-size: 20px;
          padding: 7px 15px 7px 15px;
        }

        @media (max-width:$mid-to-tablet) {}

        @media (max-width:$tablet-to-smalltablet) {}

        @media (max-width:$smalltablet-to-phone) {}

        @media (max-width:$phone-to-smallphone) {}
      }
    }
  }
}

////////////////////////////////////// Form CTA ///////////////////////////////////////////////

.formCTA {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $dark-blue;
  width: 100%;
}

////////////////////////////////////// Portfolio ///////////////////////////////////////////////

.portfolioDiv {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: $light-blue;

  box-sizing: border-box;

  .portfolioContainer {
    flex-direction: column;
    align-items: center;

    margin-left: 5%;
    margin-right: 5%;

    h2 {
      font-size: 50px;
      margin-top: 40px;
      color: white;
      text-align: center;

      @media (max-width:$mid-to-tablet) {}

      @media (max-width:$tablet-to-smalltablet) {
        font-size: 40px;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      @media (max-width:$smalltablet-to-phone) {}

      @media (max-width:$phone-to-smallphone) {}
    }

    .lienPortfolio {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-weight: 600;
      font-size: 24px;

      @media (max-width:$tall-to-mid) {
        margin-top: 0px;
        margin-bottom: 10px;
        font-size: 18px;
      }

      @media (max-width:$mid-to-tablet) {
        justify-content: center;
      }

      a {
        text-decoration: none;
        color: $yellow;
      }
    }

    .portfolio {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 3%;

      @media (max-width:$mid-to-tablet) {
        flex-wrap: wrap;
        justify-content: center;

      }

    }
  }
}

.formulaire {
  display: flex;
  align-items: center;

  @media (max-width:$tall-to-mid) {}
}</style>
