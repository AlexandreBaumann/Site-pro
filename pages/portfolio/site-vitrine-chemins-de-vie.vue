<template>
    <main>
        <div class="container">

            <h1>Chemins de vie: un site vitrine bien-être</h1>
            <p>Chemins de vie est un site vitrine pour un masseur-sophrologue. Je vais vous
                présenter ici:</p>
            <ul>
                <li>Les technologies utilisées</li>
                <li>Les fonctionnalités</li>
                <li>Les éléments de style un peu complexes</li>
                <li>Les difficultés rencontrées</li>
            </ul>
            <p>Je vais devoir utiliser le langage technique. Je vous propose donc, avant cela, un résumé compréhensible par
                un
                non-développeur.</p>
            <p>Vous pouvez consulter le code, si autorisé, à l'adresse suivante: https://github.com/AlexandreBaumann/cdv</p>
            <h2>Résumé</h2>
            <p>Le site est développé avec Next.js, un framework javascript basé sur React.js. Il n'y a pas encore de base de
                données.</p>
            <p>Les deux principaux challenges ont été de rendre l'interface responsive, la mise en page étant assez
                complexe, et de faire fonctionner le formulaire sur l'hébergement.</p>

            <h2>Présentation des technologies utilisées</h2>
            <h3>Next.js</h3>
            <p>Le site repose sur Next.js, un framework javascript basé sur React.js. React est, avec Vue.js et Angular.js,
                l'un des langages de "single page application"? Comme les autres, il peut poser des problèmes de
                référencement et de performance. Next.js compense ce problème grâce à la génération de site statique ou côté
                serveur (server side rendering). On a ainsi la fluidité de navigation des SPA tout en conservant une
                conformité aux bonnes pratiques du référencement naturel (SEO).</p>

            <h3>Dépendances</h3>
            <p>Parmi les dépendances, il y a notamment:</p>
            <ul>
                <li><strong>Sass</strong> pour permettre le SCSS.</li>
                <li><strong>Prettier</strong> pour le formattage automatique.</li>
                <li><strong>Express</strong> pour gérer le server.js, qui sert de point d'entrée à l'application.</li>
                <li><strong>Dotenv</strong> pour les variables d'environnement.</li>
            </ul>
            <p>J'utilise également Typescript pour avoir un code plus propre.</p>

            <h3>Autres</h3>
            <p>J'utilise le <strong>SCSS</strong> pour le style.</p>


            <h2>Fonctionnalités</h2>

            <p>Le formulaire est la seule fonctionnalité. </p>


            <h2>Le style</h2>

            <p>Le style a demandé beaucoup d'efforts, notamment la gestion de l'affichage du header sur deux points:</p>
            <ul>
                <li>La gestion de la position:fixed de la barre de menu et la disparition de la barre supérieure.</li>
                <li>Le menu déroulant et le menu hamburger (version mobile).</li>
                <p>Pour la première, j'ai utilisé deux state: un pour savoir si l'utilisateur a scrollé de plus de 30px ou
                    non et l'autre pour identifier la hauteur de la barre de menu. Quand l'utilisateur descend de 30px, une
                    division vide de la hauteur de la barre de menu s'ajoute en haut de la page. Cela permet d'avoir une
                    transition fluide.</p>
                <p>La seconde logique se trouve dans les composants dédiés aux barres de navigation: navbarsmall (version
                    mobile) et navbarwide (versions tablette et bureau). Leur affichage est géré par des states: un pour le
                    sous-menu "prestations" et un pour le menu hamburger pour la version mobile.</p>
            </ul>
            <h2>Difficultés rencontrées</h2>
            <h3>Sur le fonctionnement</h3>
            <p>C'était ma première
                API vers le serveur SMTP de mon
                hébergeur (O2Switch), il a fallu trouver les bonnes informations à renseigner.</p>
            <p>Mettre en ligne ce genre d'applications sur un
                hébergement basé sur le cpanel peut être un challenge. Le formulaire, notamment, ne fonctionnait pas. Cela a
                été résolu en ajoutant un certificat SSL. </p>

            <h3>Sur la mise en page</h3>
            <p>Rendre responsive la page d'accueil a été un challenge, en raison du grand nombre de variables qui doivent
                chaque fois changer et de l'utilisation d'une hauteur de division s'adaptant à la hauteur de l'écran.</p>

        </div>
    </main>
</template>
  
<script>
export default {
}
</script>
  
<style scoped lang="scss">
.container {
    @include contentFrame;

    h1 {
        text-align: center;
        font-size: 40px;
        padding-top: 50px;

    }

}
</style>
  