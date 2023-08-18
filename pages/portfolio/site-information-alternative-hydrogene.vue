<template>
    <main>
        <div class="container">

            <h1>Alternative-hydrogène: un site d'information sous Next.js</h1>
            <p><strong><nuxt-link to="https://www.alternative-hydrogene.com/">Alternative-hydrogène</nuxt-link></strong> est
                un site d'information sur l'hydrogène de plus de 300 pages. Je vais vous
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
            <p>Vous pouvez consulter le code, si autorisé, ici : https://github.com/AlexandreBaumann/Next--pages-router-</p>
            <h2>Résumé</h2>
            <p>J'avais utilisé la génération par IA pour produire ce site, initialement sous wordpress. Pour tester Next.js,
                un framework javascript base sur React,
                j'ai fait la migration sous cette technologie.</p>
            <p> Il a d'abord fallu récupérer le contenu et le nettoyer avec Python. J'ai également utilisé ce langage pour
                générer la base de données. J'ai ensuite créé l'architecture du site avec Create-react-app et l'ai
                procéduralement construit avec le contenu extrait.</p>
            <p>Le site, s'il est parfaitement fonctionnel, rapide, avec un design responsive et relativement joli souffre
                néanmoins de quelques défauts. Sur le plan technique, la gestion des données n'est pas satisfaisante: à
                chaque fois qu'une page est chargée, est également chargée la base de données (~500ko), ce qui l'alourdit.
                En termes de contenus, il faudra rajouter des pages de blog et repasser sur les pages spécifiques (les pages
                de catégories sont faites à la main). Ce sont des problèmes mineurs qui demanderont que j'y passe quelques
                jours.</p>
            <p>Pour résumer, c'est un prototype de site Next.js et une expérience de migration de grande ampleur.</p>

            <h2>Présentation des technologies utilisées</h2>
            <h3>Next.js</h3>
            <p>Le site repose sur Next.js, un framework javascript basé sur React.js. React est, avec Vue.js et Angular.js,
                l'un des langages de "single page application"? Comme les autres, il peut poser des problèmes de
                référencement et de performance. Next.js compense ce problème grâce à la génération de site statique ou côté
                serveur (server side rendering). On a ainsi la fluidité de navigation des SPA tout en conservant une
                conformité aux bonnes pratiques du référencement naturel (SEO).</p>
            <h3>Python</h3>
            <p>J'ai utilisé Python pour la migration et la génération de la base de données.</p>
            <h3>Dépendances</h3>
            <p>Parmi les dépendances, il y a notamment:</p>
            <ul>
                <li><strong>Sass</strong> pour permettre le SCSS.</li>
                <li><strong>Prettier</strong> pour le formattage automatique.</li>
                <li><strong>jsonwebtoken</strong> pour gérer le maintien de l'authentification.</li>
                <li><strong>Express</strong> pour gérer le server.hs, qui sert de point d'entrée à l'application.</li>
                <li><strong>Mongoose</strong> pour interagir avec la base de données MongoDB.</li>
                <li><strong>Next-sitemap</strong> pour générer un sitemap.</li>
                <li><strong>Dotenv</strong> pour les variables d'environnement.</li>
            </ul>
            <p>J'utilise également Typescript pour avoir un code plus propre.</p>
            <h3>MongoDB</h3>
            <p>La base de donnée est MongoDB, hébergée sur MongoDB Atlas. La connexion avec elle se fait grâce à la
                dépendance Mongoose.</p>

            <h3>Autres</h3>
            <p>J'utilise le <strong>SCSS</strong> pour le style.</p>


            <h2>Fonctionnalités</h2>

            <h3>Insertion de cartes thématisées</h3>
            <p>Un des composants (injectionposts) me permet d'insérer un certain nombre de cartes d'une catégorie (une
                propriété de la base de données). L'affichage peut être vertical ou horizontal.</p>

            <h3>La boucle de cartes</h3>
            Le composant Cardloop permet d'insérer les cartes correspondant à tous les éléments d'une catégorie définie.
            <h3>Le backoffice</h3>
            <p>J'ai créé un backoffice permettant d'enregistrer de nouveaux éléments dans la base de données, ainsi que
                l'API correspondante. Il est protégé
                par une authentification, qui génère un jsonwebtoken.</p>
            <h3>Breadcrumbs</h3>
            <p>Le site étant volumineux et pouvant s'avérer profond, j'ai créé un système de Breadcrumbs avec le balisage
                Schema adapté. Le texte affiché peut être modifié dans la base de données.</p>
            <h3>Filtre</h3>
            <p>Le composant cardfilter permet de créer plusieurs icones qui permettent de filtrer les données en fonction du
                filtre sélectionné. Il est utilisé pour gérer le blog. </p>


            <h2>Le style</h2>

            <p>Le seul élément notable ici sont les cartes. Il y en a de deux types:</p>
            <ul>
                <li>Celles qui peuvent être individuelles, c'est le composant "smallcard", et qui sont utilisées par
                    Injectionposts.</li>
                <li>Celles du blog, qui prennent toute la largeur et sont appelées par Cardloop. </li>
            </ul>
            <p>L'originalité est l'utilisation d' une bande blanche oblique pour donner l'impression que le
                bord droit de l'image est
                oblique, ce qui rend la carte plus dynamique.</p>

            <h2>Difficultés rencontrées</h2>
            <h3>Sur le fonctionnement</h3>
            <p>Le principal problème a été la mise en ligne. En effet, mettre en ligne ce genre d'applications sur un
                hébergement basé sur le cpanel peut être un challenge.</p>

            <h3>Sur la mise en page</h3>
            <p>La mise en page est très basique. Il n'y a pas eu de difficulté particulière.</p>

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
  