<template>
    <main>
        <div class="container">
            <h1>Portfolio et case studies</h1>
            <p>Trouvez ici une sélection de mes travaux et leur présentation.</p>

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
    width: 100%;

    @include contentFrame;
    text-align: center;


    h1 {
        text-align: center;
        font-size: 60px;
        margin-top: 60px;
        margin-bottom: 60px;
        padding-right: 20px;
        padding-left: 20px;

        @media (max-width: 600px) {
            font-size: 50px;

        }

    }

    p {
        padding-right: 20px;
        padding-left: 20px;
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

    @media (max-width: 600px) {
        flex-direction: column;
        row-gap: 20px;
    }

    button {
        padding: 10px 20px;
        margin: 0 10px;
        border: none;
        border-radius: 25px; // Ajoute des bords arrondis
        background-color: $gray800;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s; // Transition pour l'effet hover et le click

        &:hover {
            background-color: $gray600;
            transform: scale(1.05); // Légère augmentation de taille au survol
        }

        &:active {
            transform: scale(0.95); // Légère diminution de taille lors du clic
        }
    }

    .active {
        background-color: $blue900; // Une couleur différente pour le bouton actif

        &:hover {
            background-color: $blue700; // Une teinte plus foncée au survol pour le bouton actif
        }
    }
}
</style>
  