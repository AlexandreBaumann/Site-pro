<template>
    <form @submit.prevent="handleSubmit" class="form">
        <h2>Me contacter</h2>
        <div class="nomprenom">
            <div class="champ">
                <label for="firstName">
                    Prénom :
                </label>
                <input id="firstName" type="text" class="champtext" v-model="firstName" aria-required="true" required />
            </div>
            <div class="champ">
                <label for="lastName">
                    Nom :
                </label>
                <input id="lastName" type="text" class="champtext" v-model="lastName" aria-required="true" required />
            </div>
        </div>
        <div class="champ">
            <label for="email">
                Email :
            </label>
            <input id="email" type="email" class="champtext" v-model="email" aria-required="true" required />
        </div>
        <div class="champ">
            <label for="message">
                Message :
            </label>
            <textarea id="message" class="champtext" v-model="message" aria-required="true" required></textarea>
        </div>
        <label class="checkbox" for="privacyPolicy">
            <input id="privacyPolicy" type="checkbox" v-model="privacyPolicyAccepted" aria-required="true" required />
            Accepter la politique de confidentialité
        </label>
        <label :style="{ position: 'absolute', left: '-5000px' }" aria-hidden="true">
            Ne pas remplir
            <input type="text" v-model="honeypot" />
        </label>
        <button class="envoyer" type="submit">Envoyer</button>
        <p v-if="status">{{ status }}</p>
        <p v-if="showSuccessMessage">Message bien envoyé!</p>
    </form>
</template>

<script>
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            status: "",
            honeypot: "",
            privacyPolicyAccepted: false,
            showSuccessMessage: false
        };
    },
    methods: {
        async handleSubmit() {
            if (this.honeypot) {
                this.status = "Votre message a été envoyé !";
                this.$emit('formSubmitted', { success: true, message: "Votre message a été envoyé !" });
                return;
            }

            if (!this.privacyPolicyAccepted) {
                this.status = "Veuillez accepter la politique de confidentialité.";
                return;
            }

            const formData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                message: this.message,
                privacyPolicyAccepted: this.privacyPolicyAccepted
            };

            try {
                const response = await fetch("https://serveur.alexandrebaumann.com/site-pro", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (response.status === 200) {
                    this.status = "Votre message a été envoyé !";
                    this.$emit('formSubmitted', { success: true, message: "Votre message a été envoyé !" });

                    // Réinitialiser les champs après l'envoi
                    this.firstName = "";
                    this.lastName = "";
                    this.email = "";
                    this.message = "";
                    this.privacyPolicyAccepted = false;
                    this.showSuccessMessage = true;
                    setTimeout(() => {
                        this.showSuccessMessage = false;
                    }, 5000);
                } else {
                    const errorData = await response.json();
                    this.status = `Erreur: ${errorData.error}`;
                }
            } catch (error) {
                this.status = `Erreur : ${error.message}`;
            }
        }
    }
};
</script>

  
<style scoped  lang="scss">
.form {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    h2 {
        text-align: center;
        font-size: 40px;
        margin: 0px;
    }

    .champ {
        display: flex;
        flex-direction: column;

        textarea {
            height: 100px;
        }
    }

    .nomprenom {
        display: flex;
        gap: 10%;

        .champ {
            width: 45%;
        }
    }

    input,
    textarea {
        border-radius: 10px;
        padding: 5px;
        margin-top: 10px;
    }

    .envoyer {
        padding: 10px 20px 10px 20px;
        font-weight: 600;
        background-color: $darkBlue;
        color: white;
        border-radius: 10px;
        display: inline-block; // Pour permettre la transformation
        transition: transform 0.3s ease, box-shadow 0.3s ease; // Transition douce pour le décalage et l'ombre

        // Décalage diagonal et ombre sur le survol
        &:hover {
            transform: translate(2px, -2px); // Décalage de 3px horizontalement et verticalement
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
    }


}
</style>
  