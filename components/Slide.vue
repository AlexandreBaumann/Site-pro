<template>
    <div class="slide">
        <!-- Titre du slide actuel -->
        <h2>{{ slides[currentSlideIndex].title }}</h2>
        <div class="slideDiv">
            <!-- Bouton précédent -->
            <button @click="prevSlide" :disabled="currentSlideIndex === 0"><font-awesome-icon
                    :icon="['fas', 'chevron-left']" /></button>

            <!-- Affichage du slide actuel -->
            <div v-html="slides[currentSlideIndex].content" class="slideDivContent"></div>

            <!-- Bouton suivant -->
            <button @click="nextSlide" :disabled="currentSlideIndex === slides.length - 1"><font-awesome-icon
                    :icon="['fas', 'chevron-right']" /></button>
        </div>
        <!-- Points de navigation -->
        <div class="nav-points">
            <span v-for="(slide, index) in slides" :key="index" :class="{ 'active-point': currentSlideIndex === index }"
                @click="goToSlide(index)">
                •
            </span>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentSlideIndex: 0
        };
    },
    methods: {
        nextSlide() {
            if (this.currentSlideIndex < this.slides.length - 1) {
                this.currentSlideIndex++;
            }
        },
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--;
            }
        },
        goToSlide(index) {
            this.currentSlideIndex = index;
        }
    }
};
</script>
  
<style scoped lang="scss">
/* Votre CSS ici */
.slide {
    &Div {
        background-color: $dark-blue;
        color: white;
        position: relative;

        &Content {
            height: 300px;
            padding-right: 30px;
            padding-left: 30px;
            overflow-y: auto;
        }

        button {
            height: 100%;
            position: absolute;
            padding-right: 10px;
            padding-left: 10px;

            &:first-child {
                left: 0; // Positionne le premier bouton à gauche
            }

            &:last-child {
                right: 0; // Positionne le dernier bouton à droite
            }

            svg {
                top: 50%; // Aligne le bouton à mi-hauteur du conteneur
            }
        }
    }



}

.nav-points {
    text-align: center;
    cursor: pointer;
}

.active-point {
    color: blue;
}
</style>
  