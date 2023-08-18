<template>
  <main>
    <h1>A propos</h1>
    <div class="container">
      <section class="resume">
        <div class="chapeau">
          <img src="photo-alexandre-baumann.webp" alt="Photo d'Alexandre Baumann" />
          <h2>Informations</h2>

        </div>
        <h3>Langages utilisés</h3>
        <ul>
          <li>Javascript: Next, React, Vue, Nuxt</li>
          <li>PHP: Wordpress</li>
          <li>HTML5, CSS et SCSS</li>
          <li>Python</li>
          <li>Bases de données: MongoDB</li>
        </ul>
        <h3>Points forts</h3>
        <ul>
          <li>Standards de qualité web (accessibilité et SEO)</li>
          <li>Ecoute, recherche et compréhension</li>
          <li>Adaptabilité</li>

        </ul>
        <h3>Projets réalisés</h3>
        <ul>
          <li>Création de site</li>
          <li>Création de thème wordpress</li>
          <li>Stratégie SEO de grande ampleur</li>
          <li>Rédaction de centaines de pages</li>
          <li>Génération de centaines de pages</li>

          <li>Extraction, classification et visualisation de données</li>
        </ul>
      </section>
      <section class="parcours">
        <h2>Parcours web</h2>
        <p>J'anime des sites internet depuis plus de 3 ans. J'ai été formé au SEO et à la qualité web en 2022 et ai
          travaillé comme consultant SEO. J'ai ensuite suivi une <strong>formation de développeur web de janvier à aout 2023 avec
          OpenClassRooms</strong>. Il s'agissait d'une formation diplomante (titre professionnel niveau 5) avec un suivi
          hebdomadaire par un mentor.</p>
        <h2>Réalisations</h2>
        <p>Ma principale réalisation web est, sur le plan technique, ce site et, sur le plan du contenu,
          www.discoverthegreentech.com. Ce dernier est un site d'information sur l'innovation écologique très prometteur,
          notamment sur
          le plan du référencement naturel (SEO).</p>
        <p>Vous pouvez consulter l'ensemble de mes réalisations dans la page <nuxt-link
            to="/portfolio">Portfolio</nuxt-link>.</p>

      </section>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  @include contentFrame;
  gap: 10%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width:$mid-to-tablet) {
    gap: 4%;

  }

  @media (max-width: $smalltablet-to-phone) {
    flex-direction: column;
    row-gap: 30px;
  }

  @media (max-width:$phone-to-smallphone) {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

}

h1 {
  margin-top: 60px;
  font-size: 50px;

  @media (max-width:$phone-to-smallphone) {
    font-size: 40px;
    margin-top: 40px;

  }
}

.resume {
  width: 45%;
  background-color: $light-gray;
  padding: 20px;
  border-radius: 20px;

  @media (max-width: $smalltablet-to-phone) {
    width: 90%;
  }

  .chapeau {
    display: flex;
    align-items: center;

    @media (max-width:$tablet-to-smalltablet) {
      flex-direction: column;
    }

    img {
      object-fit: cover;
      height: 150px;
      width: 150px;
      margin-right: 20px;
      border-radius: 20px;

      @media (max-width:$tablet-to-smalltablet) {
        margin-right: 0px;
      }
    }
  }

  h3 {
    @media (max-width:$tablet-to-smalltablet) {
      text-align: center;
    }
  }

  ul {
    @media (max-width:$tablet-to-smalltablet) {
      padding-left: 10px;
    }

    li {
      list-style: '-   ';
    }
  }
}

.parcours {
  width: 45%;
  background-color: $light-gray;
  padding: 20px;
  border-radius: 20px;
  height: fit-content;

  @media (max-width: $smalltablet-to-phone) {
    width: 90%;
  }

  h2 {
    @media (max-width:$tablet-to-smalltablet) {
      text-align: center;
    }
  }
}
</style>
