<template>
    <!-- Titre du slide actuel -->
    <div class="slideDiv">
        <p class="slideTitle">{{ slides[currentSlideIndex].title }}</p>

        <button v-if="currentSlideIndex !== 0" @click="prevSlide" class="previous">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>

        <button v-if="currentSlideIndex !== slides.length - 1" @click="nextSlide" class="next">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>


        <div v-html="slides[currentSlideIndex].content" class="slideDivContent"></div>


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

    background-color: $blue100;
    color: $darkBlue;
    position: relative;
    padding-top: 30px;
    padding-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.5);



    .slideTitle {
        text-align: center;
        margin-top: 0px;
        font-size: 30px;
    }

    &Content {
        height: 400px;
        margin: 0px 70px 0px 70px;
        padding: 0px 10px 0px 10px;
        overflow-y: auto;
        background-color: $blue50;
        border-radius: 10px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);

        &::-webkit-scrollbar {
            width: 10px;

            &-thumb {
                background-color: $blue200;
                border-radius: 6px;
            }

            &-track {
                background-color: $blue100;
            }
        }

        // Pour Firefox
        scrollbar-color: $blue100 $blue50;
        scrollbar-width: thin;

        ::v-deep {
            line-height: 150%;

            //Le problème réside dans la manière dont Vue.js gère le HTML injecté via la directive v-html. 
            //Les styles "scoped" de Vue.js ne s'appliquent pas au contenu injecté par v-html car Vue ajoute un attribut de données unique 
            //(comme data-v-5472ae34 dans votre cas) aux éléments du DOM générés par le composant, mais pas au contenu injecté.
            h2,
            h3,
            h4 {
                text-align: center;
                font-weight: 500;
                letter-spacing: 1px;
            }

            .purple {
                color: #880E4F;
            }

            .orange {
                color: #E65100;
            }

            .green {
                color: #1B5E20;
            }

            img {
                object-fit: contain;
                max-width: 100%;

            }

            .col2 img {
                max-width: 45%;

                @media (max-width:768px) {
                    max-width: 100%;

                }

            }

        }

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
        transition: transform 0.3s ease;


    }
}

.previous {
    left: 0; // Positionne le premier bouton à gauche

    &:hover {
        transform: translate(-4px, -4px);
    }
}

.next {
    right: 0; // Positionne le dernier bouton à droite

    &:hover {
        transform: translate(4px, -4px);
    }
}

.nav-points {
    text-align: center;
    cursor: pointer;
    font-size: 35px;
    margin-top: 10px;
    letter-spacing: 5px;

    span {
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.7);

        &:hover {
            color: $blue900;
            transform: translate(2px, -2px);
        }

    }
}

.active-point {
    color: $yellow !important;
}
</style>
  