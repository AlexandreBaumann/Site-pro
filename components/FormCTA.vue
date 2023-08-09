<template>
    <div class="form-bouton-modale">
        <!-- Bouton CTA pour déclencher le modal -->
        <button @click="showModal = true">Me contacter</button>

        <!-- Le Modal -->
        <div v-if="showModal" class="modal" @click="closeModal($event)">
            <div class="modal-content">
                <span class="close-btn" @click="showModal = false">&times;</span>
                <Form @formSubmitted="handleFormResponse" />
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
            showModal: false
        };
    },
    methods: {
        handleFormResponse(response) {
            if (response.success) {
                this.showModal = false; // ferme le modal si la soumission est réussie
                // Vous pouvez également afficher un message de réussite, traiter les données, etc.
            } else {
                // Traitez l'erreur ou la réponse négative
            }
        },
        closeModal(event) {
            // Vérifie si l'événement provient de la div `.modal` elle-même
            if (event.target.classList.contains('modal')) {
                this.showModal = false;
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
    background-color: rgba(0, 0, 0, 0.7);
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
}
</style>
  