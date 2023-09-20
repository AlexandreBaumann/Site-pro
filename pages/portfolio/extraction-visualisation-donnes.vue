<template>
    <main>
        <div class="container">

            <h1>Extraction et visualisation de données Google Search Console</h1>
            <p>Lire les données de la Google Search Console est difficile avec l'interface Google dès qu'on a un site un peu
                volumineux. Les exports sont limités à 1000 lignes et naviguer entre les différents
                filtres est pénible, avec des temps de chargement longs.</p>
            <p>Dès qu'on a un site un peu volumineux, ces données sont très dures à lire. Pour résoudre ce problème j'ai
                conçu un programme open source permettant d'extraire, classer et visualiser
                ces données.</p>
            <p>Pour résoudre ce problème, j'ai conçu un programme open source combinant l'extraction et classification de
                données (GSC-Extractor) avec leur lecture (GSC-Dataviz). Ici, je vais vous présenter le
                <strong>code</strong> et les
                <strong>difficultés</strong> rencontrées pour le développer. S'agissant du tutoriel complet, il se trouve
                sur mon site <a
                    href="https://www.uniteinnovation.com/seo/outils/google-search-console/gsc-extractor-gsc-dataviz/">Unite
                    Innovation</a>.
            </p>


            <h2>GSC-Extractor: appel API et traitement de donnnées en python</h2>
            <h3>Logique globale</h3>
            <p>Le GSC-Extractor (<a href="https://github.com/AlexandreBaumann/GSC-Extractor">code, repo Github</a>) est un
                programme python composé de deux fichiers à exécuter: weekExtractor.py, puis categorize.py. </p>
            <p>Le premier sert à extraire les données Google Search Console. Il faut renseigner la localisation de vos
                identifiants pour la GSC au format JSON, le nom de votre
                propriété et la plage temporelle que vous souhaitez couvrir (date de départ et nombre de semaines). Le
                logiciel ouvre un CSV et, pour
                chaque semaine (ensemble de 7 jours), envoie une requête extrayant les données et les stocke dans le CSV.
            </p>
            <p>Le second fichier, categorize.py, est optionnel, suppose la rédaction d'un tableau de
                correspondances (un exemple est disponible dans le répertoire Github) au format CSV et a deux fonctions:</p>
            <ul>
                <li>Il permet d'assigner des catégories à vos url à partir d'un tableau de correspondance. Par exemple, pour
                    mon site discoverthegreentech, j'ai catégorisé mes pages selon leur "type" (dossier, blog, entreprise
                    ...) et leur thématique (énergies renouvelables, hydrogène, agriculture ...). </li>
                <li>Il permet de remplacer une url par une autre. C'est particulièrement utile si on a un changement d'url
                    ou même une migration de site, permettant de consolider les données sur la durée.</li>
            </ul>
            <p>Son fonctionnement est d'extraire les deux CSV dans des objets "DataFrame" (de la bibliothèque Pandas), de
                remplacer les urls de la colonne "Remplacer" par celles de la colonne "Page", puis de fusionner les lignes
                des DataFrames lorsque Page (données de la GSC) et url (table de correspondance) sont égales. Ensuite, les
                colonnes Remplacer et url, étant redondantes avec la colonne Page, sont supprimées. Enfin, l'ensemble des
                DataFrame est injecté dans un CSV.</p>
            <h3>Dépendances utilisées</h3>
            <ul>
                <li>weekExtractor.py
                    <ul>
                        <li><strong>datetime</strong> manipule les objets de date et de temps, notamment pour
                            calculer les plages de temps pour les requêtes à l'API.</li>
                        <li><strong>csv</strong> lit et écrit des fichiers CSV, où les données de la Google
                            Search Console seront stockées.</li>
                        <li><strong>google.oauth2</strong> gère l'authentification via des clés de service
                            Google, nécessaires pour accéder à l'API Google Search Console.</li>
                        <li><strong>googleapiclient</strong> permet de construire et exécuter les requêtes à l'API
                            Google Search Console.</li>
                    </ul>
                </li>
                <li>categorize.py
                    <ul>
                        <li><strong>Pandas</strong> manipule les données en tableaux. Ici, il permet de lire les
                            fichiers CSV dans des DataFrames, de remplacer les URLs, de fusionner les DataFrames et de
                            sauvegarder les données modifiées dans un nouveau fichier CSV.</li>
                    </ul>
                </li>
            </ul>


            <h2>GSC-Dataviz: visualisation de données avec filtres en React</h2>
            <p>Cette application est beaucoup plus complexe. Il va s'agir de charger les données dans un store Redux pour
                les rendre accessibles et modifiable dans l'ensemble du site, puis prévoir les logiques pour y accéder et
                les filtrer.</p>



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
            </ul>

            <h2>Fonctionnalités</h2>

            <h2>Le style</h2>


            <h2>Difficultés rencontrées</h2>
            <p>La gestion des données a été extrêmement complexe pour la visualisation.</p>


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
  