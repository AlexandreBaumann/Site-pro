<template>
    <main>
        <div class="container">

            <h1>Mon Vieux Grimoire: projet OpenClassRooms back-end</h1>
            <p>Mon Vieux Grimoire est un projet de développement backend dans le cadre de ma formation OpenClassRooms. Je
                vais vous
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
            <p>Vous pouvez consulter le code à l'adresse suivante : https://github.com/AlexandreBaumann/p7</p>
            <h2>Résumé</h2>
            <p></p>

            <h2>Présentation des technologies utilisées</h2>
            <h3>Node.js - Express</h3>
            <p>Le serveur utilise la librairie Node.js (javascript) "Express". Elle permet notamment de gérer le routage,
                les middleware et les contrôleurs.</p>

            <h3>Dépendances</h3>
            <p>Parmi les dépendances utilisées, il y a notamment:</p>
            <ul>
                <li><strong>Bcrypt</strong> pour le hashage du mot de passe.</li>
                <li><strong>Prettier</strong> pour le formattage automatique.</li>
                <li><strong>jsonwebtoken</strong> pour gérer le maintien de l'authentification.</li>
                <li><strong>Cors</strong> pour permettre la communication entre serveurs différents.</li>
                <li><strong>Dotenv</strong> pour les variables d'environnement.</li>
                <li><strong>Mongoose</strong> pour interagir avec la base de données.</li>
                <li><strong>Multer</strong> et <strong>sharp</strong> pour stocker et retravailler les images envoyées.</li>
            </ul>
            <p>J'utilise également Typescript pour avoir un code plus propre.</p>
            <h3>MongoDB</h3>
            <p>MongoDB est une base de données NoSQL très facile à appréhender.</p>
            <h3>Autres</h3>
            <p>J'utilise le <strong>SCSS</strong> pour le style.</p>
            <h2>Fonctionnalités</h2>
            <p>Le projet est un backend: l'idée est de gérer les requêtes provenant de l'interface (front end) et de leur
                donner les réponses souhaitées. Il y en avait 9:</p>
            <ul>
                <li>Afficher les items (livres) de la base de donnée.</li>
                <li>Trier et afficher les items les mieux notés</li>
                <li>Afficher un item</li>
                <li>Ajouter sa note à un item</li>
                <li>Ajouter un item</li>
                <li>Modifier un de ses items </li>
                <li>Supprimer un de ses items</li>
                <li>S'inscrire</li>
                <li>Se connecter</li>
            </ul>
            <p>Pour chacune de ces routes, il fallait définir le parcours de la requête: sa nature (get, post) et son
                endpoint (ex: /api/books/:id/rating), les middleware, puis les contrôleurs.
                Par exemple, plusieurs de ces
                routes nécessitaient d'être authentifié. Il y avait un middleware "auth.js" pour gérer cela et stopper la
                requête si le token de connexion n'était pas présent.</p>
            <p>Si les middleware étaient passés avec succès, ce sont les contrôleurs qui sont activés et enregistrer, par
                exemple, la modification de la note en base de donnée.</p>

            <h2>Le style</h2>


            <h2>Difficultés rencontrées</h2>
            <p>Le projet était relativement simple. La difficulté résidait surtout dans le fait que c'était notre
                premier contact avec ce système. Seul le paramétrage de la gestion des images, avec multer et sharp,
                était un peu complexe.</p>

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
  