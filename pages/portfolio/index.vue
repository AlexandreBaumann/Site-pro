<template>
    <main>
        <div class="container">
            <h1>Portfolio et case studies</h1>
            <p>Vous trouverez ici l'ensemble de mes travaux.</p>
            <h2>Respect de la qualité web</h2>
            <p>Mes sites respectent les bonnes pratiques de qualité web, SEO et accessibilité, dont notamment:</p>
            <ul>
                <li>Respect de la <strong>sémantique HTML</strong> et de la <strong>hiérarchie des titres</strong></li>
                <li>Labels Aria pour guider les <strong>lecteurs d'écran</strong></li>
                <li><strong>Métadonnées Schema</strong> dans la balise Head</li>
                <li><strong>Mise en page responsive</strong>: j'adapte la mise en forme à plusieurs formats (mobile,
                    tablette,
                    petit écran d'ordinateur et
                    grand écran d'ordinateur)</li>
                <li><strong>Attributs alt</strong> présents et, si besoin, renseignés.</li>
            </ul>
            <h2>Liste des sites</h2>
            <section class="portfolio">
                <Card v-for="cardData in $store.state.data.data" :key="cardData._id" :card="cardData" />
            </section>
        </div>
    </main>
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
        font-size: 60px;
        margin-top: 60px;
        margin-bottom: 60px;

    }

    >ul li {
        line-height: 160%;
    }

}

.portfolio {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    justify-content: center;
}
</style>
  