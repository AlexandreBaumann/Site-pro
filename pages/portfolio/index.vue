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
            <h2>Liste des projets</h2>
            <div class="filter-section">
                <button :class="{ active: selectedCategory === '' }" @click="setFilter('')">Tous</button>
                <button :class="{ active: selectedCategory === 'Dev' }" @click="setFilter('Dev')">Développement Web</button>
                <button :class="{ active: selectedCategory === 'SEO' }" @click="setFilter('SEO')">SEO</button>

            </div>


            <section class="portfolio">
                <Card v-for="cardData in filteredCards" :key="cardData._id" :card="cardData" />
            </section>
        </div>
    </main>
</template>
  
<script>
import Card from '~/components/Card.vue';

export default {
    data() {
        return {
            selectedCategory: ''
        };
    },
    computed: {
        filteredCards() {
            if (this.selectedCategory) {
                return this.$store.state.data.data.filter(card => card.cat === this.selectedCategory);
            }
            return this.$store.state.data.data;
        }
    },
    methods: {
        setFilter(category) {
            this.selectedCategory = category;
        }
    }
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

.filter-section {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    button {
        padding: 10px 20px;
        margin: 0 10px;
        border: none;
        border-radius: 25px; // Ajoute des bords arrondis
        background-color: #333;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s; // Transition pour l'effet hover et le click

        &:hover {
            background-color: #555;
            transform: scale(1.05); // Légère augmentation de taille au survol
        }

        &:active {
            transform: scale(0.95); // Légère diminution de taille lors du clic
        }
    }

    .active {
        background-color: #007BFF; // Une couleur différente pour le bouton actif

        &:hover {
            background-color: #0056b3; // Une teinte plus foncée au survol pour le bouton actif
        }
    }
}
</style>
  