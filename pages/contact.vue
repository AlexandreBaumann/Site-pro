<template>
    <main>
        <h1>Contact</h1>
        <section class="container">
            <section class="informations">
                <h2>Informations</h2>
                <div class="informationsIcons">
                    <button class="icone" @click="openPhoneModal" aria-label="Afficher le numéro de téléphone">
                        <font-awesome-icon :icon="['fas', 'phone']" />
                    </button>
                    <button class="icone" @click="openEmailModal" aria-label="Afficher l'adresse e-mail">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                    </button>
                </div>
                <div v-if="isPhoneModalOpen" class="modal" role="dialog" aria-modal="true"
                    @click="closeIfOutside($event, 'phone')">
                    <div class="modal-content">
                        <button @click="closePhoneModal" aria-label="Fermer la modale">X</button>
                        <a href="tel:+33661928658" aria-label="Numéro de téléphone">06 61 92 86 58</a>
                    </div>
                </div>
                <div v-if="isEmailModalOpen" class="modal" role="dialog" aria-modal="true"
                    @click="closeIfOutside($event, 'email')">
                    <div class="modal-content">
                        <button @click="closeEmailModal" aria-label="Fermer la modale">X</button>
                        <a href="mailto:contact@alexandrebaumann.com" aria-label="Email">contact@alexandrebaumann.com</a>
                    </div>
                </div>


            </section>
            <section class="formulaire">
                <Form />
            </section>
        </section>
    </main>
</template>
  
<script>
import Form from '@/components/Form.vue';

export default {
    data() {
        return {
            isPhoneModalOpen: false,
            isEmailModalOpen: false
        }
    },
    methods: {
        openPhoneModal() {
            this.isPhoneModalOpen = true;
        },
        closePhoneModal() {
            this.isPhoneModalOpen = false;
        },
        openEmailModal() {
            this.isEmailModalOpen = true;
        },
        closeEmailModal() {
            this.isEmailModalOpen = false;
        },
        closeIfOutside(event, type) {
            if (event.target.classList.contains('modal')) {
                if (type === 'phone') {
                    this.closePhoneModal();
                } else if (type === 'email') {
                    this.closeEmailModal();
                }
            }
        }
    }
}
</script>
  
<style scoped lang="scss">
h1 {
    font-size: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.container {
    display: flex;
    gap: 10%;
    margin-bottom: 40px;
    @include contentFrame;

    @media (max-width:$mid-to-tablet) {}

    @media (max-width:$tablet-to-smalltablet) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 40px;

    }

    @media (max-width:$smalltablet-to-phone) {}

    @media (max-width:$phone-to-smallphone) {}

    .formulaire {
        width: 60%;

        background-color: $light-gray;
        padding: 20px;
        border-radius: 20px;

        @media (max-width:$mid-to-tablet) {
            font-size: 16px;
        }

        @media (max-width:$tablet-to-smalltablet) {}

        @media (max-width:$smalltablet-to-phone) {}

        @media (max-width:$phone-to-smallphone) {}
    }

    .informations {
        width: 30%;
        background-color: $light-gray;
        padding: 20px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        height: fit-content;

        @media (max-width:$tablet-to-smalltablet) {
            width: fit-content;

        }

        h2 {
            margin-top: 0px;

            @media (max-width:$tablet-to-smalltablet) {
                text-align: center;

            }
        }

        .informationsIcons {
            display: flex;
            flex-direction: column;

            @media (max-width:$tablet-to-smalltablet) {
                flex-direction: row;
                width: fit-content;

            }
        }

        .icone {
            font-size: 40px;
            margin: 30px;
            padding: 15px;
            border-radius: 50%; // Pour rendre le fond circulaire
            transition: box-shadow 0.3s ease; // Animation douce lors du survol
            background-color: white;
            // Ombre Material Design
            box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
                0 1px 1px 0 rgba(0, 0, 0, 0.14),
                0 1px 3px 0 rgba(0, 0, 0, 0.12);

            &:hover {
                // Augmente l'effet d'élévation lors du survol
                box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
                    0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12);
            }
        }

        .modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1000;

            .modal-content {
                background-color: white;
                position: relative;
                padding: 40px;
                border-radius: 20px;
                position: relative;

                a {
                    font-size: 40px;
                    border-radius: 20px;
                    padding: 10px;

                    font-weight: 600;
                    color: $darkBlue;
                    display: inline-block;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;

                    // Agrandissement subtil et ombre sur le survol
                    &:hover {
                        transform: translate(5px, -5px); // Décalage de 5px horizontalement et verticalement
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                    }
                }

                button {
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    cursor: pointer;
                }
            }
        }


    }


}
</style>