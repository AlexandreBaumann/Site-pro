<template>
  <div class="main-content">
    <section class="fullheightdiv accroche">
      <div>
        <div class="accrochetext">
          <p class="annonce">
            Votre <strong>site internet</strong>: une boutique accessible à tous
          </p>
          <p class="soustitre">
            Je vous aide à exploiter ce potentiel énorme de
            <strong>revenus</strong> et de <strong>visibilité</strong>
          </p>
        </div>
        <img src="/boutique.webp" alt="Boutique" />
      </div>
      <img src="/boutique.webp" alt="Boutique" class="background" />
    </section>
    <section class="fullheightdiv problematisation">
      <div class="problemaccroche">
        <p>Plus qu'une opportunité, votre identité</p>
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
    <section class="prestationsGen">
      <article class="fullheightdiv prestationsGenTitle">
        <h1>Développement web et SEO</h1>
        <p>
          Je vous aide à <strong>développer vos sites internet</strong> et à
          <strong>optimiser votre référencement naturel</strong> (SEO, Search
          Engine Optimization).
        </p>
      </article>
      <article class="fullheightdiv prestationsGenItem">
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
      </article>
      <article class="fullheightdiv prestationsGenItem">
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
      </article>
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
    <section class="fullheightdiv portfolio">
      <h2>Portfolio</h2>

    </section>

  </div>
</template>

<script>
import FormCTA from '@/components/FormCTA.vue';

export default {
  components: {
    FormCTA
  }
};
</script>

<style scoped lang="scss">
@mixin contentFrame {
  max-width: 1200px;
  padding-left: 10%;
  padding-right: 10%;
}

.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.accroche {
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
    padding: 30px;
    margin: 50px;
    text-align: center;

    .annonce {
      font-size: 50px;
      font-weight: 600;

    }

    .soustitre {
      font-size: 30px;
      line-height: 150%;

    }
  }

  >div {
    display: flex;
    height: 100%;
    align-items: center;

    >div {
      width: 60%;
    }

    >img {
      margin: 40px;
      border-radius: 30px;
      object-fit: cover;
      width: 40%;
      height: 80%;
    }
  }

}

.problematisation {
  @include contentFrame;
  margin-top: 100px;


  p {
    text-align: center;
  }

  .problemaccroche {
    font-size: 50px;
    font-weight: 600;
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
    }

    .problemTextes {
      display: flex;
      width: 100%;

      p {
        font-size: 24px;
        line-height: 180%;
      }

    }
  }
}

.prestationsGen {
  @include contentFrame;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  text-align: center;
  align-items: center;

  .prestationsGenTitle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h1 {
      font-size: 60px;
    }

    >p {
      font-size: 30px;
      line-height: 180%;
      width: 80%;
    }
  }

  .prestationsGenItem {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    h2 {
      font-size: 40px;
    }

    h3 {
      margin-left: 10%;
      font-size: 24px;
    }

    p {
      margin-bottom: 10px;
      line-height: 160%;
      font-size: 18px;
    }

    .prestationSeo {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 10%;
      row-gap: 20px;
      text-align: start;

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

          &.logoLong {
            width: 200px;

          }
        }
      }
    }

  }
}

.prestationsSpé {
  @include contentFrame;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 40px;
    text-align: center;
  }

  h3 {
    font-size: 26px;
    text-align: center;
  }

  .prestationSpéDescription {
    height: 300px;
  }



  >div {
    display: flex;
    gap: 20px;

    .prestationSpéItem {
      display: flex;
      flex-direction: column;
      width: 33.3%;
      border: 2px solid $light-blue;
      padding: 20px;
      border-radius: 40px;

      p {
        font-size: 18px;
        line-height: 160%;

      }

      .cta {
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        padding: 10px 20px 10px 20px;
        background-color: $yellow;
        border-radius: 20px;
      }
    }
  }
}

.formCTA {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $dark-blue;
  width: 100%;
}

.portfolio {
  display: flex;
  @include contentFrame;
  width: 100%;
  background-color: $light-blue;



}
</style>
