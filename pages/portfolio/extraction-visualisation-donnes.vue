<template>
    <main>
        <div class="container">

            <h1>Extraction et visualisation de données Google Search Console</h1>
            <p> La Google Search Console fournit des informations sur la visibilité de votre site sur Google. Elle associe
                les
                requêtes
                (=terme recherché par l'utilisateur), vos pages, le nombre de clics,
                le nombre "d'impressions" (= fois où votre page apparait dans le top 100) et la position moyenne. C'est un
                outil absolument merveilleux pour les référenceurs (SEO).</p>
            <p>Néanmoins, lire ses données est difficile avec l'interface Google dès qu'on a un site un peu
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
            <p>Il s'agit d'une application React créée avec "create-react-app", donc le fichier d'entrée est index.js. C'est
                là où le fichier CSV est chargé et stocké dans le store Redux, où sont chargées les principales
                dépendances et où est monté le composant App. Ce composant va lui-même monter les deux composants
                où se trouve l'essentiel de la logique: FilterForm (qui va gérer le filtrage) et ChartComponent (qui gère
                l'affichage).</p>
            <p>Ainsi, on a trois grandes parties: le store Redux, le filtrage et l'affichage. </p>
            <h3>Le store Redux</h3>
            <p>Avant tout, et ça été le principal challenge, il a fallu configurer le store Redux.</p>
            <ul>
                <li><strong>csvDataFetcher.js</strong> permet de récupérer de manère asynchrone les données du CSV grâce à
                    la bibliothèque <strong>papaparse</strong>. Il est
                    utilisé dans
                    <strong>csvDataSlice.js</strong> pour peupler le
                    <strong>slice csvData</strong>, qui va être le tableau de référence. C'est lui qui va être
                    manipulé par les filtres pour rendre la valeur <strong>FilteredData</strong>. Pour avoir un premier
                    affichage de l'ensemble des données, il est chargé au niveau d'index.js pour définir la valeur de
                    FilteredData.
                </li>
                <li><strong>filterSlice.js</strong> vient quant à lui créer le slice <strong>filter</strong> qui va stocker
                    la valeur des nombreux filtres. </li>
                <li><strong>filterSelector.js</strong> contient les "sélecteurs": fonctions dont l'objet est de sélectionner
                    une
                    partie des slices. Ce sont des sortes de filtres, mais qui ne modifient pas la valeur initiale.</li>
                <li><strong>filteredData.js</strong> crée le slice <strong>FilteredData</strong>, dont l'objet est
                    d'appliquer
                    filter à csvdata. Sa mise à jour est déclenchée par la fonction asynchrone applyFilters, qui est appelée
                    par un bouton dans FilterForm.</li>
            </ul>
            <p>Je reste un peu vague, nous verrons le fonctionnement exact en étudiant comment ces éléments sont utilisés.
            </p>
            <h3>La définition du filtre avec Filterform</h3>
            <p>Le principal intérêt de cette application est de pouvoir filtrer les informations. Là nous
                avons aussi la semaine à laquelle la donnée corresponde. L'extraction et catégorisation précédence nous un
                donné un tableau avec les en-têtes
                Week, Query, Page, Clicks, Impressions, Position Type et Cat1; et des valeurs du type <i>1, électrolyse
                    alcaline, votresite.fr/électrolyse, 2, 40, 12.5, blog, hydrogène</i>, signifiant votre page
                votresite.fr/électrolyse est apparue 40 fois dans les résultats Google pour la recherche "électrolyse
                alcaline", en moyenne à la 12,5e position, et a été cliquée 2 fois, et que vous avez catégorisé cette page
                comme un élément du blog et de votre thématique hydrogène.</p>
            <p>Vous allez pouvoir utiliser une multitude de filtres:</p>
            <ul>
                <li>Par page (pageFilter, colonne Page)</li>
                <li>Par requête (queryFilter, colonne Query)</li>
                <li>Par "catégorie" (categoryFilter, colonne Cat1)</li>
                <li>Par "type" (typeFilter, colonne Type)</li>
                <li>En retirant les requêtes déclenchant trop peu d'impressions (minQueryImpressions, colonne Impressions)
                </li>
                <li>En retirant les pages déclenchant trop peu d'impressions (minPageImpressions, colonne Impressions)</li>
                <li>En fixant la semaine de début de la période étudiée (startWeek, colonne Week)</li>
                <li>En fixant la semaine de fin de la période étudiée (endWeek, colonne Week)</li>
            </ul>
            <p>Une des grosses difficultés est que ces filtres interagissent de manière dynamique. Ainsi, si vous
                sélectionnez le filtre de catégorie "Hydrogène", vous n'aurez comme options du filtre par page que les pages
                ayant "Hydrogène" comme catégorie. De même, si vous choisissez une page, vous n'aurez en choix de catégories
                que celle de la page (ou aucune), idem pour le choix de requêtes. Pour ma part, je choisi en général une
                catégorie avant d'affiner ensuite par page.</p>
            <p>Détaillons maintenant le chemin suivi par les données. Supposons qu'on change la valeur du filtre "Page".
                Voici l'extrait du code de FilterForm pertinent: </p>
            <code>
                            import {
                                setPageFilter,
                                [...]
                            } from "../redux/filterSlice";
                            import {
                                pagesOptions,
                                [...]
                            } from "../redux/filterSelector";
                            const availablePages = useSelector(pagesOptions);
                            [...]
                            const pageFilter = useSelector((state) => state.filter.pageFilter);
                            [...]
                            &lt;select
                                    value={pageFilter}
                                    onChange={(e) =&gt; dispatch(setPageFilter(e.target.value))}
                                &gt;
                                    &lt;option value=""&gt;None&lt;/option&gt;
                                    {availablePages.map((page, index) =&gt; (
                                    &lt;option key={index} value={page}&gt;
                                        {page}
                                    &lt;/option&gt;
                                    ))}
                            &lt;/select&gt;
                            </code>

            <p>L'action <strong>setPageFilter</strong>, importée du module <strong>filterSlice</strong>, est utilisée pour
                mettre à jour la
                valeur de l'état <strong>pageFilter</strong> dans le store Redux.
                Cela va entraîner la mise à jour tous les autres sélecteurs de filterSelector.js, ceux-ci dépendant de la
                valeur PageFilter. Ils n'inclueront que les éléments
                correspondant à csvData (la base initiale) dont la valeur "Page" est égale à celle de PageFilter. Par
                exemple, si je sélectionne ma page "monsupersite.fr/electrolyse", je n'aurai que les requêtes et catégories
                des rangs pour lesquelle sla valeur de "Page" est "monsupersite.fr/electrolyse". </p>
            <p>Le clic sur le bouton "Apply filters" déclenche le thunk (~une fonction)
                <strong>handleFilterButtonClick</strong>, qui
                déclenche le thunk <strong>applyFilter</strong> importé de filteredDataSlice.js. Il récupère
                l'état global et y applique <strong>setFilters</strong> de
                filteredDataSlice. Cette action récupère le payload, ici l'état global, et lui applique les filtres. Enfin,
                le résultat est assigné à <strong>filteredData</strong>.
            </p>

            <h3>L'affichage des données avec ChartComponent</h3>
            <p>Il y a deux éléments dans ChatComponent: un graphique et un tableau. Pour afficher le graphique, nous
                utilisons la bibliothèque <strong>react-chartjs-2</strong>.</p>
            <p>Il y a plusieurs state locaux, le premier pour le graphique et les autres pour le tableau :</p>
            <ul>
                <li>chartData, qui va définir les données s'affichant dans le tableau et est passé en props à l'élément Line
                    (= le graphique).</li>
                <li>tableDataType correspond au type d'affichage du tableau: par pages ou par requêtes. (ex: si on affiche
                    la catégorie "hydrogène" et qu'on affiche le tableau par page, on verra dans le tableau les résultats
                    agrégés de chaque page de la catégorie)</li>
                <li>tableDataQuery correspond aux données classées par requêtes</li>
                <li>sortConfig</li>
                <li>sortedData</li>
            </ul>
            <p>Surtout, il y a deux logiques (useEffect): un pour gérer le set de données qui résulte du filtrage de
                Filterform et va s'afficher, et un pour gérer une logique moins importante: le tri des éléments du tableau.
            </p>

            <h4>Le changement du filtrage de données</h4>

            <p>Lorsque filteredData, startWeek ou endWeek change, un useEffect se déclenche pour mettre en forme les données
                "data" du slice filteredData pour qu'elles s'affichent dans le graphique dans les limites de la plage
                temporelle définie par startWeek et endWeek. Elles vont passer par une première fonction, prepareData,
                importée de ChardDataPreparer.js, qui agrège les
                données par semaine. Puis, par la fonction formatData, importée de CharDataFormatter.js, qui va traduire ces
                données préparées en un langage compréhensible pour le graphique. Enfin, elles sont stockées dans un state
                local, CharData, par setChartData. </p>
            <p>Immédiatement, le tableau est mis à jour avec les nouvelles données. Les données de l'objet "data" de
                FilteredData sont consolidées pour correspondre au type d'affichage (par pages ou par requêtes), puis
                assignées au state correspondant (tableDataPages ou tableDataQuery). </p>
            <p>Enfin, ChartData est passé en props à l'élément Line, ainsi que options, variable importée du fichier
                ChartOptions.js. La valeur dataToDisplay, correspondant à tableDataPages ou tableDataQuery selon la valeur
                du filtre (tableDataType), change aussi et vient peupler le tableau.</p>

            <h4>Le changement de tri des éléments du tableau</h4>

            <p>Le tableau est beaucoup plus facile à lire quand on peut le trier les résultats, notamment par clics ou
                impressions. </p>
            <p>Pour implémenter la fonctionnalité de tri, j'ai utilisé un autre `useEffect` qui écoute les changements de
                `sortConfig` et `dataToDisplay`. Il est déclenché lorsque l'utilisateur clique sur les
                en-têtes de colonnes du tableau, ce qui appelle la
                fonction `onSort`. Cette fonction met à jour `sortConfig`, ce qui déclenche à son tour le `useEffect` pour
                le tri.</p>
            <p>Dans ce `useEffect`, une copie des données à afficher (`dataToDisplay`) est triée en fonction de la clé et de
                la direction spécifiées dans `sortConfig`. La clé peut être, par exemple, "Clicks" ou "Impressions", et la
                direction peut être "asc" pour croissant ou "desc" pour décroissant.</p>
            <p>Le tri est effectué directement sur cette copie des données. Ensuite, les données triées remplacent l'état
                précédent de `sortedData` en utilisant `setSortedData`. De cette manière, les données affichées dans le
                tableau sont toujours triées en fonction de la configuration de tri en cours.</p>
            <p>Cette approche rend le tableau dynamique et interactif, permettant aux utilisateurs de mieux comprendre les
                données en les triant selon différentes métriques.</p>

            <h2>Améliorations futures</h2>
            <p>J'ai prévu plusieurs améliorations:</p>
            <ul>
                <li>Rajouter un filtre de langue, permettant de ne sélectionner les résultats ne portant que sur tel ou tel
                    langage.</li>
                <li>Permettre d'ajouter ou d'enlever le filtrage par page en cliquant sur un élément du tableau.</li>
            </ul>
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
  