<template>
    <div class="form-bouton-modale">
        <!-- Bouton CTA  -->
        <button @click="showModal = true">Contact</button>

        <!-- Modale -->
        <div v-if="showModal" class="modal" @click="closeModal($event)">
            <div class="modal-content">
                <span class="close-btn" @click="showModal = false">&times;</span>
                <Form v-if="!formSubmittedSuccessfully" @formSubmitted="handleFormResponse" />
                <div v-else class="success-message">
                    <div class="checkmark">&#x2714;</div>
                    <button @click="showModal = false">Merci pour votre message!</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Form from '@/components/Form.vue';

export default {
    components: {
        Form
    },
    data() {
        return {
            showModal: false,
            formSubmittedSuccessfully: false
        };
    },
    methods: {
        handleFormResponse(response) {
            if (response.success) {
                this.formSubmittedSuccessfully = true;
            }
        },
        closeModal(event) {
            // Vérifie si l'événement provient de la div `.modal` elle-même
            if (event.target.classList.contains('modal')) {
                this.showModal = false;
                this.formSubmittedSuccessfully = false;  // réinitialiser
            }
        },
    }
};
</script>
  
<style scoped  lang="scss">
.form-bouton-modale {
    padding: 10px 20px 10px 20px;
    background-color: $yellow;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease; // Ajout d'une transition pour la transformation


    button {
        font-size: 36px;
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
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
}

.modal-content {
    background-color: white;
    position: relative;
    padding: 30px;
    border-radius: 10px;
    width: 70%;
    max-width: 500px;
}

.close-btn {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease; // Ajout d'une transition pour la transformation

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translate(-2px, -2px); // Translate la carte de 2px en haut et à droite
    }
}

.success-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.checkmark {
    font-size: 50px;
    color: $light-blue;
}

.success-message button {
    background-color: $yellow;
    color: $dark-blue;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
  