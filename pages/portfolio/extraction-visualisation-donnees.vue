<template>
    <main>
        <div class="container">

            <h1>Extraction et visualisation de données de la Google Search Console</h1>
            <p> La Google Search Console fournit des informations sur la visibilité de votre site sur Google. Elle associe
                les
                requêtes
                (=terme recherché par l'utilisateur), vos pages, le nombre de clics,
                le nombre "d'impressions" (= fois où votre page apparait dans le top 100) et la position moyenne. C'est un
                outil absolument merveilleux pour les référenceurs (SEO).</p>
            <p>Néanmoins, lire ses données est difficile avec l'interface Google dès qu'on a un site un peu
                volumineux. Les exports sont limités à 1000 lignes et naviguer entre les différents
                filtres est pénible, avec des temps de chargement longs.</p>
            <p>Dès qu'on a un site un peu volumineux, ces données sont très dures à lire.</p>
            <p>Pour résoudre ce problème j'ai
                conçu un programme open source permettant d'extraire, classer et visualiser
                ces données. Il se divise en deux programmes:</p>
            <ul>
                <li>GSC-Extractor en Python pour l'extraction-classification, que vous trouvez ici : <a
                        href="https://github.com/AlexandreBaumann/GSC-Extractor">
                        https://github.com/AlexandreBaumann/GSC-Extractor</a>;</li>
                <li>GSC-Dataviz en React pour la visualisation, disponible ici : <a
                        href="https://github.com/AlexandreBaumann/Data-Viz-GSC">https://github.com/AlexandreBaumann/Data-Viz-GSC</a>
                </li>
            </ul>

            <p>Ici, je vais vous présenter le
                <strong>code</strong> et les
                <strong>difficultés</strong> rencontrées pour le développer. S'agissant du tutoriel complet, il se trouve
                sur mon site <a
                    href="https://www.uniteinnovation.com/seo/outils/google-search-console/gsc-extractor-gsc-dataviz/">Unite
                    Innovation</a>.
            </p>
            <Slide :slides="mesSlides" />

        </div>
    </main>
</template>
  
<script>
import Slide from '@/components/Form.vue';

export default {

    data() {
        return {
            mesSlides: [
                {
                    title: 'Partie 1', content: `<h2>GSC-Extractor: appel API et traitement de donnnées en python</h2><p>Le GSC-Extractor (<a href="https://github.com/AlexandreBaumann/GSC-Extractor">code, repo Github</a>) est un
                programme python composé de deux fichiers à exécuter: weekExtractor.py, puis categorize.py. </p>` },
                {
                    title: 'GSC-Extractor weekExtractor.py', content: `<h3>weekExtractor.py</h3>
            
            <p>Le premier fichier, weekExtractor.py sert à <strong>extraire les données</strong> Google Search Console. Il faut renseigner la localisation de vos
                <strong>identifiants</strong> pour la GSC au format JSON, le nom de votre
                propriété et la plage temporelle que vous souhaitez couvrir (date de départ et nombre de semaines). Le
                logiciel ouvre un CSV et, pour
                chaque semaine (ensemble de 7 jours), envoie une requête extrayant les données et les stocke dans le CSV.
            </p>
           ` },
                {
                    title: 'GSC-Extractor weekExtractor.py', content: `<h4>Dépendances utilisées</h4>
        
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
             ` },

                {
                    title: 'GSC-Extractor categorize.py', content: ` <h3>categorize.py</h3>
                    <p>Le second fichier, categorize.py, optionnel, suppose la rédaction d'un tableau de
                correspondances (un exemple est disponible dans le répertoire Github) au format CSV. Il a deux fonctions:</p>
            <ul>
                <li><strong>assigner des catégories</strong> à vos url à partir d'un tableau de correspondance. Par exemple, pour
                    mon site discoverthegreentech, j'ai catégorisé mes pages selon leur "type" (dossier, blog, entreprise
                    ...) et leur thématique (énergies renouvelables, hydrogène, agriculture ...). </li>
                <li><strong>remplacer une url</strong> par une autre. C'est particulièrement utile si on a un changement d'url
                    ou une migration de site, permettant de consolider les données sur la durée.</li>
            </ul>
            <p>Il extrait les deux CSV dans des objets <strong>"DataFrame"</strong> (de la bibliothèque Pandas), de
                remplacer les urls de la colonne "Remplacer" par celles de la colonne "Page", puis de fusionner les lignes
                des DataFrames lorsque Page (données de la GSC) et url (table de correspondance) sont égales. Ensuite, les
                colonnes Remplacer et url, étant redondantes avec la colonne Page, sont supprimées. Enfin, l'ensemble des
                DataFrame est injecté dans un CSV.</p>` },
                {
                    title: 'GSC-Extractor', content: `<h4>Dépendances utilisées</h4>
                    <ul>
                        <li><strong>Pandas</strong> manipule les données en tableaux. Ici, il permet de lire les
                            fichiers CSV dans des DataFrames, de remplacer les URLs, de fusionner les DataFrames et de
                            sauvegarder les données modifiées dans un nouveau fichier CSV.</li>
                    </ul>
                ` },
                {
                    title: 'Partie 2', content: ` <h2>GSC-Dataviz: visualisation de données avec filtres en React</h2><p>Cette application est beaucoup plus complexe: 
                        il s'agit de charger les données dans un store Redux pour
                les rendre accessibles et modifiable dans l'ensemble du site, puis prévoir les logiques pour y accéder et
                les filtrer.</p>
            <p>C'est d'une application React créée avec "create-react-app", le fichier d'entrée est donc index.js. C'est
                là où le fichier CSV est chargé et stocké dans le store Redux, où sont chargées les principales
                dépendances et où est monté le composant App. Ce composant va lui-même monter les deux composants
                où se trouve l'essentiel de la logique: FilterForm (qui va gérer le filtrage) et ChartComponent (qui gère
                l'affichage).</p>
            <p>Ainsi, on a trois grandes parties: le store Redux, le filtrage et l'affichage. </p>` },
                {
                    title: 'GSC-Dataviz Store Redux', content: `<h3>Le store Redux</h3>
            <p>Avant tout, et ça été le principal challenge, il a fallu configurer le store Redux.</p>
            <ul>
                <li><strong>csvDataFetcher.js</strong> permet de récupérer de manère asynchrone les données du CSV grâce
                    à
                    la bibliothèque <strong>papaparse</strong>. Il est
                    utilisé dans
                    <strong>csvDataSlice.js</strong> pour peupler le
                    <strong>slice csvData</strong>, qui va être le tableau de référence. C'est lui qui va être
                    manipulé par les filtres pour rendre la valeur <strong>FilteredData</strong>. Pour avoir un premier
                    affichage de l'ensemble des données, il est chargé au niveau d'index.js pour définir la valeur de
                    FilteredData.
                </li>
                <li><strong>filterSlice.js</strong> vient quant à lui créer le slice <strong>filter</strong> qui va
                    stocker
                    la valeur des nombreux filtres. </li>
                <li><strong>filteredData.js</strong> crée le slice <strong>FilteredData</strong>, dont l'objet est
                d'appliquer
                filter à csvdata. Sa mise à jour est déclenchée par la fonction asynchrone applyFilters, qui est
                appelée
                par un bouton dans FilterForm.</li>
                <li><strong>filterSelector.js</strong> contient les "sélecteurs": fonctions dont l'objet est de
                    sélectionner
                    une
                    partie des slices. Ce sont des sortes de filtres, mais qui ne modifient pas la valeur initiale. 
                    Il sera beaucoup utilisé pour afficher les données.</li>
               
            </ul>
            <p>J'approfondis le fonctionnement exact de ces éléments dans les prochaines slides.
            </p>` },
                {
                    title: 'GSC-Dataviz Filterform 1', content: `<h3>La définition du filtre avec Filterform</h3>
            <p>Le principal intérêt de cette application est de pouvoir filtrer les informations.</p>
            <p> Là nous
                avons aussi la semaine à laquelle la donnée corresponde. L'extraction et catégorisation précédence nous
                un
                donné un tableau avec les en-têtes
                Week, Query, Page, Clicks, Impressions, Position Type et Cat1; et des valeurs du type <i>1, électrolyse
                    alcaline, votresite.fr/électrolyse, 2, 40, 12.5, blog, hydrogène</i>, signifiant votre page
                votresite.fr/électrolyse est apparue 40 fois dans les résultats Google pour la recherche "électrolyse
                alcaline", en moyenne à la 12,5e position, et a été cliquée 2 fois, et que vous avez catégorisé cette
                page
                comme un élément du blog et de votre thématique hydrogène.</p>` },
                {
                    title: 'GSC-Dataviz Filterform 2', content: `
                    <p>Voici l'interface:</p>
                    <img src="/screen-gsc-dataviz-1.png" alt="screen de la partie de l'interface contenant les filtres">
            <p>Vous allez pouvoir utiliser une multitude de filtres (je précise la colonne du csv à laquelle cela correspond):</p>
            <ul>
                <li>Par page (pageFilter, colonne Page)</li>
                <li>Par requête (queryFilter, colonne Query)</li>
                <li>Par "catégorie" (categoryFilter, colonne Cat1)</li>
                <li>Par "type" (typeFilter, colonne Type)</li>
                <li>En retirant les requêtes déclenchant trop peu d'impressions (minQueryImpressions, colonne
                    Impressions)
                </li>
                <li>En retirant les pages déclenchant trop peu d'impressions (minPageImpressions, colonne Impressions)
                </li>
                <li>En fixant la semaine de début de la période étudiée (startWeek, colonne Week)</li>
                <li>En fixant la semaine de fin de la période étudiée (endWeek, colonne Week)</li>
            </ul>
            <p>Une des principales difficultés est que ces filtres interagissent de manière <strong>dynamique</strong>: si vous
                sélectionnez le filtre de catégorie "Hydrogène", vous n'aurez comme options du filtre par page que les
                pages
                ayant "Hydrogène" comme catégorie. De même, si vous choisissez une page, vous n'aurez en choix de
                catégories
                que celle de la page (ou aucune), idem pour le choix de requêtes. Pour ma part, je choisi en général une
                catégorie avant d'affiner ensuite par page.</p>` },
                {
                    title: 'GSC-Dataviz Filterform 3', content: `
                    <p>Détaillons maintenant le chemin suivi par les données. Supposons qu'on change la valeur du filtre "Page".
                 </p>
                <div class="col2">
                    <div>
                    <p>L'action <strong>setPageFilter</strong>, importée du module <strong>filterSlice</strong>, est utilisée pour
                mettre à jour la valeur de l'état <strong>pageFilter</strong> dans le store Redux.</p><p>
                Cela va entraîner la mise à jour tous les autres sélecteurs de filterSelector.js, ceux-ci dépendant de
                la valeur PageFilter. Ils n'inclueront que les éléments
                correspondant à csvData (la base initiale) dont la valeur "Page" est égale à celle de PageFilter.</p>
            <p>Par exemple, si je sélectionne ma page "monsupersite.fr/electrolyse", je n'aurai que les requêtes et
                catégories
                des rangs pour lesquelles la valeur de "Page" est "monsupersite.fr/electrolyse". </p>
            <p>Voir ci-contre l'extrait du code de FilterForm pertinent.</p></div>
            <code>
                import { setPageFilter, [...] } from "../redux/filterSlice";
                import { pagesOptions, [...] } from "../redux/filterSelector";
                const availablePages = useSelector(pagesOptions);[...]
                const pageFilter = useSelector((state) => state.filter.pageFilter);[...]
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

          </div>` },
                {
                    title: 'GSC-Dataviz Filterform 3', content: `
                    <div class="col2">
                        <div>
                            <p>Le clic sur le bouton "Apply filters" déclenche le thunk (~une fonction)
                            <strong>handleFilterButtonClick</strong>, qui
                            déclenche le thunk <strong>applyFilter</strong> importé de <strong>filteredDataSlice.js</strong>.</p>
                            <p> Il récupère l'état global et y applique <strong>setFilters</strong> de filteredDataSlice. Cette 
                                action récupère le payload, ici l'état global ('globalState'), et lui applique les filtres.
                            Enfin, le résultat est assigné à <strong>filteredData</strong>.
                        </p>
                        <p>C'est cette valeur qui sera, ensuite, affichée dans le graphique et le tableau.</p>
        </div>
        <code>
        export const applyFilters = createAsyncThunk(
            "filteredData/applyFilters",
            async (_, { dispatch, getState }) => {
                const globalState = getState();
                dispatch(setFilters(globalState));
            }
        )
        </code>
            
            </div>` },
                {
                    title: 'GSC-Dataviz ChartComponent 1', content: `<h3>L'affichage des données avec ChartComponent</h3>
            <p>Il y a deux éléments dans ChatComponent: un graphique et un tableau. Pour afficher le graphique, nous
                utilisons la bibliothèque <strong>react-chartjs-2</strong>.</p>
                <img src="/screen-chartcomponent.webp" alt="screen du graphique et du tableau">
            <p>Il y a plusieurs state locaux, le premier pour le graphique et les autres pour le tableau :</p>
            <ul>
                <li><strong>chartData</strong>, qui va définir les données s'affichant dans le tableau et est passé en props à l'élément
                    Line
                    (= le graphique).</li>
                <li><strong>tableDataType</strong> correspond au type d'affichage du tableau: par pages ou par requêtes. (ex: si on
                    affiche
                    la catégorie "hydrogène" et qu'on affiche le tableau par page, on verra dans le tableau les
                    résultats
                    agrégés de chaque page de la catégorie)</li>
                <li><strong>tableDataQuery</strong> correspond aux données classées par requêtes</li>
                <li><strong>sortConfig</strong> contient des informations sur la manière dont les données du tableau doivent être triées, 
                    ayant comme propriété la colonne devant être triée (key) et le sens du tri (direction).</li>
                <li><strong>sortedData</strong> contient les données triées à afficher dans le tableau.</li>
            </ul>
            <p>Il y a deux logiques (useEffect): un pour gérer le set de données qui résulte du filtrage de
                Filterform et va s'afficher, et un pour gérer une logique moins importante: le tri des éléments du
                tableau.
            </p>` },

                {
                    title: 'GSC-Dataviz ChartComponent 2', content: ` <h4>Le changement du filtrage de données</h4>

<p>Lorsque filteredData, startWeek ou endWeek change, un useEffect se déclenche pour mettre en forme les
    données "data" du slice filteredData pour qu'elles s'affichent dans le graphique dans les limites de la plage
    temporelle définie par startWeek et endWeek. </p>
    <div class="col2">
        <div>
            <p>Elles vont passer par </p>
            <ul>
                <li>une première fonction, <strong>prepareData</strong>, importée de ChardDataPreparer.js, qui agrège les
            données par semaine.</li>
                <li>Puis, par la fonction <strong>formatData</strong>, importée de CharDataFormatter.js, qui va traduire
            ces
            données préparées en un langage compréhensible pour le graphique.</li>
                <li>Enfin, elles sont stockées dans un  state local, <strong>ChartData</strong>, par setChartData.</li>
            </ul>
                
            <p>Immédiatement, le tableau est mis à jour avec les nouvelles données. Les données de l'objet "data" de
                FilteredData sont consolidées pour correspondre au type d'affichage (par pages ou par requêtes), puis
                assignées au state correspondant (tableDataPages ou tableDataQuery).</p>
        </div>

        <code>
            useEffect(() => {
        const preparedData = prepareData(filteredData.data, startWeek, endWeek);
        const formattedData = formatData(preparedData);
        setChartData(formattedData);

        const tableDataPages = consolidateDataByPage(filteredData.data);
        const tableDataQuery = consolidateDataByQuery(filteredData.data);

        setTableDataPages(tableDataPages);
        setTableDataQuery(tableDataQuery);
    }, [filteredData, startWeek, endWeek]);
        </code>
    </div>
    <p>Enfin, ChartData est passé en props à l'élément Line, ainsi que options, variable importée du fichier
    ChartOptions.js. La valeur dataToDisplay, correspondant à tableDataPages ou tableDataQuery selon la
    valeur
    du filtre (tableDataType), change aussi et vient peupler le tableau.</p>` },
                {
                    title: 'GSC-Dataviz ChartComponent 3', content: `<h4>Le changement de tri des éléments du tableau</h4>

<p>Le tableau est beaucoup plus facile à lire quand on peut le <strong>trier les résultats</strong>, notamment par clics ou
    impressions. </p>
<p>Pour implémenter la fonctionnalité de tri, j'ai utilisé un autre 'useEffect' qui écoute les changements
    de
    <strong>'sortConfig'</strong> et <strong>'dataToDisplay'</strong>. Il est déclenché lorsque l'utilisateur clique sur les
    en-têtes de colonnes du tableau, ce qui appelle la
    fonction 'onSort'. Cette fonction met à jour 'sortConfig', ce qui déclenche à son tour le 'useEffect'
    pour le tri.</p>
    <div class="col2"><div>
<p>Dans ce 'useEffect', une <strong>copie des données</strong> à afficher ('dataToDisplay') est triée en fonction de la clé
    et de la direction spécifiées dans 'sortConfig'. La clé peut être "Clicks" ou "Impressions", et
    la direction peut être "asc" pour croissant ou "desc" pour décroissant.</p>
<p>Le tri est effectué directement sur cette copie des données. Ensuite, les données triées remplacent
    l'état précédent de 'sortedData' en utilisant 'setSortedData'. De cette manière, les données affichées dans le
    tableau sont toujours triées en fonction de la configuration de tri en cours.</p>
<p>Cette approche rend le tableau dynamique et interactif, permettant aux utilisateurs de mieux comprendre
    les données en les triant selon différentes métriques.</p></div>
    <img src="/screen-chartcomponent-tableau.webp" alt="screen du tableau trié" >
    </div>` },
                {
                    title: 'Commentaires', content: ` 
                    <h2>Difficultés rencontrées</h2>
                    <p>En construisant GSC-Dataviz, je me suis rendu compte qu'utiliser des <strong>states locaux</strong> rendait le <strong>code illisible</strong>. 
                        La transition vers un <strong>store Redux</strong> a été particulièrement difficile, ne connaissant pas cet outil. Comprendre 
                        le vocabulaire (slice, reducers, thunks, sélecteurs) et leurs rôles relatifs n'a pas été simple. </p>
                        <p>La gestion de  la synchronicité a également été un problème m'ayant pris un ou deux jours à résoudre. Il fallait d'une part définir le 
                        <strong>flux de données</strong> pour que csvData soit défini avant FilteredData, puis que, lorsqu'on clique sur le bouton "apply filters", 
                        FilteredData se mette à jour avant que le tableau et le graphique ne soient rendus. Or, les <strong>fonctions asynchrones classiques</strong> ne fonctionnent 
                        pas avec redux: elles renvoient une promesse alors que le composant attend une action.
                        Je l'ai résolu en utilisant des <strong>"Thunks"</strong>, des fonctions spéciales qui permettent de travailler avec des actions asynchrones.</p>
                        <p>D'autre part, il fallait afficher les données dès le chargement de la page. J'ai donc lancé le chargement des données du CSV </p>
                        <code>
                            store.dispatch(fetchCsv()).then(() => {
                            const csvData = store.getState().csvData;
                            store.dispatch(setFilteredData(csvData));

                            const root = ReactDOM.createRoot(document.getElementById("root"));
                            [...]
                            </code>
                        <h2>Améliorations futures</h2>
            <p>J'ai prévu plusieurs améliorations pour GSC-Dataviz:</p>
            <ul>
                <li>Rajouter un filtre de langue, permettant de ne sélectionner les résultats ne portant que sur tel ou
                    tel
                    langage.</li>
                <li>Permettre d'ajouter ou d'enlever le filtrage par page en cliquant sur un élément du tableau.</li> 
                <li>Repasser sur la définition des noms pour vérifier qu'elle est homogène et cohérente.</li>
            </ul>` },
                // { title: '', content: `` },
            ]
        };
    }


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
  