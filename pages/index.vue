<template>
  <div>
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
        <div>
          <h2>Développement web</h2>
          <p>
            Je loue également mes compétences de développeur web pour vous aider
            à concevoir vos projets web.
          </p>
          <ul>
            <li>
              Outre les bases (HTML, dont <strong>accessibilité</strong> et
              <strong>marquage Schema</strong>, - CSS et SCSS), j'ai développé
              plusieurs projets utilisant soit un framework JS (<strong>Next-React</strong>
              et <strong>Vue-Nuxt</strong>), soit un thème
              <strong>wordpress</strong> personnalisé.
            </li>
            <li>
              Parmi les fonctionnalités, il y a évidemment le
              <strong>formulaire sécurisé</strong>, mais aussi une myriade
              d'autres permettant de générer des pages optimisées pour le SEO.
            </li>
          </ul>
        </div>
        <div class="devLangLogos"></div>
      </article>
    </section>
    <section class="fullheightdiv prestationsSpé">
      <h2>Prestations spécifiques</h2>
      <div>
        <div class="prestationSpéItem">
          <h3>Mini-audit</h3>
          <p>Je propose les prestations "classiques" du SEO:</p>
        </div>
        <div class="prestationSpéItem">
          <h3>Cartographie SEO</h3>
          <p>Je propose les prestations "classiques" de développeur web:</p>
        </div>
        <div class="prestationSpéItem">
          <h3>Site internet tout inclus</h3>
          <p>Je propose les prestations "classiques" de développeur web:</p>
        </div>
      </div>
    </section>
    <section class="fullheightdiv presentation">
      <div>
        <h2>Présentation</h2>
        <p>
          En faisant du SEO, pour moi et en agence, j'ai réalisé l'importance de
          la technique. Outre le "seo technique" classique, les signaux
          utilisateurs sont centraux dans l'algorithme Google, il est donc
          crucial d'optimiser l'expérience utilisateur. Je suis devenu
          développeur pour pouvoir prendre en main cet aspect.
        </p>
        <p>
          Je suis développeur web et consultant SEO. Je présente sur ce site mon
          portfolio de sites et de projets, ainsi que mes prestations pour vous
          aider à améliorer votre présence sur le web.
        </p>
      </div>
      <img src="photo-alexandre-baumann.webp" />
    </section>
  </div>
</template>

<script>
export default {
  // Pas besoin de spécifier le layout ici car le layout par défaut sera utilisé
}
</script>

<style scoped lang="scss">
@mixin contentFrame {
  max-width: 1200px;
  padding-left: 10%;
  padding-right: 10%;
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

    .prestationSeo {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10%;
      text-align: start;

      >* {
        width: 100%;
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

      img {
        object-fit: contain;
        grid-column: 2 / 2;
        grid-row: 1;
      }
    }

  }
}

.prestationsSpé {
  @include contentFrame;
  display: flex;
  flex-direction: column;

  >div {
    display: flex;

    .prestationSpéItem {
      display: flex;
      flex-direction: column;
    }
  }
}

.presentation {
  display: flex;
  @include contentFrame;
  gap: 100px;

  >img {
    width: 400px;
    object-fit: cover;
    height: 500px;
    border-radius: 30px;
  }


}
</style>
