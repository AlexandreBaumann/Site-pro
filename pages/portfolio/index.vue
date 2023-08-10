<template>
    <div class="container">
        <h1>Portfolio et case studies</h1>
        <p>Vous trouverez ici l'ensemble de mes travaux.</p>
        <h2>Respect de la qualité web</h2>
        <p>Mes sites respectent les bonnes pratiques de qualité web, SEO et accessibilité, dont notamment:</p>
        <ul>
            <li>Respect de la sémantique et de la hiérarchie des titres</li>
            <li>Labels Aria pour guider les lecteurs d'écran</li>
            <li>Métadonnées Schema dans la balise Head</li>
            <li>Responsives: j'adapte la mise en forme à plusieurs formats (mobile, tablette, petit écran d'ordinateur et
                grand écran d'ordinateur)</li>
            <li>Attributs alt présents et, si besoin, renseignés.</li>
        </ul>
        <h2>Liste des sites</h2>
        <section class="portfolio">
            <Card v-for="cardData in $store.state.data.data" :key="cardData._id" :card="cardData" />
        </section>
    </div>
</template>
  
<script>
import Card from '~/components/Card.vue';

export default {
}
</script>
  
<style scoped lang="scss">
.container {
    @include contentFrame;

    h1 {
        text-align: center;
        font-size: 40px;
        padding-top: 50px;

    }

}

.portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
  