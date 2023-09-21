<template>
    <!-- Titre du slide actuel -->
    <div class="slideDiv">
        <h2>{{ slides[currentSlideIndex].title }}</h2>

        <button @click="prevSlide" :disabled="currentSlideIndex === 0" class="previous"><font-awesome-icon
                :icon="['fas', 'chevron-left']" /></button>

        <div v-html="slides[currentSlideIndex].content" class="slideDivContent"></div>

        <button @click="nextSlide" :disabled="currentSlideIndex === slides.length - 1" class="next"><font-awesome-icon
                :icon="['fas', 'chevron-right']" /></button>

        <div class="nav-points">
            <span v-for="(slide, index) in slides" :key="index" :class="{ 'active-point': currentSlideIndex === index }"
                @click="goToSlide(index)">
                •
            </span>
        </div>
        <!-- Points de navigation -->

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
.slideDiv {

    background-color: $blue999;
    color: $blue50;
    position: relative;
    padding-top: 30px;
    padding-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.5);

    a {
        color: $yellow;
    }

    h2 {
        text-align: center;
        margin-top: 0px;
    }

    &Content {
        height: 400px;
        margin: 0px 70px 0px 70px;
        padding: 0px 10px 0px 10px;
        overflow-y: auto;
        background-color: $dark-blue;
        border-radius: 10px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);

        &::-webkit-scrollbar {
            width: 10px;

            &-thumb {
                background-color: $blue900;
                border-radius: 6px;
            }

            &-track {
                background-color: $dark-blue;
            }
        }

        // Pour Firefox
        scrollbar-color: $blue900 $dark-blue;
        scrollbar-width: thin;

    }

    button {
        height: 100%;
        position: absolute;
        padding-right: 20px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        font-size: 36px;


    }
}

.previous {
    left: 0; // Positionne le premier bouton à gauche
}

.next {
    right: 0; // Positionne le dernier bouton à droite
}

.nav-points {
    text-align: center;
    cursor: pointer;
    font-size: 35px;
    margin-top: 10px;
    letter-spacing: 5px;

    span {
        text-shadow: 0 0 4px rgba(0, 0, 0, 1),
            0 0 8px rgba(0, 0, 0, 1),
            0 0 12px rgba(0, 0, 0, 01); // Ombres superposées
    }
}

.active-point {
    color: $yellow;
}
</style>
  