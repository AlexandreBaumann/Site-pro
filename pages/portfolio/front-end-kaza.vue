<template>
    <main>
        <div class="container">

            <h1>Kazaa: projet scolaire front-end</h1>
            <p>Kazaa est un projet d'intégration front-end dans le cadre de ma formation OpenClassRooms. Je vais vous
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
            <p>Vous pouvez consulter le code ici: https://github.com/AlexandreBaumann/p6_react</p>
            <h2>Résumé</h2>
            <p>Ce projet a été réalisé dans le cadre de ma formation OpenClassRooms. Il s'agissait de développer le front
                end d'un site en utilisant React.js, une librairie javascript. Il s'agissait d'une application présentant
                des logements. La page principale présentait l'ensemble, puis chacun avait une page produit dédiée.</p>
            <p>L'un des challenges était de générer procéduralement ces pages produits. C'était aussi notre premier contact
                avec react, qui a des principes de fonctionnements spécifiques, nécessitant la compréhension de notions
                comme le "state".</p>
            <h2>Présentation des technologies utilisées</h2>
            <h3>React.js</h3>
            <p>Le site repose sur React.js, une librairie javascript permettant de créer des "single page application".</p>

            <h3>Dépendances</h3>
            <p>Parmi les dépendances, il y a notamment:</p>
            <ul>
                <li><strong>Sass</strong> pour permettre le SCSS.</li>
                <li><strong>Prettier</strong> pour le formattage automatique.</li>

            </ul>

            <h3>Autres</h3>
            <p>J'utilise le <strong>SCSS</strong> pour le style.</p>
            <p>Nous avions un fichier .json pour faire office de base de données.</p>
            <h2>Fonctionnalités</h2>
            <p>les fonctionnalités à développer étaient :</p>
            <ul>
                <li>Un carousel d'images, irrigué par les liens des images, renseignés dans le .json</li>
                <li>Un élément permettant de dérouler du texte ("collapse")</li>
                <li>Un routage dynamique et un remplissage automatique à partir des informations du .json.</li>
                <li>Une boucle d'affichage de cards</li>
            </ul>

            <h2>Le style</h2>


            <h2>Difficultés rencontrées</h2>
            <p>Avoir une page 404 sur une des pages produits lorsque l'id, utilisé dans l'url pour le routage dynamique,
                n'était pas présent dans la base de données a demandé d'être astucieux. En effet, le routeur que j'avais
                codé considérait que c'était une route valide. J'ai donc ajouté une redirection en amont du composant
                définissant les fiches produits (Prezpage) si l'id renseigné ne correspondait à aucun élément de la base de
                données.</p>
            <p>Ayant un écran relativement petit, j'avais oublié de
                mettre une largeur maximale aux pages, ce qui dégradait l'affichage pour les écrans aux largeurs supérieures
                à 2000px.</p>
            <p>Globalement, je ne me souviens pas de difficultés particulières.</p>

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
  